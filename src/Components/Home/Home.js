import React from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Button,
  Flex,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Container maxW="container.md">
        <SimpleGrid columns={1} spacing={5}>
          <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Stat>
                <StatLabel
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="s"
                  textTransform="uppercase"
                >
                  Collected Fees
                </StatLabel>
                <StatNumber>PHP 0.00</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23.36%
                </StatHelpText>
                <StatHelpText>
                  <Flex>
                    <Spacer />
                    <Button colorScheme="teal" variant="outline">
                      Add Collection
                    </Button>
                  </Flex>
                </StatHelpText>
              </Stat>
            </Box>
          </Box>
          <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="s"
                  textTransform="uppercase"
                >
                  Total Collected Balance
                </Box>
              </Box>

              <Box
                mt="2"
                fontWeight="bold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                PHP 5343.00
              </Box>

              {/* <Box>
                <Flex>
                  <Spacer />
                  <Button colorScheme="teal" variant="outline">
                    Add Collection
                  </Button>
                </Flex>
              </Box> */}
            </Box>
          </Box>

          <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="s"
                  textTransform="uppercase"
                >
                  Loaned Amount Remaining
                </Box>
              </Box>
              <Box
                mt="2"
                fontWeight="bold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                PHP 3427.00
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Home;
