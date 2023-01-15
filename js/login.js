$("#login button").on('click', function() {
   let loginCorr = 'Kitty';
   let passCorr = 'Kate2023';
   let login = $('#login input[name="login"]').val();
   let pass = $('#login input[name="pass"]').val();
   let valentine = $('#login input[name="valentine"]:checked').val();

   if (valentine == 0) {
      alert('О, это больно, понимаешь?');
   } else if (login != loginCorr || pass != passCorr) {
      alert('Ошибка входа');
   } else {
      $('#login').css('display', 'none');
      $('#loader').css('display', 'block');
      setInterval(function () {
         $('#loader').css('display', 'none');
         $('#timeline').css('display', 'block');
         $('#timeline-line').css('display', 'block');
      }, 2500);
   }
});
