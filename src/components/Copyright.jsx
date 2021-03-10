import { Box, Text } from "@chakra-ui/react"
import React from 'react';

function Copyright() {

    return(
        <Box bg="#000" w="100%" p={4} color="white">
            <Text  color="gray.500" >Copyright ©IndieGal All rights reserved.</Text>
        </Box>
    );
}

export default Copyright;