const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
  /*linha abaixo usa do refatoramento de código, é o método mais simples de definir um botão como ativo ou desligado */
   elementoPlataformas.classList.toggle("ativo");
   
  
 });