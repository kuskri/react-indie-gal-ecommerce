import React, {useState} from 'react';
import {Stack, Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Flex, FormHelperText, Spacer} from '@chakra-ui/react';

function Form() {

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    //handles the sign in
    const handeSignIn = (e) => {
        e.preventDefault();
        console.log('name: ', firstName);
        console.log('surname: ', surname);
        console.log('email address: ', emailAddress);
        console.log('password: ', password)
        console.log('I was submitted');
    };

    return(
        <Box maxWidth={400} maxHeight={380} marginRight={[null, null, null, "10rem"]} alignSelf="center" >
            <form method="POST" onSubmit={handeSignIn}  >
                <Stack width={["21rem", "23rem", "27rem"]} p="6" boxShadow="lg" minHeight={300}  marginTop={["2rem", "4rem", "6rem", "10rem"]} bg="whitesmoke" opacity={0.8} >
                    <Flex flexWrap="wrap"> 
                        <FormControl maxWidth={150} >
                            <FormLabel htmlFor="name"> First Name </FormLabel>
                            <FormHelperText>Enter your First Name.</FormHelperText>
                            <Input 
                                focusBorderColor="teal.300"
                                isRequired 
                                type="name"
                                id="name" 
                                aria-describedby="name-helper-text"
                                value={firstName}
                                // handles input change
                                onChange={({target}) => setFirstName(target.value)}
                                />
                        </FormControl>
                        <Spacer />
                        <FormControl maxWidth={150}>
                            <FormLabel htmlFor="name"> Last Name </FormLabel>
                            <FormHelperText>Enter your Last Name.</FormHelperText>
                            <Input 
                                isRequired
                                focusBorderColor="teal.300" 
                                type="surname"
                                id="surname" 
                                aria-describedby="surname-helper-text"
                                value={surname}
                                // handles input change
                                onChange={({target}) => setSurname(target.value)}
                                />
                        </FormControl>
                    </Flex>
                    <FormControl>
                        <FormLabel htmlFor="email"> Email Address </FormLabel>
                        <FormHelperText>Enter your Email to keep up with us.</FormHelperText>
                        <Input 
                            isRequired 
                            focusBorderColor="teal.300"
                            type="email"
                            id="email" 
                            aria-describedby="email-helper-text"
                            value={emailAddress}
                            // handles input change
                            onChange={({target}) => setEmailAddress(target.value)}
                            />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormHelperText>The Password you will use to sign in with.</FormHelperText>
                        <InputGroup>
                            <Input 
                                isRequired 
                                focusBorderColor="teal.300"
                                // dependent by the showPasswrod state
                                type={showPassword ? 'text' : 'password'} 
                                aria-describedby="password-helper-text"
                                value={password}
                                // handles input change
                                onChange={({target}) => setPassword(target.value)}
                                autoComplete="off"
                                />
                            <InputRightElement>
                                <Button
                                    marginRight={3}
                                    paddingRight={3}
                                    height="1.5rem"
                                    size="sm"
                                    fontSize="0.65rem"
                                    bgColor="gray.600"
                                    //setting showPassword to the contrary of the prev state
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {/* if showPassword false we render Hide, if true we render Show*/}
                                    {showPassword ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <Button type="submit">Sign Up</Button>
                    </FormControl>
                </Stack>
            </form>
        </Box>
    );
}

export default Form;