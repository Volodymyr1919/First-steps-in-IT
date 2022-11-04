new Promise(function(resolve, reject)
{
    resolve(1);
})
.then(function(result)
{
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(2);
    })
})
.then(function(result)
{
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(3);
    })
})
.then(function(result)
{
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(4);
    })
})
.then(function(result)
{
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(5);
    })
})
.then(function(result)
{
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(6);
    })
})
.then(function(result)
{
    console.log(result);
    return new Promise((resolve, reject) => {
        resolve(7);
    })
})