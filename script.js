document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('open');
  const icon = navToggle.querySelector('i');
  icon.classList.toggle('ti-menu-2');
  icon.classList.toggle('ti-x');
});

navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    const icon = navToggle.querySelector('i');
    icon.classList.add('ti-menu-2');
    icon.classList.remove('ti-x');
  });
});
