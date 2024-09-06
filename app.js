function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML gerado
    let resultados = "";
  
    // Itera sobre cada objeto no array de dados
    for (let dado of dados) {
      // Cria uma nova div para cada resultado
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo do elemento section com o HTML gerado
    section.innerHTML = resultados;
  }