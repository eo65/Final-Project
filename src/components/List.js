import React, { Component } from "react";
import "./List.css";
 
class List extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			images: [
			{
				pic:"https://i.imgur.com/sIUHSfe.jpg" ,
				Model:"Toyota Rav4 2019",
				price:"$26,000"
			},
			{
				pic:"https://i.imgur.com/97KGXfs.jpg",
				Model:"Mazda CX5",
				price:"$25,000"
			},
			]
		}
	}
    
	render() {
    return(
	<div className='list'>
		<ul>
		{this.state.images.map((lists)=> 
            <li>
              <img class="resize" src={lists.pic} />
              <span>
                <strong>{lists.Model} </strong>
                <small> Price:{lists.price}</small>
              </span>
            </li>
           )}
		</ul>
	</div>
      );
    }
}

export default List;