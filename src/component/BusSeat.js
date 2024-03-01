import { Box, Flex, Grid, GridItem, Text, Image, Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Sleeper from "./Sleeper.js";
import Seater from "./Seater.js";
import Stear from "../assets/steering.png";
import buses from "../assets/data.js";
import { Link } from "react-router-dom";




const BusSeat = () => {
  const buttonSize = useBreakpointValue({ base: "xl", md: "l" });

  return (
    <Box bg="#F8F8F8" h="100%" p={4}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={3} ml="10px">
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text fontSize="medium" color="black" fontWeight="600">
            Click on seat to select/deselect
          </Text>
        </GridItem>

      </Grid>


      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Box bg="#FFFFFF" mt="50px" ml="50px" borderRadius="10px" p="10px">
            <Flex>
              <Box>
                <Flex>
                  <Text fontWeight="bold" transform="rotate(-90deg)" mt="200px">
                    UPPER
                  </Text>
                </Flex>
              </Box>
              <Box display="flex" flexWrap="wrap" w="100%">

                <Grid w="100%" templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }} gap={3} >
                  {buses[0].seats.sleeper.map((item, ind) => {
                    return (
                      <GridItem key={ind}>
                        <Sleeper item={item} />
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
            </Flex>
          </Box>

          <Box bg="#FFFFFF" mt="10px" ml="50px" borderRadius="10px" p="10px">
            <Flex>
              <Box>
                <Flex flexDirection="column">
                  <Image src={Stear} width="50px" height="50px" />
                  <Text fontWeight="bold" mt="80px" transform="rotate(-90deg)">
                    LOWER
                  </Text>
                </Flex>
              </Box>
              <Box w="100%">
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}>
                  {buses[0].seats.seater.map((item, ind) => {
                    return (
                      <GridItem key={ind}>
                        <Seater item={item} />
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <Box>
          <Link to="/passenger">

            <Button mt="500px" ml="50px" w="200px" color="#FEFEFE" background="#DC635B" _hover={{ background: '#541715' }}>
              Continue
            </Button>
          </Link>
        </Box>
        <GridItem>

        </GridItem>
      </Grid>
    </Box>
  );
};

export default BusSeat;
