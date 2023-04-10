const wrapper = document.querySelector('.wrapper');
const searchAddress = document.querySelector('.search-address');
const searchCep = document.querySelector('.search-cep');

searchAddress.addEventListener('click', () => {
  wrapper.classList.add('active');
})

searchCep.addEventListener('click', () => {
  wrapper.classList.remove('active');
})