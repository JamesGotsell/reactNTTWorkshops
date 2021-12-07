import React, {Component, component} from 'react'

class RickAndMorty extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount(){
        //logic to call API
        fetch('https://rickandmortyapi.com/api').then(resp=>resp.json())
    .then(resp=>console.log(resp))
    }

    render() {
        return(
           <div>
         <h1>Rick And Morty</h1>
        </div>
        )
    }
}

export default RickAndMorty