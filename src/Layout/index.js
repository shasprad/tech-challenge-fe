import React from 'react'
import axios from 'axios'
import { Provider } from '../State';
import { Selector, Graph, Cards } from '../Components'

const LAYOUT_STYLE = {
    "margin":"0px auto", 
    "maxWidth":"1600px",
    "background":"#E9ECF3",
    "minHeight":"100vh",
    "padding":"25px"
}
  

export default function Layout() {

    const [data,setData] = React.useState([])
    const [isLoading,setIsLoading] = React.useState(false)

    const fetchData = (params) => {
        setIsLoading(true)
        axios.get('http://localhost:3000/covid',{ params })
        .then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className="layout" style={LAYOUT_STYLE}>
        <Provider>
            <div>
                <Selector fetchData={fetchData}/>
                <Cards/>
                <Graph data={data} isLoading={isLoading}/>
            </div>
        </Provider>
    </div>
  )  
}