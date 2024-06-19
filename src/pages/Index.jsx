import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Image src="/images/new-youtube-logo.svg" alt="YouTube Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold">YouTube Clone</Text>
      </Flex>
      <Box bg="gray.100" p={4} borderRadius="md">
        <VStack spacing={4}>
          <Text fontSize="xl">Welcome to the YouTube Clone</Text>
          <Text>Explore videos, channels, and more.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;