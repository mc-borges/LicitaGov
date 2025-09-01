# LicitaGov

## Geral
<div align="justify"> LicitaGov — Portal de Propostas é uma solução desenvolvida para o desafio técnico.
O objetivo é simular um portal de licitações com foco em UX/UI acessível, responsivo e claro, permitindo que fornecedores enviem propostas com: </div>
<div>&nbsp;</div>

* Nome do produto
* Descrição detalhada
* Preço unitário (R$)
* Prazo estimado de entrega (dias
* Upload de anexos (PDF, PNG, JPG, DOCX — até 5 arquivos, máx. 10 MB cada)

*Observação: o foco do desafio é UX/UI. O código em React foi gerado com auxílio de IA (para estruturar componentes e validações) e depois adaptado para refletir o design e as decisões de UX.*

## Front-end

### Tecnologias utilizadas

### Como rodar localmente


## UX/UI

### Contexto
<div align="justify"> Foi proposto oferecer uma experiência digital simplificada para que fornecedores possam participar de editais de compras públicas, reduzindo barreiras no preenchimento e envio de propostas. </div>

### Objetivo
<div align="justify"> Para o projeto, o principal objetivo era criar uma LP com fluxo de envio de proposta, contemplando: </div>
<div>&nbsp;</div>

* Tela inicial (LP com informações do edital)
* Formulário de envio
* Upload de arquivos
* Tela de confirmação
* Feedbacks (toasts, mensagens de erro)
* Noções de acessibilidade

### Fluxo de usuário
<div align="justify"> O usuário acessa a LP -> Entende o edital -> Clica em "enviar proposta" (CTA) -> Preenche os dados obrigatórios -> Anexa arquivos exigidos (PDF) -> Confirma os termos e envia -> Recebe feedback imediato (e visual) de sucesso ou erro. </div>

<div align="center"> <img src="https://github.com/user-attachments/assets/2e273ea6-c7bc-4c45-acd9-5cddd6f754fa" alt="Logo Fluxo de usuário"> </div> 

### Personas 
<div align="center"> <img src="https://github.com/user-attachments/assets/d15e5a73-ec9b-485d-a120-4220a72806de" alt="Persona 1"> </div>

***

<div align="center"> <img src="https://github.com/user-attachments/assets/8da87787-6812-4d38-978e-06cf81ee01e1" alt="Persona 2"> </div>

***

<div align="center"> <img src="https://github.com/user-attachments/assets/e9566337-67fb-4873-84ab-e677e6d580c8" alt="Persona 3"> </div>

### Análise de Concorrentes
#Falta esse

### Identidade Visual
#### Nome
<div align="justify"> O nome foi escrito com o mesmo intuito da criação da logo: ser "direto e reto". Composto pela abreviação das palavras Licitação (Licita) e Governo (Gov), o nome LicitaGov transmite clareza da proposta do site, e autoridade (gov passa a ideia de oficial, confiável), além de ser fácil de lembrar e pronunciar. </div>

#### Logo
<div align="justify"> Quando pesquisamos logotipos licitações um elemento em comum em quase todos é o martelo, mas não qualquer martelo, é aquele de juiz. E isso me levou a uma conclusão: Eu devia colocar esse martelo de alguma forma na logo. </div>

<div>&nbsp;</div>

<div align="justify"> Ao construir a identidade visual de uma nova ideia é essencial inovar, e estar em constante mudança (falando no geral), mas algumas coisas precisam acompanhar o óbvio, e isso não é ser "mais um", é se comunicar com seu cliente sem precisar dizer muitas palavras. Se tratando de serviços online, o usuário deve "bater o olho" e já saber do que se trata sua proposta. </div>

<div>&nbsp;</div>

<div align="justify"> Assim nasceu a logo da LicitaGov: um martelo de juiz, um $ (cifrão) e um documento. Juntos, eles comunicam de forma imediata o propósito da plataforma: enviar/julgar/aprovar propostas de orçamento em licitações. Esses elementos estão dentro de um círculo (remete à integridade, proteção e continuidade) com um contorno no entorno do mesmo (adiciona sensação de "selo", que remete à aprovação). </div>

<div>&nbsp;</div>

<div align="justify"> A logo transmite clareza e credibilidade. O design é minimalista, garantindo escalabilidade, funciona em dispositivos móveis, ícones, e documentos. Foram feitos modelos com o nome (horizontal e vertical) e apenas o favicon, também se alterando as cores para uso em: white background, color background e dark background. </div>

<div>&nbsp;</div>

<div align="center"> <img src="https://github.com/user-attachments/assets/2fb2284e-5ffe-4474-bdcb-88f2ec7e94e0" alt="Persona 3"> </div>

***

<div align="center"> <img src="https://github.com/user-attachments/assets/420d8765-dbf5-41af-8a2d-98895f145277" alt="Logo LicitaGov Horizontal"> </div>

***

<div align="center"> <img src="https://github.com/user-attachments/assets/a46329cb-62af-4e69-808d-4d4bb0d3386d" alt="Logo LicitaGov Vertical"> </div>

#### Cores
<div align="justify"> A cor principal é a #004AAD, um azul escuro. A cor azul é amplamente utilizada em aplicações de tecnlogia, pois transmite confiança, inovação e profissionalismo. Além disso essa cor possui um alto contraste com o branco (#FFFFFF), o que reforça o WCAG. </div>
<div>&nbsp;</div>

* Azul primário: #004AAD
* Azul background: E6F0FA
* Sucesso: #28A745
* Erro: #DC3545
* Alerta: #F9A825
* Neutros: #FFFFFF, #000000, #333333, #666666, #E5E5E5

#### Tipografia
<div align="justify"> A fonte escolhida foi a Inter: de fácil acesso (open source), projetada especificamente para interfaces digitais. Tem um tom moderno, limpo, não chama atenção para si, pesos variados para hierarquia visual, possui boa performance em contraste ratio, além de alta legibilidade para pessoas com baixa visão ou dislexia. </div>
<div>&nbsp;</div>

* H1 - 32px/bold
* H2 - 24px/semibold
* Body - 16px/regular
* Caption - 14px/Light
* Button - 16px/semibold

### Wireframes
#### Desktop
#falta esse
#### Mobile
#falta esse

### Design System
<div align="justify"> Além da identidade visual, foram definidos vários componentes com diferentes estados, espaçamentos (xxs a xxl - 4px/8px) e variáveis. Abaixo segue alguns exemplos. </div>

<div align="center"> <img src="https://github.com/user-attachments/assets/3dc3e5c5-b1aa-43b5-ba57-707e98e014ab" alt="Componente botões"> </div>

***

<div align="center"> <img src="https://github.com/user-attachments/assets/50b3828a-1fef-44fe-a946-97d33580fda6" alt="Componente input textual"> </div>

O restante pode ser conferido no link do projeto (Figma): [Design System - LicitaGov](https://www.figma.com/proto/jAMuDrWAcaFKqzy5HVL0Kk/LicitaGov?node-id=8-85&t=OsLbp4XOfbYftgE7-8&scaling=contain&content-scaling=fixed&page-id=0%3A1&hide-ui=1)

### Regras de Validação
<div align="justify"> Para garantir dados claros e consistentes, todos os campos do formulário seguem regras de validação bem definidas, as mensagens de erro são claras e acessíveis, ajudando o usuário a corrigir rapidamente qualquer inconsistência. </div>
<div>&nbsp;</div>

<div align="center">

| Campo            | Regra                                | Mensagem de Erro                                 |
| ---------------- | ------------------------------------ | ------------------------------------------------ |
| Nome do Produto  | Obrigatório, mínimo 3 caracteres     | “Digite o nome do produto (mín. 3 caracteres).”  |
| Descrição        | Obrigatório, mínimo 20 caracteres    | “A descrição deve ter pelo menos 20 caracteres.” |
| Preço Unitário   | Numérico, positivo, 2 casas decimais | “Digite um valor válido, ex.: 123,45.”           |
| Prazo de Entrega | Numérico, inteiro, > 0               | “Digite um prazo válido em dias úteis.”          |
| Upload           | PDF, máx. 10MB, até 3 arquivos       | “Envie apenas arquivos PDF com até 10MB.”        |
| Checkbox         | Obrigatório                          | “É necessário aceitar os termos do edital.”      |

</div>

### Acessibilidade (A11y)
<div align="justify"> Garantir que todos os usuários, inclusive pessoas com deficiência, possam navegar e interagir com a plataforma é uma prioridade. </div>
<div>&nbsp;</div>

<div align="center">
  
| Elemento      | Recurso A11y                                                  | Como implementar                               |
| ------------- | ------------------------------------------------------------- | ---------------------------------------------- |
| Inputs        | `aria-required="true"` nos obrigatórios                       | Leitor de tela avisa que o campo é obrigatório |
| Upload        | `role="button"` + descrição “Selecione ou arraste um arquivo” | Explica ação ao usuário com deficiência visual |
| Toast         | `aria-live="polite"`                                          | Faz leitores de tela anunciarem mensagem       |
| Error Summary | Foco automático no erro + links que levam ao campo            | Usuário de teclado encontra erros rapidamente  |
| Botões        | Labels claros (não usar só ícones)                            | “Enviar proposta” em vez de apenas ícone 📤              |
| Navegação     | Ordem de tabulação lógica                                     | Usuário de teclado percorre na ordem natural   |

</div>

### UX Writing
<div align="justify"> A linguagem da interface é clara, direta e orientada à ação, garantindo que o usuário entenda exatamente o que fazer em cada etapa. Abaixo, os textos utilizados nos placeholders, mensagens e botões. </div>
<div>&nbsp;</div>

<div align="center">

| Situação              | Texto exibido                                 |
| --------------------- | --------------------------------------------- |
| Placeholder Nome      | “Digite o nome do produto”                    |
| Placeholder Descrição | “Explique em detalhes sua proposta”           |
| Placeholder Preço     | “0,00”                                        |
| Placeholder Prazo     | “Ex.: 30”                                     |
| Toast Sucesso         | “✅ Proposta enviada com sucesso!”             |
| Toast Erro            | “❌ Não foi possível enviar. Tente novamente.” |
| Error Summary título  | “Foram encontrados 2 erros no formulário”     |
| Botão CTA             | “Enviar Proposta”                             |

</div>

### KPIs e Métricas
<div align="justify"> Para garantir que a experiência do usuário seja eficiente e intuitiva, acompanhamos métricas-chave de desempenho e usabilidade. Elas nos ajudam a identificar gargalos, otimizar o fluxo e melhorar a taxa de sucesso no envio das propostas. </div>
<div>&nbsp;</div>

<div align="center">
  
| Métrica                    | Como medir                             | Meta                                          |
| -------------------------- | -------------------------------------- | --------------------------------------------- |
| Taxa de envio concluído    | Nº formulários enviados ÷ nº iniciados | > 80%                                         |
| Tempo médio para preencher | Cronometrar do 1º clique ao envio      | < 5 min                                       |
| Taxa de erro no upload     | Nº uploads inválidos ÷ total uploads   | < 5%                                          |
| Erros por campo            | Contagem de erros exibidos             | Menos de 10% dos usuários erram o mesmo campo |
| Taxa de abandono           | Usuários que saem antes de enviar      | < 15%                                         |

</div>

### Checklist QA/A11y
<div align="justify"> Antes de cada entrega, validamos os principais elementos da interface para garantir funcionalidade, acessibilidade e usabilidade. Este checklist assegura que o formulário esteja sempre pronto para uso em produção. </div>
<div>&nbsp;</div>

<div align="center">
  
| Item                | Verificação                                               |
| ------------------- | --------------------------------------------------------- |
| Inputs obrigatórios | Impedem envio se vazios                                   |
| Mensagens de erro   | Aparecem logo abaixo do campo                             |
| Error Summary       | Lista erros no topo ao enviar errado                      |
| Upload              | Aceita apenas PDF, até 10MB                               |
| Toasts              | Aparecem e desaparecem em 3s                              |
| Acessibilidade      | Ordem de tabulação correta, `aria-live` funcionando       |
| Responsividade      | Layout ok em 1440px, 768px, 430px                         |
| Botões              | Todos têm rótulo claro e estados (hover, focus, disabled) |

</div>

### Protótipo Final 
#### Projeto Figma
link
#### Protótipo Mobile
link
#### Protótipo Desktop
link






