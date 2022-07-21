import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { useRouter } from "next/router";

const Logo = () => (
  <Image
    src={"/assets/logo.svg"}
    alt="logo"
    w={{ base: 81, md: 184 }}
    h={{ base: 20, md: 45 }}
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
    >
      <Flex
        w={1160}
        mx="auto"
        align="center"
        justify="center"
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
