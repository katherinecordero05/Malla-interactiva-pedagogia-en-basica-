const ramos = document.querySelectorAll('.ramo');

ramos.forEach(ramo => {
  ramo.addEventListener('click', () => {
    alert(ramo.dataset.info);
  });
});
