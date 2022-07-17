import React, { Component } from 'react';

class Gallary extends Component{
    render(){
        let alternate = "https://i.imgur.com/fHyEMsl.jpg";
        return(
            <div>
             {
                this.props.items.map((items, index) => {
                    let {title, imageLinks, infoLink} = items.volumeInfo;

                    return(
                        <div key={index} className="book"> 
                        <img 
                        src={imageLinks != undefined ? imageLinks.thumbnail : alternate} 
                        alt="book image"
                        className='book-img'
                        />
                        <div className='book-text'>  {title} </div>
                     </div>
                    )
                })
             }   
            </div>
        )
    }
}
export default Gallary;