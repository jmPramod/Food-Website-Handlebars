document.addEventListener('DOMContentLoaded', function () {
  const icon = document.getElementById('icon');
  const textInput = document.getElementById('textInput');

  textInput.addEventListener('click', function () {
    if (icon.classList.contains('arrow-icon')) {
      icon.classList.remove('arrow-icon');
      icon.classList.add('flip-arrow-icon');
    } else {
      icon.classList.remove('flip-arrow-icon');
      icon.classList.add('arrow-icon');
    }
  });
});
