# Programação de Funcionalidades

Pré- requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto,</a> <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/03-Metodologia.md"> Metodologia,</a> <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface e</a> <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/05-Template%20padr%C3%A3o%20da%20Aplica%C3%A7%C3%A3o.md"> Template padrão da Aplicação.</a>



### Tela Inicial (RF -01)

Ao acessar a página inicial, o usuário já terá uma barra de pesquisa, a qual ele poderá pesquisar por um ou diversos ingredientes cosméticos. A página foi desenvolvida utilizando HTML, CSS e para dinamização JS. A tela inicial está presente na figura 12.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/2ef88ccd-a71d-4864-95d8-3db64bf5f5f0)

Figura 12 - Exemplo da página inicial.

### Responsáveis

Alírio Henrique e Mauricio Honorato. 

### Requisito atendido

RF-01: A aplicação deve oferecer uma funcionalidade de pesquisa por um ou mais ingredientes cosméticos.

### Artefatos de funcionalidade

● index.html;

● style.css;

● script.js.


### Estrutura de dados
●<a href="https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/codigo-fonte/index.html">index.html</a>


#### Instruções de acesso

1. Ao abrir o browser de preferência, o usuário deve informar a URL: https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/codigo-fonte/index.html .

2. Logo que a página inicial aparecer na tela do usuário, o mesmo deve digitar ou colar o ingrediente e/ou a lista de ingredientes sobre o qual ele deseja obter as informações.

3. Após digitar ou colar o ingrediente ou a lista de ingredientes, o usuário deverá clicar no botão de pesquisa.
   

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)


### Tela Resultados (RF -02)

A tela de resultados é obtida após as instruções presentes na tela inicial terem sido realizados com êxito. A página foi efetivada com a estrutura de HTML, CSS e JS. A tela de resultados, está presente na figura 13.


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/9b8dbbdb-2dc0-4a52-87d5-71b186be751f)



Figura 13. Exemplo Tela de Resultados.

### Responsáveis

Carlos Augusto, Júlia Campos e Raianne Martins.

#### Requisito atendido

RF-02: A aplicação deve construir e retornar ao usuário um card/tabela com as informações sobre o(s) ingrediente(s) escolhido(s) pelo usuário na pesquisa.


#### Artefatos da funcionalidade

● index.html;

● style.css;

● script.js.


#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>

#### Instruções de acesso

1. O usuário deve concluir com sucesso, os passos da Tela Inicial.

2. Caso haja mais de um ingrediente, o usuário deve clicar nas setas presentes no card maior para obter mais informações sobre os ingredientes presentes na lista a qual ele apresentou.

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)


### Paginação de resultados (RF -03)

Os resultados obtidos pela pesquisa voltarão sobrepostos e paginados, podendo ser controlados através das duas setas entre a informação sobre qual ingrediente (página) está sendo mostrado no momento. Exemplo na figura 14 abaixo:


![Figura_14](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/dcc2f56a-f8a5-45a3-8c46-5aa9bf878df9)


Figura 14. Exemplo paginação de Resultados. 

#### Responsável

Raianne Martins.

#### Requisito atendido

RF-03: Quando a busca pelo usuário conter mais de um ingrediente, a aplicação deve retornar os cards construídos para o usuário de maneira paginada, com os cards sobrepostos um sobre os outros e ordenados.


#### Artefatos da funcionalidade

● index.html;

● style.css;

● script.js.



#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>

#### Instruções de acesso

1. O usuário deve concluir com sucesso, os passos da Tela Inicial.
2. Ao obter os resultados, o usuário deverá clicar nas setas do card maior para obter informações dos outros ingredientes. 

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)

### Modo noturno (RF -04)

A página oferece a opção de trocar entre dois tipos de interface: a padrão e a do modo noturno, usando um botão no canto superior direito, presente tanto na página inicial, quanto na tela de resultados. Pode-se observar na figura 15, como exemplo, o botão na página inicial, demarcado para melhor observação na cor roxa. Nas figuras  16 e 17, temos, respectivamente, a interface do botão tanto no modo claro, quanto no modo noturno. 


![figura15](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/866d02ed-52cc-48d1-9853-a8d4085cec31)


Figura 15. O botão de modo noturno, demarcado na página inicial.


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/cdda9f38-2985-493c-8fa5-ffa79d461e5a)

Figura 16. O botão de mudança de visualização no modo claro.


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/87047035/a00e5b42-c308-444e-bc7e-a43397a7b878)

Figura 17. O botão de mudaça de visualização no modo noturno. 


As páginas do modo escuro, estão nas figuras 18 e 19 abaixo, conforme foram implementadas pela equipe. 

![figura18](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/451ac0c1-fc5d-491d-b884-cb3010876121)


Figura 18. Modelo de implementação da Tela Inicial escura.

<br>

![figura19](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/6d8bf307-98f5-4bfa-a9b2-b766d93f7c3d)

Figura 19. Modelo de implementação da Tela Resultados escura.


#### Responsável

Maurício Honorato.

#### Requisito atendido

RF-04: A aplicação deve oferecer aos usuários, a opção de ativar ou desativar o modo noturno, que ajusta a interface para tons mais escuros para melhorar a experiência de uso em ambientes com pouca luz.


#### Artefatos da funcionalidade

- index.html
- style.css
- script.js
- nightmode_toggle.js


#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>


#### Instruções de acesso

1. Ao acessar a tela inicial ou a de resultados, o usuário pode deslizar o botão para a esquerda ou para a direita, para obter a funcionalidade desejada. 

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)

### Autopreenchimento (RF-05)

Na barra de pesquisa, o ingrediente que for digitado pelo usuário, se for um dos ingredientes contidos na aplicação, irá fornecer a opção para o usuário completar a palavra sem a necessidade de digitar. Para fins de visualização, pode-se observar como ele foi implementado pela equipe na figura 20 abaixo:


![figura_20](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/cae5c4a3-1c54-41bc-a003-e45ac0a90d43)


Figura 20. Sugestão de autopreenchimento da página. 

### Responsáveis

Alírio Henrique e Mauricio Honorato.

### Requisito atendido

RF-05: A aplicação deve fornecer uma funcionalidade de sugestão de preenchimento automático na barra de pesquisa incremental por ingredientes, que apresenta possíveis ingredientes à medida que o usuário digita, com base nos dados disponíveis no banco de dados de ingredientes.

### Artefatos da funcionalidade

- index.html;
- style.css;
- script.js;
- autocomplete_dropdown.js.

#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>

#### Instruções de acesso

1. O usuário, ao acessar a página inicial, deve começar a digitar o ingrediente pelo qual ele deseja a informação.

![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)

### Informações de Segurança dos Ingredientes (RF-06)

A aplicação retorna um conjunto de cards com informações gerais de segurança sobre os ingredientes pesquisados. Os cards incluem, as informações abaixo: 

	
 
   ● Uma lista dos ingredientes indesejados presentes no produto, para facilitar a visualização detalhada;
   
   ● Detalhes específicos de cada ingrediente, como nome, fórmula química, descrição, efeitos adversos conhecidos e a fonte das informações;

   ● Uma seção que mostra a quantidade de ingredientes indesejados através de pequenos retângulos coloridos.
   
   
Confira o exemplo na figura 21 abaixo:


![figura_21](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/336ececf-9fc4-4155-be17-a8fc8b0cd731)


Figura 21. Display dos cards sobre a Segurança dos Ingredientes.

### Responsáveis
Júlia Campos, Carlos Augusto e Raianne Martins.

### Requisito atendido
RF-06: A aplicação deve construir e retornar ao usuário um card/tabela com as informações de segurança gerais sobre o conjunto de ingredientes (produto) quando a pesquisa possuir mais de um ingrediente.

### Artefatos da funcionalidade

- index.html;
- style.css;
- script.js.

#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>

#### Instruções de acesso
1. Acessar a página inicial do projeto.
2. Digite ou cole os ingredientes, os quais deseja obter mais informações.
3. Clicar no botão de pesquisa, representado pela lupa. 


![linha](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/f3f702df-5948-442c-bcca-9269134300b2)

### Etiquetas na Barra de Pesquisa (RF-07)

Os ingredientes inseridos na barra de pesquisa são convertidos em um formato de etiquetas, com o objetivo de facilitar a visualização e manipulação dos ingredientes. Cada uma dessas etiquetas pode ser removida individualmente e a lista de ingredientes será atualizada conforme o usuário as manipula, adicionando ou removendo etiquetas.
   
   
Confira o exemplo na figura 22 abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/assets/164577121/bb256935-c5bb-44ff-8c11-d1e1b99a1435)

Figura 22. Exibição das etiquetas.

### Responsáveis
Alírio Henrique, Mauricio Honorato e Raianne Martins.

### Requisito atendido
RF-07: A aplicação deve permitir que os ingredientes inseridos na barra de pesquisa sejam convertidos em etiquetas. As etiquetas facilitarão a manipulação dos ingredientes

### Artefatos da funcionalidade

- index.html;
- style.css;
- script.js.

#### Estrutura de Dados

●<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/codigo-fonte/index.html">index.html</a>

#### Instruções de acesso
1. O usuário deve acessar a tela inicial da aplicação através do browser de sua preferência.
2. O usuário deve digitar ou colar os ingredientes, os quais deseja obter mais informações.
3. Observar se os ingredientes digitados os colados são convertidos em etiquetas, localizadas abaixo da barra de pesquisa.
4. Para remover uma etiqueta, o usuário deverá clicar no ícone de remoção (x) na etiqueta correspondente.
