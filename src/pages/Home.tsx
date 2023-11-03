import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Flex } from '@chakra-ui/react';

import { db } from '../firebase';
import QuestionForm from '../components/QuestionForm';

const Home: React.FC = () => {
  const [cards, setCards] = useState<Record<string, string>[]>([]);
  const fetchPost = async () => {
    await getDocs(collection(db, 'cards')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCards(newData);
    });
  };

  console.log(cards);

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Flex>
      <Flex
        justify="center"
        pl={[10, 40]}
        pr={[10, 20]}
        h="100vh"
        overflow="clip"
        w="100%"
        pt={10}
      >
        <QuestionForm />
      </Flex>
    </Flex>
  );
};

export default Home;
