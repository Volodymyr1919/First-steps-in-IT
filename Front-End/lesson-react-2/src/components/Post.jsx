import React, { Component } from "react";

let _title = "Some title";
let _title2 = "Title 2";
let _text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, quasi obcaecati animi sint impedit dignissimos, expedita eos nihil aspernatur minima, quis debitis! Mollitia illum eum cumque ipsum odio obcaecati non voluptates dicta, quo, nulla adipisci tenetur et! Ullam earum voluptatibus consectetur, nemo recusandae deleniti architecto minus rem quo, magnam ducimus, eligendi quidem perferendis eveniet iste est similique sint illum repellat. Necessitatibus itaque reiciendis similique eum ex officia consectetur, deleniti temporibus aliquam delectus eius repellendus aut sed inventore soluta in porro, cupiditate magnam quam sequi at quo natus dolor. Unde nam fugiat consequatur eligendi recusandae blanditiis animi tenetur laboriosam impedit quibusdam!";
let _img = "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs";
let _marked = true;
let lesson = "";

if(!_marked) {
    lesson = _title2;
} else {
    lesson = _title;
}

class Post extends Component {
    
    // state = {
    //     _title: "Some title",
    //     _title2: "Title 2",
    //     _text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, quasi obcaecati animi sint impedit dignissimos, expedita eos nihil aspernatur minima, quis debitis! Mollitia illum eum cumque ipsum odio obcaecati non voluptates dicta, quo, nulla adipisci tenetur et! Ullam earum voluptatibus consectetur, nemo recusandae deleniti architecto minus rem quo, magnam ducimus, eligendi quidem perferendis eveniet iste est similique sint illum repellat. Necessitatibus itaque reiciendis similique eum ex officia consectetur, deleniti temporibus aliquam delectus eius repellendus aut sed inventore soluta in porro, cupiditate magnam quam sequi at quo natus dolor. Unde nam fugiat consequatur eligendi recusandae blanditiis animi tenetur laboriosam impedit quibusdam!",
    //     _img: "https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2147483647&v=beta&t=J3kUMZwIphc90TFKH5oOO9Sa9K59fimgJf-s_okU3zs",
    //     _marked: true
    // }
  render() {
    return (
      <section>
        <h3>{
            <span>
                {/* {_marked ? (_title) : (_title2)} */}
                {lesson}
            </span>   
        }</h3>
        
        <p>{_text}</p>
        <img src={_img} alt="" />
        
      </section>
    );
  }
}

export default Post;