import React from 'react';
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';

function Shopping() {

    return(
        <Box minH={300} pt={10}>
            <Flex minH={250} flexWrap="wrap" justifyContent="center" alignItems="center">

                    <Box flex="1" bgImage="url('./img/single-eyeshadow.jpg')" paddingY="3.2rem">
                        <Flex alignItems="center" justifyContent="center">
                            <Box verticalAlign="center" justifySelf="center">
                                <Text fontSize="xl" color="white" fontWeight="semibold">Add a rainbow on your lids</Text>
                                <Link to={`/category/eyeshadows`} style={{color: 'white'}}><Button m={5}>SHOP SINGLE SHADOWS</Button></Link>
                            </Box>
                        </Flex> 
                    </Box>

                    <Box flex="1" bgImage="url('./img/lipsticks.jpg')" paddingY="3.2rem">
                        <Flex alignItems="center" justifyContent="center">
                            <Box verticalAlign="center" justifySelf="center">
                                <Text fontWeight="semibold" fontSize="xl" color="white">Lipstick spotlight</Text>
                                <Link to="/category/lipsticks" style={{color: 'white'}}><Button m={5}>SHOP LIP PRODUCTS</Button></Link>
                            </Box>
                        </Flex>
                    </Box>

                    <Box flex="1" bgImage="url('./img/highlight.jpg')" paddingY={["2rem", "2.5rem", "3.2rem"]}>
                        <Flex alignItems="center" justifyContent="center">
                            <Box verticalAlign="center" justifySelf="center">
                                <Text fontWeight="semibold" fontSize="xl" color="white">Time to shine</Text>
                                <Link to="/category/highlighters" style={{color: 'white'}} ><Button m={5}>SHOP HIGHLIGHTERS</Button></Link>
                            </Box>
                        </Flex>
                    </Box>

            </Flex>
        </Box>
        
    );
}
export default Shopping;