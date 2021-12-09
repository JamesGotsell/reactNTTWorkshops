import  React,{Component } from 'react'

class FunnyDogs extends Component{
    constructor(props){
        super(props);

        this.state={
            url:''
        };
    }
    componentDidMount(){
        fetch('https://random.dog/woof.json')
            .then(response => 
                response.json()
            )
            .then(response => {
                console.log(response)
                this.setState({
                    url: response.url
                })
            })
            .catch(err => {
                console.error(err);
            })
                
            }
    logState = () =>{
        console.log(this.state.url)
    }

    render(){
        return(
            <>
                <h1>
                    FunnyDogs
                </h1>
                <button onClick={() => this.logState()}>Log Dog Api Results</button>
                <img alt='dog' width={'100px'} height={'100px'} src={this.state.url} />
            </>
        )
    }
}


export default FunnyDogs