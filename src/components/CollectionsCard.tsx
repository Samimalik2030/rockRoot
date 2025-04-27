import { Card, Text, Button, Stack, Group } from '@mantine/core';
import { useState } from 'react';
import IconArrowRight from '../assets/icons/IconArrowRight';

interface MarbleCardProps {
  title: string;
  description: string;
  popularProducts: string[];
  buttonText: string;
  image?: string; // optional, fallback if not provided
}

export default function CollectionsCard({
  title,
  description,
  popularProducts,
  buttonText,
  image,
}: MarbleCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      withBorder
      shadow={hovered ? 'lg' : 'sm'}
      padding="md"
      radius="md"
      style={{ transition: 'box-shadow 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Section */}
      <div
        style={{
          height: 350,
          background: image
            ? `url(${image}) center/cover no-repeat`
            : 'linear-gradient(to bottom, #ddd, #555)',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />

      {/* Content Section */}
      <Stack gap="xs">
        <Text fz="xl" fw={700}>
          {title}
        </Text>
        <Text c="gray" fz="sm">
          {description}
        </Text>

        {/* Popular Products */}
        <Stack gap={4} mt="xs">
          <Text c="orange" fz="sm" fw={600}>
            Popular Products:
          </Text>
          {popularProducts?.map((product, index) => (
            <Group key={index} gap="xs">
              <IconArrowRight size={16}  />
              <Text fz="sm" c="gray.7">
                {product}
              </Text>
            </Group>
          ))}
        </Stack>

        {/* Button */}
        <Button
          fullWidth
          mt="md"
          color="orange"
          variant="filled"
          radius="md"
          fz="sm"
        >
          {buttonText}
        </Button>
      </Stack>
    </Card>
  );
}
