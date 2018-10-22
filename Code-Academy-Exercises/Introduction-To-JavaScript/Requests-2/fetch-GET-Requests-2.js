fetch("https://api-to-call.com/endpoint").then(response =>{
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError =>{
  console.log(networkError.message);
}).then(jsonResponse =>{
  return jsonResponse;
})
//the .then function only fires after the function before it is completed
