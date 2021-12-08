import React, {Component } from 'react'

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
        
        {
            this.state.characters.map((item) => { return <div key={item.id}><p>{item.name} <img src ={item.image}/> </p></div>})
        }
        </div>
        )
    }
}

export default RickAndMorty