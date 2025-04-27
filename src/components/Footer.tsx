import { Box, Group, Anchor, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate()
  return (
    <Box bg="black" py="md" px="lg" ta="center">
      <Group justify="center" gap="lg">
        <Anchor  c="white" underline="hover" onClick={()=>navigate('/about')}>
          About Us
        </Anchor>
        <Anchor  c="white" underline="hover" onClick={()=>navigate('/products')}>
          Products
        </Anchor>
        <Anchor  c="white" underline="hover" onClick={()=>navigate('/contact-us')}>
          Contact
        </Anchor>
        
      </Group>
      <Text c="white" mt="sm" size="sm">
        © 2025 Marble Masterpieces. All rights reserved.
      </Text>
    </Box>
  );
}
