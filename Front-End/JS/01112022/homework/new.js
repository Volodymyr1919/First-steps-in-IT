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
            console.log(i, "address:", _assets[i].creator.address);
        }
    });
    // _getBalance();
}
_getAddress();
function _getBalance()
{
    fetch("https://api.ethplorer.io/getAddressInfo/0x495f947276749ce646f68ac8c248420045cb7b5e?apiKey=freekey",
    {
        method: 'GET'
    }).then(response => response.json()).then((response) => console.log(response))
}