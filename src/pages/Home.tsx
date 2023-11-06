import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { Flex, useToast } from '@chakra-ui/react';

import { db } from '../firebase';
import QuestionForm from '../components/QuestionForm';
import { QuestionType } from '../interfaces';

const Home: React.FC = () => {
  const [, setCards] = useState<Record<string, string>[]>([]);
  const toast = useToast();

  const fetchPost = async () => {
    await getDocs(collection(db, 'cards')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCards(newData);
    });
  };

  const addCard = async (data: QuestionType) => {
    await addDoc(collection(db, 'cards'), data)
      .then((doc) => {
        if (doc.id) {
          toast({
            title: 'Card added successfully',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Card added failed',
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        }
      })
      .catch(() => {
        toast({
          title: 'Card added failed',
          description: 'Something went wrong',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  };

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
        <QuestionForm onSubmit={addCard} />
      </Flex>
    </Flex>
  );
};

export default Home;
