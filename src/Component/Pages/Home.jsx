import { Box } from "@chakra-ui/react";
import { HeaderSec } from "../Header/HeaderSection";
import { NavigatonBar } from "../Header/Navigation";
import { Features } from "../Sections/Features";
import { AboutNetboks, AchieveMents } from "../Sections/Home";

export default function HomePage() {
    return (
        <Box>
            <NavigatonBar />
            <HeaderSec />
            <AboutNetboks />
            <AchieveMents />
            <Features />
        </Box>

    )
}