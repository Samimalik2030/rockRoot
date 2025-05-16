import {
  ActionIcon,
  Badge,
  Button,
  Checkbox,
  FileInput,
  Grid,
  Group,
  Modal,
  MultiSelect,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
  Title,
  Text,
  Image,
  Card,
  Box,
  LoadingOverlay,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "@mantine/form";
import api from "../api";
import IconPencil from "../assets/icons/IconPencil";
import IconTrash from "../assets/icons/IconTrash";
import handleImageUpload from "../constants/UploadImage";
import { FileDto } from "../interfaces/IUser";
import { Product } from "../interfaces/Product";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);
  const [image, setImage] = useState<FileDto | null>(null);

  const isMobile = useMediaQuery("(max-width: 56.25em)");
  const [opened, { open, close }] = useDisclosure();

  const form = useForm({
    initialValues: {
      name: "",
      price: 0,
      description: "",
      length: 0,
      width: 0,
      finish: "",
      category: "",
      inStock: true,
      tags: [] as string[],
      thickness: 0,
    },
  });

  const fetchProducts = useCallback(async () => {
    try {
      setFetching(true);
      const { data } = await api.get("/products");
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const openModal = (product?: Product) => {
    if (product) {
      setIsUpdate(true);
      setProductId(product._id);
      form.setValues({
        ...product,
        length: product.dimensions.length,
        width: product.dimensions.length,
      });
      setImage(product.image);
    } else {
      form.reset();
      setImage(null);
      setIsUpdate(false);
      setProductId(null);
    }
    open();
  };

  const closeModal = () => {
    form.reset();
    setIsUpdate(false);
    setProductId(null);
    setImage(null);
    close();
  };

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      if (isUpdate && productId) {
        await api.patch(`/products/${productId}`, { ...values, image });
      } else {
        await api.post("/products", {
          ...values,
          image,
        });
      }
      await fetchProducts();
      closeModal();
    } catch (error) {
      console.error("Error submitting product", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = async (file: File | null) => {
    if (!file) return;
    const uploaded = await handleImageUpload(file);
    setImage(uploaded);
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/products/${id}`);
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <>
      <Stack>
        <Group justify="space-between">
          <Title order={2}>Products</Title>
          <Button color="yellow" onClick={() => openModal()}>
            Add Product
          </Button>
        </Group>

        <Grid>
          {products.map((product) => (
            <Grid.Col span={isMobile ? 12 : 4} key={product._id}>
              <Card withBorder radius="lg" shadow="sm">
                <Group justify="space-between" mb="xs">
                  <Badge color="orange" variant="filled" radius="sm">
                    BESTSELLER
                  </Badge>
                  <Group>
                    <ActionIcon
                      variant="transparent"
                      onClick={() => openModal(product)}
                    >
                      <IconPencil color="green" />
                    </ActionIcon>
                    <ActionIcon
                      variant="transparent"
                      onClick={() => handleDelete(product._id)}
                    >
                      <IconTrash color="red" />
                    </ActionIcon>
                  </Group>
                </Group>

                <Box h={250}>
                  <Image
                    h="100%"
                    src={product.image?.url}
                    alt={product.name}
                    fit="cover"
                    radius="md"
                  />
                </Box>

                <Group gap="xs" mb="xs" mt={8}>
                  <Badge color="gray" variant="light" radius="xl">
                    Pakistan
                  </Badge>
                  <Text size="sm" fw={500}>
                    ⭐ 4.5
                  </Text>
                </Group>

                <Stack gap={2}>
                  <Text fw={600}>{product.name}</Text>
                  <Text size="sm" c="gray">
                    {product.description}
                  </Text>
                </Stack>

                <Group justify="space-between" mt="md" align="center">
                  <Text fw={600} size="lg">
                    Rs.{product.price.toFixed(2)}{" "}
                   
                  </Text>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>

      <Modal
        opened={opened}
        onClose={closeModal}
        title={isUpdate ? "Update Product" : "Add Product"}
        size="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <FileInput
              label="Image"
              placeholder="Upload an image of the product"
              onChange={handleImageChange}
              accept="image/*"
            />
            <Checkbox
              label="In Stock"
              {...form.getInputProps("inStock", { type: "checkbox" })}
            />
            <TextInput
              label="Name"
              placeholder="e.g., Carrara White Marble"
              required
              {...form.getInputProps("name")}
            />
            <NumberInput
              hideControls
              label="Price"
              placeholder="Enter price in PKR"
              required
              {...form.getInputProps("price")}
            />
            <Textarea
              label="Description"
              placeholder="Enter a brief description of the product"
              {...form.getInputProps("description")}
            />
            <Group>
              <NumberInput
                w={"48%"}
                hideControls
                label="Length (in inches)"
                placeholder="e.g., 24 inches"
                maxLength={2}
                {...form.getInputProps("length")}
              />{" "}
              <NumberInput
                hideControls
                label="Width (in inches)"
                placeholder="e.g., 12 inches"
                maxLength={2}
                w={"48%"}
                {...form.getInputProps("width")}
              />
            </Group>
            <NumberInput
              hideControls
              maxLength={2}
              label="Thickness (in mm)"
              placeholder="Enter thickness in millimeters"
              {...form.getInputProps("thickness")}
            />
            <Select
              label="Finish"
              placeholder="Select finish type"
              data={[
                "polished",
                "honed",
                "leathered",
                "flamed",
                "brushed",
                "antique",
                "sandblasted",
                "tumbled",
                "matte",
                "mirror-like",
                "satin",
                "rough",
                "smooth",
                "high-gloss",
                "natural",
              ]}
              {...form.getInputProps("finish")}
            />
            <Select
              label="Category"
              placeholder="Choose marble category"
              data={["Floor", "Stairs", "Kitchen"]}
              required
              {...form.getInputProps("category")}
            />

            <MultiSelect
              label="Tags"
              placeholder="Add relevant tags (e.g., luxury, floor)"
              data={[
                "luxury",
                "floor",
                "classic",
                "warm",
                "premium",
                "interior",
              ]}
              searchable
              {...form.getInputProps("tags")}
            />
            <Button type="submit" loading={loading} fullWidth>
              {isUpdate ? "Update Product" : "Add Product"}
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
