import React from 'react' 
import { Box, Flex, Text }  from '@chakra-ui/react'

const Cards = ({data}) => {
    return(
        <Box mt={15}>
        <Flex alignItems="end" justifyContent="space-between" borderRadius="10px" alignItems="flex-start">
            <Box width="100%" pr="10"> 
                <Box bg="white" borderRadius={5}>
                    <Flex alignItems="center" justifyContent="space-between" padding="25px">
                        <Box width="60%">
                            <Text fontWeight="500" color="#456990">
                                Month to Date Active Cases
                            </Text>
                            <Text fontWeight="200" color="#6E7A87">
                                {data["current_month"]}
                            </Text>
                        </Box>
                        <Box width="40%">
                            <Text fontWeight="bold" color="#213245" align="right">{data["mtd"]}</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box width="100%">
                <Box bg="white" borderRadius={5}>
                    <Flex alignItems="center" justifyContent="space-between" padding="25px">
                        <Box width="60%">
                            <Text fontWeight="500" color="#456990">
                                Last Month Active Cases
                            </Text>
                            <Text fontWeight="200" color="#6E7A87">
                                {data["previous_month"]}
                            </Text>
                        </Box>
                        <Box width="40%">
                            <Text fontWeight="bold" color="#213245" align="right">{data["previous_mtd"]}</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box width="100%" pl="10">
                <Box bg="white" borderRadius={5}>
                    <Flex alignItems="center" justifyContent="space-between" padding="25px">
                        <Box width="60%">
                            <Text fontWeight="500" color="#456990">Estimated Month End Cases</Text>
                            <Text fontWeight="200" color="#6E7A87">
                                {data["current_month"]}
                            </Text>
                        </Box>
                        <Box width="40%">
                            <Text fontWeight="bold" color="#213245" align="right">
                                {Math.ceil((data["mtd"] / data["no_days_current_month"]) * 30)}
                            </Text>

                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex> 
    </Box>
    )
}

export default Cards