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

import { Flex, Text, Heading } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Page: NextPage = () => {
  const birthday = DateTime.fromJSDate(new Date(2004, 2, 24));
  const now = DateTime.now();
  const age = Math.floor(now.diff(birthday, ['years']).years);

  return (
    <>
      <Head>
        <title>Noel 🌺 - About Me</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Well... this is a page about me! Nothing special, I swear!  (´-ω-`)" />
        <meta name="theme-color" content="#FF69BD" />
        <meta property="og:description" content="Well... this is a page about me! Nothing special, I swear!  (´-ω-`)" />
        <meta property="og:title" content="Noel 🌺 - About Me" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://floof.gay/about" />
      </Head>

      <Flex flexDir="column" mt="1.67rem" px={4} as="main" maxW="7xl" mx="auto" rowGap="1em">
        <Heading as="h1" size="2xl">
          Well, who am I?
        </Heading>

        <Text as="h2" fontSize="x-large">
          TL;DR ~ {age} year old developer that is a furry, started doing development back in Feburary 2017 at age 12,
          created multiple projects, and now is making a company, holy crap! Oh- did I mention that I am a theater kid?
          Yea...
        </Text>

        <Text as="h2" fontSize="x-large">
          Long Version ~ I'm glad you asked! I am an {age} year old developer that is also a furry! Pretty shocking, I
          know? I was raised in Arizona with my lovely family, to be real with you, I didn't have a golden of a
          child-hood, there were fights and so what, it's all in the past, we can't rewrite it, even if there is stuff I
          should change... but let's not worry about the past. My jounery with development started back in Feburary
          2017, when I first joined Discord, we're going way back! I joined servers in the "discord bot community," back
          then, bots we're not that relevant to Discord's point of view as it is now, it was very different. I made my
          first bot, "Asuna" (I lost the source code ages ago), and that floped to be a "good developer," I just started
          teaching myself JavaScript and I joined GitHub back in April 2018 with a really cringe worthy commit history,
          but, I started to teach myself all the languages I know like TypeScript, Kotlin, Python, C#, Elixir, Rust, and
          more; I also learned managements systems like Kubernetes and Docker. Did you know my actual aspiration was to
          be an actor, since... I am a theater kid. Does theater and social anxiety join together, well, I don't know!
        </Text>

        <Heading as="h1" size="2xl">
          What is your fursona?
        </Heading>

        <Text as="h2" fontSize="x-large">
          My fursona is a white polar bear that lives in the arctic, like normal polar bears! I felt like a polar bear
          fit my personality more than any other animal that I liked (i.e, red pandas, foxes, dogs, etc) and I wanted to
          stick out a bit, I didn't want to be a "generic fox" or "folf" (going to be heated for this, but *shrug*)
        </Text>
      </Flex>
    </>
  );
};

export default Page;
