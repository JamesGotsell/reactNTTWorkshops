import React, {Component } from 'react'
import { Card } from './Card/Card';

class RickAndMorty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            nextPage: ''
            };
    }
    componentDidMount(){
         fetch('https://rickandmortyapi.com/api/character').then((resp) => resp.json())
        .then(resp => { 
          
            console.log(resp)
            this.setState({
                characters: resp.results,
                nextPage: resp.info.next
            })
        })
        
    }

    logState = () => {
        console.log(this.state.characters)
    }
    
    newChars = () => {
        fetch(this.state.nextPage)
            .then(response => 
                response.json()
            )
            .then(response => {
                console.log(response)
                this.setState({
                    characters: response.results,
                    nextPage: response.info.next
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

   
    //  function to get next page of char
       // function that fectches new data onClick

        //  button - onclick function 
    render() {
        return(
           <div>
            <h1>Rick And Morty</h1>
            <button onClick={() => this.logState()} >Log API Results  </button>
            <button onClick={() => this.newChars()}> New Characters From Rick And Morty</button>
            {this.state.characters.map((item) => { return <Card {...item} />}) } 
        </div>
        )
    }
}

export default RickAndMorty