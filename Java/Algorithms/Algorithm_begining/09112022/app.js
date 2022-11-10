console.log("ready");

// // Task #1
// function pow(x, n) 
// {
//     let result = x;
  
//     for (let i = 1; i < n; i++) 
//     {
//       result *= x;
//     }
//     return result;
// }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) 
//   {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else 
//   {
//     alert( pow(x, n) );
//   }



// // Task #2
// function arrays()
// {
//     const array1 = [100, 112, 256, 349, 770];
//     const array2 = [72, 86, 113, 119, 265, 445, 892];
//     const array3 = array1.concat(array2);
//     array3.sort((a,b) => 
//     {
//         return a - b;
//     })
//     console.log(array3);
//     console.log(array3[6]);
// }
// arrays();


// // Task #3
// function entries()
// {
//     let arr = [1, 1, 2, 2, 2, 2, 3];
//     let x = 2;
//     let count = {};
//     for (let i = 0; i < arr.length; i++)
//     {
//         let num = arr[i];
//         count[num] = count[num] ? count[num] + 1 : 1;
//     }
//     console.log("The", x, "repeating", count[x], "times");
// }
// entries();

function findPeak()
{
    let arr = 
    [
        [10, 20, 15],
        [21, 30, 14],
        [7, 16, 32]
    ]
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr[i].length; j++)
        {
            // console.log(arr[i][j]);
        }
    }
}
findPeak();