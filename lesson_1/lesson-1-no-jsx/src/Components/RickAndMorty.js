import React, {Component, component} from 'react'

class RickAndMorty extends Component {
    constructor(props) {
        super(props);
        //this.state={posts:[]};
    }
    componentDidMount(){
        //logic to call API
        // fetch('https://rickandmortyapi.com/api').then(resp=>resp.json())
        //     .then(resp=>this.setState({posts:resp}))
        // fetch('https://rickandmortyapi.com/api/character').then(resp=>resp.json())
        // .then(resp=>this.setState({posts:resp}))
        // fetch('https://rickandmortyapi.com/api/location').then(resp=>resp.json())
        // .then(resp=>this.setState({posts:resp}))
        const result = fetch('https://rickandmortyapi.com/api/episode').then(resp=>resp.json())
        .then(data => { return data })
        console.log(result)
    }

    render() {
        return(
           <div>
         <h1>Rick And Morty</h1>
         |
        </div>
        )
    }
}

export default RickAndMorty