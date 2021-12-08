import React from 'react'

export const Card = ({name, image, gender}) => { 
    return(
        <div>    
                <p>{name} </p>
                <img alt={name} src ={image}/>
                <p>{gender}</p>
        </div>  
    )
}