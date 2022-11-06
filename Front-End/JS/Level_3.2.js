console.log("am ready");
function error_request()
{
    fetch("https://api.twitter.com/1.1/statuses/update.json",
    {
        method: 'GET'
    }).then(response => 
    {
        if (response.ok) 
        {
            console.log("Всё хорошо, можно ехать дальше");
        }
        if (response.errors.code == "215")
        {
            console.log("Неверные аутентификационные данные")
        }
        else 
        {
            console.log("Ошибка!");
        }
    });
}
error_request();