import { useState, useEffect } from "react";
import { Box, Container, VStack, Text, Image, Flex, Heading, Button, Link, HStack, IconButton, Input } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$199.99", image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: "$299.99", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: "$399.99", image: "/images/product3.jpg" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

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
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            width="200px"
            ml={4}
            bg="white"
            color="black"
          />
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
            {filteredProducts.map(product => (
              <VStack key={product.id} spacing={4} mb={8} width="200px">
                <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
                <Text fontWeight="bold">{product.name}</Text>
                <Text>{product.price}</Text>
              </VStack>
            ))}
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