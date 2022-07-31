import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"

const App = () => {
    return (
        <div className='ui comments'>
            <SingleComment img={img1}  name='Eymen'  date='Today 5:00'  text="It's amazing" />
            <SingleComment img={img2}  name='Mehmet'  date='Today 5:02'  text="Great jobs" />
            <SingleComment img={img3}  name='Türkan'  date='Today 5:15'  text="Thanks." />
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root"),
)