
//El primer parámetro del método fetch es la url que traeremos a través del GET
//el segundo es opcional y sería la consulta del POST en forma de objeto literarl
window.onload = () => {
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=WQY9UC0spB6ehbMFIiMSB20VixpqTJxL&limit=25&rating=r')
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((info) => {
    console.log(info.data);

    for (let i = 0; i < info.data.length; i++) {
      let gif = '<p>' + info.data[i].title + '</p>'
      gif += '<img src=' + info.data[i].images.original.url + '>'
      document.querySelector('ul').innerHTML += '<li>' + gif + '</li>'
      
    }
  })
  .catch((err)=>{
    console.log(err);
    alert('Error! Intente más tarde!');
  })
}
