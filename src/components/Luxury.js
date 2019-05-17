import React, { Component } from "react";
import "./List.css";
 
class Luxury extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			images: [
			{
				pic:"https://i.imgur.com/oVIIqsn.jpg" ,
				Model:"Range Rover",
				price:"$50,000"
			},
			{
				pic:"https://i.imgur.com/slAdbsA.jpg",
				Model:"Lexus Lx",
				price:"$80,000"
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

export default Luxury;