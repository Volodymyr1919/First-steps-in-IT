        //Level 1
        let num1 = 2;
        let num2 = 3;
        let num3 = 4;
        let sum;
        sum = num1 + num2 + num3;
        console.log(sum);
        //Level 2
        let arr = ["25","14","56","15","47"];
        console.log(arr);
        arr.shift();
        arr.shift();
        arr.unshift("25", "14", "5");
        console.log(arr);
        console.log(Math.max.apply(null, arr));
        console.log(Math.min.apply(null, arr));