import React from "react";

function Cards(props){

return  (
    <>
    <div className="Cards">
    <div className="card">
    <img src={props.imgsrc}  alt="_mypic" className="card_img" />
    <div className="card_info"> 
    <span className="card_category">{props.title}</span>
    <h3 className="card_title">{props.Sname}</h3>
    <a href={props.link} target="">

        <button>Watch now</button>
    </a>

    </div>



    </div>




    </div>
</>)
}

export default Cards;