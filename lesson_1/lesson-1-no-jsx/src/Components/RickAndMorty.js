import React, {Component } from 'react'
import { Card } from './Card/Card';

class RickAndMorty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
            // next https://rickandmortyapi.com/api/character?page=2
        };
    }
    componentDidMount(){
         fetch('https://rickandmortyapi.com/api/character').then((resp) => resp.json())
        .then(resp => { 
            /**
             * 
             * info:
            count: 826
            next: "https://rickandmortyapi.com/api/character?page=2"
            pages: 42
            prev: null
            [[Prototype]]: Object
            results: [array] 
             */
            console.log(resp)
            this.setState({
                characters: resp.results
            })
        })
        
    }

    logState = () => {
        console.log(this.state.characters)
    }
    //  function to get next page of char - use dog component as ref
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