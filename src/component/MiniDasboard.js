import React from "react";
import SearchBar from "./SearchBar.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";

import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import BusList from "./DisplayBusList.js";
import SideNavbar from "./SideNavbar.js";

export default function MiniDashboard() {
    
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header"
        "nav  main main"
        "nav  menu menu"
        "footer footer footer"`}
        h="100vh" // Set the height of the grid to 100% of the viewport height
        w="100vw" // Set the width of the grid to 100% of the viewport width
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>

        <GridItem area={"main"}>
          <SearchBar />
        </GridItem>

        <GridItem area={"nav"}>
          <SideNavbar />
        </GridItem>

        <GridItem area={"menu"}>
          <BusList />
        </GridItem>

        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
