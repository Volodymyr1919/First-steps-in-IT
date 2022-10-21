console.log("JS file is ready!");


function clockTimer() // тут мы объявляем функцию
{ 
    const date = new Date();
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()]; // [0] = hours, [1] = minutes, [2] = seconds
    let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // Дни недели в массиве
    let days = date.getDay();
    let currentDay = dayOfWeek[days];
    let morning = document.getElementById("day");
    morning.innerHTML = currentDay; // вписываем в DOM текущий день недели


    if (time[0]<10) time[0] = "0" + time[0];

    if (time[1]<10) time[1] = "0" + time[1];
 
    if (time[2]<10) time[2] = "0" + time[2];

    let current_time = [time[0], time[1], time[2]] .join(':');// 21:00:00
    let clock = document.getElementById("clock");
    clock.innerHTML = current_time; // вписываем в DOM время
    setTimeout("clockTimer()", 1000); // делаем счёт времени онлайн

}
clockTimer(); //тут мы вызываем функцию

// обращение к элементам, которым хотим применить стили
let clock = document.getElementById("clock");
let morning = document.getElementById("day");

// стилистика часов и дня недели
clock.setAttribute("style", "font-size: 2rem; color: navy; background: wheat; padding-top: 20px; padding-left: 20px; padding-bottom: 20px;border-radius: 10px; border-left: 4px solid lightgreen; border-bottom: 2px solid lightgreen; border-top: 2px solid lightgreen");
morning.setAttribute("style", "font-size: 2rem; color: red; background: lightgreen; padding-top: 20px; padding-right: 20px; padding-bottom: 20px; border-radius: 10px; border-right: 4px solid wheat; border-bottom: 2px solid wheat; border-top: 2px solid wheat");


let arr1 = [11, "friday", 13, "apple", 0, null, true];
arr1.forEach(function(item, index, _arr1)
{
    //console.log("Current elemnt: ", index, array, item);
    if (item == 13)
    {
        _arr1[1] = "Monday";
    }
    console.log("Current elemnt: ", _arr1);
    console.log("Source array: ", arr1);
}
);
function searchElement()
{
    let arr = ["Mac Mini", "iPhone Pro Max", "Nokia 3110", "Mac Pro", "Mac Air"];
    let laptop = arr.find(el => el.includes("Mac Pro"));
    console.log(laptop);
    let doc = document.getElementById("mac");
    doc.innerHTML = laptop;
}
searchElement();
    

function separateElement()
{
    let arr = [1, 22, 100, 50, 51];
    let count = arr.filter(Number => Number > 50);
    console.log(count);
    let myCar = new Object();
    myCar.make="Ford";
    myCar.model="Mustang";
    myCar.year=1969;
    console.log(myCar);
    let myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();
    myObj.type = "Dot syntax";
    myObj["date created"] = "String with space";
    myObj[str] = "String value";
    myObj[rand] = "Random Number";
    myObj[obj] = "Object";
    myObj[""] = "Even an empty string";
    console.log(myObj);
    localStorage.setItem("name", "Volodymyr");
    console.log(localStorage.getItem("name"));
    localStorage.removeItem("name");
    console.log(localStorage.getItem("name"));
    localStorage.clear();
}
separateElement();

let arr_of_students = 
[
  {
    name : "Петя",
    аге: 28,
    gpa: 90
  },
  {
    name : "Максим",
    аге: 30,
    gpa: 80
  },
  {
    name : "Светлана",
    аге: 21,
    gpa: 4
  },
  {
    name : "Даша",
    аге: 32,
    gpa: 50
  },
  {
    name : "Анна",
    аге: 19,
    gpa: 8.5
  },
  {
    name : "Ян",
    аге: 30,
    gpa: 30
  },
];

    let good = arr_of_students.filter(/*function (value){return value.gpa >=7;}*/ value => value.gpa >=7);
    console.log(good);
    let alphabet = arr_of_students.sort((a,b) => a.name > b.name ? 1 : -1);
    console.log(alphabet);
    localStorage.setItem("arr", JSON.stringify(arr_of_students));
    console.log(JSON.parse(localStorage.getItem("arr")));

    let localVareable = 44;
    function getStudent(_arr)
    {
        
        console.log("localVareable: ",localVareable);
        console.log("_arr: ", _arr)
    }
getStudent(arr_of_students);
console.log("localVareable: ", localVareable);


//Level 1
function alphabet_order(str)
{
  return str.split('').sort().join('');
}
document.writeln(alphabet_order("uncopyrightable"));

//Level 2
function find_longest_word(str)
{
  let str_split = str.split(' ');
  let longest_word = str_split.sort(function(a, b){return b.length - a.length;});
  return longest_word[0].length; // вернёт в числовом значении 1 способ
}
document.writeln(find_longest_word('Web Development In Telran'));
function findLongestWord(str)
{
  let strSplit = str.split(' ');
  let longestWord = 0;
  for(let i = 0; i < strSplit.length; i++)
  {
    if(strSplit[i].length > longestWord)
    {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord; // вернёт в числовом значении 2 способ
}
document.writeln(findLongestWord('Web Development In Telran'));
function search_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);// /\w[a-z]{0,}/ - между литералов указываются символы которые могут присутствовать в строке, а флаг gi позволяет проводить поиск по всей строке, а не только до первого пробела
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++) {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    }
  }
  return result; // вернёт в строчном значении
}
document.writeln(search_longest_word('Web Development In Telran'));