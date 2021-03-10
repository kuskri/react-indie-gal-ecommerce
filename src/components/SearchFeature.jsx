import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Input, Box, Text, Flex, Image, useDisclosure } from "@chakra-ui/react"
import { data } from "../DATA"

//TO CHECK onClose

function SearchFeature(props) {
  const { reset, searchModalOnClose } = props

  const { products } = data
  const { onClose } = useDisclosure()

  const [searchTerm, setSearchTerm] = useState("")
  const [isReset, setIsReset] = useState(reset)
  //handling the input change
  const onChangeSearch = (event) => {
    setSearchTerm(event.currentTarget.value)
  }

  useEffect(() => {
    if (isReset || reset) {
      console.log("sono dentro")
      setSearchTerm("")
      setIsReset(false)
    }
    console.log("sono fuori ", searchTerm, isReset)
  }, [reset])

  return (
    <Box>
      {/* getting back the products that include the searched input by filtering first by name,brand, or cat. */}
      <Input
        value={searchTerm}
        onChange={onChangeSearch}
        placeholder="Search product"
      ></Input>
      {products
        .filter((product) => {
          if (searchTerm === "" || isReset) {
            return ""
          } else if (
            product.productName
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return product
          } else if (
            product.productBrand
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return product
          } else if (
            product.category
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return product
          }
        })
        .map((product, key) => {
          return (
            <Box>
              <Link
                to={`/products/${product._id}`}
                onClick={searchModalOnClose}
              >
                <Flex p={2} key={key} onClick={onClose}>
                  <Image src={`/${product.images[0]}`} boxSize="40px"></Image>
                  <Text p={2} fontSize="sm" key={products._id}>
                    {product.productName}
                  </Text>
                </Flex>
              </Link>
            </Box>
          )
        })}
    </Box>
  )
}

export default SearchFeature
