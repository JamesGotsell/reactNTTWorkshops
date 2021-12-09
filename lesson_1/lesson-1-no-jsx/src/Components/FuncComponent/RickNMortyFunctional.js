import React, { useEffect, useState, Suspense } from 'react'
import { Card } from '../Card/Card'
export const RickNMorty = () => {
    const [character, setCharacter] = useState([])
    const [info , setInfo] = useState({})
   
   
    const logState = () => {
        console.log(info)
        console.log(character)
    }

    const getNextPage = () => {
        fetch(info.next).then((resp) => resp.json())
        .then(resp => { 
            setCharacter(resp.results)
            setInfo(resp.info)
        })
    }
    const getPrevPage = () => {
        fetch(info.prev).then((resp) => resp.json())
        .then(resp => { 
            setCharacter(resp.results)
            setInfo(resp.info)
        })
    }
    
    
    useEffect(() => {
        console.log('bbom')
        fetch('https://rickandmortyapi.com/api/character?page=2').then((resp) => resp.json())
        .then(resp => { 
            console.log(resp)
            setCharacter(resp.results)
            setInfo(resp.info)
        })
        
    }, [])
    console.log(character)
    return <>
                <button onClick={logState} > log state</button>
                <button onClick={getNextPage} > next next state</button>
                <button onClick={getPrevPage} > get prevs state</button>

                { character ?  character.map((item) => { return <Card {...item} />} ) : null }
            </>
}

