import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import selectedImg from "../assets/sleeper.png"
import unSelectedImg from "../assets/sleep.png"
 
const Sleeper = ({ item }) => {
  const [isSelect, SetSelect] = useState(!item.available);
 
  return (
    <Box
      onClick={() => SetSelect(!isSelect)}
      cursor={item.available ? "pointer" : "not-allowed"}
      pointerEvents={item.available ? "" : "none"}
      // style={{
      //   '@media only screen and (min-width: 768px)': {  
      //   },
      //   '@media only screen and (min-width: 481px) and (max-width: 767px)': {  
      //   },
      //   '@media only screen and (max-width: 480px)': {  
      //   },
      // }
    // }
    >
      <Image src={isSelect ? unSelectedImg : selectedImg} alt="Sleeper Image" width="5rem" h="3.5rem" />
      <Text
        textAlign="center"  
        mt="-1rem"  
        fontWeight="800"
        fontSize="xx-small"
        color="#C32629"
      >
        {item.number}
      </Text>
    </Box>
  );
}
 
export default Sleeper;