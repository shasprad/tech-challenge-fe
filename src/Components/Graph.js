import React from 'react' 
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Spinner, Text }  from '@chakra-ui/react'
import format from 'date-fns/format'

const Graph = ({data,isLoading}) => {
    return(
        <Box mt={15} padding="25px" bg="white" borderRadius={5}>
            <Text 
                align="center" 
                display="block" 
                as="h3" 
                fontWeight="bold"
            >
                Visualization
            </Text>
            <Box mt="25px" pb="25px">
                {
                    !isLoading ?
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis 
                                    dataKey="date" 
                                    angle={-15} 
                                    height={30} 
                                    margin={{top:30}} 
                                    tickMargin={10}
                                    tickFormatter={(val) => {
                                        try {
                                            return (format(Date.parse(val),"do LLL"))
                                        } catch {}
                                    }}
                                />
                                <YAxis />
                                <Tooltip labelFormatter={(val) => { try { return (format(Date.parse(val),"do MMMM, y")) } catch {}  }}/>
                                
                                <Bar dataKey="Recovered" stackId="day" fill="#82ca9d" />
                                <Bar dataKey="Hospitalized" stackId="day" fill="#8884d8" />
                                <Bar dataKey="Deceased" stackId="day" fill="#F45866" />
                                <br/>
                                <Legend wrapperStyle={{position:'relative'}}/>
                            </BarChart>
                        </ResponsiveContainer>
                    : 
                        <Spinner width="50px" height="50px" thickness="3px" margin="0px auto" display="flex"/>
                }
                
            </Box>
        </Box>
    )
}

export default Graph