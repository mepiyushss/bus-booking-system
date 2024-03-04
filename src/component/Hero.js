import React from "react";

import { Flex } from "@chakra-ui/react";

import backgroundImage from "../assets/Hero.jpeg";
import SearchBar from "./SearchBar.js";

export default function Hero() {
 

  return (
    <Flex
      w={"full"}
      h={"92vh"}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
    <SearchBar />
    </Flex>
  );
}


