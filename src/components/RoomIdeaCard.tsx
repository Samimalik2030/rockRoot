import {
    Card,
    Image,
    Text,
    Group,
    Button,
    Badge,
    Box,
    Stack,
    Chip,
  } from '@mantine/core';
  import { motion } from 'framer-motion';
  import { useState } from 'react';
  
  const MotionCard = motion(Card);
  
  interface FeaturedProjectCardProps {
    image: string;
    location: string;
    author: string;
    title: string;
    description: string;
    materials: string[];
    isFeatured?: boolean;
  }
  
  export const RoomIdeasCard = ({
    image,
    location,
    author,
    title,
    description,
    materials,
    isFeatured = false,
  }: FeaturedProjectCardProps) => {
    const [hovered, setHovered] = useState(false);
  
    return (
      <MotionCard
        radius="md"
        withBorder
        p={0}
        style={{ overflow: 'hidden' }}
        initial={{ boxShadow: '0 1px 5px rgba(0,0,0,0.1)' }}
        animate={{
          boxShadow: hovered
            ? '0 10px 25px rgba(0,0,0,0.15)'
            : '0 1px 5px rgba(0,0,0,0.1)',
        }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Image with hover action button */}
        <Box pos="relative">
          <Image
            src={image}
            alt={title}
            height={260}
            fit="cover"
            fallbackSrc="https://via.placeholder.com/400x260?text=Project"
          />
  
          {isFeatured && (
            <Badge
              color="orange"
              variant="filled"
              radius="sm"
              style={{ position: 'absolute', top: 12, left: 12 }}
            >
              FEATURED
            </Badge>
          )}
  
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '40%',
              left: '36%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Button color="orange" radius="md">
              View Details
            </Button>
          </motion.div> */}
        </Box>
  
        {/* Content */}
        <Box p="md">
          <Group justify="space-between" mb={4}>
            <Badge color="gray" variant="light">
              {location}
            </Badge>
            <Text size="sm" fw={500}>
              By {author}
            </Text>
          </Group>
  
          <Stack gap={2} mb="xs">
            <Text fw={600}>{title}</Text>
            <Text size="sm" c="gray">
              {description}
            </Text>
          </Stack>
  
          {/* Materials */}
          <Stack gap={4}>
            <Text size="sm" fw={500} c="orange">
              Materials Used:
            </Text>
            <Group gap="xs" wrap="wrap">
              {materials.map((mat) => (
                <Badge key={mat} color="gray" variant="light" radius="xl">
                  {mat}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Box>
      </MotionCard>
    );
  };
  