import React, {Component } from 'react'
import { Card } from './Card/Card';

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

    logState = () => {
        console.log(this.state.characters)
    }
    
    render() {
        return(
           <div>
            <h1>Rick And Morty</h1>
            <button onClick={() => this.logState()} >Log API Results  </button>
            {this.state.characters.map((item) => { return <Card {...item} />}) } 
        </div>
        )
    }
}

export default RickAndMorty