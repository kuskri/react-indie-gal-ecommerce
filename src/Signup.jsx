import React, {useState} from 'react';
import { useDisclosure, Box, Flex, Text, Button, FormControl, FormLabel, Input, Spacer, Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';

function Signup() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //chakraUI hook
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handeSignIn = (e) => {
        e.preventDefault();
        console.log("i was submitted")
    };

    return(
        <Box p={5} bgGradient="linear(to-r, green.200, pink.500, purple.500, blue.600, green.500)">
            <Flex flexWrap="wrap" justifyContent="center" alignItems="center" flexDir={["column",  null, "row"]}>
                <Text fontSize="xl" fontWeight="bold" margin="auto">Sign up for our newsletter, get 10% off your first order</Text>
                <Spacer maxWidth="30%"/>
                <Button margin="auto" onClick={onOpen}>SIGN UP</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                        <ModalContent borderRadius='0rem'>
                        <ModalHeader>Sign Up</ModalHeader>
                        <ModalCloseButton _focus= {{boxShadow: ""}} />
                        <ModalBody>
                            <ModalBody pb={6}>
                                <form method="POST" onSubmit={handeSignIn}>
                                    <FormControl>
                                        <FormLabel htmlFor="name">First name</FormLabel>
                                        {/* setting first name using the input value */}
                                        <Input isRequired placeholder="First name" type="name" value={firstName} onChange={({target}) => setFirstName(target.value)} />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>Last name</FormLabel>
                                        {/* setting last name using the input value */}
                                        <Input isRequired placeholder="Last name" type="name" value={lastName} onChange={({target}) => setLastName(target.value)} />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel htmlFor="email"> Email Address </FormLabel>
                                        {/* setting email using the input value */}
                                        <Input  placeholder="E-mail" isRequired focusBorderColor="teal.300" type="email" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel htmlFor="password"> Password </FormLabel>
                                        {/* setting password using the input value */}
                                        <Input  placeholder="Password" isRequired focusBorderColor="teal.300" type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
                                    </FormControl>
                                </form>
                            </ModalBody>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" colorScheme="pink" mr={3}>Sign Up</Button>
                            <Button variant="ghost"  onClick={onClose}>Close</Button>
                        </ModalFooter>
                        </ModalContent>
                </Modal>
            </Flex>
        </Box>
    );
}
export default Signup;