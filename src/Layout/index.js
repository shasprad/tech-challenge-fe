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
    const [trends,setTrends] = React.useState({mtd:0,previous_mtd:0,no_days_current_month:1})
    const [isLoading,setIsLoading] = React.useState(false)

    const fetchData = (params) => {
        setIsLoading(true)
        axios.get('http://localhost:3000/covid',{ params })
        .then((res) => {
            setData(res.data.data)
            setTrends(res.data.trends)
            setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className="layout" style={LAYOUT_STYLE}>
        <Provider>
            <div>
                <Selector fetchData={fetchData}/>
                <Cards data={trends}/>
                <Graph data={data} isLoading={isLoading}/>
            </div>
        </Provider>
    </div>
  )  
}