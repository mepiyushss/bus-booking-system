import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, Button, Flex } from "@chakra-ui/react";

import fetchBusDetails from "../model/fetchBusDetails.js";
import BusSeat from "./BusSeat.js";

export default function BusList() {
  const { from, to, AC } = useSelector((state) => state.searchBar);
  const [buses, setBuses] = useState([]);
  const [selectedBusIndex, setSelectedBusIndex] = useState(-1);
  console.log("selected Bus Index", selectedBusIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBusDetails();
        setBuses(data);
      } catch (error) {
        console.error("Error fetching bus details:", error);
      }
    };

    fetchData();
  }, []);

  const selectedStartPoint = from;
  const selectedStopPoint = to;

  const filteredBuses = buses.filter((bus) => {
    const hasValidFrom = bus.stops.some((stop) => stop.stopName === from);
    const hasValidTo = bus.stops.some((stop) => stop.stopName === to);
    const hasValidAC = AC === "" || bus.isAC === (AC === "AC");

    return hasValidFrom && hasValidTo && hasValidAC;
  });

  return (
    <div style={{ maxHeight: "1000px", overflowY: "auto" }}>
      <Flex
        flexDirection="column"
        bg="#f0f0f0"
        p="1rem"
        borderRadius="5px"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      >
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus, index) => (
            <Flex
              key={bus.busNumber}
              alignItems="center"
              wrap="wrap"
              gap="2"
              bg="white"
              p="1rem"
              m="0.5rem 0"
              borderRadius="5px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
              flexDirection="column"
            >
              <Box
                w="100%"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Flex flexDirection="column">
                  <Box>{bus.busName}</Box>
                  <Box>Bus Number: {bus.busNumber}</Box>
                </Flex>

                <Flex flexDirection="row">
                  {bus.stops.map((stop) => {
                    if (stop.stopName === selectedStartPoint) {
                      return (
                        <Box key={stop.stopName} paddingRight={"15px"}>
                          <Flex flexDirection="column" wrap="wrap">
                            <Box>Boarding: {stop.stopName}</Box>
                            <Box>Arrival Time: {stop.arrivalTime}</Box>
                          </Flex>
                        </Box>
                      );
                    } else {
                      return null;
                    }
                  })}
                  {bus.stops.map((stop) => {
                    if (stop.stopName === selectedStopPoint) {
                      return (
                        <Box key={stop.stopName}>
                          <Flex flexDirection="column" wrap="wrap">
                            <Box>Destination: {stop.stopName}</Box>
                            <Box>Arrival Time: {stop.arrivalTime}</Box>
                          </Flex>
                        </Box>
                      );
                    } else {
                      return null;
                    }
                  })}
                </Flex>

                <Box>AC: {bus.isAC ? "Yes" : "No"}</Box>
                <Box>
                  Available Seats:{" "}
                  {bus.seats.sleeper.filter((seat) => seat.available).length +
                    bus.seats.seater.filter((seat) => seat.available).length}
                </Box>

                <Box display="flex">
                  <Button
                    colorScheme="red"
                    onClick={() => setSelectedBusIndex(index)}
                  >
                    Book Seat
                  </Button>
                </Box>
              </Box>
              <Box overflowY="scroll">
                {selectedBusIndex === index && <BusSeat enable={true} />}
              </Box>
            </Flex>
          ))
        ) : (
          <div>No buses available</div>
        )}
      </Flex>
    </div>
  );
}
