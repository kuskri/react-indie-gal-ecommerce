import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

function OurEthics () {

    return(
        <Box lineHeight="taller">
            <Flex  justifyContent="center" flexDir={["column",null, "row"]} alignItems="flex-start">
                <Box width="100%" maxWidth="60rem" textAlign="left" p={5}>
                    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="semibold" marginY={5}>Our Ethics</Text>
                    <Text fontSize={["md", "lg", "xl"]} marginBottom={5}>Makeup should make us feel beautiful and it should be made beautifully, too. For us, this means we don’t want our products to cause harm to anyone. Not to the people involved in making them, not to animals or our planet and most certainly not to you, our customer.</Text>                    
                    <Flex flexDir={["column", null, "row"]} alignItems="center" justifyContent="center">
                        <Text fontSize={["md", "lg", "xl"]} fontWeight="semibold" m={5}  alignSelf="start">ANIMAL-FRIENDLY</Text>
                        <Box maxWidth="40rem" marginX={5}>
                            <Text fontSize={["md", "lg", "lg"]} marginY={5}>Our entire product line is cruelty-free and vegan and we wouldn’t have it any other way. That means no gross animal-by-products in our makeup and no animal testing conducted either. Not by us, not on our behalf and also not on our raw materials. We exclusively test our makeup on people and they usually end up looking fabulous. We’re a PETA-certified vegan and cruelty-free brand and in 2017, we received their prestigious progress award, naming us their “most animal friendly new cosmetic brand”.</Text>
                            <Button size="md" p={5} marginY={5}>LEARN MORE</Button>
                        </Box>
                    </Flex>
                    <Flex flexDir={["column", null, "row"]} alignItems="center" justifyContent="center">
                        <Text fontSize={["md", "lg", "xl"]} fontWeight="semibold" m={5} alignSelf="start">PEOPLE-FRIENDLY</Text>
                        <Box maxWidth="40rem" marginX={5}>
                            <Text fontSize={["md", "lg", "lg"]} marginY={5}>Our entire product line is cruelty-free and vegan and we wouldn’t have it any other way. That means no gross animal-by-products in our makeup and no animal testing conducted either. Not by us, not on our behalf and also not on our raw materials. We exclusively test our makeup on people and they usually end up looking fabulous. We’re a PETA-certified vegan and cruelty-free brand and in 2017, we received their prestigious progress award, naming us their “most animal friendly new cosmetic brand”.</Text>
                            <Button size="md" p={5} marginY={5}>LEARN MORE</Button>
                        </Box>
                    </Flex>
                    <Flex flexDir={["column", null, "row"]}alignItems="center" justifyContent="center">
                        <Text fontSize={["md", "lg", "xl"]} fontWeight="semibold" m={5} alignSelf="start">PLANET-FRIENDLY</Text>
                        <Box maxWidth="40rem" marginX={5}>
                            <Text fontSize={["md", "lg", "lg"]} marginY={5}>Our entire product line is cruelty-free and vegan and we wouldn’t have it any other way. That means no gross animal-by-products in our makeup and no animal testing conducted either. Not by us, not on our behalf and also not on our raw materials. We exclusively test our makeup on people and they usually end up looking fabulous. We’re a PETA-certified vegan and cruelty-free brand and in 2017, we received their prestigious progress award, naming us their “most animal friendly new cosmetic brand”.</Text>
                            <Button size="md" p={5} marginY={5}>LEARN MORE</Button>
                        </Box>
                    </Flex>
                    <Flex flexDir={["column", null, "row"]} alignItems="center" justifyContent="center">
                        <Text fontSize={["md", "lg", "xl"]} fontWeight="semibold" m={5} marginRight="3.6rem" alignSelf="start">CLEAN & SAFE</Text>
                        <Box maxWidth="40rem" marginX={5}>
                            <Text fontSize={["md", "lg", "lg"]} marginY={5}>Our entire product line is cruelty-free and vegan and we wouldn’t have it any other way. That means no gross animal-by-products in our makeup and no animal testing conducted either. Not by us, not on our behalf and also not on our raw materials. We exclusively test our makeup on people and they usually end up looking fabulous. We’re a PETA-certified vegan and cruelty-free brand and in 2017, we received their prestigious progress award, naming us their “most animal friendly new cosmetic brand”.</Text>
                            <Button size="md" p={5} marginY={5}>LEARN MORE</Button>
                        </Box>
                    </Flex>
                    
                </Box>
            </Flex>
        </Box>
    );
}

export default OurEthics;