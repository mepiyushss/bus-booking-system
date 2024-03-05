import React from 'react'
import { useSelector } from 'react-redux';

import { Box, Heading } from '@chakra-ui/react'

import Header from './Header.js'
import Footer from './Footer.js'

export default function BookingHistory() {
  const searchHistory = useSelector(state => state.searchBar.searchHistory);
  return (
    <>
      <Header />
      <Box bg='#F2F1EB' w='100%' h='50vh' overflow='auto' display='flex' flexDirection='column' alignItems='center' >
        <Box p='4'>
          <Heading fontFamily="" as="h1">Search History</Heading>
        </Box>
        <Box bg='burlywood' borderRadius='4' p='2'>
            {searchHistory.map((search, index) => (
              <Box >{`${index+1}. ${search.from}  TO  ${search.to}`}</Box>
            ))}
        </Box>
      </Box>
      <Footer />
    </>
  )
}
