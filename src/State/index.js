import React from 'react'

const State = React.createContext({
    get:{
        from: () => {},
        to:() => {},
        data:() => {},
    },
    set:{
        from:() => {},
        to: () => {},
        data:() => {},
    }
})

const Provider = ({children}) => {
    const [from,setFrom] = React.useState("")
    const [to,setTo] = React.useState("") 
    const [data,setData] = React.useState("")

    const state = {
        get:{
            from,
            to,
            data,
        },
        set:{
            from:setFrom,
            to: setTo,
            data: setData,
        }
    }

    
    return (
        <State.Provider state={state}>
            {children}
        </State.Provider>
    )
}

export {
    State,
    Provider
}