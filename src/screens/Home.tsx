import { VStack, Text, HStack, Avatar, Box, ScrollView } from "native-base";

import { Input } from "../components/Input";
import { CardProfile } from "../components/CardProfile";

import ImageLogo from "../assets/pana.svg";

export function Home() {
  return (
    <VStack flex="1" p="8">
      {/* Header */}
      <HStack justifyContent="space-between" mb="5" mt="5">
        <VStack>
          <Text color="purple.500">Welcome Back</Text>
          <Text fontSize="2xl" fontFamily="heading">
            Hi Musab!
          </Text>
        </VStack>
        <Avatar />
      </HStack>
      {/* fim do header */}

      <Input placeholder="Search" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack
          bg="white.100"
          w="full"
          minH="314px"
          p="3"
          rounded="lg"
          alignItems="center"
          mb="5"
        >
          <Box
            w="full"
            h="200"
            mb="2"
            rounded="xl"
            bgColor="purple.500"
            alignItems="center"
            justifyContent="center"
          >
            <ImageLogo />
          </Box>
          <Text w="full" color="purple.500" fontFamily="Poppins_400Regular">
            Ronald Richards
          </Text>
          <Text w="full" fontSize="md" fontFamily="Poppins_400Regular">
            Amet minim mollit non deserunt ullamco est sit consequatamet.
          </Text>
          <Text w="full" color="gray.500" fontFamily="Poppins_300Light">
            August 7, 2017
          </Text>
        </VStack>

        <CardProfile name="Bessie Cooper" city="8080 Railroad St." />

        <CardProfile name="Marina Cooper" city="7654 Sunnroad Lt." />

        <CardProfile name="Marina Cooper" city="7654 Sunnroad Lt." />

        <CardProfile name="Marina Cooper" city="7654 Sunnroad Lt." />
      </ScrollView>
    </VStack>
  );
}
