import React from "react"
import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"

function Brand(props) {
  const { products, onAdd } = props
  let { brand } = useParams()

  //the new array has objs with a brandProducts key that match the brand param
  const brandProducts = products.filter(
    (x) => x.productBrand.toLowerCase() === brand
  )

  //capitalizing the first letter of the brand param
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Box width="96%" m={10}>
      <Box m={20}>
        <Heading m={10}>{capitalizeFirstLetter(brand)}</Heading>
        <Text fontSize="lg">{`All the products by ${capitalizeFirstLetter(
          brand
        )} in our catalogue`}</Text>
      </Box>
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
        marginY={20}
      >
        {brandProducts.map((product) => {
          return <Product product={product} onAdd={onAdd} />
        })}
      </Flex>
    </Box>
  )
}

export default Brand
