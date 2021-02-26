import { Box, useDisclosure , FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading, Text, IconButton, Flex, Spacer, LinkBox, LinkOverlay,} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import React, {useState, useRef } from 'react';
import {RiUserLine, RiSearchLine, RiShoppingCartLine} from 'react-icons/ri';
import {Link} from "react-router-dom";
import SearchFeature from './SearchFeature'
import CTAHooks from './CTAHooks'

function Header(props) {
    // Create a ref that we add to the element for which we want to detect outside clicks

    const initialRef = useRef()
    const finalRef = useRef()
    

    const {countCartItems} = props;
    const { isOpen, onOpen,  onClose } = useDisclosure();
    const { onOpen : searchModalOnOpen, isOpen : searchModalIsOpen, onClose : searchModalOnClose} = useDisclosure();
    const [resetQuery, setResetQuery] = useState();

    

    return (
        <Box paddingY={["2rem","2.6rem","3.4rem","3.7rem", "4rem"]}>
            <Box zIndex={10} width="100%"  position="fixed" top="0">
                <CTAHooks />
                <Box  bg="black" w="100%" maxHeight="10rem"  color="white" fontSize="md" justifyContent="center">
                    <Flex verticalAlign="center" >

                        <>
                            <IconButton onClick={onOpen} zIndex={3} aria-label="Options" fontSize="3xl" icon={isOpen? <CloseIcon /> : <HamburgerIcon  />} size="3xl" minWidth="8%" colorScheme="black">
                            </IconButton>
                            {/* MODAL MENU */}
                            <Modal onClose={onClose} isOpen={isOpen} size='full' scrollBehavior='inside' >
                                <ModalOverlay top='8.1rem' />
                                <ModalContent borderRadius='0rem' maxHeight="25rem" top={['0.45rem','1.5rem','3rem','3.7rem','4.2rem']} zIndex={3}>
                                <ModalHeader>
                                </ModalHeader>
                                <ModalBody className='style-1'>
                                    <Box >
                                        <Flex   flexDir={["column", null, "row"]} alignItems="top" justifyContent="center" fontSize={["md","md","lg"]} lineHeight="taller" >
                                            <Box  p={["0.5rem","1rem","1.5rem"]}>
                                                <Text fontWeight="semibold" >Face</Text>
                                                <Text><Link to='/category/highlighters' onClick={onClose}>Highlighter</Link></Text>
                                                <Text><Link to='/category/blushes' onClick={onClose}>Blush</Link></Text>
                                                <Text><Link to='/category/bronzers' onClick={onClose}>Bronzer</Link></Text>
                                            </Box>
                                            <Box p={["0.5rem","1rem","1.5rem"]}>
                                                <Text fontWeight="semibold">Eyes</Text>
                                                <Text><Link to='/category/eyeshadows' onClick={onClose}>Single Eyeshadow</Link></Text>
                                                <Text><Link to='/category/eyeshadow bundles' onClick={onClose}>Eyeshadow Bundle</Link></Text>
                                                <Text><Link to='/category/eyeshadow palettes' onClick={onClose}>Eyeshadow Palette</Link></Text>
                                                <Text><Link to='/category/eyeliners' onClick={onClose}>Eye Liner</Link></Text>
                                                <Text><Link to='/category/mascara' onClick={onClose}>Mascara</Link></Text>
                                            </Box>
                                            <Box p={["0.5rem","1rem","1.5rem"]}>
                                                <Text fontWeight="semibold">Lips</Text>
                                                <Text><Link to='/category/lipsticks' onClick={onClose}>Lipstick</Link></Text>
                                                <Text><Link to='/category/lipglosses' onClick={onClose}>Lipgloss</Link></Text>
                                                <Text><Link to='/category/lipliners' onClick={onClose}>Lipliner</Link></Text>
                                            </Box>
                                            <Box p={["0.5rem","1rem","1.5rem"]}>
                                                <Text fontWeight="semibold">Accessories</Text>
                                                <Text><Link to='/category/empty palettes' onClick={onClose}>Empty Palettes</Link></Text>
                                                <Text><Link to='/category/tools' onClick={onClose}>Tools</Link></Text>
                                                <Text><Link to='/category/brushes' onClick={onClose}>Brushes</Link></Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </ModalBody>
                                
                                </ModalContent>
                            </Modal>
                        </>


                        <Spacer />

                        <LinkBox alignSelf="center" minWidth="30%" zIndex={3} >
                            <LinkOverlay as={Link } to="/" color="whiteAlpha.900"  onClick={onClose}>
                                <Heading letterSpacing={["0.1rem","0.8rem", "1rem", "1.5rem", "2rem"]} fontSize={["lg", "xl", "2xl", "3xl", "4xl"]} fontWeight="lighter" marginLeft={['0rem','5rem','9rem','9rem','9rem']} >INDIE GAL</Heading>
                            </LinkOverlay>
                        </LinkBox>  

                        <Spacer />

                        {/*SEARCH COMPONENT */}
                        <Flex flexDir='row' p={["0rem", "0.3rem", "0.4rem", "0.6rem", "0.8rem"]} fontSize={["md","lg","xl", "2xl", "3xl"]} alignSelf="center" >
                            <>
                            <IconButton
                                    onClick={searchModalOnOpen}
                                    fontSize="inherit"
                                    m={["0rem", "0rem", "0.5rem","0.6rem","0.7rem"]}
                                    p={0}
                                    colorScheme="whiteAlpha"
                                    aria-label="Search database"
                                    bgColor="black"
                                    icon={<RiSearchLine />} />

                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={searchModalIsOpen}
                                onClose={searchModalOnClose}
                                scrollBehavior='inside' 
                                size='full'
                            >
                                <ModalOverlay top='8.1rem' />
                                <ModalContent borderRadius='0rem' maxHeight="25rem" right='0rem' top={['0.45rem','1.5rem','3rem','3.7rem','4.2rem']} zIndex={3}>
                                <ModalHeader />
                                <ModalCloseButton _focus= {{boxShadow: ""}} />
                                <ModalBody pb={6} className='style-1'>

                                    <FormControl mt={4}>
                                        <FormLabel>Find products...</FormLabel>
                                        <SearchFeature reset={resetQuery} searchModalOnClose={searchModalOnClose} />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>
                            </>


                            <Link to='/my-account'> 
                                <IconButton
                                    fontSize="inherit"
                                    m={["0rem", "0rem", "0.5rem","0.6rem","0.7rem"]}
                                    colorScheme="whiteAlpha"
                                    aria-label="User"
                                    bgColor="black"
                                    icon={<RiUserLine />}/>
                            </Link>

                            <Link to='/shopping-cart'>
                                <IconButton
                                    fontSize="inherit"
                                    m={["0rem", "0rem", "0.5rem","0.6rem","0.7rem"]}
                                    colorScheme="whiteAlpha"
                                    aria-label="Cart"
                                    bgColor="black"
                                    icon={<RiShoppingCartLine />}/>
                            </Link>
                            {/* Diplaying the items in the cart if there are any */}
                            {countCartItems? (<Text fontSize={['xs','sm','sm']} m='auto' paddingRight={2}>{countCartItems}</Text>): ('')}
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;