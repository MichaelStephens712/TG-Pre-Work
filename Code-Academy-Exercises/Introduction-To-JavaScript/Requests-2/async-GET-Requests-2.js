const getData = async () => {try{
  const response = await fetch("https://api-to-call.com/endpoint")
  if(response.ok){
    const jsonResponse = await response.json()
    return jsonResponse
  }
  throw new Error('Request failed!')
} catch(error){console.log(error)}};
//await can only be used in an async function. await allows a program to run while waiting for a promise to resolve.
