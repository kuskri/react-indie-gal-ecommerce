import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';

function AboutUs () {

    return(
        <Box lineHeight="taller">
            <Box bgGradient="linear(to-r, green.200, pink.500, purple.500, blue.600, green.500)" w="100%">
                <Box bgImg="url('./img/about-us.jpg')" bgRepeat="no-repeat" bgPos="right"  w="100%" height={295} opacity={0.6}></Box>
            </Box>
            <Flex  justifyContent="center" flexDir={["column",null, "row"]} alignItems="flex-start">
                <Box width="100%" maxWidth="60rem" textAlign="left" p={5}>
                    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="semibold" marginY={5}>Our Story</Text>
                    <Text fontSize={["md", "lg", "xl"]} marginBottom={5}>Hi there, we are Anna and Kai, husband and wife and proud brain-parents of Lethal Cosmetics. We founded the company in 2016 because we were struggling to find fun vegan and cruelty-free makeup in our home country of Germany. If you can’t buy it, we thought, why not make it ourselves? So we did. Anna knew exactly the kind of products she was missing and immediately went to town, formulating our first eyeshadows and liquid lipsticks, aided by a keen eye for color and her background in cosmetic science. In the meantime, Kai designed the packaging, built our first online store and served as test subject for our early prototypes.</Text>                    
                    <Text fontSize={["md", "lg", "xl"]} marginBottom={5}>When we finally launched in early 2017, we really didn’t know what to expect. But then we completely sold out in only a few hours and things just kept escalating from there. </Text>
                    <Text fontSize={["md", "lg", "xl"]} marginBottom={5}>Today, it’s no longer just the two of us in a tiny lab. We have an amazing team, a much bigger lab, almost 100 different products on sale and retailers around the world stocking our stuff. But some things haven’t changed: we’re still an ethical brand, we’re still making everything in house and we’re still having a blast doing it. From our signature pressed powder shadows to our liquid lipsticks, glosses and highlighters, we just get a kick out of bringing you unique, high-performance, ethical makeup at affordable prices. And we’re definitely not gonna stop now. So thank you for being along for the ride. We don’t know where this train is going, but it’s going to be colorful. </Text>
                    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="semibold" marginTop={20} marginBottom={2} >Our Ethics</Text>
                    <Text fontSize={["md", "lg", "xl"]} marginBottom={5}>To us, ethical makeup is more than a catchphrase. It’s at the core of everything we do. It defines how we formulate our products, how we design our packaging, how we source our raw materials, how we interact with you as a customer and how we give back. In fact, our ethics are so important to us, they cannot adequately be summed up in one paragraph (sorry). That’s why we’ve dedicated a whole bunch of pages to them. If you’re ready to get readin’, just push the button below. But don’t say we didn’t warn you.</Text>
                    <Button size="md" p={5} m={5}>LEARN MORE</Button>
                    <Text fontSize={["md", "lg", "xl"]} marginTop={20} marginBottom={5}> If you want to stay up-to-date with what we’re up to, don’t forget to sign-up for our newsletter below or follow us on Instagram. And if you’re really committed, why not do both?</Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default AboutUs;