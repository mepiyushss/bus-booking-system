import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import PassengersDetail from "./component/PassengersDetail.js";
import Dashboard from "./component/Dashboard.js";
import SearchBar from "./component/SearchBar.js";
import DisplayBusList from "./component/DisplayBusList.js";
import BusSeat from "./component/BusSeat.js";
import Payment from "./component/Payment.js";
import SideNavbar from "./component/SideNavbar.js";
import MiniDasboard from "./component/MiniDasboard.js";
import store from './store/store.js';


function App() {
  return (
    <ChakraProvider>
       <Provider store={store}>
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Search" element={<SearchBar />} />
          <Route path="/Display-Bus" element={<DisplayBusList />} />
          <Route path="/Seat" element={<BusSeat />} /> 
          <Route path="/miniDasboard" element={<MiniDasboard />} />
          <Route path="/passenger" element={<PassengersDetail />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/sideNavbar" element={<SideNavbar/>} />
        </Routes>
      </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
