import { useState } from "react";
import { Card, Image, Text, Box, Button, Grid } from "@mantine/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // React Router for navigation

// Define motion card component using motion.div
export const MotionCard = motion(Card);

const categories = [
  {
    name: "Italian Marble",
    description: "Timeless elegance from Italy's finest quarries",
    image:
      "https://plus.unsplash.com/premium_photo-1707778714897-b93535b03cf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    slug: "italian-marble",
    featured: true,
  },
  {
    name: "Pakistani Marble",
    description: "Distinctive patterns from South Asia",
    image:
      "https://images.unsplash.com/photo-1585749864763-de34e7afde1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    slug: "pakistani-marble",
    featured: true,
  },
  {
    name: "Premium Granite",
    description: "Durable luxury for countertops and flooring",
    image:
      "https://images.unsplash.com/photo-1628965582495-e84e68eaf90d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    slug: "granite",
    featured: true,
  },
  {
    name: "Exotic Onyx",
    description: "Translucent beauty for statement features",
    image:
      "https://plus.unsplash.com/premium_photo-1707655580150-30585451ea66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hcmJsZXxlbnwwfHwwfHx8MA%3D%3D",
    slug: "onyx",
    featured: true,
  },
  {
    name: "Designer Quartz",
    description: "Engineered perfection for modern spaces",
    image:
      "https://plus.unsplash.com/premium_photo-1708010549623-37eafb8245b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyYmxlfGVufDB8fDB8fHww",
    slug: "quartz",
    featured: true,
  },
];

export default function Collections () {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Grid>
      {categories
        .filter((cat) => cat.featured)
        .map((category, index) => (
          <Grid.Col span={2.4}>
            <MotionCard
              padding={0}
              key={category.slug}
              component={Link} // Use Link for navigation
              to={"/"}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease",
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                height: 350,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "2/4",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  height={350}
                  fit="cover"
                  style={{
                    transition: "transform 0.5s ease",
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    boxShadow: "0 60px 60px rgba(0, 0, 0, 0.25)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 60%)",
                    opacity: hoveredIndex === index ? 0.9 : 0.7,
                    transition: "opacity 0.3s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px",
                    zIndex: 2,
                  }}
                >
                  <Text
                    fw={900}
                    size="lg"
                    c="white"
                    style={{
                      marginBottom: "8px",
                      transition: "transform 0.3s ease",
                      transform:
                        hoveredIndex === index
                          ? "translateY(0)"
                          : "translateY(10px)",
                    }}
                  >
                    {category.name}
                  </Text>
                  <Text
                    size="sm"
                    c="white"
                    style={{
                      marginBottom: "12px",
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {category.description}
                  </Text>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {/* <Button variant="subtle" size="sm" color="yellow">
                      Explore Collection →
                    </Button> */}
                  </motion.div>
                </div>
              </div>
            </MotionCard>
          </Grid.Col>
        ))}
    </Grid>
  );
}
