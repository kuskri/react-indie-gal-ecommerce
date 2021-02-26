import React from 'react';
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import {Box, Tabs, Tab, TabList, TabPanel, TabPanels, Heading, Flex, Image} from '@chakra-ui/react';

function MyAccount() {
    return (
        <Box m={5}>
            <Heading fontSize={['xl','2xl','2xl']} fontWeight='semibold' >My Account</Heading>
            <Flex m={5} flexDir='column' maxWidth='400px' p={3} boxShadow='sm' rounded='lg' alignItems='center' justifyContent='center' mx='auto'>
                <Image src='./img/logo_black.png' maxBlockSize='5rem' m={6} />
                <Tabs variant='enclosed-colored' isFitted p={4} >
                    <TabList isFitted>
                        <Tab _focus={{ boxShadow: ""}} _selected={{border: '1px'}}>Login</Tab>
                        <Tab  _focus={{ boxShadow: ""}} _selected={{border: '1px'}}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><LogInForm /></TabPanel>
                        <TabPanel><SignUpForm /></TabPanel>
                    </TabPanels>   
                </Tabs>
            </Flex>
        </Box>
    );
}

export default MyAccount;
