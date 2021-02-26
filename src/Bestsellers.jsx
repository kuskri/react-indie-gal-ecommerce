import { Box, Text, Button, Flex as ChakraFlex, } from "@chakra-ui/react"
import React from 'react';
import {Link} from 'react-router-dom';
import BestsellersComponent from './BestsellersComponent'

const bestellerProducts=[
        {
            _id: '5',
            images: [
                "./img/amethyst-brush-set.jpg",
            ],
            productName: 'Amthyst',
            productBrand: 'Nabla Cosmetics',
            price: 30,
            description: 'Brush set for a detailed brush work in your most incticated eye looks.',
            ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
        {
            _id: '7',
            images: [
                "./img/lipstick-lust.jpg",
            ],
            productName: 'Lust Lipstick',
            productBrand: 'Nabla Cosmetics',
            price: 15,
            description: 'Lipstick',
            ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
        {
            _id: '6',
            images: [
                "./img/Regal_360x.jpg",
            ],
            productName: 'Regal Single Shadow',
            productBrand: 'Clionadh',
            price: 17,
            description: 'Multichrome. Stunning eyeshadow for you amazing purple looks.',
            ingredients: 'Ingredients: +/- Titanium Dioxide, +/- Mica, +/- Synthetic Fluorohlogopite, Dimethicone, +/- Silicon dioxide, +/- Tin Dioxide, Caprylic/ Capric Triglyceride, Isopropyl Myristate, +/-Silica, +/- Iron Oxide, +/- Kaolin Clay, +/- Magnesium Stearate, +/-Ferric Oxide, +/- Calcium Sodium Borosilicate, +/- Ferric Ferrocyanide, +/- Bismuth Oxychloride, +/- Zinc Stearate, +/- Calcium Carbonate, +/- Silica, +/- Boron Nitride, +/- Allantoin, +/- Copernicia Cerifera (Carnauba) Wax, +/- Red 40, +/- Blue 1, +/- Yellow #5, +/- Aluminum Oxide, +/- Ultramarines.'
        },
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
            _id: '8',
            images: [
                "./img/lipgloss.jpg",
            ],
            productName: 'Hypnotize Lipgloss',
            productBrand: 'Kaleidos Makeup',
            price: 16,
            description: 'Lipgloss.',
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
    ];


function Bestsellers() {


    return(

        <Box maxHeight={570}>
            <ChakraFlex flexDirection={["column", "column", "row", "row", "row"]} alignItems="center" justifyContent="center">
                <Box flex="0.4" p={5}>
                    <Text lineHeight="taller" fontWeight="bold" fontSize={["2xl", "3xl","4xl"]}>Bestsellers</Text>
                    <Text lineHeight="taller">Here they are, your all-time favorites</Text>
                    <Link to="/products" style={{color: 'white'}}><Button m={2}>SHOP BESTSELLERS</Button></Link>
                </Box>

                <ChakraFlex flex="1" minChildWidth="300px" spacing="2rem" p={5} maxWidth="100%" className="scrolly" id="style-2" flexWrap="nowrap">
                    {bestellerProducts.map((product) => {
                        return <BestsellersComponent key={product._id} product={product} />})}
                </ChakraFlex>
            </ChakraFlex>
        </Box>
    );
}

export default Bestsellers;