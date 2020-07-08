window.onload = () => {
  let data = {
    image_id: "asf2",
    sub_id: "my-user-1234",
    value: 1
  };

  let settings = {
    'method': 'POST',
    'headers': {
      'content-type': 'application/json',
      'x-api-key': 'bc71277c-5461-489a-80e7-4e291ee370e8'
    },
    'body': JSON.stringify(data)
  };

  fetch('https://api.thecatapi.com/v1/votes', settings)
  .then((response)=>{
    return response.json();
  })
  .then((info)=>{
    console.log(info);
  })
  .catch((err)=>{
    console.log(err);
    alert('ERROR! Intente más tarde!');
  })
}