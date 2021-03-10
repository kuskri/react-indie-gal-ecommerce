import { Box, Text, Button, Flex } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import { bestellerProducts } from "../DATA"
//components
import BestesellersItem from "./BestesellersItem"

function Bestsellers() {
  return (
    <Box maxHeight={570}>
      <Flex
        flexDirection={["column", "column", "row", "row", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        <Box flex="0.4" p={5}>
          <Text
            lineHeight="taller"
            fontWeight="bold"
            fontSize={["2xl", "3xl", "4xl"]}
          >
            Bestsellers
          </Text>
          <Text lineHeight="taller">
            Here they are, your all-time favorites
          </Text>
          <Link to="/products" style={{ color: "white" }}>
            <Button m={2}>SHOP BESTSELLERS</Button>
          </Link>
        </Box>

        <Flex
          flex="1"
          minChildWidth="300px"
          spacing="2rem"
          p={5}
          overflowX="scroll"
          maxWidth="100%"
          flexWrap="nowrap"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#ffffff",
              border: "0px none #ffffff",
              borderRadius: "0px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "24px",
            },
          }}
        >
          {bestellerProducts.map((product) => {
            return <BestesellersItem key={product._id} product={product} />
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Bestsellers
