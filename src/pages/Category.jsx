import React from "react"
import { Box, Flex, Text, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"

function Category(props) {
  const { products, onAdd } = props
  let { category } = useParams()

  //the new array has objs with a category key that match the category param
  const categoryProducts = products.filter((x) => x.category === category)

  //to capitalize the first letter of the category param
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Box width="96%" m={10}>
      <Box m={20}>
        <Heading m={10}>{capitalizeFirstLetter(category)}</Heading>
        <Text fontSize="lg">{`Our choise of the best ${category} only for you`}</Text>
      </Box>
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="start"
        marginY={20}
      >
        {categoryProducts.map((product) => {
          return <Product product={product} onAdd={onAdd} />
        })}
      </Flex>
    </Box>
  )
}

export default Category
