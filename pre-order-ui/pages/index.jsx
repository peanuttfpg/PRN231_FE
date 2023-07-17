import MainFooter from "../components/client/footer";
import SplitWithImage from "../components/client/landingPage/Home";
import { Box,
         ChakraProvider
} from "@chakra-ui/react";
import theme from "../theme/theme.jsx";
import AuthCheck from "../components/authentication/AuthCheck";
import Action from "../components/client/nav";

function Home(){
    return(
        <ChakraProvider theme={theme}>
            <Box>
                    <Action/>
                    <SplitWithImage />
                    <MainFooter/>
            </Box>
        </ChakraProvider>
    )
}

export default Home;
