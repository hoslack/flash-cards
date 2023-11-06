import React from 'react';

import { Flex, Box } from '@chakra-ui/react';
import Cards from '../components/PDFs/Cards';
import fetchCards from '../services/supabase';
import { QuestionType } from '../interfaces';

const PrintCards: React.FC = () => {
  const [cards, setCards] = React.useState<QuestionType[]>([]);

  React.useEffect(() => {
    const fetchCardsFromSupabase = async () => {
      const cards = await fetchCards('cards');
      setCards(cards as QuestionType[]);
    };
    fetchCardsFromSupabase();
  }, []);

  return (
    <div>
      <Flex pl="40" pr="20" h="100vh" overflow="clip">
        <Box w="80%" h="100%">
          <h1>Cards</h1>
        </Box>
        <Box w="100%" h="100%">
          <Cards cards={cards} />
        </Box>
      </Flex>
    </div>
  );
};

export default PrintCards;
