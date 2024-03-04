import React from 'react'
import { useSelector } from 'react-redux';

import Header from './Header.js'
import Footer from './Footer.js'
import { Box } from '@chakra-ui/react'

export default function BookingHistory() {
  const searchHistory = useSelector(state => state.searchBar.searchHistory);
  return (
    <>
      <Header />
      <Box bg='lightblue' w='100%' h='50vh' overflow='auto' display='flex' flexDirection='column' alignItems='center' >
        <div>
          <h2>Search History</h2>
          <ul>
            {searchHistory.map((search, index) => (
              <li key={index}>{`${search.from} to ${search.to}`}</li>
            ))}
          </ul>
        </div>
      </Box>
      <Footer />
    </>
  )
}
