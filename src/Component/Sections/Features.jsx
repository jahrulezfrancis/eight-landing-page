import { Box, VStack, Text, Heading, HStack, Image, Flex, useMediaQuery } from "@chakra-ui/react"
import One from "../Images/two-pers-blue.png"
import RedGroup from "../Images/three-persr-ed.png"
import Forum from "../Images/message.png"
import AnonIcon from "../Images/Icon(3).png"
import ListImage from "../Images/feed.png"
import Article from "../Images/article.png"


function FeaturesTemp(props) {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box w={mobileDevice ? '20em' : '30em'} h='8em' boxShadow='14px 22px 52px -12px rgba(127, 127, 127, 0.13)'>
            <HStack w="100%">
                <Image src={props.image} alt='community image' />
                <VStack align='start'>
                    <Heading color='#2F2C4A' fontSize='1.3em'>{props.heading}</Heading>
                    <Text color='#656464' fontWeight='500' fontSize='.9em'>{props.text1} <br /> {props.text2} <br /> {props.text3} </Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export function Features() {
    const [mobileDevice] = useMediaQuery('(max-width: 1000px)')
    return (
        <Box mt='10em' w='100%'>
            <VStack justify='center' gap='2em'>
                <VStack gap='1em'>
                    <Text color='#217BF4' fontSize='1.2em' fontWeight='500'>Our Community</Text>
                    <Heading color='#2F2C4A' fontSize='2.2em' textAlign={mobileDevice ? 'center' : 'left'}>Community Main Feature</Heading>
                    <Text textAlign='center' color='#656464' fontWeight='500' fontSize='.9em'>
                        The wise man therefore always holds in these matters <br />
                        to this principle of selection.
                    </Text>
                </VStack>
                <Flex flexWrap='wrap' p='2em' justify='space-around' rowGap={mobileDevice ? '2em' : '5em'}>
                    <FeaturesTemp image={One} heading='Members, Friends' text1='Members, Friends Connection ( like' text2='followers ), Private Message' />
                    <FeaturesTemp image={RedGroup} heading='Group' text1='Your users can create groups to let other' text2='users to join and talk' />
                    <FeaturesTemp image={Forum} heading='Forum' text1='Forum is ready by BBPress. Your users' text2='can make topics and talk.' />
                    <FeaturesTemp image={AnonIcon} heading='Custom Module' text1='You can create Members, Groups' text2='Module. We already created 3 modules.' text3='It is by drag & drop live builder.' />
                    <FeaturesTemp image={ListImage} heading='List Builder' text1='Members, Groups list can be modified by' text2='drag & drop live builder.' />
                    <FeaturesTemp image={Article} heading='List Scroll Effects' text1='You can always change by your tastes.' text2='8 different scroll effects are ready.' />
                </Flex>
            </VStack>
        </Box>
    )
}