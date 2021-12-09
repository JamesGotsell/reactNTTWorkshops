import  React,{Component } from 'react'
import { Card } from './Card/Card';


class FunnyDogs extends Component{
    constructor(props){
        super(props);

        this.state={
            url:''
        };
    }
    componentDidMount(){
        fetch('https://random.dog/woof.json')
            .then(response => {
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
            </>
        )
    }
}



// class FunnyDogs extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             dogs: []
//         };
//     }
//     componentDidMount(){
//         fetch().then((resp) => resp.json())
//             .then(resp => {
//                 this.setState({
//                     dogs: resp.results
//                 })
//          })   
       
//         }

//         logstate=()=>{
//             console.log(this.state.dogs)
//         }

//         render(){
//             return(
//                 <>
//                     <button onClick={() => this.logstate()}>Log Dog Api Results</button>
//                     {this.state.dogs.map((item) => {return <Card {...item}/>})}
//                      {this.state.dogs.map((item) => {return <Card {...item}/>})}
                    
//                 </>
//             )
//         }
// }

export default FunnyDogs