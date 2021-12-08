import React, {Component } from 'react'
const Card=(props)=>{
       
    return(
        <div>    
           
                <p>{props.name} 
                <img src ={props.image}/>
                </p>
    
        
        </div>  
    )
}
class RickAndMorty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        };
    }
    componentDidMount(){
         fetch('https://rickandmortyapi.com/api/character').then((resp) => resp.json())
        .then(resp => { 
            this.setState({
                characters: resp.results
            })
        })
        
    }
       
    
    
    
    
    //create a character card component - functional component - pass state as props 
        
    
        logState = () => {
        console.log(this.state.characters)
    }

    render() {
        return(
           <div>
         <h1>Rick And Morty</h1>
         <button onClick={() => this.logState()} >Fetch API Results  </button>
            <card/>
        </div>
        )
    }
}

export default RickAndMorty