console.log("ready");
function _getAddress()
{
    fetch("https://api.opensea.io/api/v1/assets?format=json",
    {
        method: 'GET'
    }).then(response => response.json()).then((response) => 
    {
        let _assets = response.assets
        for (let i = 0; i < _assets.length; i++)
        {
            console.log("address:", _assets[i].creator.address);
            localStorage.setItem(i,_assets[i].creator.address);
        }
        _getBalance();
    });
 
}
_getAddress();
function _getBalance()
{
    for (let i = 0; i < localStorage.length; i++)
    {
        fetch("https://api.ethplorer.io/getAddressInfo/" + localStorage.getItem(i) + "?apiKey=freekey",
    {
        method: 'GET'
    }).then(response => response.json()).then((response) => 
        {
            console.log("balance: ", response.ETH.balance)
            sessionStorage.setItem(i,response.ETH.balance);
            _getdata();
        })
    }
}
function _getdata()
{
    for (let i = 0; i < localStorage.length; i++)
    {
        console.log(JSON.parse(localStorage.getItem(i), sessionStorage.getItem(i)));
    }
    
}