async function buscaCep(){
  let cep = document.getElementById('CEP').value;
  if(cep !== "") {
    let url = `https://brasilapi.com.br/api/cep/v2/${cep}`;

    try {
      let response = await fetch(url);
      let endereco = await response.json();
      if(response.status === 200) {
        document.getElementById('street').value = endereco.street;
        document.getElementById('neighborhood').value = endereco.neighborhood;
        document.getElementById('city').value = endereco.city;
        document.getElementById('state').value = endereco.state;

        // Define os campos do resultado com pointer-events: none
        document.getElementById('street').style.pointerEvents = 'none';
        document.getElementById('neighborhood').style.pointerEvents = 'none';
        document.getElementById('city').style.pointerEvents = 'none';
        document.getElementById('state').style.pointerEvents = 'none';
      } else if (response.status === 404) {
        alert("CEP não encontrado!");
      } else {
        alert('Erro ao fazer a requisição!');
      }
    } catch(error) {
      alert('Erro ao fazer a requisição!');
    }
  }
}

window.onload = function() {
  let txtCep = document.getElementById('CEP');
  txtCep.addEventListener('blur', buscaCep);
}
