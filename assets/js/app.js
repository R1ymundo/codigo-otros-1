const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se agrega . parametro name, ya que es una class
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


async function displayUser(username) { //Se agrega async
  $n.textContent = 'cargando...';
  //Se agrega try-catch para el manejo de errores
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); //Se traen los datos del json para asignarlos a la variabel data

    console.log(data);
    $n.textContent = `${data.name}`; //Se camnbian las comillas simples a backticks
    $b.textContent = `${data.blog}`; //Se camnbian las comillas simples a backticks
    $l.textContent = `${data.location}`; //Se camnbian las comillas simples a backticks

  } catch (error) {
    handleError(error); //Se agrega la funcion handleError para mostrar errores en al consola
  }

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //Se agrega $ a la variable n
}

displayUser('stolinski').catch(handleError);