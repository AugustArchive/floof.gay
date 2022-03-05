/*
 * 🍂 @noel/floof.gay: Source code for floof.gay, a personal site that tells more about my furry side.
 * Copyright (c) 2022 Noel
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Avatar, AvatarBadge, Box, Container, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noel 🌺 - Setup | Tech</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shows what Noel uses for his setup and his development environment. :)" />
        <meta name="theme-color" content="#FF69BD" />
        <meta
          property="og:description"
          content="Shows what Noel uses for his setup and his development environment. :)"
        />
        <meta property="og:title" content="Noel 🌺 - Setup | Tech" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floof.gay/tech" />
      </Head>

      <Container minHeight={{ base: '100vh', lg: '100vh' }} height={{ base: 'auto', lg: '100vh' }} width="100%">
        <Box h="10%" w="85%" pt={{ base: '4', lg: '0' }}>
          <Navbar />
        </Box>
      </Container>
    </>
  );
};

/*
  <Avatar>
    <AvatarBadge boxSize='1.25em' bg='green.500' />
  </Avatar>
*/

/*
        <Container as={Stack} maxW="7xl">
          <Image
            src="https://cdn.floofy.dev/images/August.png"
            width="250px"
            height="250px"
            draggable="false"
            rounded="full"
            alt="noel avatar by @SevernSamuel on twitter!"
          />

          <Text fontSize="4xl" fontFamily="Cantarell">
            Noel{' '}
            <Text as="span" fontSize="1.2rem">
              [he/him]
            </Text>
          </Text>

          <Text fontSize="2xl" fontFamily="Inter">
            {age} year old developer tinkering with code, and sometimes... it works! or maybe not? who knows!
          </Text>

          <Flex ml="-0.6em">
            <NavLink href="https://discord.com/users/280158289667555328">
              <FontAwesomeIcon icon={['fab', 'discord']} color="#5865F2" size="2x" />
            </NavLink>

            <NavLink href="https://twitter.com/auguuwu">
              <FontAwesomeIcon icon={['fab', 'twitter']} color="#1DA1F2" size="2x" />
            </NavLink>

            <NavLink href="https://t.me/auguwu">
              <FontAwesomeIcon icon={['fab', 'telegram']} color="#0088CC" size="2x" />
            </NavLink>

            <NavLink href="https://github.com/auguwu">
              <FontAwesomeIcon icon={['fab', 'github']} color={useColorModeValue('#333333', 'gray.400')} size="2x" />
            </NavLink>
          </Flex>
        </Container>
*/

export default Page;
