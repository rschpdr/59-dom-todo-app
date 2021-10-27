// 1. Selecionar os elementos pertinentes: o input, o botão e a lista
const taskListElement = document.getElementById("taskList");
const inputElement = document.getElementById("taskListInput");
const btnElement = document.getElementById("taskListBtn");

// 2. Escutar o evento de 'click' no botão

btnElement.addEventListener("click", () => {
  // 3. Extrair o valor do input

  const userInput = inputElement.value;

  // 4. Criar o novo item da lista dentro da <ul>

  // Cria o novo elemento
  const li = `
  <li class="
    list-group-item list-group-item-action
    d-flex
    justify-content-between
    align-items-center"
  >
    <div>
    <input class="form-check-input me-1" type="checkbox" value="" />
    ${userInput}
    </div>
    <!-- data-tag é um atributo customizado que só vai existir nos botões de deletar -->
    <i data-tag class="fas fa-trash-alt text-danger interaction"></i>
  </li>
  `;
  // Insere o novo elemento como o primeiro item da lista
  taskListElement.insertAdjacentHTML("afterbegin", li);

  // Limpar o input após inserir o novo item
  inputElement.value = "";

  // Voltar o cursor do teclado para o input
  inputElement.focus();
});

// Delegação de eventos

document.addEventListener("click", (event) => {
  // Verificar através do event.target se o clique ocorreu no botão de deletar
  // O atributo data-tag só existe nos botões de deletar
  if (event.target.dataset.tag) {
    const deleteBtn = event.target;

    // Seleciona a <li> a ser deletada
    const li = deleteBtn.parentElement;

    // Remove essa <li> da <ul>
    const ul = li.parentElement;

    ul.removeChild(li);
  }
});

document.addEventListener("click", (event) => {
  // Verifica se o clique foi na caixa de seleção
  if (event.target.type === "checkbox") {
    const li = event.target.parentElement.parentElement;

    // Selecionando a ul
    const ul = li.parentElement;

    // Tirar o li atual da lista
    ul.removeChild(li);

    // Desabilita o item concluído
    li.classList.add("disabled", "text-decoration-line-through");

    // Re-inserí-lo no final da lista

    // Seleciona o último item da lista
    const lastListItem = ul.lastElementChild;

    // Recoloca a li removida ANTES do último item da lista
    lastListItem.insertAdjacentElement("beforebegin", li);
  }
});
