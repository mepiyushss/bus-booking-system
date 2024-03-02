import React from "react";

// import { ChakraProvider } from "@chakra-ui/react";
// import { Grid, GridItem } from "@chakra-ui/react";
import { Flex,  Box } from '@chakra-ui/react'


import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
import SearchBar from "./SearchBar.js";
import BusList from "./DisplayBusList.js";
import SideNavbar from "./SideNavbar.js";

export default function MiniDashboard() {

  return (
    <>
      <Header />
      <SearchBar />
      <Box  w='100%' h='100vh'>
        <Flex>
          <Box  w='20%'>
            <SideNavbar />
          </Box>
          <Box  w='80%'>
            <BusList />
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>


    // <ChakraProvider>
    //   <Grid
    //     templateAreas={`"header header header"
    //     "main  main main"
    //     "nav  menu menu"
    //     "footer footer footer"`}
    //     h="100vh" 
    //     w="100vw" 
    //   >
    //     <GridItem area={"header"}>
    //       <Header />
    //     </GridItem>

    //     <GridItem area={"main"}>
    //       <SearchBar />
    //     </GridItem>

    //     <GridItem area={"nav"}>
    //       <SideNavbar />
    //     </GridItem>

    //     <GridItem area={"menu"}>
    //       <BusList />
    //     </GridItem>

    //     <GridItem area={"footer"}>
    //       <Footer />
    //     </GridItem>
    //   </Grid>
    // </ChakraProvider>
  );
}
