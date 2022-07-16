import { Flex, Image, Text } from "@chakra-ui/react";

export const TravelTypes = () => {
  return (
    <Flex
      width={"100%"}
      maxWidth={"1160px"}
      mx="auto"
      mt={"80px"}
      align="center"
      justifyContent={"space-between"}
      color={"dark.headingsAndText"}
      fontSize="24"
      fontWeight={"600"}
    >
      <Flex direction={"column"} alignItems="center">
        <Image
          src="/assets/cocktail 1.svg"
          alt="cocktail"
          width={85}
          height={85}
        />
        <Text mt={6}>vida noturna</Text>
      </Flex>

      <Flex direction={"column"} alignItems="center">
        <Image src="/assets/surf 1.svg" alt="cocktail" width={85} height={85} />
        <Text mt={6}>praia</Text>
      </Flex>

      <Flex direction={"column"} alignItems="center">
        <Image
          src="/assets/building 1.svg"
          alt="cocktail"
          width={85}
          height={85}
        />
        <Text mt={6}>moderno</Text>
      </Flex>

      <Flex direction={"column"} alignItems="center">
        <Image
          src="/assets/museum 1.svg"
          alt="cocktail"
          width={85}
          height={85}
        />
        <Text mt={6}>clássico</Text>
      </Flex>

      <Flex direction={"column"} alignItems="center">
        <Image
          src="/assets/earth 1.svg"
          alt="cocktail"
          width={85}
          height={85}
        />
        <Text mt={6}>e mais...</Text>
      </Flex>
    </Flex>
  );
};
