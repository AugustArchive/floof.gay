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

import { Avatar, AvatarBadge, Box, Center, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import Navbar, { NavLink } from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import { useLanyard } from 'use-lanyard';
import { DateTime } from 'luxon';
import Head from 'next/head';

const Page: NextPage = () => {
  const birthday = DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = DateTime.now();
  const age = Math.floor(now.diff(birthday, ['years']).years);
  const discord = useLanyard('280158289667555328');

  // this happens on the server
  if (!discord.data) return null;

  let statusColor: string;
  switch (discord.data?.discord_status) {
    case 'online':
      statusColor = 'green.400';
      break;

    case 'idle':
      statusColor = 'yellow.300';
      break;

    case 'dnd':
      statusColor = 'red.600';
      break;

    case 'offline':
    case 'invisible':
    default:
      statusColor = 'gray.600';
      break;
  }

  return (
    <>
      <Head>
        <title>Noel 🌺</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`${age} year old furry that does the things he loves, with his boyfriend. ପ(๑•ᴗ•๑)ଓ ♡`}
        />
        <meta name="theme-color" content="#FF69BD" />
        <meta
          property="og:description"
          content={`${age} year old furry that does the things he loves, with his boyfriend. ପ(๑•ᴗ•๑)ଓ ♡`}
        />
        <meta property="og:title" content="Noel 🎀" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floof.gay" />
      </Head>

      <Container>
        <Center maxW="7xl" mt="2em" flexDirection="column" rowGap="1em" textAlign="center">
          <Avatar src="https://cdn.floofy.dev/images/August.png" w="175px" h="175px" draggable="false" name="Noel">
            <AvatarBadge boxSize="50px" bg={statusColor} mb="0.95em" />
          </Avatar>

          <Heading as="h1" size="2xl">
            Noel 🌺
          </Heading>

          <Text fontSize="x-large">
            {age} year old furry that does the things he loves, with his boyfriend. ପ(๑•ᴗ•๑)ଓ ♡
          </Text>

          <Flex ml="-0.6">
            <NavLink href="https://discord.com/users/280158289667555328">
              <FontAwesomeIcon icon={['fab', 'discord']} color="#5865F2" size="3x" />
            </NavLink>

            <NavLink href="https://twitter.com/rainyynoel">
              <FontAwesomeIcon icon={['fab', 'twitter']} color="#1DA1F2" size="3x" />
            </NavLink>

            <NavLink href="https://t.me/auguwu">
              <FontAwesomeIcon icon={['fab', 'telegram']} color="#0088CC" size="3x" />
            </NavLink>

            <NavLink href="https://github.com/auguwu">
              <FontAwesomeIcon icon={['fab', 'github']} color={useColorModeValue('#333333', 'gray.400')} size="3x" />
            </NavLink>
          </Flex>
        </Center>
      </Container>
    </>
  );
};

export default Page;
