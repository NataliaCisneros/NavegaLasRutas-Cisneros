import {useEffect} from "react"

const canSee = true

export const withLogging =(ComponenteA)=>{

    return function ComponentWithLogging (){

        useEffect(()=>{
            console.log('hola mundo')
        }, [])

        if (canSee) return <ComponenteA></ComponenteA>
        return <h1>No podes ver el contenido</h1>
    }
}