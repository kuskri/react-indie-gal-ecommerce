import React, {useEffect, useState} from 'react'
import {Text} from '@chakra-ui/react'

const textArray = ['Free international shipping with orders 85€ and up', 'Sign up for our newsletter, get 10% off your first order', 'Tracked international shipping for a low € 7.99'];

function CTAHooks () {
    const [textIdx, setTextIdx] = useState(0);

    //augments the textIdx array by 1 every 3 secs
    useEffect(() => {
        const intervalID = setTimeout(() =>  {
            setTextIdx((textIdx) => (textIdx + 1))
        }, 3000);
        return () => clearInterval(intervalID);
    }, [textIdx]);

    return(
        
        <Text h={[7,9,10]} m="auto" 
        textAlign="center" 
        bgColor="white" 
        fontSize={["xs","sm","md"]} 
        p={2}>
            {textArray[textIdx % textArray.length]}
        </Text>
    
    )
}

export default CTAHooks;
