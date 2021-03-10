import { Box, Text, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { reStockedProducts } from "../DATA"
//components
import RecentlyRestockedItem from "./RecentlyRestockedItem"

function RecentlyRestocked() {
  return (
    <Box>
      <Text fontSize="xx-large" fontWeight="semibold" marginY={10}>
        Recently restocked
      </Text>
      <Text fontSize="large">These products recently made a comeback</Text>
      <SimpleGrid
        minChildWidth={270}
        spacing="2rem"
        p={5}
        justifyItems="center"
      >
        {reStockedProducts.map((product) => {
          return <RecentlyRestockedItem key={product._id} product={product} />
        })}
      </SimpleGrid>
    </Box>
  )
}

export default RecentlyRestocked
