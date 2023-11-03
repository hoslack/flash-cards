import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Cards from '../PDFs/Cards';

const PrintCards: React.FC = () => {
  return (
    <div>
      Hello
      <Flex pl="40" pr="20" h="100vh" overflow="clip">
        <Box w="80%" h="100%">
          <h1>Hello</h1>
        </Box>
        <Box w="100%" h="100%">
          <Cards />
        </Box>
      </Flex>
    </div>
  );
};

export default PrintCards;
