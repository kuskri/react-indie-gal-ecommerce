import React, {useState, useMemo} from 'react';
import { Box, Text, Flex, Button, Image, Icon } from '@chakra-ui/react';
import { RiShoppingCartLine} from 'react-icons/ri';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';


//TO CHECK WHY PROBS WITH IMG IF RENDERED THROUGH SearchFeature

function ProductPage (props) {
    const {products, onAdd} = props;
    let { id } = useParams();



    //finding the product from praducts array whose id matched the id from param
    const product = useMemo(()=>products.find((x) => x._id === id),[id]);

    
    
    const [selectedImg, setSelectedImg] = useState();
    
    const productImg = useMemo(()=>{
        return selectedImg || product.images[0]
    },[id, selectedImg]);

    if(!product) {
        return <Text m={20}>Product Not Found</Text>
    }
    return(
        <Box lineHeight="taller" m={5} width="100%" >
            <Flex  alignItems="start" justifyContent="center" marginY="5rem" flexDir={["column","column", "row"]}>
                <Box  width={["20rem", "26rem", "30rem"]} minHeight="30rem">
                    <Image boxSize={["17rem", "19rem", "22rem"]} src={`/${productImg}`} m={5}></Image>
                    <Flex flexWrap='wrap' w={["17rem", "19rem", "23rem"]} m={5} justifyContent='items' alignItems='center'>
                        {/* creating the photo gallery. displaying the pics in the array and onClick setting the selectedImg as the first one */}
                        {product.images.map((image, index)=>(
                            <Image  boxSize="5rem" m="0.25rem" key={index} src={`/${image}`}
                            onClick={() => setSelectedImg(image)}
                            borderStyle="solid"
                            borderWidth="thin"
                            borderColor={selectedImg === image ? "black" : ""}
                            ></Image>
                        ))}
                    </Flex>
                </Box>

                <Box textAlign="left" maxWidth="40rem" m={5} p={5} fontSize="md">
                    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="semibold" marginBottom={5}>{product.productName}</Text>
                    <Text fontSize={["md", "lg", "xl"]} fontWeight="semibold" marginBottom={5}><Link to={`/brand/${product.productBrand.toLowerCase()}`}>{product.productBrand}</Link></Text>
                    <Text fontSize={["lg", "xl", "2xl"]} fontWeight="bold" marginBottom={5}>{`${product.price.toFixed(2)}€`}</Text>
                    <Button p={5} marginY={5} onClick={() => onAdd(product)}><Icon as={RiShoppingCartLine} marginRight={5} />ADD TO CART</Button>
                    <Text fontSize={["md", "lg", "xl"]} fontWeight="semibold" marginBottom={5}>DESCRIPTION</Text>
                    <Text marginBottom={5}>{product.description}</Text>
                    <Text marginY={10} fontSize="sm">{product.ingredients}</Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default ProductPage;