(function() {

    let graph = [
        {
          month: 1,
          course: 62.9372,
          change: "+0.0269",
          currency: "USD",
        },
        {
          month: 2,
          course: 62.9103,
          change: "+0.7254",
          currency: "USD"
        },
        {
          month: 3,
          course: 30.33,
          change: "-40.3455",
          currency: "USD"
        },
        {
          month: 4,
          course: 61.7749,
          change: "+0.6270",
          currency: "USD"
        },
        {
          month: 5,
          course: 61.1479,
          change: "+0.2676",
          currency: "USD"
        },
        {
          month: 6,
          course: 59.2009,
          change: "-1.666",
          currency: "USD"
        }
       ] 
    canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    // ctx.beginPath();
    // ctx.moveTo(25,25);
    // ctx.lineTo(30,25);
    // ctx.lineTo(30,605);
    // ctx.lineTo(25,605);
    // ctx.fill();
    // ctx.beginPath();
    // ctx.moveTo(30,605);
    // ctx.lineTo(30,395);
    // ctx.lineTo(630,395);
    // ctx.lineTo(630,605);
    // ctx.fill();
    // for(let i = 0; i < graph.length; i++) {
    //     let yPos = 395;
    //     let moveX = 45;
    //     let move2X = 65;
    //     ctx.beginPath();
    //     ctx.moveTo(moveX * graph[i].month,graph[i].course*3);
    //     ctx.lineTo(moveX * graph[i].month,yPos);
    //     ctx.lineTo(move2X * graph[i].month,yPos);
    //     ctx.lineTo(move2X * graph[i].month,graph[i].course*3);
    //     ctx.fill();
    // }
    ctx.fillRect(10,10,10,500);
    ctx.fillRect(10,500,500,10);
    for (let i = 0; i < graph.length; i++) {
        let x = 40;
        ctx.fillRect(x * graph[i].month, 500 - graph[i].course, 30, graph[i].course);
    }
})();