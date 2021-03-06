import React from 'react' 
import { Box, Flex, Select, FormLabel } from '@chakra-ui/react'
import { Context } from '../State'
import DatePicker from "react-datepicker";
import format from 'date-fns/format';

import "react-datepicker/dist/react-datepicker.css";
import "./styles/DatePicker.css"

const Selector = ({fetchData}) => {

    const store = React.useContext(Context) 
    const [rawFrom,setRawFrom] = React.useState(new Date("Mon Mar 23 2020 00:00:00 GMT+0530 (India Standard Time)"))
    const [rawTo,setRawTo] = React.useState(new Date("Mon Aug 23 2021 00:00:00 GMT+0530 (India Standard Time)"))

    const handleChange = (e) => {
        store.set[e.name](e.value)
        fetchData({...store.get,[e.name]:e.value})
    }

    React.useLayoutEffect(() => {
        fetchData({...store.get})
    },[])

    const handleDateChange = (date,name) => {
        console.log(date)
        if (name === "to") setRawTo(date)
        if (name === "from") setRawFrom(date) 
        store.set[name](format(date,"Y-MM-dd"))
        fetchData({...store.get,[name]:format(date,"Y-MM-dd")})
    }

    return (
        <Box bg="white" borderRadius="5px">
            <Flex padding={25} alignItems="center" justifyContent="space-between" > 
                <Box width="100%" color="#172A3A" fontWeight="bold">Filters</Box>
                <Box width="100%" padding="0px 15px">
                    <Select 
                        focusBorderColor="#172A3A"
                        name="state" 
                        size="lg"
                        onChange={(event) => handleChange(event.target)} 
                        iconSize={0}
                        padding="5px"
                        className="stateContainer"
                    >
                        <option value="all">State</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Goa">Goa</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Assam">Assam</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Meghalaya">Meghalaya</option>
                    </Select>
                </Box>
                <Box width="100%" padding="0px 15px">
                    <Select 
                        name="age" 
                        size="lg"
                        onChange={(event) => handleChange(event.target)}
                        focusBorderColor="#172A3A"
                    >
                        <option value="0-130">Age</option>
                        <option value="0-18">0 to 18 years</option>
                        <option value="19-35">19 to 35 years</option>
                        <option value="36-60">36 to 60 years</option>
                        <option value="61-130">Greater than 60 years</option>
                    </Select>
                </Box>
                <Box width="100%" padding="0px 15px">
                    <Select 
                        name="sex" 
                        size="md" 
                        onChange={(event) => handleChange(event.target)}
                        focusBorderColor="#172A3A"
                    >
                        <option value="all">Gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="Non-Binary">Non-Binary</option>
                    </Select>                    
                </Box>
                <Box width="100%" padding="0px 15px">
                    <Select name="status" onChange={(event) => handleChange(event.target)} focusBorderColor="#172A3A">
                        <option value="all">Status</option>
                        <option value="Deceased">Deceased</option>
                        <option value="Hospitalized">Hospitalized</option>
                        <option value="Recovered">Recovered</option>
                    </Select>                    
                </Box>
                <Box width="100%" padding="0px 15px">
                    <Flex alignItems="center">
                        <FormLabel pr={10} color="#6E7A87">
                            From
                        </FormLabel>
                        <DatePicker name="from" selected={rawFrom} onChange={(date) => handleDateChange(date,"from")}/>
                    </Flex>
                </Box>
                <Box width="100%" padding="0px 15px">
                    <Flex alignItems="center">
                        <FormLabel pr={10} color="#6E7A87">
                            To
                        </FormLabel>
                        <DatePicker name="to" selected={rawTo} onChange={(date) => handleDateChange(date,"to")}/>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default Selector