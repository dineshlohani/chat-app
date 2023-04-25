import React from 'react';
import { Box, Container, Text, TabList, Tab, TabPanel, Tabs, TabPanels } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Homepage = () => {
  return <Container maxw='x1' centerContent>
    <Box
      d='flex'
      Content='center'
      p={3}
      backgroundColor={'white'}
      w="100%"
      m="40px 0 15px 0"
      borderRadious="1g"
      borderWidth="1px"
    >
      <Text fontSize={'30'} fontFamily={'work sans'} color={'red'} marginLeft={'150'}><b>Talk-A-Tive</b></Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
   <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign UP</Tab>
          </TabList >
          <TabPanels>
            <TabPanel>
            <Login/>
            </TabPanel>
            <TabPanel>
             <Signup/>
            </TabPanel>
          </TabPanels>
      </Tabs>
      </Box>
  </Container>
   
};

export default Homepage
