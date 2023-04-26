import { Icon, Input as NativeInput, IInputProps } from "native-base";

import { Feather } from "@expo/vector-icons";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeInput
      bgColor="white.100"
      variant="rounded"
      placeholderTextColor="gray.300"
      mb="4"
      borderWidth={0}
      fontFamily="Poppins_400Regular"
      _focus={{
        borderColor: "gray.500",
        borderWidth: 1,
      }}
      InputLeftElement={
        <Icon as={Feather} name="search" size={6} ml="2" color="gray.500" />
      }
      {...rest}
    />
  );
}
