import React from 'react';
import {Flex, Box, Text, Heading} from '@chakra-ui/react';
import Product from './Product'

//PAGE WHERE WE DISPLAY ALL THE PRODUCTS ON THE CATALOGUE

function ProductsList(props) {
    const {products, onAdd}=props

    return (
            <Box width="96%" m={10} >
                <Box m={20}>
                    <Heading m={10}>Products</Heading>
                    <Text fontSize="lg">Our choise of the best products only for you</Text>
                </Box>
                <Flex flexWrap='wrap' alignItems='center' justifyContent="start" marginY={20}>
                    {products.map((product) => {
                        return <Product key={product._id} product={product} onAdd={onAdd} />})}
                </Flex>
            </Box>
    )
}

export default ProductsList
