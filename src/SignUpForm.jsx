import React, { useState } from "react";
import {Box,FormHelperText, Input, Stack, InputLeftElement, InputGroup, Button, FormControl} from '@chakra-ui/react'
import { EmailIcon, LockIcon, InfoOutlineIcon } from '@chakra-ui/icons'

function SignUpForm() {

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handeSignIn = (e) => {
        e.preventDefault();
        console.log('I was submitted');
    };


    return (
        <Box>
            <form method="POST" onSubmit={handeSignIn}>
                <Stack spacing={3} >
                    <FormControl isRequired>
                        <InputGroup bg="white">
                            <InputLeftElement children={<InfoOutlineIcon />} />
                            {/* setting first name using the input value */}
                            <Input type='name' placeholder='First name' aria-label='First name' value={firstName} onChange={({target}) => setFirstName(target.value)} />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup bg="white">
                            <InputLeftElement children={<InfoOutlineIcon />} />
                            {/* setting last name using the input value */}
                            <Input type='name' placeholder='Last name' aria-label='Last name' value={lastName} onChange={({target}) => setLastName(target.value)}/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup bg="white">
                            <InputLeftElement children={<EmailIcon />} />
                            {/* setting email using the input value */}
                            <Input type='email' placeholder='E-mail' aria-label='E-mail' value={emailAddress} onChange={({target}) => setEmailAddress(target.value)} />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup bg="white">
                            <InputLeftElement children={<LockIcon />} />
                            {/* setting password using the input value */}
                            <Input type='password' placeholder='Password' aria-label='Password' value={password} onChange={({target}) => setPassword(target.value)} />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <Button type='submit'
                        _hover={{ boxShadow: 'md' }} _active={{ boxShadow: 'lg'}} 
                        bgColor='black' 
                        color='whiteAlpha.900' 
                        paddingY='1rem' 
                        borderRadius='0rem' 
                        w='8.5rem' 
                        fontSize={['xs','sm','sm']}
                        m={2}
                        >LOGIN</Button>
                        <FormHelperText textAlign='center'>
                            We will never share your email!
                            <br />
                            🤞
                        </FormHelperText>
                    </FormControl>
                </Stack>
            </form>
        </Box>
    )
}

export default SignUpForm
