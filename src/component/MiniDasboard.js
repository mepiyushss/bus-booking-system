import React from "react";

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
  );
}
