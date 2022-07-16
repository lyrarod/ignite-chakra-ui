import { Flex, Image } from "@chakra-ui/react";
import type { NextComponentType } from "next";

export const Header: NextComponentType = () => {
  return (
    <Flex
      as={"header"}
      width={"100vw"}
      maxWidth={"1440px"}
      height={"100px"}
      mx={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        src={"/assets/logo.svg"}
        alt="logo"
        width={"184.06px"}
        height={"45.92px"}
      />
    </Flex>
  );
};
