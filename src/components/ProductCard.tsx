import {
  Card,
  Group,
  Badge,
  ActionIcon,
  Text,
  Button,
  Image,
  Stack,
  rem,
} from "@mantine/core";

import { motion } from "framer-motion";
import { useState } from "react";
import IconHeart from "../assets/icons/IconHeart";
import IconStar from "../assets/icons/IconStar";
import IconChevronRight from "../assets/icons/IconChevronRight";
import IconPencil from "../assets/icons/IconPencil";
import IconTrash from "../assets/icons/IconTrash";

const MotionCard = motion(Card);

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  origin: string;
  rating: number;
  price: number;
  isBestseller?: boolean;
  isUpdate?: boolean;
  onIconClick?: () => void;
}

export const ProductCard = ({
  image,
  name,
  description,
  origin,
  rating,
  price,
  isBestseller = false,
  isUpdate = false,
  onIconClick,
}: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <MotionCard
      withBorder
      radius="lg"
      shadow="sm"
      p="lg"
      className="relative"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Top - Bestseller badge and heart */}
      <Group justify="space-between" mb="xs">
        {isBestseller && (
          <Badge color="orange" variant="filled" radius="sm">
            BESTSELLER
          </Badge>
        )}
        <Group>
          {!isUpdate && (
            <ActionIcon variant="light" radius="xl" color="gray">
              <IconHeart size={14} />
           
            </ActionIcon>
          )}

          {isUpdate && (
            <Group>
             
              <ActionIcon
                variant="light"
                radius="xl"
                color="gray"
                onClick={onIconClick}
              >
                <IconPencil size={14} />
              </ActionIcon>

              <ActionIcon
                variant="light"
                radius="xl"
                color="red"
              
              >
                <IconTrash size={14} color="red"/>
              </ActionIcon>
            </Group>
          )}
        </Group>
      </Group>

      {/* Product Image */}
      <div
        style={{
          height: rem(250),
          borderRadius: rem(12),
          backgroundColor: "#f1f5f9",
          marginBottom: rem(16),
          position: "relative", // already correct
        }}
      >
        <Image
          src={image}
          alt={name}
          fit="cover"
          radius="md"
          height={250}
          fallbackSrc="https://via.placeholder.com/260x150?text=Marble"
        />

        {!isUpdate && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: "80%",
              left: "10%",
              transform: "translate(-50%, -50%)",
              width: "80%",
            }}
          >
            <Button color="orange" radius="md" fullWidth>
              Add to Cart
            </Button>
          </motion.div>
        )}
      </div>

      {/* Country and Rating */}
      <Group gap="xs" mb="xs">
        <Badge color="gray" variant="light" radius="xl">
          {origin}
        </Badge>
        <Group gap={4}>
          <IconStar size={16} color="#fbbf24" fill="#fbbf24" />
          <Text size="sm" fw={500}>
            {rating.toFixed(1)}
          </Text>
        </Group>
      </Group>

      {/* Title & Description */}
      <Stack gap={2}>
        <Text fw={600}>{name}</Text>
        <Text size="sm" c="gray">
          {description}
        </Text>
      </Stack>

      {/* Price & Details */}
      <Group justify="space-between" mt="md" align="center">
        <Text fw={600} size="lg">
          Rs.{price.toFixed(2)}{" "}
          <Text component="span" size="sm" color="dimmed">
            per sq ft
          </Text>
        </Text>
        <Button
          variant="subtle"
          rightSection={<IconChevronRight size={14} />}
          size="xs"
        >
          Details
        </Button>
      </Group>
    </MotionCard>
  );
};
