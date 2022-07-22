import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";

const Logo = () => (
  <Image
    src={"/assets/logo.svg"}
    alt="logo"
    w={{ base: "81px", md: "184px" }}
    h={{ base: "20px", md: "45px" }}
  />
);

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <Flex
      as={"header"}
      w={"full"}
      h={{
        base: "50px",
        md: "100px",
      }}
      bg="bgColor"
      boxShadow={"0 2px 3px #00000030"}
      position={asPath !== "/" ? "fixed" : "static"}
      zIndex={"999"}
    >
      <Flex
        w={"1160px"}
        mx="auto"
        align="center"
        justify="center"
        position={"relative"}
      >
        {asPath !== "/" && (
          <Link href={"/"}>
            <a>
              <ChevronLeftIcon
                w={{ base: "16px", md: "32px" }}
                h={{ base: "16px", md: "32px" }}
                color="dark.headingsAndText"
                position={"absolute"}
                left={{ base: "16px", md: 0 }}
                top={"50%"}
                transform={"translateY(-50%)"}
              />
            </a>
          </Link>
        )}

        {asPath === "/" ? (
          <Logo />
        ) : (
          <Link href={"/"}>
            <a>
              <Logo />
            </a>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
