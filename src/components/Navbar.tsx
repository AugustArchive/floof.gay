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

import { Box, Flex, Link, type LinkProps, useColorMode, Spacer, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { type FC } from 'react';

export const NavLink: FC<{ href: string } & LinkProps> = ({ children, href, ...props }) => (
  <Link
    px={2}
    py={2}
    rounded="md"
    href={href}
    target={href.startsWith('/') ? undefined : '_blank'}
    _hover={{
      textDecoration: 'none'
    }}
    {...props}
  >
    {children}
  </Link>
);

const Navbar: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box h="100%" w="100%">
      <Flex direction="row" alignItems="center" justifyContent="center" h="100%" w="100%">
        <Box>
          <NavLink href="/" mr="12">
            Home
          </NavLink>

          <NavLink href="/tech" mr="12">
            Tech
          </NavLink>
        </Box>

        <Spacer />
        <IconButton
          aria-label="icon button"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
