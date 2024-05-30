import { Box, Container, VStack, Text, Image, Flex, Heading, Button, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">ElectroShop</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Products</Link>
            <Link href="#" color="white">About</Link>
            <Link href="#" color="white">Contact</Link>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="blue.700" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="teal" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Products Section */}
      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading as="h3" size="lg" mb={10} textAlign="center">Featured Products</Heading>
          <Flex wrap="wrap" justify="space-around">
            <VStack spacing={4} mb={8} width="200px">
              <Image src="/images/product1.jpg" alt="Product 1" boxSize="200px" objectFit="cover" />
              <Text fontWeight="bold">Product 1</Text>
              <Text>$199.99</Text>
            </VStack>
            <VStack spacing={4} mb={8} width="200px">
              <Image src="/images/product2.jpg" alt="Product 2" boxSize="200px" objectFit="cover" />
              <Text fontWeight="bold">Product 2</Text>
              <Text>$299.99</Text>
            </VStack>
            <VStack spacing={4} mb={8} width="200px">
              <Image src="/images/product3.jpg" alt="Product 3" boxSize="200px" objectFit="cover" />
              <Text fontWeight="bold">Product 3</Text>
              <Text>$399.99</Text>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg" textAlign="center">
          <HStack spacing={4} justify="center" mb={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" />
          </HStack>
          <Text>Contact us: info@electroshop.com</Text>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;