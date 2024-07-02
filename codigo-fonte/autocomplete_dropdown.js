import { listaDeIngredientes } from './listaDeIngredientes_db.js';
import { getIngredientesEtiquetados } from "./script.js";

const inputPesquisa = document.getElementById('input-pesquisa');

function sanitizarIngredientes(inputValue) {
    return inputValue.split(',').map(ingrediente => ingrediente.trim().toLowerCase());
}

function criarDropdown(sugestoesAutocomplete, ultimoIngrediente) {
    const dropdown = document.createElement('span');
    dropdown.id = 'autocomplete-dropdown';
    dropdown.style.width = window.getComputedStyle(inputPesquisa).width;

    const ul = document.createElement('ul');

    const maxSugestoes = 5;
    const sugestoesFinais = sugestoesAutocomplete.slice(0, maxSugestoes);

    sugestoesFinais.forEach(sugestao => {
        const li = document.createElement('li');

        li.innerHTML = sugestao.replace(new RegExp(ultimoIngrediente, 'g'),
            `<strong>${ultimoIngrediente}</strong>`);
        li.addEventListener(('click'), autocompleteClickHandler);

        ul.appendChild(li);
    });

    dropdown.appendChild(ul);

    const form = document.querySelector('.barra-pesquisa-conteiner');
    form.appendChild(dropdown);

    window.addEventListener('resize', function() {
        dropdown.style.width = window.getComputedStyle(inputPesquisa).width;
    });
}

function removeDropdown() {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
}

function autocompleteClickHandler(event) {
    const ingredientesInput = sanitizarIngredientes(inputPesquisa.value);

    ingredientesInput[ingredientesInput.length - 1] = event.currentTarget.textContent;

    inputPesquisa.value = ingredientesInput.join(', ');

    inputPesquisa.value += ', ';

    removeDropdown();

    inputPesquisa.focus();

    const eventInput = new Event('input');
    inputPesquisa.dispatchEvent(eventInput);
}

inputPesquisa.addEventListener('input', function (event) {
    const valorInputAtual = event.target.value;
    const nomesIngredientes = listaDeIngredientes.map(ingredient => ingredient.nome.toLowerCase());

    const ingredientesInput = sanitizarIngredientes(valorInputAtual);

    const ultimoIngrediente = ingredientesInput[ingredientesInput.length - 1];

    removeDropdown();

    if (ultimoIngrediente !== '') {
        const etiquetas = getIngredientesEtiquetados();

        const sugestoesAutocomplete = nomesIngredientes.filter(nomeIngrediente =>
            nomeIngrediente.includes(ultimoIngrediente) &&
            !ingredientesInput.includes(nomeIngrediente) &&
            !etiquetas.includes(nomeIngrediente)
        );

        sugestoesAutocomplete.sort((a, b) => {
            const aStartsWith = a.startsWith(ultimoIngrediente);
            const bStartsWith = b.startsWith(ultimoIngrediente);

            if (aStartsWith && !bStartsWith) {
                return -1;
            } else if (!aStartsWith && bStartsWith) {
                return 1;
            } else {
                return a.localeCompare(b);
            }
        });

        if (sugestoesAutocomplete.length > 0) {
            criarDropdown(sugestoesAutocomplete, ultimoIngrediente);
        }
    }
});

let indiceSelecionado = -1;

inputPesquisa.addEventListener('keydown', function (event) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!dropdown) return;

    const itens = Array.from(dropdown.querySelectorAll('li'));

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();

        if (indiceSelecionado !== -1) {
            itens[indiceSelecionado].classList.remove('selected');
        }

        if (event.key === 'ArrowDown') {
            indiceSelecionado = (indiceSelecionado + 1) % itens.length;
        } else {
            indiceSelecionado = (indiceSelecionado - 1 + itens.length) % itens.length;
        }

        itens[indiceSelecionado].classList.add('selected');
    } else if (event.key === 'Enter') {
        event.preventDefault();

        if (indiceSelecionado !== -1) {
            itens[indiceSelecionado].click();
            indiceSelecionado = -1;
        }
    }
});