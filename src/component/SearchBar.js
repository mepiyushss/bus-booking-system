import { VStack, Stack, Text, Select, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { setFrom, setTo, setDate, setAC } from '../store/reducers/actions.js';
import { useDispatch } from 'react-redux'; // Importing useDispatch
import busData from './bus-data.json';
import { useNavigate } from 'react-router-dom';

function SearchBar({ from, to, date, AC, setFrom, setTo, setDate, setAC }) {
  const today = new Date().toISOString().split("T")[0];
  const [buses, setBuses] = useState(busData.buses);
  const dispatch = useDispatch(); // Using useDispatch hook
  const navigate = useNavigate(); 

  useEffect(() => {
    if (AC === "AC") {
      setBuses(busData.buses.filter((bus) => bus.isAC));
    } else if (AC === "NonAC") {
      setBuses(busData.buses.filter((bus) => !bus.isAC)); 
    } else {
      setBuses(busData.buses);
    }
  }, [AC]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(from, to, date);
    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDate(date));
    dispatch(setAC(AC));
    navigate("/miniDasboard");
    // Assuming you're using React Router to handle navigation
    // Replace Link component with programmatic navigation here if needed
  };

  return (
    <VStack w={"full"} h={"full"} justify={"center"}  bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
      <form onSubmit={handleSubmit}>
        <Stack maxW={"3xl"} align={"flex-start"} spacing={8}>
          <Text color={"white"} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
           
          </Text>
          <Stack direction={"row"}>
            <Select onChange={(e) => dispatch(setFrom(e.target.value))} value={from} required variant="filled" _focus={{ bg: "white" }} size="lg" placeholder="From">
              {buses.reduce((allStops, bus) => {
                bus.stops.forEach((stop) => {
                  if (!allStops.includes(stop.stopName)) {
                    allStops.push(stop.stopName);
                  }
                });
                return allStops;
              }, []).map((stopName) => (
                <option key={stopName} value={stopName}>
                  {stopName}
                </option>
              ))}
            </Select>
            <Select onChange={(e) => dispatch(setTo(e.target.value))} value={to} required variant="filled" _focus={{ bg: "white" }} size="lg" placeholder="To">
              {buses.reduce((allStops, bus) => {
                bus.stops.forEach((stop) => {
                  if (!allStops.includes(stop.stopName)) {
                    allStops.push(stop.stopName);
                  }
                });
                return allStops;
              }, []).map((stopName) => (
                <option key={stopName} value={stopName}>
                  {stopName}
                </option>
              ))}
            </Select>
            <Input type="date" min={today} value={date}variant="filled" _focus={{ bg: "white" }} size="lg" onChange={(e) => dispatch(setDate(e.target.value))} />
            <Button bg={"blue.400"} rounded={"full"} color={"white"} type="submit" backgroundColor={"red"} _hover={{ bg: "red.500" }} w={"30rem"} size="lg">
              SEARCH BUSES
            </Button>
          </Stack>
        </Stack>
      </form>
    </VStack>
  );
}

const mapStateToProps = (state) => ({
  from: state.searchBar.from,
  to: state.searchBar.to,
  date: state.searchBar.date,
  AC: state.searchBar.AC,
});

const mapDispatchToProps = (dispatch) => ({
  setFrom: (from) => dispatch(setFrom(from)),
  setTo: (to) => dispatch(setTo(to)),
  setDate: (date) => dispatch(setDate(date)),
  setAC: (AC) => dispatch(setAC(AC)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
