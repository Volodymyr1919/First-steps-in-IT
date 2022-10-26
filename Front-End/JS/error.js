// console.log("ready");
// const requestURL = 'https://jsonplaceholder.typicode.com/users';
 
// function sendRequest(method, url, body = null) {
//  const headers = {
//    'Content-Type': 'application/json'
//  }
//  if (body != null)
//  {
//     body = JSON.stringify(body);
//  }
//  return fetch(url, {
//    method: method,
//    body: body,
//    headers: headers
//  }).then(response => {
//    if (response.ok) {
//      return response.json()
//    }
 
//    return response.json().then(error => {
//      const e = new Error('Что-то пошло не так')
//      e.data = error
//      throw e
//    })
//  })
// }
 
// sendRequest('GET', requestURL)
//  .then(data => console.log(data))
//  .catch(err => console.log(err))