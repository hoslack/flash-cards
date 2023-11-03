import React from 'react';
import { Box } from '@chakra-ui/react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded="md"
      color="white"
      cursor="pointer"
      _hover={{
        textDecoration: 'none',
        bg: 'gray.700',
      }}
      href={href}
    >
      {children}
    </Box>
  );
};

export default NavLink;
