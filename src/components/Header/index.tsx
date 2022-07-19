import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      as={"header"}
      w={"full"}
      maxW={"1160px"}
      h={"100px"}
      mx={"auto"}
      align={"center"}
      justify={"center"}
      position={"relative"}
    >
      {asPath !== "/" && (
        <Link href={"/"}>
          <a>
            <ChevronLeftIcon
              w={"2em"}
              h={"2em"}
              color="#47585B"
              position={"absolute"}
              left={0}
              top={"50%"}
              transform={"translateY(-50%)"}
            />
          </a>
        </Link>
      )}

      {asPath === "/" ? (
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={"184.06px"}
          height={"45.92px"}
        />
      ) : (
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
      )}
    </Flex>
  );
};
