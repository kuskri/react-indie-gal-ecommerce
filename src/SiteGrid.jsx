import { Box, Text, SimpleGrid,} from "@chakra-ui/react"
import React from 'react';
import SiteGridComponent from './SiteGridComponent'

const reStockedProducts = [
        {_id: '1',
        images: [
                "./img/Jewelled-Bundle_360x.jpg",
                "./img/Jewelled-Bundle_1.jpg",
                "./img/Jewelled-Bundle_2.jpg",
                "./img/Jewelled-Bundle_3.jpg",
                "./img/Jewelled-Bundle_4.jpg",
                "./img/Jewelled-Bundle_5.jpg",
            ],
        productName: 'Jewelled Multichrome Bundle',
        productBrand: 'Clionadh',
        price: 380,
        description: `Includes: 20 Multichromes. This is a single eyeshadow bundle and does not come with a palette. Gothic: Shifts violet-pink-red-orange-gold. (Good for: Face, Eyes, Lips)
        Smoulder: Shifts magenta-orange-gold-lime. (Good for: Face, Eyes, Lips)
        Kiln: Shifts red-orange-gold. (Good for: Face, Eyes, Lips)
        Sand Blast: Shifts orange-gold-lime. (Good for: Face, Eyes, Lips)
        Forge: Shifts rose-orange-gold-lime-teal. (Good for: Face, Eyes, Lips)
        Weld: Shifts grungy rose pink-antique gold-lime-teal-navy. (Good for: Face, Eyes, Lips)`,
        ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
        {
            _id: '2',
            images: [
                "./img/lethal-cosmetics-gel-liner.jpg",
            ],
            productName: 'Gel Liner',
            productBrand: 'Lethal Cosmetics',
            price: 18,
            description: 'Creamy Gel eyeliner in a beautiful neon green colour. you can use it to funk up any look',
            ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
        {
            _id: '3',
            images: [
                "./img/secret-palette.jpg",
            ],
            productName: 'Secret Palette',
            productBrand: 'Nabla Cosmetics',
            price: 40,
            description: 'Includes: 20 Multichromes. This is a single eyeshadow bundle and does not come with a palette.',
            ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
        {
            _id: '4',
            images: [
                "./img/Undiscovered.jpg",
            ],
            productName: 'Undiscovered Bundle',
            productBrand: 'Clionadh',
            price: 150,
            description: 'Includes: 20 Multichromes. This is a single eyeshadow bundle and does not come with a palette.',
            ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
    ]

function SiteGrid() {

    return(
        <Box>
            <Text fontSize="xx-large" fontWeight="semibold" marginY={10}>Recently restocked</Text>
            <Text fontSize="large">These products recently made a comeback</Text>
            <SimpleGrid minChildWidth={270} spacing="2rem" p={5} justifyItems="center">
                {reStockedProducts.map((product) => {
                        return <SiteGridComponent key={product._id} product={product} />})}
            </SimpleGrid>
        </Box>
    );
}

export default SiteGrid;