import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'4'}>
            <Input
              placeholder="Enter E-mail here "
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              colorScheme="yellow"
              p={'0'}
              borderRadius={'0 20px 20px 0'}
              variant={'ghost'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
           Course Bundler 📚
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="yellow">
            <a href="https://www.linkedin.com/in/aditya-mishra-335288246/" target={'blank'}>
              Linkedin
            </a>
          </Button>
          <Button variant={'link'} colorScheme="yellow">
            <a href="https://www.instagram.com/adi_mishra_111/?hl=en" target={'blank'}>
              Instagram
            </a>
          </Button>{' '}
          <Button variant={'link'} colorScheme="yellow">
            <a href="https://github.com/AdiMishra2348" target={'blank'}>
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;