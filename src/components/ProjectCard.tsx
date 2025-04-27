import {
    Card,
    Image,
    Text,
    Group,
    Button,
    Stack,
    Box,
  } from '@mantine/core';
  import { motion } from 'framer-motion';
  import { useState } from 'react';
  
  const MotionCard = motion(Card);
  
  interface ProjectCardProps {
    image: string;
    category: string;
    location: string;
    title: string;
    description: string;
  }
  
  export const ProjectCard = ({
    image,
    category,
    location,
    title,
    description,
  }: ProjectCardProps) => {
    const [hovered, setHovered] = useState(false);
  
    return (
      <MotionCard

        withBorder
        radius="md"
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
        {/* Image with hover button */}
        <Box pos="relative" >
          <Image
            src={image}
            alt={title}
            height={260}
            fit="cover"
            fallbackSrc="https://via.placeholder.com/400x260?text=Project"
          />
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* <Button color="orange" radius="md">
              View Project
            </Button> */}
          </motion.div>
        </Box>
  
        {/* Text Content */}
        <Box p="md">
          <Group justify="space-between" mb={4}>
            <Text size="sm" fw={500} c="orange">
              {category}
            </Text>
            <Text size="sm" c="dimmed">
              {location}
            </Text>
          </Group>
  
          <Stack gap={2}>
            <Text fw={600}>{title}</Text>
            <Text size="sm" c="gray">
              {description}
            </Text>
          </Stack>
        </Box>
      </MotionCard>
    );
  };
  