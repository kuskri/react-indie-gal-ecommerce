import React from 'react';
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';
import Form from './Form'
import image from './img/photo1.jpg'

function Body () {

    return(
    <Box bgImage={`url(${image})`} bgPos="center" bgRepeat="no-repeat" w="100%" height={790} lineHeight="taller">
        <Flex  justifyContent="center" flexDir={["column","column","column", "row"]} alignItems="center">
            <Box marginLeft={[null, null, null, "10rem"]} marginTop={["2rem", "4rem", "6rem", "10rem"]} width={["21rem", "23rem", "27rem"]} >
                <Box  color="whiteAlpha.900" w={["20rem","22rem","25rem"]}>
                    <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold">WELCOME TO INDIE GAL</Text>
                    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="semibold">Your favorite INDIE BRANDS just a click away from you</Text>
                    <Text fontSize={["md", "lg", "xl"]}>Add these hidden gems to your collection and make it the most special ever</Text>                    
                </Box>
            </Box>
            <Spacer />
            {/* importing the form component */}
            <Form />
        </Flex>
    </Box>

    );
}

export default Body;