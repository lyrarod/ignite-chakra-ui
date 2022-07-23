import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

type TypesComponentProps = {
  src: string;
  alt: string;
  text: string;
};

export const TravelTypes = () => {
  const [mobile] = useMediaQuery("(max-width: 767px)");

  const TypesComponent = ({ src, alt, text }: TypesComponentProps) => {
    const srcImg = mobile ? "/assets/ellipse-home.png" : src;

    return (
      <Flex align="center" direction={{ base: "row", md: "column" }}>
        <Image
          src={srcImg}
          alt={alt}
          w={{ base: "8px", md: "85px" }}
          h={{ base: "8px", md: "85px" }}
        />
        <Text mt={{ base: 0, md: 6 }} ml={{ base: 2, md: 0 }}>
          {text}
        </Text>
      </Flex>
    );
  };

  return mobile ? (
    <Flex
      w={"full"}
      maxW={{ base: "275px", md: "1160px" }}
      wrap="wrap"
      mx="auto"
      mt={{ base: "36px", md: "80px" }}
      color={"dark.headingsAndText"}
      fontSize={{ base: "18px", md: "24px" }}
      fontWeight={{ base: "500", md: "600" }}
    >
      <Flex w="full" justify={"space-between"}>
        <TypesComponent
          src={"/assets/cocktail 1.svg"}
          alt="cocktail"
          text="vida noturna"
        />

        <TypesComponent src={"/assets/surf 1.svg"} alt="praia" text="praia" />
      </Flex>

      <Flex w="full" justify={"space-between"} mt="24px">
        <TypesComponent
          src={"/assets/building 1.svg"}
          alt="moderno"
          text="moderno"
        />

        <TypesComponent
          src="/assets/museum 1.svg"
          alt="clássico"
          text="clássico"
        />
      </Flex>

      <Flex w="full" justify={"center"} mt="24px">
        <TypesComponent
          src="/assets/earth 1.svg"
          alt="e mais..."
          text="e mais..."
        />
      </Flex>
    </Flex>
  ) : (
    <Flex
      w={"full"}
      maxW={{ base: "275px", md: "1160px" }}
      wrap="wrap"
      mx="auto"
      mt={{ base: "36px", md: "80px" }}
      justifyContent="space-between"
      color={"dark.headingsAndText"}
      fontSize={{ base: "18px", md: "24px" }}
      fontWeight={{ base: "500", md: "600" }}
    >
      <TypesComponent
        src={"/assets/cocktail 1.svg"}
        alt="cocktail"
        text="vida noturna"
      />

      <TypesComponent src={"/assets/surf 1.svg"} alt="praia" text="praia" />

      <TypesComponent
        src={"/assets/building 1.svg"}
        alt="moderno"
        text="moderno"
      />

      <TypesComponent
        src="/assets/museum 1.svg"
        alt="clássico"
        text="clássico"
      />

      <TypesComponent
        src="/assets/earth 1.svg"
        alt="e mais..."
        text="e mais..."
      />
    </Flex>
  );
};
