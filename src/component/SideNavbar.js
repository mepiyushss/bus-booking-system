import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";

const SideNavbar = () => {
  return (
    <Box h="100vh" backgroundColor={"#f8f4f4"}>
      <Flex direction="column" h="100%">
        <Box  h="50%" p={4}>
          <Text fontWeight="bold" mb={2}>DEPARTURE TIME</Text>
          <Flex direction="column">
            <Checkbox label="Morning" />
            <Checkbox size='sm' colorScheme='red'>
    Checkbox
  </Checkbox>
            <Checkbox label="Afternoon" />
            <Checkbox label="Evening" />
            <Checkbox label="Night" />
          </Flex>
        </Box>
        <Box bg="lightcyan" h="50%" p={4}>
          <Text fontWeight="bold" mb={2}>BUS TYPES</Text>
          <Flex direction="column">
            <Checkbox label="AC" />
            <Checkbox label="Non-AC" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

const Checkbox = ({ label }) => {
  return (
    <Flex alignItems="center" mb={2}>
      <Input type="checkbox" size="sm" mr={2} />
      <Text>{label}</Text>
    </Flex>
  );
};

export default SideNavbar;
