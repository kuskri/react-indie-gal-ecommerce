import React from 'react';
import { Box, Flex, Spacer, Text, IconButton } from '@chakra-ui/react';
import {Instagram, Tiktok, Youtube} from '@styled-icons/simple-icons';
import { Link} from "react-router-dom";

function Footer() {

    return(
        <Box textAlign="left">
            <Flex flexWrap="wrap" minHeight={350} justifyContent="center" flexDir={["column", "column","column", "row"]} alignItems="left">
                <Box p="4" ml={[null, null, "2rem", "3rem", "4rem"]} maxWidth={360}>
                    <Text lineHeight="taller" fontWeight="bold" fontSize="lg" mt="1rem">High-performance makeup</Text>
                    <Text fontSize="md" mt="0.5rem">Indie beauty brands are innovative rule breakers that aren’t afraid to be different.</Text>
                    <Text fontSize="md" mt="0.5rem"> From pressed glitters to duo chromes and multi chromes, these are just a few of the trends that indie beauty brands helped to catapult to the mainstream beauty market.</Text>
                    <Text fontSize="md" mt="0.5rem">And if it wasn’t obvious, indie beauty brands are often owned and operated by badass, risk-taking and rule-breaking founders.</Text>
                </Box>
                <Spacer />
                <Flex  flexDir={["column", "row", "row"]} >
                    <Box  p="4"  w={120} ml={[null, null, "2rem", "3rem", "4rem"]}>
                        <Text lineHeight="taller" fontSize="md" mt="1rem">
                            <Text fontWeight="semibold" >Info</Text>
                            <Text mt="1rem">{" "}<Link to="/about-us">About us</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/our-ethics">Our Ethics</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/blog">Blog</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/press">Press</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/jobs">Jobs</Link></Text>
                        </Text>
                    </Box>
                    <Box p="4"  w={170}>
                        <Text lineHeight="taller" fontSize="md" mt="1rem">
                            <Text fontWeight="semibold">Help</Text>
                            <Text mt="1rem">{" "}<Link to="/order-status">Where's my order?</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/shipping">Shipping</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/return-policy">Return Policy</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/faq">FAQ</Link></Text>
                            <Text mt="1rem">{" "}<Link to="/contact-us">Contact us</Link></Text>
                        </Text>
                    </Box>
                    <Box p="4" w={110} mr={[null, null, "2rem", "3rem", "4rem"]}>
                        <Text lineHeight="taller" fontWeight="semibold" fontSize="md" mt="1rem" mb="0.8rem">Follow us</Text>
                        <IconButton
                            mr={1}
                            size="xs"
                            color="blackAlpha"
                            aria-label="Search database"
                            bgColor="white"
                            icon={<Instagram />}/>
                        <IconButton
                            m={1}
                            size="xs"
                            color="blackAlpha"
                            aria-label="User"
                            bgColor="white"
                            icon={<Tiktok />}
                        />
                        <IconButton
                            m={1}
                            size="xs"
                            color="blackAlpha"
                            aria-label="Cart"
                            bgColor="white"
                            icon={<Youtube />}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}
export default Footer;