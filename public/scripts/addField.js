// Procurar o botão
document
  .querySelector('#add-time') //seleciona o elemento a monitorar

  // Quando clicar no botão
  .addEventListener('click', cloneField) //diz qual o gatilho, e ação (função) a executar

// Executar uma ação
function cloneField() {
  // Duplicar os campos. Que campos?
  const newFieldContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true) //transforma o elemento criado numa variável. const significa que um novo valor não pode ser atribuído à variável

  //Pegar os campos
  const fields = newFieldContainer.querySelectorAll('input') //seleciona tudo quer for classe input e cria uma lista

  //atribuir valores vazios aos inputs. Para cada campo retornado, limpar
  fields.forEach(function (field) {
    //executar a função para cada elemento e limpa ele (for x in list...)
    field.value = ''
  })

  // Colocar na página. Onde? O que?
  document.querySelector('.schedule-items').appendChild(newFieldContainer)
}
