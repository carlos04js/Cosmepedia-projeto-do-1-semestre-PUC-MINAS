# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-web-cosmepedia/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a> . 

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegadores da internet: Opera , Chrome, Firefox, Brave ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-01 - Comprovar a funcionalidade das funções relacionadas à pesquisa |
|:---|:---|
| Requisitos Associados | RF-01 e RF-05.|
| Objetivo do Teste | Verificar a funcionalidade dos métodos utilizados para a pesquisa.|
| Passos  | Seguir as seguintes instruções: |
|  | 1 - Acessar o navegador de sua preferência. |
|  | 2 - Informar a URL do projeto.|
|  | 3 - Ao abrir o projeto, clique na barra de pesquisa.|
|  | 4 - Ao clicar na barra de pesquisa, digite o ingrediente desejado ou selecione uma das sugestões. |
|  | 5 - Após selecionar ou digitar o ingrediente desejado, pressionar a tecla "enter" no teclado ou clicar no botão da lupa, localizado ao lado da barra de pesquisa. |
| Critérios de êxito | Retornar informações sobre o ingrediente ou, caso ele não seja encontrado, informar ao usuário, na página inicial que o ingrediente não foi encontrado |
| Responsável por elaborar o caso de Teste | Raianne Martins |


<br>

|Caso de Teste    | CT-02 - Verificar se a aplicação continua responsiva com mais de um ingrediente químico informado pelo usuário |
|:---|:---|
| Requisitos Associados | RF - 01, RF - 03 e RNF - 02.|
| Objetivo do Teste | Verificar para quantas formulações a aplicação consegue fornecer informações sobre o ingrediente.|
| Passos | Seguir as seguintes instruções:|
|  | 1 - Acessar o navegador de sua preferência. |
|  | 2 - Informar a URL do projeto.|
|  | 3 - Ao abrir o projeto, clique na barra de pesquisa.|
|  | 4 - Digitar ou colar a lista de ingredientes de diferentes produtos cosméticos. |
|  | 5 - Pressionar a tecla "enter" no teclado ou clicar no botão da lupa, localizado ao lado da barra de pesquisa. |
| Critérios de êxito | Retornar os cards com as informações desejados pelo usuário ou informar ao usuário que o ingrediente perigoso não foi encontrado.  |
| Responsável por elaborar o caso de Teste | Raianne Martins|


<br>

|Caso de Teste    | CT-03 - Verificar o retorno da exibição paginada do card e ordenação dos ingredientes |
|:---|:---|
| Requisitos Associados | RF - 01, RF - 03 |
| Objetivo do Teste | Verificar se a aplicação retorna as informações dos ingredientes tanto de forma paginada quando de forma ordenada, de acordo com as pesquisas feitas pelo usuário. |
| Passos | Seguir as seguintes instruções: |
|  | 1 - Abrir a aplicação através de um navegador de sua preferência, informando a URL necessária. |
|  | 2 - Digitar ou colar a lista de ingredientes de diferentes produtos cosméticos. |
|  | 3 - Clicar no botão de pesquisa ou pressionar "enter" em seu teclado. |
|  | 4 - Conferir se os resultados dos ingredientes buscados são devidamente retornados na tela através do card de informações gerais e de maneira paginada. |
|  | 5 - Navegar pelo card utilizando as setas de navegação. |
| Critérios de êxito | O card de informações retornado deve ser exibido de forma paginada, com os ingredientes ordenados de acordo com a busca realizada pelo usuário. Além disso, as setas devem funcionar corretamente, permitindo o usuário navegar pelo card e conferindo as informações de sua busca. |
| Responsável por elaborar o caso de Teste | Júlia Campos |


<br>

|Caso de Teste    | CT - 04 - Verificar a funcionalidade da sugestão de preenchimento automático na barra de pesquisa |
|:---|:---|
| Requisitos Associados | RF - 05 |
| Objetivo do Teste | Verificar se a sugestão de preenchimento automático na barra de pesquisa é ativada quando o usuário pesquisa por algum ingrediente. |
| Passos | Seguir as seguintes instruções:|
|  | 1 - Acessar o navegador de sua preferência. |
|  | 2 - Informar a URL do projeto.|
|  | 3 - Abrir a página do projeto.|
|  | 4 - Digitar ingredientes na barra de pesquisa. |
|  | 5 - Conferir se os ingredientes aparecem em uma barra de sugestões enquanto o usuário digita. |
| Critérios de êxito | A aplicação deve apresentar sugestões de ingredientes relevantes de acordo com o que o usuário está digitando. |
| Responsável por elaborar o caso de Teste | Júlia Campos |


<br>

|Caso de Teste    | CT-05 - Verificar funcionalidade e persistência do modo noturno |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar se o botão de alternância de temas (claro e escuro) funciona corretamente e persiste a escolha do usuário |
| Passos | Seguir as seguintes instruções: |
|  | 1 - Acessar o navegador de sua preferência. |
|  | 2 - Informar a URL do projeto.|
|  | 3 - Abrir a página do projeto.|
|  | 4 - Clicar no botão referente a funcionalidade do modo noturno, localizado no canto superior direito da tela. |
|  | 5 - Conferir se a cada clique ele alterna entre os temas disponíveis.|
|  | 6 - Fechar e reabrir a página, conferindo se a aplicação continua no último tema escolhido.|
| Critérios de êxito | Botão alterna entre os temas corretamente e salva a preferência do usuário para sua próxima visita a aplicação.|
| Responsável por elaborar o caso de Teste | Maurício Honorato |


<br>

|Caso de Teste    | CT-06 - Verificar o retorno da exibição dos cards |
|:---|:---|
| Requisitos Associados | RF-02 e RF-06 |
| Objetivo do Teste | Verificar se a aplicação retorna as informações dos ingredientes buscados e design dos cards |
| Passos | Seguir as seguintes instruções: |
|  | 1 - Abrir a aplicação através de um navegador de sua preferência, informando a URL necessária. |
|  | 2 - Digitar ou colar a lista de ingredientes de diferentes produtos cosméticos no campo de pesquisa.|
|  | 3 -	Clicar na lupa ou pressionar "enter" em seu teclado.|
|  | 4 - Conferir se os ingredientes buscados são exibidos corretamente no card de ingredientes paginado:<ul><li>Verificar se todos os ingredientes buscados estão presentes no card.</li></ul>|
|  | 5 -	Conferir se os ingredientes desejados e indesejados são exibidos corretamente no card ingredientes indesejados:<ul><li>Verificar se os ingredientes desejados e indesejados estão destacados de acordo com o design especificado.</li></ul>|
|  | 6 - Conferir o card de resultados gerais e verificar se as informações retornadas são precisas e relevantes de acordo com a busca realizada pelo usuário.|
| Critérios de êxito |  Os ingredientes buscados foram exibidos corretamente nos cards correspondentes, com destaque adequado para os ingredientes desejados e indesejados, além de informações precisas e relevantes no card de resultados gerais.  |
| Responsável por elaborar o caso de Teste | Alírio Henrique |

<br>

|Caso de Teste    | CT-07 - Verificar a funcionalidade das etiquetas na barra de pesquisa |
|:---|:---|
| Requisitos Associados | RF- 07 |
| Objetivo do Teste | Verificar se os ingredientes digitados ou colados na barra de pesquisa são convertidos em formato de etiquetas e se permite a remoção individual de alguma etiqueta. |
| Passos | Seguir as seguintes instruções: |
|  | 1 - Abrir a aplicação através de um navegador de sua preferência, informando a URL necessária. |
|  | 2 - Digitar ou colar a lista de ingredientes de diferentes produtos cosméticos no campo de pesquisa.|
|  | 3 - Conferir se os ingredientes são convertidos em etiquetas abaixo da barra de pesquisa:<ul><li>Verificar se cada ingrediente é transformado em uma etiqueta individual.</li></ul>. <ul><li>Verificar se cada etiqueta possui o nome correto do respectivo ingrediente, seguido de um ícone de remoção (x).</li></ul> |
|  | 4 -	Remover algumas etiquetas clicando no ícone de remoção (x):<ul><li>Verificar se as etiquetas são removidas corretamente.</li></ul>. <ul><li>Verificar se o ingrediente correspondente é removido da lista de pesquisa.</li></ul> |
| Critérios de êxito |  Cada ingrediente colado ou digitado na barra de pesquisa foi convertido em uma etiqueta individual corretamente, além disso, as etiquetas exibiram tanto o nome do ingrediente quanto o ícone de remoção (x) logo em seguida, que permitiu a remoção individual da etiqueta selecionada. |
| Responsável por elaborar o caso de Teste | Júlia Campos |

<br>
