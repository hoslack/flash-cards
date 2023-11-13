import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Textarea,
  Button,
  Box,
  Select,
  Center,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { QuestionType } from '../../interfaces';

const TopicsEnum = {
  GERMAN: 'German',
  SCIENCE: 'Science',
  MATH: 'Math',
  HISTORY: 'History',
  ART: 'Art',
  MUSIC: 'Music',
  REACT: 'React',
  DSA: 'DSA',
};

const schema = yup
  .object({
    topic: yup.string().required(),
    question: yup.string().required(),
    answer: yup.string().required(),
  })
  .required();

type QuestionFormProps = {
  onSubmit: (data: QuestionType) => void;
};
const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      topic: '',
      question: '',
      answer: '',
    },
  });

  return (
    <Box w={[300, 500, 700]} h="350px" minW={200} justifyContent="center">
      <Center>
        <Box
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          w={[300, 500, 700]}
          minW={300}
        >
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit="cover"
            alt="form banner"
          />
          <Box px={10} py={5}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={!!errors.topic}>
                <FormLabel fontWeight={700} htmlFor="topic">
                  Choose a topic:
                </FormLabel>
                <Select
                  id="topic"
                  placeholder="Select topic"
                  {...register('topic')}
                >
                  {Object.values(TopicsEnum).map((topic: any) => (
                    <option key={topic as React.Key} value={topic as any}>
                      {topic as any}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.topic && errors.topic.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors?.question}>
                <FormLabel fontWeight={700} htmlFor="question">
                  Question
                </FormLabel>
                <Textarea
                  maxLength={120}
                  id="question"
                  placeholder="Enter a question here"
                  {...register('question')}
                />
                <FormErrorMessage>
                  {errors?.question && errors?.question?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors?.answer}>
                <FormLabel fontWeight={700} htmlFor="answer">
                  Answer
                </FormLabel>
                <Textarea
                  maxLength={120}
                  id="answer"
                  placeholder="Add the answer here..."
                  {...register('answer')}
                />
                <FormErrorMessage>
                  {errors?.answer && errors?.answer?.message}
                </FormErrorMessage>
              </FormControl>

              <Button
                w={'full'}
                mt={8}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default QuestionForm;
