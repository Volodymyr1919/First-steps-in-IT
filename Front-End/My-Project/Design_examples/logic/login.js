// LANGUAGE LOGIC

let selLang = document.getElementById('select_lang');
let allLang = ['de', 'en'];
let hash = window.location.hash;
        hash = hash.substring(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#de';
        location.reload();
    }
    selLang.value = hash;
selLang.addEventListener('change', () => {
    let lang = selLang.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
});
function changeLang() {
    document.querySelector('title').innerHTML = langArr['logIn'][hash];
    document.getElementById('loginbtn').innerHTML = langArr['logIn'][hash];
    document.getElementById('signup-button').innerHTML = langArr['signUp'][hash];
    for (let key in langSignInPage) {
        document.querySelector('.lang-' + key).innerHTML = langSignInPage[key][hash];
    };
    for (let key in langBusiness) {
        document.querySelector('.langs-' + key).innerHTML = langBusiness[key][hash];
    };
}
changeLang();

// BUTTONS

document.getElementById('signupbtn').addEventListener('click', () => {
    document.querySelector('.form-login').classList.toggle('signUp');
    document.querySelector('.form-signUp').classList.toggle('signUp');
    document.querySelector('title').innerHTML = langArr['signUp'][hash];
});
document.getElementById('loginbtn').addEventListener('click', () => {
    document.querySelector('.form-login').classList.toggle('signUp');
    document.querySelector('.form-signUp').classList.toggle('signUp');
    document.querySelector('title').innerHTML = langArr['logIn'][hash];
});
document.getElementById('owner').addEventListener('click', () => {
    document.querySelector('.owner').classList.toggle('signUp');
    document.querySelector('.visitor_login').classList.toggle('signUp');
    for (let key in langSignUpPage) {
        document.querySelector('.lang-' + key).innerHTML = langSignUpPage[key][hash];
    };
});
document.getElementById('visitor').addEventListener('click', () => {
    document.querySelector('.visitor').classList.toggle('signUp');
    document.querySelector('.owner_login').classList.toggle('signUp');
});

// LOGIN LOGIC

// document.getElementById('logIn').addEventListener('click', () => {
//     let _name = document.getElementById("name").value;
//     let _password = document.getElementById("password").value;
//     let _who = document.querySelector('input[name="who"]:checked').value;
//     try {
//         if(_name != "" && _password != "") {
//             new Promise((resolve, reject) => {
//                 resolve();
//             }).then(()=> {
//                 if(_who == "visitor") {
//                     return loginVisitor();
//                 }
//                 if(_who == "owner") {
//                     return loginOwner();
//                 }
//             }).then(()=> {
//                 if(_who == "visitor") {
//                     return location.href = '/users'  + '#' + selLang.value;
//                 }
//                 if(_who == "owner") {
//                     return location.href = '/business'  + '#' + selLang.value;
//                 }
//             })
//         } else {
//             return error;
//         }
//     } catch (error) {
//         alert(langArr['smth_wrong'][hash]);
//     }
    
// })
// async function loginOwner() {
//     await fetch('/ownerlogin', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "business_name": document.getElementById("select_name").value,
//             "type_business": document.getElementById('select_type').value,
//             "name": document.getElementById("name").value,
//             "password": document.getElementById("password").value,
//             "who": document.querySelector('input[name="who"]:checked').value
//         })
//     }).then((res)=> {
//         if (res.status == 200) {
//             return res.json();
//         } else {
//             alert(langArr['not_found'][hash])
//         }
//     }).then((res) => {
//         localStorage.setItem("id", res._id);
//     })
// }
// async function loginVisitor() {
//     await fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "business_name": document.getElementById("select_name").value,
//             "type_business": document.getElementById('select_type').value,
//             "name": document.getElementById("name").value,
//             "password": document.getElementById("password").value,
//             "who": document.querySelector('input[name="who"]:checked').value
//         })
//     }).then((res)=> {
//         console.log(res);
//         if (res.status == 200) {
//             return res.json();
//         } else {
//             alert(langArr['not_found'][hash])
//             return error;
//         }
//     }).then((res) => {
//         localStorage.setItem("id", res._id);
//     })
// }
// (function() {
//     fetch('/get/' + document.getElementById('select_type').value, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then((res) => {
//         return res.json();
//     }).then((res) => {
//         for(let i = 0; i < res.length-1; i++) {
//             let rests = `<option class='inner' value='${res[i]}'>${res[i]}</option>`
//             document.getElementById('select_name').innerHTML += rests;
//         }
//     })
// })();
// document.getElementById('select_type').addEventListener('change', () => {
//     new Promise((resolve, reject) => {
//         resolve();
//     })
//     .then(() => {
//         return clearDefaultName();
//     })
//     .then(() => {
//         return getBusName();
//     })
// })
// async function clearDefaultName() {
//     let _length = document.getElementsByClassName('inner').length;
//     for(let i = 0; i < _length; i++) {
//         document.querySelector('.inner').remove();
//     }
// }
// async function getBusName() {
//     await fetch('/get/' + document.getElementById('select_type').value, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then((res) => {
//         return res.json();
//     }).then((res) => {
//         for(let i = 0; i < res.length-1; i++) {
//             let rests = `<option class='inner' value='${res[i]}'>${res[i]}</option>`
//             document.getElementById('select_name').innerHTML += rests;
//         }
//     })
// }