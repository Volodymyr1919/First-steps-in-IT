console.log("ready");
function countDown()
{
    new Promise(function(resolve, reject)
{
    setTimeout(() => 
    {
        resolve(10);
    }, 2000);
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(9);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(8);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(7);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(6);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(5);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(4);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(3);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(2);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(1);
        }, 2000);
    })
})
.then(function(result)
{
    document.getElementById("count").innerHTML = result;
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(0);
        }, 2000);
        countDown();
    })
})
}
countDown();