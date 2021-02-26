import React, {useState, useEffect} from 'react';
import {Box, Text, Heading, Button, Image, Flex, Spacer, Table, Thead, Tbody, Tfoot, Tr, Th, Td, } from '@chakra-ui/react';
import { DeleteIcon} from '@chakra-ui/icons'
import { Link} from "react-router-dom";

function ShoppingCart(props) {
    const {cartItems, onAdd, onRemove, onDelete}=props;

    
    const [isDesktop, setDesktop] = useState(window.innerWidth);

    const updateMedia = () => {
        setDesktop(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    const itemsPrice = cartItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.qty, 0);
    //if the itemsPrice is over 85 than the shipping is free, if not is 7.99
    const shippingPrice = itemsPrice > 85 ? 0 : 7.99;
    const totalPrice = itemsPrice + shippingPrice;

    return (
            <Box>
            <Flex marginX={10} marginTop={20}>
                <Heading fontSize={['xl','2xl','2xl']} fontWeight='semibold' marginLeft={[null,'1rem','3.5rem']} >Shopping Cart</Heading>
                <Spacer />
                <Button bgColor='black' color='whiteAlpha.900' paddingY='1rem' w='8.5rem' fontSize={['xs','sm','sm']}>CHECKOUT</Button>
            </Flex>
            
            <Table size="xs" align='center' w='90%' marginTop={[5,10,20]} >
                {cartItems.length > 0 && (
                <Thead >
                    <Tr>
                    <Th>PRODUCT</Th>
                    <Th > </Th>
                    
                    <Th isNumeric>QUANTITY</Th>
                    
                    {isDesktop > 650 && (<Th isNumeric>UNIT PRICE</Th>)}
                    
                    {isDesktop > 550 && (<Th isNumeric>SUB TOTAL</Th>)}
                    <Th> </Th>
                    </Tr>
                </Thead>)}
                <Tbody>
                    {cartItems.map((item) => (
                <Tr key={item._id} >                    
                            <Td width={['4rem', 55, 70]} height='6rem' >
                                <Link to={`/products/${item._id}`}><Image src={item.images[0]} boxSize={['4rem', 55, 70]}></Image></Link>
                            </Td>
                            <Td>
                                <Text p={2} ><Link to={`/products/${item._id}`}>{item.productName}</Link></Text>
                                <Text p={2} fontWeight='semibold' ><Link to={`/brand/${item.productBrand.toLowerCase()}`}>{item.productBrand}</Link></Text>
                            </Td>

                            <Td isNumeric>
                                <Flex justifyContent='flex-end' >
                                    <Button  size='sm'  p={2} variant="outline" onClick={() => onRemove(item)}>-</Button>
                                    <Text p={2}textAlign='center' boxSize={["1.5rem", "2rem", "2.7rem"]}>{item.qty}</Text>
                                    <Button  size='sm' variant="outline" onClick={() => onAdd(item)}>+</Button>
                                </Flex>
                            </Td>


                            {isDesktop > 650 && (<Td isNumeric><Text m='auto' textAlign='right' p={[1,2,3]}>{item.price.toFixed(2)} €</Text></Td>)}
                            {isDesktop > 550 && (<Td isNumeric><Text m='auto' textAlign='right' p={3} >{(item.qty*item.price).toFixed(2)} €</Text></Td>)}
                            <Td isNumeric><Button m='auto' size='sm' p={2} variant="outline" onClick={() => onDelete(item)}><DeleteIcon /></Button></Td>
                </Tr>
                
            ))}
                </Tbody>
                {cartItems.length > 0 && (
                <Tfoot>
                    <Tr>
                    <Th>PRODUCT</Th>
                    <Th > </Th>
                    <Th isNumeric>QUANTITY</Th>
                    {isDesktop > 650 &&  (<Th isNumeric>UNIT PRICE</Th>)}
                    {isDesktop > 550 && (<Th isNumeric>SUB TOTAL</Th>)}
                    <Th></Th>
                    </Tr>
                </Tfoot>)}
                </Table>


        <Box>
                        
            <Box >
                {cartItems.length === 0 && <Text m={10} fontSize='xl'>The cart is empty</Text>}
            </Box>

            {/* if we have products in the cart than we render the code bellow */}
            {cartItems !== 0 && (
                <Box>
                    <Flex justifyContent={['center', 'flex-end','flex-end']} m='3.5rem'>
                        <Table variant="simple" width='sm'>
                            <Tbody fontSize='lg'>
                                <Tr>
                                <Td >Subtotal</Td>
                                <Td isNumeric>{itemsPrice.toFixed(2)} €</Td>
                                </Tr>
                                {/* we display the shipping price and total only if we have items in the cart */}
                                {(cartItems.length > 0) ?
                                (<>
                                <Tr>
                                    <Td> Shipping Price </Td>
                                    <Td isNumeric> {shippingPrice.toFixed(2)} € </Td>
                                </Tr>
                                <Tr>
                                    <Td> Total </Td>
                                    <Td isNumeric>{totalPrice.toFixed(2)} €</Td>
                                </Tr>
                                </>)
                                : (<Tr>
                                    <Td>Total</Td>
                                    <Td isNumeric>{0.00} €</Td>
                                </Tr>)}
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex m={20} justifyContent={['center', 'flex-end','flex-end']}>
                        <Button bgColor='black' color='whiteAlpha.900' paddingY='1rem' borderRadius='0rem' w='8.5rem' fontSize={['xs','sm','sm']}>CHECKOUT</Button>
                    </Flex>
                </Box>   
            )}

            <Flex m={20} justifyContent={['center', 'flex-start','flex-start']}>
                <Link to="/products"><Button colorScheme='black' variant="outline" paddingY='1rem' borderRadius='0rem' w='12rem' fontSize={['xs','sm','sm']}>CONTINUE SHOPPING</Button></Link>
            </Flex>
        </Box>
        </Box>
    );
}

export default ShoppingCart;