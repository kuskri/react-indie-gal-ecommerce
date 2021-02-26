import React from 'react';
import {Box, Text, Heading, Button, Image, Flex, Spacer, Divider } from '@chakra-ui/react';
import { DeleteIcon} from '@chakra-ui/icons'
import { Link} from "react-router-dom";

//TO CHECK RESPONSIVENESS


function Cart(props) {
    const {cartItems, onAdd, onRemove, onDelete}=props;

    const itemsPrice = cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.qty, 0);
    //if the itemsPrice is over 85 than the shipping is free, if not is 7.99
    const shippingPrice = itemsPrice > 85 ? 0 : 7.99;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <Box>
            <Heading fontSize={['xl','2xl','3xl']} marginY={20}>SHOPPING CART</Heading>
            <Box  fontSize={['sm','md','lg']} fontWeight='semibold'>
                <Flex marginX={[2,10,20]}>
                    <Flex  flex='1' justifyContent="left" alignItems="left" marginLeft={2}><Text>PRODUCT</Text></Flex>
                    <Spacer />
                    <Flex><Text marginLeft={4}>QUANTITY</Text></Flex>
                    <Flex ><Text marginLeft={4}>UNIT PRICE</Text></Flex>
                    <Flex ><Text marginLeft={4} marginRight='3.9rem'>SUB-TOTAL</Text></Flex>
                </Flex>
            </Box>
            <Flex justifyContent="center" alignItems="center" >
                <Divider orientation="horizontal" marginY={5} w='95%' />
            </Flex>
            
            <Box >
                {cartItems.length === 0 && <Text m={10} fontSize='xl'>The cart is empty</Text>}
            </Box>
            {cartItems.map((item) => (
                <Flex key={item._id} marginX={[2,10,20]} flexDir="row">
                        <Flex flexDir={["column", "column", "row"]} flex='1' justifyContent="left" alignItems="left" minWidth='9rem'>                     
                            <Link to={`/products/${item._id}`}><Image src={item.images[0]} boxSize={[40, 55, 70]} m='auto'></Image></Link>
                            <Text m='auto' p={2} >{item.productName}</Text>
                            <Text m='auto' p={2} fontWeight='semibold' ><Link to={`/brand/${item.productBrand.toLowerCase()}`}>{item.productBrand}</Link></Text>
                            
                        </Flex >
                        <Spacer />
                        <Flex flexDirection='row'>
                            <Flex justifyContent="center" alignItems="left" maxWidth='30rem' w={['5rem', '7rem', '8rem']}>
                            <Button m='auto' size='sm' onClick={() => onAdd(item)}>+</Button>
                            <Text m='auto' p={[1, 2, 3]} boxSize={["1.5rem", "2rem", "2.7rem"]}>{item.qty}</Text>
                            <Button m='auto' size='sm'  p={2} onClick={() => onRemove(item)}>-</Button>
                        </Flex>
                        <Flex w={['5.4rem', '6rem', '8rem']}>  
                            <Text m='auto' textAlign='right' p={[1,2,3]}>{item.price.toFixed(2)} €</Text>
                        </Flex>
                        <Flex w={['5.4rem', '6rem', '8rem']}>
                            <Text m='auto' textAlign='right' p={3} >{(item.qty*item.price).toFixed(2)} €</Text>
                        </Flex>
                        
                        </Flex>
                    <Flex>
                            <Button m='auto' size='sm' p={2} onClick={() => onDelete(item)}><DeleteIcon /></Button>
                    </Flex>
                    <Box justifyContent="center" alignItems="center" >
                        <Divider orientation="horizontal" marginY={5} w='95%' />
                    </Box>
                </Flex>
                
            ))}

            {/* if we have products in the cart than we render the code bellow */}
            {cartItems !== 0 && (
                
                <Box m={20} fontSize='lg'>
                    <Box m={3}>
                        <Text>Subtotal</Text>
                        <Box>{itemsPrice.toFixed(2)} €</Box>
                    </Box>
                    {/* we display the shipping price and total only if we have items in the cart */}
                    {cartItems.length !== 0 && <Box m={3}>
                        <Text >Shipping Price</Text>
                        <Box>{shippingPrice.toFixed(2)} €</Box>
                    </Box>}
                    {cartItems.length !== 0 && <Box m={3} fontSize='xl' fontWeight='bold'>
                        <Text >Total</Text>
                        <Box>{totalPrice.toFixed(2)} €</Box>
                    </Box>}

                    {/* if we dont have items in the cart then the total will be 0 (to overwrite the shipping price we are adding to the total for a sum less than 85 ) */}
                    {cartItems.length === 0 && <Box m={3} fontSize='xl' fontWeight='bold'>
                        <Text >Total</Text>
                        <Box>{0.00} €</Box>
                    </Box>}
                    <Button colorScheme='pink' paddingX='4rem'>CHECKOUT</Button>
                </Box>
                
            )}

            <Flex m={20} alignItems='right' justifyContent='right'>
                <Spacer />
                <Button alignSelf='right' bgColor='pink.400'><Link to="/products" style={{color: 'white'}} >CONTINUE SHOPPING</Link></Button>
            </Flex>
        </Box>
    );
}

export default Cart;