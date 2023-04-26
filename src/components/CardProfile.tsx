import { HStack, VStack, Text, Avatar, useTheme } from "native-base";

import { Feather, AntDesign } from "@expo/vector-icons";

interface Props {
  name: string;
  job?: string;
  city: string;
}

export function CardProfile({ name, job, city }: Props) {
  const { colors } = useTheme();

  return (
    <VStack bg="#F2F2F2" w="full" p="3" mb="3" rounded="lg">
      <HStack alignItems="center">
        <Avatar />
        <VStack pl="2">
          <Text fontFamily="Poppins_600SemiBold">{name}</Text>
          <Text
            color="purple.500"
            fontSize="xs"
            fontFamily="Poppins_400Regular"
          >
            {job ? job : "unemployed"}
          </Text>
          <Text fontSize="xs" fontFamily="Poppins_300Light">
            {city}
          </Text>
        </VStack>
        <Feather
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          name="star"
          size={24}
          color={colors.gray[500]}
        />
      </HStack>
    </VStack>
  );
}
