// console.log("JS file is ready!");

// var xhr = new XMLHttpRequest();
// console.log('UNSENT', xhr.readyState); // readyState будет равно 0
 
// xhr.open('GET', '/api', true);
// console.log('OPENED', xhr.readyState); // readyState будет равно 1
 
// xhr.onprogress = function () 
// {
//    console.log('LOADING', xhr.readyState); // readyState будет равно 3
// };
 
// xhr.onload = function () 
// {
//    console.log('DONE', xhr.readyState); // readyState будет равно 4
//    if(xhr.readyState == 4)
//    {
//     console.log("Ura");
//    }
// };
 
// xhr.send(null);

// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// // Get all users
// var xhr  = new XMLHttpRequest()
// xhr.open('GET', requestURL, true)

// xhr.onload = function () {
// var users = JSON.parse(xhr.responseText);
//  if (xhr.readyState == 4 && xhr.status == "200")
//  {
//    console.log(xhr);
//  }
//  else 
//  {
//    console.error(users);
//  }
// }
// xhr.send(null);


// let data = {};
// data.firstname = "John";
// data.lastname  = "Snow";
// let json = JSON.stringify(data);


// xhr.open("POST", requestURL);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-');
// xhr.send(json);

// //xhr.onload = () => console.log(xhr.response);

// xhr.onload = function()
// {
//     if(xhr.readyState == 4 && xhr.status == "201")
//     {
//         console.log("Server answered: ", xhr.response);
//     }
//     else
//     {
//         console.log("Error");
//     }
// };


