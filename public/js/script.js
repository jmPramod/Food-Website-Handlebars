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

let alert = document.querySelector('.alert');
setTimeout(() => {
  alert.style.transform = `translate(500px)`;
  alert.style.transition = 'ease all 0.5s';
  alert.style.position = 'fixed';
}, 5000);

{
  alert.style.transform = `translate(0px)`;
  alert.style.transition = 'ease all 0.7ms';
  alert.style.position = 'fixed';
}
