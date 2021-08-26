import React from 'react'

const Context = React.createContext({
    get:{
        from: '2020-02-01',
        to:'2020-02-19',
        data:[{}],
        age:'All',
        sex:'',
        location:'',
        status:''
    },
    set:{
        from:() => {},
        to: () => {},
        data:() => {},
        age:() => {},
        sex:() => {},
        location:() => {},
        status:() => {}
    }
})

const Provider = (props) => {
    const [from,setFrom] = React.useState("2020-02-01")
    const [to,setTo] = React.useState("2020-02-19") 
    const [data,setData] = React.useState("")
    const [age,setAge] = React.useState("0-130")
    const [sex,setSex] = React.useState("all")
    const [location,setLocation] = React.useState("all") 
    const [status,setStatus] = React.useState("all")

    const state = {
        get:{
            from,
            to,
            age,
            data,
            sex,
            state:location,
            status
        },
        set:{
            from:setFrom,
            to: setTo,
            data: setData,
            sex:setSex,
            state:setLocation,
            status:setStatus,
            age:setAge
        }
    }

    
    return (
        <Context.Provider value={state}>
            {props.children}
        </Context.Provider>
    )
}

export {
    Context,
    Provider
}