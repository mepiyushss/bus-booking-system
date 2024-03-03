import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Checkbox, } from '@chakra-ui/react'

const SideNavbar = () => {
  return (
    <Box h="100vh" backgroundColor={"#f8f4f4"}>
      <Flex direction="column" >
        <Box h="50%" p={4} >
          <Text fontWeight="bold" mb={2}>DEPARTURE TIME</Text>
          <Flex  direction='column' borderWidth="1px" borderColor='black'p='4'>
            <Checkbox size='lg' colorScheme='green' ml='1rem'>Before 6 am </Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'> 6 am to 12 pm</Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'> 12 pm to 6 pm</Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'>After 6 pm </Checkbox>
          </Flex>
        </Box>
        
        <Box h="50%" p={4}>
          <Text fontWeight="bold" mb={2}>BUS TYPES</Text>
          <Flex direction="column" borderWidth="1px" borderColor='black' p='4'>
            <Checkbox size='lg' colorScheme='green'ml='1rem'>AC </Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'> Non AC</Checkbox>
          </Flex>
        </Box>
        <Box h="50%" p={4} >
          <Text fontWeight="bold" mb={2}>ARRIVAL TIME</Text>
          <Flex  direction='column' borderWidth="1px" borderColor='black'p='4' >
            <Checkbox size='lg' colorScheme='green' ml='1rem'>Before 6 am </Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'> 6 am to 12 pm</Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'> 12 pm to 6 pm</Checkbox>
            <Checkbox size='lg' colorScheme='green'ml='1rem'>After 6 pm </Checkbox>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

// const Checkbox = ({ label }) => {
//   return (
//     <Flex alignItems="center" mb={2}>
//       <Input type="checkbox" w='1px' h='40px' mr={2}  colorScheme='red'/>
//       <Text>{label}</Text>
//     </Flex>
//   );
// };

export default SideNavbar;
