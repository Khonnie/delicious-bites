const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#order-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('.form-status');
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  status.textContent = `Thanks, ${data.get('name')}. Your ${data.get('order')} request is ready for confirmation. Please call the restaurant to place it.`;
  status.classList.add('success');
});
