document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    // Alternar a exibição do menu de opções de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function() {
      const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
      opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });
    
    // Aumentar o tamanho da fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContrasteBotao = document.getElementById('alterna-contraste');
    
    let tamanhoAtualFonte = 1; // O tamanho da fonte começa em 1rem
    
    aumentaFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  
    diminuiFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  
    // Alternar o contraste
    alternaContrasteBotao.addEventListener('click', function() {
      document.body.classList.toggle('alto-contraste');
    });
  });
  