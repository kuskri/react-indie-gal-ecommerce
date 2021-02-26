import React from 'react'
import {Box, Image, Text, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

//GETTING PROPS FROM ProductsList

function Product(props) {
    const {product, onAdd}= props;


    return (
        <Box key={product._id}>
            <Box m={3} border="1px" borderColor='gray.300' w='17rem' minH='17rem' justifyContent='center' alignItems='center' textAlign='center' boxShadow="lg" p="3" rounded="lg">
                <Link to={`/products/${product._id}`}>
                    <Box>
                        <Image src={`/${product.images[0]}`} ></Image>
                <Text fontWeight='semibold'>{product.productBrand}</Text>
                <Text>{product.productName}</Text>
                <Text fontSize='lg' fontWeight='semibold'>{`${product.price.toFixed(2)}€`}</Text>
                    </Box>
                </Link>
                <Button colorScheme='pink' onClick={() => onAdd(product)} m={2}>ADD TO CART</Button>
            </Box>
        </Box>
    )
}

export default Product
