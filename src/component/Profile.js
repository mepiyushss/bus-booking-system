
import { Box, Heading, Text, Image, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'

export default function Profile() {
    const user = {
        userID: '12345',
        name: "xyz",
        age: 'X',
        email: "abc@gmail.com",
    }

    return (
        <>
            <Header />
            <Flex p={5} textAlign="center" justify="center" align="center" direction="column">
                <Heading>Account</Heading>
                <Box p={['2', '4', '6']} w={['90%', '70%', '50%']} border='1px solid gray' borderRadius='8' mt="4">
                    <Flex
                        bg='#C4DFDF'
                        borderRadius='full'
                        align="center"
                        direction={['column', 'column', 'row']}
                    >
                        <Image
                            borderRadius='full'
                            boxSize={['50px', '60px', '80px']}
                            src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            alt='Dan Abramov'
                        />
                        <Flex direction="column" ml={['0', '0', '4']} mt={['4', '4', '0']}>
                            <Text as='b' fontSize={['lg', 'xl', '2xl']}>Name : {user.name}</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        mt={['4', '6', '8']}
                        justify={['space-between', 'space-between', 'space-between']}
                        bg='#E3F4F4'
                        borderRadius='9'
                        alignItems={['center', 'center', 'flex-start']}
                        direction={['column', 'column', 'row']}
                    >
                        <Box mb={['4', '4', '0']} p='20'>

                            <Box display='flex'>
                                <Text as='b' justifyContent='start' display='flex' >User Id: </Text>
                                <Text justifyContent='start' display='flex' >{user.userID} </Text>
                            </Box>
                            <Box display='flex'>
                                <Text as='b' justifyContent='start' display='flex' >Email Id: </Text>
                                <Text justifyContent='start' display='flex' >{user.email} </Text>
                            </Box>
                            <Box display='flex'>
                                <Text as='b' justifyContent='start' display='flex' >Age:</Text>
                                <Text justifyContent='start' display='flex' >{user.age}</Text>
                            </Box>

                        </Box>
                        <Box mt={['4', '4', '0']} display={['block', 'block', 'block']}>
                            <Flex direction="column">
                                <Button m={['1', '2', '3']} bg='#84D2C5' fontWeight="800" mb="2">Booked Ticket</Button>
                                <Button m={['1', '2', '3']} bg='#84D2C5' fontWeight="800" mb="2">Cancel Ticket</Button>
                                <Link to='/history'>
                                    <Button m={['1', '2', '3']} bg='#84D2C5' fontWeight="800">Booking History</Button>
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>



                </Box>
            </Flex>
        </>
    )
}
