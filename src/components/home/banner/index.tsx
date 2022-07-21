import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { numberOfContinents } from "../../../data";

export const Banner = () => {
  return (
    <Flex
      w={"full"}
      height={{ base: 163, md: 368 }}
      paddingLeft={{ base: "16px", md: "0" }}
      backgroundImage={"url('/assets/background.svg')"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Flex
        w={"full"}
        maxW={"1160px"}
        mx={"auto"}
        alignItems="center"
        justifyContent={"space-between"}
        // bg="tomato"
      >
        <Box>
          <Heading
            fontWeight={"500"}
            fontSize={{ base: 20, md: 36 }}
            lineHeight={{ base: "30px", md: "54px" }}
          >
            {numberOfContinents} Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            w={{ base: "333px", md: "524px" }}
            color="light.info"
            fontSize={{ base: 14, md: 20 }}
            lineHeight={{ base: "21px", md: "30px" }}
            mt={{ base: 2, md: 5 }}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          src="/assets/airplane.svg"
          alt="airplane"
          transform={`translateY(76px)`}
          display={{ base: "none", md: "block" }}
        />
      </Flex>
    </Flex>
  );
};
