/* eslint-disable no-unused-vars */
import Head from "next/head"
import Navbar from "../navbar.js"
import { Box, Container } from "@chakra-ui/react"
import VoxelWell from "../voxel-well.js"
import NoSsr from "../no-ssr"

const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initail-scale=1"/>
                <title>Tosa - Homepage</title>
            </Head>
            
            <Navbar path={router.asPath}/>
            
            <Container maxW="container.md" pt={14}>
            {/* <NoSsr>
                <VoxelWell/>
            </NoSsr> */}
                {children}
            </Container>
        </Box>
    )
}

export default Main