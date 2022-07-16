import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex
      as={"header"}
      w={"full"}
      maxW={"1440px"}
      h={"100px"}
      mx={"auto"}
      align={"center"}
      justify={"center"}
    >
      <Link href={"/"}>
        <a>
          <Image
            src={"/assets/logo.svg"}
            alt="logo"
            width={"184.06px"}
            height={"45.92px"}
          />
        </a>
      </Link>
    </Flex>
  );
};
