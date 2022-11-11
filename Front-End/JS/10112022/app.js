console.log("ready");
// try 
// {
//     console.log("1. Begining of code ...");
//     console.log("2. Middle of code ...");
//     telran;
//     console.log("3. End of code ...");
// }
// catch (err)
// {
//     console.log("ERROR::: ", err);
// }
// console.log("99. Final application ...");

try
{
    throw new Error("Nickname is incorrect");
}
catch (err)
{
    console.log("Error (name): ", err.name);
    console.log("Error (message): ", err.message);
    console.log("Error (stack): ", err.stack);
}