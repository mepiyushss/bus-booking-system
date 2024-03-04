import React, { useState } from 'react';

import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import BookedSeat from '../assets/armchair-grey.png';
import NotBooked from '../assets/seat.png';
 
const Seater = ({ item }) => {
  const [isSelect, SetSelect] = useState(!item.available);
 
  
  const imageWidth = useBreakpointValue({
    base: '1.5rem',
    sm: '2rem',   
    md: '2.5rem', 
    lg: '3rem',   
  });
 
  const imageHeight = useBreakpointValue({
    base: '1.5rem',
    sm: '2rem',   
    md: '2.5rem', 
    lg: '3rem',   
  });
 
  
  const containerFlexDirection = useBreakpointValue({
    base: 'column',
    sm: 'column', 
    md: 'row',    
    lg: 'row',    
  });
 
  return (
    <Box
      onClick={() => SetSelect(!isSelect)}
      cursor={item.available ? 'pointer' : 'not-allowed'}
      pointerEvents={item.available ? '' : 'none'}
      mb="4"
      display="flex"
      flexDirection={containerFlexDirection} 
      alignItems="center" 
    >
      <Image
        src={isSelect ? BookedSeat : NotBooked}
        alt="Seater"
        width={imageWidth}
        height={imageHeight}
        style={{ transform: 'rotate(90deg)' }}
      />
      <Text
        ml="2" 
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
 