import { FormControl, FormLabel } from '@chakra-ui/react'
import { Input, Flex, Box, Radio, Button } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'


export default function PassengersDetail() {

    return (
        <Flex >
            <Box bg="rgba(255, 255, 255, 0.8)" p={8} filter='auto' blur='0px' borderRadius="md" boxShadow="lg"
            >
                <FormControl isRequired>
                    <FormLabel>Passenger name</FormLabel>
                    <Input type='text' placeholder='Passenger name' />

                    <Flex pt={4}>
                        <Box pr={4}>
                            <FormLabel>Gender</FormLabel>
                            <Radio pr={2} value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Box >
                        <Box >
                            <FormLabel>Age</FormLabel>
                            <Input type='number' placeholder='Age' />
                        </Box >
                    </Flex>
                    <FormLabel>Residence</FormLabel>
                    <Input type='text' placeholder='Residence' />

                    <Box bg="rgba(255, 255, 255, 0.8)" pt={10} pb={2} borderRadius="md"
                    >
                        <FormLabel>Contact Details</FormLabel>
                    </Box>


                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='email' />
                    <FormLabel pt={2}>Number</FormLabel>
                    <Input type='number' placeholder='Number' />

                    <Box pt={5}>Total Amount </Box>

                    <Link to="/payment">
                        <Flex justifyContent="flex-end">
                            <Box p={4} pr={0}>
                                <Button id='rzp-button1' colorScheme='teal' variant='outline'>
                                    Proceed To Pay
                                </Button>
                            </Box>
                        </Flex>
                    </Link>
                </FormControl>
            </Box>
        </Flex>
    )
}

