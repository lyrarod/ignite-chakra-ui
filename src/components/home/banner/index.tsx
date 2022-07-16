import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Banner = () => {
  return (
    <Flex
      w={"full"}
      height={"368.21px"}
      px={"140px"}
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
      >
        <Box>
          <Heading fontWeight={"500"} fontSize={36} lineHeight={"54px"}>
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text color="light.info" fontSize={20} lineHeight={"30px"} mt={5}>
            Chegou a hora de tirar do papel a viagem que você
            <br />
            sempre sonhou.
          </Text>
        </Box>
        <Image
          src="/assets/airplane.svg"
          alt="airplane"
          transform={`translateY(76px)`}
          display={["none", "none", "block"]}
        />
      </Flex>
    </Flex>
  );
};
