(function($) {

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

})(jQuery);
$('#register-form').submit(function (e) {
  e.preventDefault(); // Prevent default form submission
  // Perform any additional validation or processing here

  // Show success message
  $('#successMessage').slideDown().show();
  $('#register-form').reset();
});
const dropdown = document.getElementById('myDropdown');
const option1Content = document.getElementById('option1Content');
const option2Content = document.getElementById('option2Content');
const option3Content = document.getElementById('option3Content');

dropdown.addEventListener('change', function () {
    const selectedOption = dropdown.value;
    option1Content.style.display = selectedOption === 'option1' ? 'block' : 'none';
    option2Content.style.display = selectedOption === 'option2' ? 'block' : 'none';
    option3Content.style.display = selectedOption === 'option3' ? 'block' : 'none';
});
$('.dropdown').hover(function () {
  $(this).find('.dropdown-toggle').dropdown('toggle');
});