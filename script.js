$(document).ready(function() {
  // Carousel do banner
  $('.banner-carousel').slick({
    dots: true,           // bolinhas de navegação
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // troca automática
    autoplaySpeed: 4000,  // 4 segundos
    arrows: false,        // sem setas
    fade: true            // efeito de fade suave entre slides
  });
});

  // Carousel do banner
  $('.banner-carousel').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // ⬅ aqui ativa autoplay
    autoplaySpeed: 4000,    // tempo entre slides (ms)
    arrows: false
  });

  // Máscara para telefone
  $('#telefone').mask('(00) 00000-0000');

  // Validação do formulário
  $('#pedido').on('submit', function(e) {
    e.preventDefault();
    let nome = $('#nome').val().trim();
    let email = $('#email').val().trim();
    let telefone = $('#telefone').val().trim();
    let moto = $('#moto').val();

    if (!nome || !email || !telefone || !moto) {
      alert('Preencha todos os campos!');
      return;
    }

    if (!email.includes('@')) {
      alert('Digite um e-mail válido!');
      return;
    }

    alert(`Pedido de ${moto} enviado com sucesso!`);
    $(this).trigger('reset');
  });


