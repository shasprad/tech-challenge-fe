import React from 'react'
import { 
    Select,
    Box, 
    Flex, 
    FormLabel
}  from '@chakra-ui/react'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Provider } from '../State';


const LAYOUT_STYLE = {
    "margin":"0px auto", 
    "maxWidth":"1600px",
    "background":"#333",
    "minHeight":"100vh",
    "padding":"25px"
}

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];  
  

export default function Layout() {



  return (
    <div class="layout" style={LAYOUT_STYLE}>
        <Provider>
            <Box bg="white">
                <Flex padding={10} alignItems="center" justifyContent="space-between" borderRadius="10px"> 
                    <Box>Filters</Box>
                    <Box>
                        <Select placeholder="Select option">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                    <Box>
                        <Select placeholder="Select option">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                    <Box>
                        <Select placeholder="Select option">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>                    
                    </Box>
                    <Box>
                        <Flex>
                            <FormLabel pr={5}>
                                From
                            </FormLabel>
                            <Select placeholder="Select option">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex>
                            <FormLabel pr={5}>
                                To
                            </FormLabel>
                            <Select placeholder="Select option">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Flex>
                    </Box>
                    <Box>
                    </Box>
                </Flex>
            </Box>
            <Box mt={15}>
                <Flex alignItems="center" justifyContent="space-between" borderRadius="10px">
                    <Box width="100%" pr="10"> 
                        <Box bg="white" borderRadius={3}>
                            Card #1
                        </Box>
                    </Box>
                    <Box width="100%">
                        <Box bg="white" borderRadius={3}>
                            Card #2
                        </Box>
                    </Box>
                    <Box width="100%" pl="10">
                        <Box bg="white" borderRadius={3}>
                            Card #3
                        </Box>
                    </Box>
                </Flex> 
            </Box>
            <Box mt={15} padding="10px" bg="white" borderRadius={5}>
                Graph
                <Box mt="25px">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name"/>
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" stackId="day" fill="#8884d8" />
                            <Bar dataKey="uv" stackId="day" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Box>
        </Provider>
    </div>
  )  
}