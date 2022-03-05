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

import { Flex, Heading, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => (
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

    <Flex flexDir="column" mt="1.67rem" px={4} as="main" maxW="4xl" mx="auto" rowGap="1em">
      <Heading as="h1" size="2xl">
        Noel's Tech
      </Heading>

      <Text as="h2" fontSize="x-large">
        This is a curated list of what tech I have in my room with me right now, and my tech stack sandwich. :)
      </Text>

      <Heading as="h1" size="xl">
        Software and Services
      </Heading>

      <Text as="h2" fontSize="x-large">
        This is a list of software and services I use on a daily basis.
      </Text>

      <UnorderedList>
        <ListItem key="editors">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Editors: Visual Studio Code (free; any language)
          </Text>
        </ListItem>
        <ListItem key="ide-1">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            IDE #1: JetBrains IntelliJ IDEA Community (free; Kotlin)
          </Text>
        </ListItem>
        <ListItem key="ide-2">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            IDE #2: JetBrains GoLand (paid; Go)
          </Text>
        </ListItem>
        <ListItem key="terminal">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Terminal: Alacritty
          </Text>
        </ListItem>
        <ListItem key="terminal">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Shell: zsh with oh my zsh under the af-magic theme
          </Text>
        </ListItem>
        <ListItem key="terminal">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Music Streaming: Spotify and Jellyfin (local music)
          </Text>
        </ListItem>
        <ListItem key="terminal">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Entertainment: Disney+, Hulu
          </Text>
        </ListItem>
      </UnorderedList>

      <Heading as="h1" size="xl">
        Computer Setup
      </Heading>

      <Text as="h2" fontSize="x-large">
        This is my main computer setup. I can already tell that you're laughing and yes, this is old parts that I got
        from my older brother, but it works for me, so... ┐(~ー~;)┌
      </Text>

      <UnorderedList>
        <ListItem key="operating-systems">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Operating Systems: Arch Linux (development), Windows 11 (gaming)
          </Text>
        </ListItem>
        <ListItem key="motherboard">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Motherboard: ASRock AB350 Pro4
          </Text>
        </ListItem>
        <ListItem key="system-ram">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            System RAM: 32GB (2 16GB DDR4 sticks)
          </Text>
        </ListItem>
        <ListItem key="cpu">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            CPU: AMD Ryzen 7 2700X Eight-Core Processor
          </Text>
        </ListItem>
        <ListItem key="hard-drives">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Hard Drives: 120GB SSD, 1TB SSD, 2TB HDD
          </Text>
        </ListItem>
        <ListItem key="gpu">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            GPU: NVIDIA GeForce GTX 1070 Ti
          </Text>
        </ListItem>
        <ListItem key="microphone">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Microphone: Blue Snowball
          </Text>
        </ListItem>
        <ListItem key="keyboard">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Keyboard: Redragon K551 (Cherry Blue Switches)
          </Text>
        </ListItem>
      </UnorderedList>

      <Heading as="h1" size="xl">
        Physical Hardware
      </Heading>

      <Text as="h2" fontSize="x-large">
        This is all the stuff I can use on a daily basis.
      </Text>

      <UnorderedList>
        <ListItem key="phone">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Phone: iPhone 13 Pro
          </Text>
        </ListItem>
        <ListItem key="old-phone">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Old Phones: Samsung Galaxy S9
          </Text>
        </ListItem>
        <ListItem key="old-phone">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            VR: Oculus Quest 2
          </Text>
        </ListItem>
        <ListItem key="old-phone">
          <Text color="gray.200" fontSize="xl" textColor={useColorModeValue('#191919', 'gray.300')}>
            Consoles: Nintendo Switch (original)
          </Text>
        </ListItem>
      </UnorderedList>
    </Flex>
  </>
);

export default Page;
