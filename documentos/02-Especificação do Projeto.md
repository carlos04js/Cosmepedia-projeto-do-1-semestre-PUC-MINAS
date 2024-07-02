# Especificação do Projeto

## Perfis de Usuários



<table>
<tbody>
<tr align=center>
<th colspan="2"> Perfil 1: Pessoas com doenças de pele diagnosticadas.  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas de diversas faixas etárias que, ao passar dos anos, começam a identificar anomalias ou sensibilidades na pele.​</td>
</tr>
  
<tr>
<td><b>Necessidades</b></td>
<td>
  
1. Identificar ingredientes que possam piorar o quadro em que se encontram.​

2. Ter uma resposta rápida, sem ter que olhar item por item no navegador.​

3. Entender o porquê aquele ingrediente pode afetá-la.​

4. Contribuir com o conhecimento do usuário, para o mesmo não fazer escolhas que prejudiquem seu quadro.​</td>
</tr>

<table>
<tbody>
<tr align=center>
<th colspan="2"> Perfil 2: Pessoas que buscam o consumo consciente.  </th>
</tr>  
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas que possuem um certo grau de entendimento e desejam identificar e ampliar seu entendimento do produto que consome​.</td>
</tr>

<tr>
<td><b>Necessidades</b></td>
<td>
  
 1. Obter de forma simplificada informação sobre o ingrediente presente na formulação.​

 2. Ser capaz de distinguir de forma mais eficaz, qual produto será mais seguro para si, ao comparar, quantos ingredientes de cada formulação são prejudiciais.​</td>

</tr>
</tbody>
</table>


## Histórias de Usuários




|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Trabalhador rural com carcinoma na pele        |  Descobrir o que afeta minha recuperação   | Poder evitar uma piora  |
| Pai de um bebê recém-nascido                 | Verificar a segurança dos produtos que usarei no meu filho                        | Para garantir sua saúde                                |
|      Influencer com rosácea            | Garantir a possibilidade de poder trabalhar com a melhor versão minha imagem através de produtos cosméticos                        | Evitar produtos que causem o agravamento da doença, que também poderiam afetar a minha saúde e autoestima                               |
|  Frentista com vitiligo                | Oferecer qualidade de vida e o bem-estar                       | Tornar-se mais encorajado, seguro de si e confiante no futuro                               |
|   Maquiadora              | Checar a procedência dos ingredientes de produtos que me interessam adquiri                       | Garantir que meus/minhas clientes estejam seguros                              |

## Requisitos do Projeto

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
|  RF-01  |  A aplicação deve oferecer uma funcionalidade de pesquisa por um ou mais ingredientes cosméticos                    | ALTA    | 
|  RF-02  |  A aplicação deve construir e retornar ao usuário um card/tabela com as informações sobre o(s) ingrediente(s) escolhido(s) pelo usuário na pesquisa.                     | ALTA    |
| RF-03  |  Quando a busca pelo usuário conter mais de um ingrediente, a aplicação deve retornar os cards construídos para o usuário de maneira paginada, com os cards ordenados e sobrepostos um sobre os outros.    | ALTA    |
|RF-04 | A aplicação deve oferecer aos usuários, a opção de ativar ou desativar o modo noturno, que ajusta a interface para tons mais escuros para melhorar a experiência de uso em ambientes com pouca luz.    |  BAIXA  |
|RF-05|  A aplicação deve fornecer uma funcionalidade de sugestão de preenchimento automático na barra de pesquisa incremental por ingredientes, que apresenta possíveis ingredientes à medida que o usuário digita, com base nos dados disponíveis no banco de dados de ingredientes.    | BAIXA |
|RF-06|  A aplicação deve construir e retornar ao usuário um card/tabela com as informações de segurança gerais sobre o conjunto de ingredientes (produto) quando a pesquisa possuir mais de um ingrediente.    | MÉDIA   |
|RF-07|  A aplicação deve permitir que os ingredientes inseridos na barra de pesquisa sejam convertidos em etiquetas, com o objetivo de melhorar a legibilidade e facilitar a manipulação e busca por esses ingredientes.  | MÉDIA   |

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  O sistema deve ser capaz de armazenar informações e dados detalhados sobre cada tipo de ingrediente cosmético, incluindo efeitos colaterais, reações alérgicas e outras informações relevantes.                     | ALTA    | 
| RNF-02 |  A aplicação deve garantir que a funcionalidade de pesquisa por ingredientes cosméticos seja rápida e eficiente, mesmo em casos de pesquisas que incluam vários ingredientes.                     | ALTA    | 
| RNF-03 |  A aplicação deve manter um desempenho responsivo e suave ao construir e exibir os cards de informações sobre os ingredientes escolhidos pelo usuário, mesmo quando várias consultas de pesquisa estão sendo processadas simultaneamente                    | ALTA    | 
| RNF-04 |  A aplicação deve garantir que a paginação dos cards construídos para o usuário seja escalável, permitindo que o sistema manipule grandes volumes de dados de forma eficiente e sem degradação do desempenho à medida que o número de resultados de pesquisa aumenta                    | MÉDIA    | 
| RNF-05 |  A interface do modo noturno deve ser projetada de forma a reduzir a fadiga ocular dos usuários durante o uso prolongado em ambientes com pouca luz, garantindo um contraste adequado entre os elementos da interface e minimizando o brilho excessivo.                    | BAIXA    | 
| RNF-06 |  A aplicação deve garantir a acessibilidade para usuários com diferentes necessidades, seguindo as diretrizes de acessibilidade da Web (WCAG). Isso inclui fornecer texto alternativo adequado para todos os componentes HTML que transmitam informações visuais, garantindo que as cores usadas na interface sejam distinguíveis para usuários daltônicos e mantendo uma estrutura de marcação semântica para facilitar a navegação por meio de tecnologias assistivas                  | BAIXA    |



