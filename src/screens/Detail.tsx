import {
  Avatar,
  Box,
  VStack,
  Text,
  HStack,
  Button,
  useToast,
  ScrollView,
} from "native-base";

import { Feather } from "@expo/vector-icons";

import ImageLogo from "../assets/logo-2.svg";

export function Detail() {
  const toast = useToast();

  return (
    <VStack flex="1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          w="full"
          bgColor="purple.500"
          h="350px"
          roundedBottomLeft={35}
          roundedBottomRight={35}
          // alignItems="center"
          // justifyContent="center"
        >
          <HStack
            alignItems="center"
            justifyContent="space-between"
            mt="10"
            px="8"
          >
            <Feather name="arrow-left" size={30} color="white" />
            <Feather name="info" size={30} color="white" />
          </HStack>

          <Box position="absolute" bottom="10" alignSelf="center">
            <ImageLogo />
          </Box>
          <Box position="absolute" bottom="-30" px="8">
            <Avatar width="75" height="75" />
          </Box>
        </Box>
        <VStack p="8" my="4">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontFamily="Poppins_400Regular" color="purple.500">
              Ronald Richards
            </Text>
            <Feather
              name="star"
              size={25}
              // color={colors.gray[500]}
            />
          </HStack>
          <Text fontFamily="Poppins_400Regular" fontSize="lg" mt="3">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </Text>
          <Text mt="2" fontFamily="Poppins_300Light" color="gray.500">
            August 7, 2017
          </Text>
          <Button
            rounded="2xl"
            bgColor="purple.500"
            mt="4"
            p="4"
            onPress={() => {
              toast.show({
                placement: "top",
                title: "Vaga aplicada com sucesso !",
                bgColor: "green.500",
              });
            }}
          >
            <Text color="white" fontSize="lg" fontFamily="Poppins_600SemiBold">
              Apply
            </Text>
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
