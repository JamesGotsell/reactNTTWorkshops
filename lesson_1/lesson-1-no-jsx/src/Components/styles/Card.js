import React from "react";
import { ReactDOM } from "react";
import RickAndMorty from "../RickAndMorty";

 

export const Card=()=>{
     return(
         <div>
             <Wrapper
             img=''/>
         </div>
     )
 }

 

 function Wrapper(props){
    return(
        <div className='wrapper'>
            <div className='card'>
                <div className='class__body'>
                    <img src={props.img}/>
                    <h2 className='card__title'>Rick And Morty</h2>
                    <p className='card__description'></p>

                </div>
            </div>
        </div>
    )
}

