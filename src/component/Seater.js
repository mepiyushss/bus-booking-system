import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import BookedSeat from '../assets/armchair-grey.png';
import NotBooked from '../assets/seat.png';
 
const Seater = ({ item }) => {
  const [isSelect, SetSelect] = useState(!item.available);
 
  // Media queries for responsive width and height
  const imageWidth = useBreakpointValue({
    base: '1.5rem',
    sm: '2rem',   // Mobile view
    md: '2.5rem', // iPad view
    lg: '3rem',   // Laptop view
  });
 
  const imageHeight = useBreakpointValue({
    base: '1.5rem',
    sm: '2rem',   // Mobile view
    md: '2.5rem', // iPad view
    lg: '3rem',   // Laptop view
  });
 
  // Additional styling for iPad view (3 columns)
  const containerFlexDirection = useBreakpointValue({
    base: 'column',
    sm: 'column', // Mobile view
    md: 'row',    // iPad view
    lg: 'row',    // Laptop view
  });
 
  return (
    <Box
      onClick={() => SetSelect(!isSelect)}
      cursor={item.available ? 'pointer' : 'not-allowed'}
      pointerEvents={item.available ? '' : 'none'}
      mb="4"
      display="flex"
      flexDirection={containerFlexDirection} // Apply the adjusted flex direction
      alignItems="center" // Center the content vertically
    >
      <Image
        src={isSelect ? BookedSeat : NotBooked}
        alt="Seater"
        width={imageWidth}
        height={imageHeight}
        style={{ transform: 'rotate(90deg)' }}
      />
      <Text
        ml="2" // Add some left margin for better spacing
        fontSize="xx-small"
        fontWeight="800"
        color="#C32629"
      >
        {item.number}
      </Text>
    </Box>
  );
};
 
export default Seater;
 