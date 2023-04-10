

async function searchCep() {
  const cepInput = document.querySelector('#CEP').value;
  const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cepInput}`);
  const json = await response.json();

  if (cepInput.length != 8) {
    alert('CEP inválido!');
  } else {
    document.querySelector('#street').value = json.street;
    document.querySelector('#neighborhood').value = json.neighborhood;
    document.querySelector('#city').value = json.city;
    document.querySelector('#state').value = json.state;
  }
}

document.querySelector('.btn').addEventListener('click', searchCep);