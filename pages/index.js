import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mt={3}
        mb={6}
        align="center"
      >
        Hi, I&apos;m Tosa a full-stack dev from Cambodia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tosa Vireak
          </Heading>
          <p>Digital craftman ( Developer / Artist / Designer ) </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/tosa.jpg"
            alt="Portfile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title" >
          Work
        </Heading>
        <Paragraph>
          Tosa is a freelancer and fullstack developer based in Phnom Penh with
          passion building digital work he wants. Currently he is working on {' '}
          <NextLink href="/works/nothing">
            <Link>Nothing</Link>
          </NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://github.com/yomantosa">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My portfolio</Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019:</BioYear>
          <br/>
          Graduated from Hun sen Bunrany Wat Phnom High School.
        </BioSection>
        <BioSection>
          <BioYear>
            2019 to 2023:
          </BioYear>
          <br/>
          Studied Computer Science at Royal University of Phnom Penh (RUPP).
        </BioSection>
        <BioSection>
          <BioYear>
            2022 to September 2023:
          </BioYear>
          <br/>
          Experienced in freelance.
        </BioSection>
        <BioSection>
          <BioYear>
            September 2023 to August 2024:
          </BioYear>
          <br/>
          Experienced as a full time Software Developer at CMED Construction.
        </BioSection>
        <BioSection>
          <BioYear>
            September 2024 to Present:
          </BioYear>
          <br/>
          Currently Studying Master of Computer Science (MCS) at Charles University in Czech Republic.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I love
        </Heading>
        <Paragraph>
          Art, Coding, Music, {' '}
          <Link href='https://hirokita.itch.io/'>
          Making Game
          </Link>
          , Machine Learning and Technologies
        </Paragraph>
      </Section>

    </Container>
    </Layout>
  )
}

export default Page
