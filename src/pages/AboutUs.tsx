import {
    Card,
    Text,
    Title,
    Button,
    Group,
    Stack,
    Image,
    SimpleGrid,
    List,
    CheckIcon,
    ThemeIcon,
    Box,
    Rating,
    Accordion,
    Flex,
    Divider,
  } from "@mantine/core";
import StatsGrid from "../components/StatsGrid";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";



  
  function About() {
    const navigate = useNavigate()
    return (
      <>
        <Navbar />
        <Stack gap={50}>
          {/* ////////////// */}
  
          <Card
            shadow="sm"
            // padding="xl"
            h={300}
            // radius="md"
            bg={"#1f2937"}
          >
            <Stack mt={30} gap={25}>
              <Title fw={700} fz={48} ta={"center"} c={"white"}>
                About Rajput Marble's & Granite
              </Title>
              <Text color="dimmed" size="lg" ta={"center"}>
                Bringing luxury and elegance to homes across Punjab since 2005
              </Text>
          
            </Stack>
          </Card>
  
          {/* ////////////////////// */}
  
          <StatsGrid />
  
          {/* ///////////////////////// */}
  
          <Card bg={"#f4f4f7ff"} px={20} py={40}>
            <SimpleGrid cols={2} spacing={10}>
              {/* //////////// */}
  
              <Card padding="xs" bg={"transparent"}>
                <Stack gap={8}>
                  <Text c={"#ff9900"} fz={16} fw={500}>
                    Our Story
                  </Text>
                  <Title order={1} mb="sm">
                    A Legacy of Excellence
                  </Title>
                  <Text c={"#6a6a6aff"} w={"95%"} fz={16} fw={500}>
                    Founded in 2005 by the Rajput family in Lahore, Punjab, our
                    company began as a small marble supplier with a vision to
                    bring the world's finest natural stones to Pakistan.
                  </Text>
                  <Text c={"#6a6a6aff"} w={"93%"} fz={16} fw={500}>
                    What started as a modest showroom has grown into one of
                    Punjab's premier destinations for luxury marble, granite, and
                    natural stone products. Our commitment to quality,
                    craftsmanship, and customer satisfaction has been the
                    cornerstone of our success.
                  </Text>
                  <Text c={"#6a6a6aff"} w={"93%"} fz={16} fw={500}>
                    Today, Rajput Marble's & Granite is proud to serve homeowners,
                    architects, designers, and contractors throughout Pakistan
                    with an extensive collection of premium natural stones sourced
                    from the finest quarries around the world and within Pakistan.
                  </Text>
                  <Text c={"#6a6a6aff"} w={"95%"} fz={16} fw={500}>
                    Our state-of-the-art facility in Lahore houses a vast
                    inventory of marble, granite, onyx, and other natural stones,
                    allowing customers to view full slabs before making their
                    selection. Our expert craftsmen use the latest technology to
                    cut, polish, and finish each piece to perfection.
                  </Text>
                </Stack>
              </Card>
  
              {/* /////////// */}
  
              <Card p={0} bg={"transparent"}>
                <Image
                  radius={4}
                  src={
                    "https://ik.imagekit.io/bh2albdmg/19ff79b4d717e61ca279921ab427c497-cc_ft_768.webp?updatedAt=1741692186162"
                  }
                />
              </Card>
              
              {/* ////////////// */}
            </SimpleGrid>
          </Card>
  
          {/* ////////////// */}
  
          <Card bg={"#1f2937"} px={20} py={60}>
            <SimpleGrid cols={2} spacing={40}>
              {/* //////////// */}
  
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                style={{ backgroundColor: "#343a40", color: "#fff" }}
              >
                <ThemeIcon size={36} radius="md" mb="sm" color="orange">
                  <CheckIcon size={20} />
                </ThemeIcon>
                <Title order={3} mb="sm">
                  Our Mission
                </Title>
                <Text color="dimmed" mb="md">
                  To provide the highest quality natural stone products and
                  exceptional service, transforming spaces into works of art that
                  reflect our clients' unique style and vision.
                </Text>
                <List
                  spacing="xs"
                  size="sm"
                  icon={
                    <ThemeIcon color="orange" size={20} radius="sm">
                      <CheckIcon size={12} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Source the finest materials from around the world
                  </List.Item>
                  <List.Item>
                    Deliver unmatched craftsmanship in every project
                  </List.Item>
                  <List.Item>
                    Provide personalized service and expert guidance
                  </List.Item>
                  <List.Item>
                    Exceed customer expectations in quality and value
                  </List.Item>
                </List>
              </Card>
  
              {/* /////////// */}
  
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                style={{ backgroundColor: "#343a40", color: "#fff" }}
              >
                <ThemeIcon size={36} radius="md" mb="sm" color="orange">
                  <CheckIcon size={20} />
                </ThemeIcon>
                <Title order={3} mb="sm">
                  Our Vision
                </Title>
                <Text color="dimmed" mb="md">
                  To be Pakistan's leading provider of premium natural stone,
                  recognized for our innovation, sustainability, and commitment to
                  excellence in every aspect of our business.
                </Text>
                <List
                  spacing="xs"
                  size="sm"
                  icon={
                    <ThemeIcon color="orange" size={20} radius="sm">
                      <CheckIcon size={12} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    Lead the industry in quality and innovation
                  </List.Item>
                  <List.Item>
                    Promote sustainable practices in stone sourcing and processing
                  </List.Item>
                  <List.Item>
                    Expand our presence across Pakistan and beyond
                  </List.Item>
                  <List.Item>
                    Continuously evolve to meet changing market needs
                  </List.Item>
                </List>
              </Card>
  
              {/* ////////////// */}
            </SimpleGrid>
          </Card>
  
          {/* /////////////// */}
  
          <Card px={20} py={30}>
            <Stack gap={50}>
              <Stack gap={12}>
                <Text c={"#ff9918"} fz={16} fw={500} ta={"center"}>
                  Our Core Value
                </Text>
                <Title fz={36} ta={"center"}>
                  The Principles That Guide Us
                </Title>
                <Group justify="center">
                  <Box
                    w={80}
                    h={4}
                    bg={"#ff9900"}
                    style={{ borderRadius: 20 }}
                  ></Box>
                </Group>
                <Text fz={16} fw={500} ta={"center"} c={"diamond"}>
                  These values form the foundation of everything we do at Rajput
                  Marble's & Granite
                </Text>
              </Stack>
              {/* //////////// */}
              <SimpleGrid cols={3} spacing={40}>
                {/* //////////// */}
                <Card shadow="sm" p={40} radius="md" withBorder bg={"#f4f4f7ff"}>
                  <ThemeIcon
                    size={36}
                    radius="md"
                    mb="sm"
                    color="orange"
                    variant="light"
                  >
                    <CheckIcon size={20} />
                  </ThemeIcon>
                  <Title order={3} mb="xs">
                    Quality
                  </Title>
                  <Text color="dimmed" fz={16} fw={500}>
                    We never compromise on the quality of our products. Each stone
                    is carefully selected, inspected, and processed to ensure it
                    meets our exacting standards.
                  </Text>
                </Card>
                {/* /////////// */}
                <Card
                  shadow="sm"
                  padding={40}
                  radius="md"
                  withBorder
                  bg={"#f4f4f7ff"}
                >
                  <ThemeIcon
                    size={36}
                    radius="md"
                    mb="sm"
                    color="orange"
                    variant="light"
                  >
                    <CheckIcon size={20} />
                  </ThemeIcon>
                  <Title order={3} mb="xs">
                    Customer Service
                  </Title>
                  <Text color="dimmed" fz={16} fw={500}>
                    We believe in building lasting relationships with our clients
                    through exceptional service, expert guidance, and support
                    throughout your project.
                  </Text>
                </Card>
                {/* ////////////// */}
                <Card
                  shadow="sm"
                  padding={40}
                  radius="md"
                  withBorder
                  bg={"#f4f4f7ff"}
                >
                  <ThemeIcon
                    size={36}
                    radius="md"
                    mb="sm"
                    color="orange"
                    variant="light"
                  >
                    <CheckIcon size={20} />
                  </ThemeIcon>
                  <Title order={3} mb="xs">
                    Innovation
                  </Title>
                  <Text color="dimmed" fz={16} fw={500}>
                    We continuously seek new products, technologies, and
                    techniques to offer our customers the latest trends and
                    solutions in natural stone applications.
                  </Text>
                </Card>
              </SimpleGrid>
            </Stack>
          </Card>
  
          {/* ////////////// */}
  
          <Card px={20} py={30} bg={"#f6f9fb"}>
            <Stack gap={50}>
              <Stack gap={12}>
                <Text c={"#ff9918"} fz={16} fw={500} ta={"center"}>
                  Our Process
                </Text>
                <Title fz={36} ta={"center"}>
                  How We Work
                </Title>
                <Group justify="center">
                  <Box
                    w={80}
                    h={4}
                    bg={"#ff9900"}
                    style={{ borderRadius: 20 }}
                  ></Box>
                </Group>
                <Text fz={16} fw={500} ta={"center"} c={"diamond"}>
                  From selection to installation, we ensure a seamless experience
                  at every step
                </Text>
              </Stack>
              {/* //////////// */}
              <SimpleGrid cols={4} spacing={40}>
                {/* //////////// */}
                <Card shadow="sm" p={20} radius="md" withBorder>
                  <Text fz={28} fw={700} color="orange" mb="xs">
                    01
                  </Text>
                  <Title order={3} mb="xs">
                    Consultation
                  </Title>
                  <Text color="dimmed" fz={16} fw={500} w={"93%"}>
                    We begin with a thorough consultation to understand your
                    vision, requirements, and budget.
                  </Text>
                </Card>
                {/* /////////// */}
                <Card shadow="sm" p={20} radius="md" withBorder>
                  <Text fz={28} fw={700} color="orange" mb="xs">
                    02
                  </Text>
                  <Title order={3} mb="xs">
                    Material Selection
                  </Title>
                  <Text color="dimmed" fz={16} fw={500} w={"90%"}>
                    Browse our extensive collection and select the perfect stone
                    for your project.
                  </Text>
                </Card>
                {/* ////////////// */}
                <Card shadow="sm" p={20} radius="md" withBorder>
                  <Text fz={28} fw={700} color="orange" mb="xs">
                    03
                  </Text>
                  <Title order={3} mb="xs">
                    Measurement & Fabrication
                  </Title>
                  <Text color="dimmed" fz={16} fw={500} w={"90%"}>
                    Our experts take precise measurements and fabricate your stone
                    to exact specifications.
                  </Text>
                </Card>
                {/* ///////////// */}
                <Card shadow="sm" p={20} radius="md" withBorder>
                  <Text fz={28} fw={700} color="orange" mb="xs">
                    04
                  </Text>
                  <Title order={3} mb="xs">
                    Installation
                  </Title>
                  <Text color="dimmed" fz={16} fw={500} w={"95%"}>
                    Our skilled installation team ensures your stone is perfectly
                    installed with meticulous attention to detail.
                  </Text>
                </Card>
              </SimpleGrid>
            </Stack>
          </Card>
  
          {/* ////////////// */}
  
          <Card px={20} py={30}>
            <Stack gap={50}>
              <Stack gap={12}>
                <Text c={"#ff9918"} fz={16} fw={500} ta={"center"}>
                  Leadership
                </Text>
                <Title fz={34} ta={"center"}>
                  Meet Our Leadership
                </Title>
                <Group justify="center">
                  <Box
                    w={80}
                    h={4}
                    bg={"#ff9900"}
                    style={{ borderRadius: 20 }}
                  ></Box>
                </Group>
                <Text fz={16} fw={500} ta={"center"} c={"diamond"}>
                  The visionaries behind Rajput Marble's & Granite
                </Text>
              </Stack>
              {/* //////////// */}
              <SimpleGrid cols={3} spacing={40}>
                {/* //////////// */}
                <Card shadow="sm" radius="md" withBorder p={0}>
                  <Image
                    src={
                      "https://ik.imagekit.io/bh2albdmg/frames-for-your-heart-2d4lAQAlbDA-unsplash%20(1).jpg?updatedAt=1740806605782"
                    }
                  />
                  <Stack px={15} gap={12} mt={10} py={15}>
                    <Box>
                      <Title order={3}>Farhan Rajput</Title>
                      <Text color="orange" fz={16} fw={500}>
                        Founder & CEO
                      </Text>
                    </Box>
                    <Text color="dimmed" fz={16} fw={500}>
                      With over 20 years of experience in the natural stone
                      industry, Farhan leads our company with passion and
                      expertise.
                    </Text>
                  </Stack>
                </Card>
                {/* /////////// */}
                <Card shadow="sm" radius="md" withBorder p={0}>
                  <Image
                    src={
                      "https://ik.imagekit.io/bh2albdmg/frames-for-your-heart-2d4lAQAlbDA-unsplash%20(1).jpg?updatedAt=1740806605782"
                    }
                  />
                  <Stack px={15} gap={12} mt={10} py={15}>
                    <Box>
                      <Title order={3}>Aisha Kahan</Title>
                      <Text color="orange" fz={16} fw={500}>
                        Managing Director
                      </Text>
                    </Box>
                    <Text color="dimmed" fz={16} fw={500}>
                      With over 20 years of experience in the natural stone
                      industry, Farhan leads our company with passion and
                      expertise.
                    </Text>
                  </Stack>
                </Card>
                {/* ////////////// */}
                <Card shadow="sm" radius="md" withBorder p={0}>
                  <Image
                    src={
                      "https://ik.imagekit.io/bh2albdmg/frames-for-your-heart-2d4lAQAlbDA-unsplash%20(1).jpg?updatedAt=1740806605782"
                    }
                  />
                  <Stack px={15} gap={12} mt={10} py={15}>
                    <Box>
                      <Title order={3}>Imran Ali</Title>
                      <Text color="orange" fz={16} fw={500}>
                        Chief Financial Officer
                      </Text>
                    </Box>
                    <Text color="dimmed" fz={16} fw={500}>
                      Imran manages our financial strategy, helping us grow
                      sustainably while delivering value to our customers.
                    </Text>
                  </Stack>
                </Card>
                {/* ///////////// */}
              </SimpleGrid>
            </Stack>
          </Card>
  
          {/* ///////////////// */}
  
          <Box>
            <Card px={20} py={20} bg={"#1f2937"}>
              <Stack gap={50}>
                <Stack gap={12}>
                  <Text c={"#ff9918"} fz={16} fw={500} ta={"center"}>
                    Client Testimonials
                  </Text>
                  <Title fz={36} ta={"center"} c={"white"}>
                    What Our Clients Say
                  </Title>
                  <Group justify="center">
                    <Box
                      w={80}
                      h={4}
                      bg={"#ff9900"}
                      style={{ borderRadius: 20 }}
                    ></Box>
                  </Group>
                  <Text fz={16} fw={500} ta={"center"} c={"#afafb1ff"}>
                    Hear from our satisfied customers about their experience with
                    Rajput Marble's & Granite
                  </Text>
                </Stack>
                {/* //////////// */}
                <SimpleGrid cols={3} spacing={40}>
                  {/* //////////// */}
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{ backgroundColor: "#343a40", color: "#fff" }}
                  >
                    <Stack>
                      <Rating value={5} readOnly size="sm" color="yellow" />
                      <Text size="lg" fz={16} fw={500} w={"80%"}>
                        "The quality of marble from Rajput's is exceptional. My
                        home renovation in Lahore looks stunning with their
                        Italian marble."
                      </Text>
  
                      <Box
                        w={50}
                        h={4}
                        bg={"#ff9900"}
                        style={{ borderRadius: 20 }}
                      ></Box>
                      <Stack gap={2}>
                        <Text fw={500} fz={18}>
                          Ayesha Khan
                        </Text>
                        <Text color="dimmed" size="sm">
                          Homeowner, Lahore
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                  {/* /////////// */}
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{ backgroundColor: "#343a40", color: "#fff" }}
                  >
                    <Stack>
                      <Rating value={5} readOnly size="sm" color="yellow" />
                      <Text size="lg" fz={16} fw={500} w={"80%"}>
                        "As an architect, I need reliable suppliers. Rajput
                        Marble's & Granite has been my go-to for years. Their
                        selection and service are unmatched in Punjab."
                      </Text>
  
                      <Box
                        w={50}
                        h={4}
                        bg={"#ff9900"}
                        style={{ borderRadius: 20 }}
                      ></Box>
                      <Stack gap={2}>
                        <Text fw={500} fz={18}>
                          Usman Ali
                        </Text>
                        <Text color="dimmed" size="sm">
                          Architect, Islamabad
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                  {/* ////////////// */}
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    style={{ backgroundColor: "#343a40", color: "#fff" }}
                  >
                    <Stack>
                      <Rating value={5} readOnly size="sm" color="yellow" />
                      <Text size="lg" fz={16} fw={500} w={"80%"}>
                        "We used Rajput's for our hotel lobby renovation. The
                        Black Galaxy granite they supplied has become a
                        conversation piece among our guests."
                      </Text>
  
                      <Box
                        w={50}
                        h={4}
                        bg={"#ff9900"}
                        style={{ borderRadius: 20 }}
                      ></Box>
                      <Stack gap={2}>
                        <Text fw={500} fz={18}>
                          Faisal Ahmed
                        </Text>
                        <Text color="dimmed" size="sm">
                          Hotel Manager, Faisalabad
                        </Text>
                      </Stack>
                    </Stack>
                  </Card>
                </SimpleGrid>
              </Stack>
            </Card>
  
            {/* /////////////////// */}
  
            <Card bg={"#1f2937"} px={20} py={30}>
              <SimpleGrid cols={2} spacing={40}>
                {/* //////////// */}
  
                <Card
                  shadow="sm"
                  p={25}
                  radius="md"
                  style={{ backgroundColor: "#343a40", color: "#fff" }}
                >
                  <Rating value={5} readOnly size="sm" mb="sm" color="yellow" />
                  <Text size="lg" mb="md" w={"93%"}>
                    "The Ziarat White marble we chose for our bathroom renovation
                    exceeded our expectations. The team at Rajput's was
                    professional and helpful throughout the process."
                  </Text>
                  <Box
                    w={70}
                    h={4}
                    bg={"#ff9900"}
                    style={{ borderRadius: 20 }}
                  ></Box>
                  <hr style={{ borderColor: "#6c757d", marginBottom: "10px" }} />
                  <Stack gap={2}>
                    <Text fw={500}>Sana Malik</Text>
                    <Text color="dimmed" fz={16} fw={400}>
                      Homeowner, Karachi
                    </Text>
                  </Stack>
                </Card>
  
                {/* /////////// */}
                <Card
                  shadow="sm"
                  p={25}
                  radius="md"
                  style={{ backgroundColor: "#343a40", color: "#fff" }}
                >
                  <Rating value={5} readOnly size="sm" mb="sm" color="yellow" />
                  <Text size="lg" mb="md" w={"90%"}>
                    "I've worked with many stone suppliers across Pakistan, but
                    Rajput Marble's & Granite stands out for their quality and
                    customer service. Highly recommended!"
                  </Text>
                  <Box
                    w={70}
                    h={4}
                    bg={"#ff9900"}
                    style={{ borderRadius: 20 }}
                  ></Box>
                  <hr style={{ borderColor: "#6c757d", marginBottom: "10px" }} />
                  <Stack gap={2}>
                    <Text fw={500}>Ahmed Hassan</Text>
                    <Text color="dimmed" fz={16} fw={400}>
                      Interior Designer, Lahore
                    </Text>
                  </Stack>
                </Card>
                {/* ////////////// */}
              </SimpleGrid>
            </Card>
          </Box>
  
          {/* //////////////// */}
  
          <Card px={20} py={30}>
            <Stack gap={50}>
              <Stack gap={12}>
                <Text c={"#ff9918"} fz={16} fw={500} ta={"center"}>
                  FAQ
                </Text>
                <Title fz={38} ta={"center"}>
                  Frequently Asked Questions
                </Title>
                <Group justify="center">
                  <Box
                    w={80}
                    h={4}
                    bg={"#ff9900"}
                    style={{ borderRadius: 20 }}
                  ></Box>
                </Group>
                <Text fz={16} fw={500} ta={"center"} c={"#b2b2b2ff"}>
                  Find answers to common questions about our products and services
                </Text>
              </Stack>
              {/* //////////// */}
  
              <Flex justify={"center"}>
                <Card w={"60%"} p={0}>
                  <Accordion chevronPosition="right">
                    <Accordion.Item
                      value="natural-stone-types"
                      mb={13}
                      // h={55}
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                    >
                      <Accordion.Control fz={20} fw={700}>
                        What types of natural stone do you offer?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          We offer a wide range of natural stones including
                          marble, granite, onyx, travertine, limestone, and
                          engineered quartz. Our collection includes both imported
                          stones from Italy, Spain, Turkey, and India, as well as
                          premium Pakistani marble varieties.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="installation-services"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        Do you offer installation services?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Yes, we provide professional installation services for
                          all our marble and granite products. Our experienced
                          team ensures precise and efficient installation with
                          meticulous attention to detail.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="marble-countertops-maintenance"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      mb={13}
                      // h={55}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        How do I maintain marble countertops?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Marble countertops should be sealed regularly and
                          cleaned with pH-neutral cleaners. Avoid acidic
                          substances like vinegar, lemon juice, or harsh
                          chemicals, and wipe spills immediately to prevent
                          staining. We provide detailed care instructions with all
                          our products.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="see-stone-before-purchase"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        Can I see the actual stone before purchasing?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          We encourage customers to visit our showroom in Lahore
                          to view our extensive collection of stone slabs before
                          making a purchase decision. This allows you to see the
                          natural variations and select the exact piece for your
                          project.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="delivery-outside-punjab"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        Do you deliver outside of Punjab?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Yes, we deliver throughout Pakistan. Delivery fees may
                          vary based on location and order size. Please contact us
                          for specific delivery information and timelines for your
                          area.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="custom-order-lead-time"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        What is the lead time for custom orders?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Lead times for custom orders typically range from 2-4
                          weeks depending on the complexity of the project,
                          material availability, and current workload. We'll
                          provide you with a specific timeline during your
                          consultation.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="material-samples"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        Do you offer samples of your materials?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Yes, we provide samples of our materials to help you
                          make the right choice for your project. Visit our
                          showroom or contact us to request samples of specific
                          stones you're interested in.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="marble-vs-granite"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        What is the difference between marble and granite?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Marble is a metamorphic rock composed primarily of
                          calcium carbonate, known for its elegant veining and
                          classic beauty. It's softer and more porous than
                          granite. Granite is an igneous rock composed mainly of
                          quartz and feldspar, known for its durability,
                          resistance to scratches and heat, and speckled
                          appearance.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="natural-stone-cost"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        How much does natural stone cost?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          The cost of natural stone varies widely depending on the
                          type, quality, rarity, origin, and dimensions. Basic
                          granites might start around Rs. 250 per square foot,
                          while premium marbles and exotic onyx can cost Rs. 1,500
                          or more per square foot. We offer options for every
                          budget.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
  
                    <Accordion.Item
                      value="product-warranties"
                      style={{ border: "2px solid #f1f5f9", borderRadius: 6 }}
                      // h={55}
                      mb={13}
                    >
                      <Accordion.Control fz={20} fw={600}>
                        Do you offer warranties on your products?
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c={"#97a3ad"} fz={16}>
                          Yes, we offer warranties on both our products and
                          installation services. The specific warranty terms vary
                          by product type. Our sales team will provide detailed
                          warranty information for your specific purchase.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Flex>
            </Stack>
          </Card>
  
          {/* //////////////// */}
  
        
          {/* ///////////// */}
  
          </Stack>
          <Card
            shadow="sm"
            px={10}
            py={50}
            radius="6"
            style={{
              backgroundColor: "#232d3b",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Title order={1} mb="sm" fw={700}>
              Ready to Transform Your Space?
            </Title>
            <Group justify="center">
              <Text color="dimmed" size="lg" mb="xl" w={"50%"}>
                Visit our showroom or contact us today to explore our premium
                collection of marble and granite.
              </Text>
            </Group>
            <Group justify="center" gap="md">
              <Button
                color="orange"
                radius="6px"
                w={130}
                h={44}
                c={"black"}
                fz={16}
                fw={600}
                onClick={()=>navigate('/contact-us')}
              >
                Contact Us
              </Button>
  
              <Button  c={"white"} radius="6px" w={170} h={44}
                onClick={()=>navigate('/products')}
              
              >
                Explore Products
              </Button>
            </Group>
          </Card>
  
          <Card bg={"#222222"}>
            <Stack gap={30}>
              {/* ////////////// */}
  
              <SimpleGrid cols={4} spacing={6}>
                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Free Shipping
                      </Text>
                      <Text color="dimmed" fz={16}>
                        On all orders above PKR 100,000
                      </Text>
                    </div>
                  </Group>
                </Card>
  
                {/* /////////////// */}
  
                <Card
                  shadow="sm"
                  p={10}
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Quality Guarantee
                      </Text>
                      <Text color="dimmed" fz={16}>
                        Premium marble & granite materials
                      </Text>
                    </div>
                  </Group>
                </Card>
  
                {/* //////////// */}
  
                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Luxury Selection
                      </Text>
                      <Text color="dimmed" fz={16}>
                        Curated premium stone collection
                      </Text>
                    </div>
                  </Group>
                </Card>
  
                {/* //////////////// */}
  
                <Card
                  shadow="sm"
                  padding="sm"
                  radius="md"
                  style={{ backgroundColor: "#222", color: "#fff" }}
                >
                  <Group align="center" gap="sm">
                    <ThemeIcon size={36} radius="md" color="orange">
                      <CheckIcon size={20} />
                    </ThemeIcon>
                    <div>
                      <Text fw={500} fz={18}>
                        Expert Support
                      </Text>
                      <Text color="dimmed" fz={16}>
                        Professional service at every step
                      </Text>
                    </div>
                  </Group>
                </Card>
              </SimpleGrid>
  
              {/* /////////////// */}
  
              <Divider py={"xs"} size={"xs"} color="#ced4daff" />
  
              {/* /////////////// */}
            </Stack>
          </Card>
         

        <Footer/>
      </>
    );
  }
  
  export default About;