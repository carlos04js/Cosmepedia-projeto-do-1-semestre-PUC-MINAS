let elCheckbox = document.getElementById('nightmode-toggle-checkbox');
let elBody = document.body;

if (localStorage.getItem('nightmode') === 'true') {
    elCheckbox.checked = true;
    elBody.classList.add('nightmode');
}

elCheckbox.addEventListener('change', function () {
    if (elCheckbox.checked) {
        elBody.classList.add('nightmode');
        localStorage.setItem('nightmode', 'true');
    } else {
        elBody.classList.remove('nightmode');
        localStorage.setItem('nightmode', 'false');
    }
});