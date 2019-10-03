import './styles/index.scss';
import './assets/macbook-pro-at-night-picjumbo-com.jpg'
import './js/typeEffect';

// Emailjs
(function () {
  emailjs.init("user_si264bB57MMQl70gmoFho");
})();

$('.menu-link').click((e) => {
  $('.menu-link').removeClass('active');
  $(e.target).addClass('active')
});

const form = $("form#contact-form");
const formBtn = $("form#contact-form button");

formBtn.click((e) => {
  e.preventDefault();

  $('#contact-form button').text("Enviando...");
  emailjs.sendForm('gmail', 'template_jFlZUD4v', form[0])
    .then(function (response) {
      formBtn.text('Enviar');
    }, function (error) {
      formBtn.text('Enviar');
    });
})