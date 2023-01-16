$("#login button").on('click', function() {
   let loginCorr = 'Kitty';
   let passCorr = '17.01.2023';
   let login = $('#login input[name="login"]').val();
   let pass = $('#login input[name="pass"]').val();
   let valentine = $('#login input[name="valentine"]:checked').val();

   if (login != loginCorr || pass != passCorr) {
      // alert('Ошибка входа');  
   } else {
      $('#login').css('display', 'none');
      $('#content').css('display', 'block');
   }
});
