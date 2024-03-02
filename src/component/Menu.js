import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import React from 'react'
import conductor from '../assets/conductor.jpeg'

export default function Menu() {
    return (
        <div>
            <Box w="80%" h="100%">
                <Image src={conductor} alt='Dan Abramov' w="100%" h="100%" objectFit="cover" />
            </Box>
        </div>
    )
}
