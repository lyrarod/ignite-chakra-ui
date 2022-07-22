import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/tooltip";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import { getContinents, getContinentBySlug } from "../../data";

type Continent = {
  name: string;
  slug: string;
  banner: string;
  slideImg: string;
  bio: string;
  info: {
    paises: number;
    linguas: number;
    cidadesmais: number;
  };
  cities: [
    {
      city: string;
      subtitle: string;
      foto: string;
      ellipse: string;
    }
  ];
};

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{`WorldTrip | ${continent.name}`}</title>
      </Head>

      <Flex
        w={"full"}
        mx={"auto"}
        direction={"column"}
        overflow={"hidden"}
        pt={{ base: "50px", md: "100px" }}
      >
        <Flex
          // BANNER
          w={"full"}
          h={{ base: "150px", md: "500px" }}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundImage={`linear-gradient(#00000075, #00000075), url('${continent.slideImg}')`}
        >
          <Flex
            w={"full"}
            maxW={"1160px"}
            mx={"auto"}
            mb={{ base: 0, md: "59px" }}
            alignSelf={{ base: "center", md: "end" }}
            justify={{ base: "center", md: "initial" }}
          >
            <Heading
              fontSize={{ base: "28px", md: "48px" }}
              lineHeight={{ base: "42px", md: "72px" }}
              fontWeight={"600"}
            >
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <Flex
          // BIO - INFO
          w={"full"}
          maxW={"1160px"}
          mx={"auto"}
          mt={{ base: "24px", md: "80px" }}
          align={"center"}
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex w={{ base: "343px", md: "600px" }}>
            <Text
              fontSize={{ base: "14px", md: "24px" }}
              color={"dark.headingsAndText"}
              lineHeight={{ base: "21px", md: "36px" }}
              textAlign={"justify"}
            >
              {continent.bio}
            </Text>
          </Flex>

          <Flex
            ml={{ base: 0, md: "70px" }}
            mt={{ base: "16px", md: 0 }}
            w={{ base: "343px", md: "490px" }}
            justify={"space-between"}
          >
            <Flex
              direction={"column"}
              align={{ base: "initial", md: "center" }}
            >
              <Heading
                fontWeight={600}
                color={"highlight"}
                fontSize={{ base: "24px", md: "48px" }}
                lineHeight={{ base: "36px", md: "72px" }}
              >
                {continent.info.paises}
              </Heading>
              <Text
                fontWeight={400}
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight={{ base: "27px", md: "36px" }}
                color={"dark.headingsAndText"}
              >
                países
              </Text>
            </Flex>

            <Flex
              direction={"column"}
              align={{ base: "initial", md: "center" }}
            >
              <Heading
                fontWeight={600}
                color={"highlight"}
                fontSize={{ base: "24px", md: "48px" }}
                lineHeight={{ base: "36px", md: "72px" }}
              >
                {continent.info.linguas}
              </Heading>
              <Text
                fontWeight={400}
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight={{ base: "27px", md: "36px" }}
                color={"dark.headingsAndText"}
              >
                línguas
              </Text>
            </Flex>

            <Flex
              direction={"column"}
              align={{ base: "initial", md: "center" }}
            >
              <Heading
                fontWeight={600}
                color={"highlight"}
                fontSize={{ base: "24px", md: "48px" }}
                lineHeight={{ base: "36px", md: "72px" }}
              >
                {continent.info.cidadesmais}
              </Heading>
              <Text
                fontWeight={400}
                fontSize={{ base: "18px", md: "24px" }}
                lineHeight={{ base: "27px", md: "36px" }}
                color={"dark.headingsAndText"}
              >
                cidades +100
                <Tooltip hasArrow label={continent.bio} fontSize="md">
                  <InfoOutlineIcon
                    ml={"5px"}
                    fontSize={{ base: "10px", md: "16px" }}
                    color={"dark.info50"}
                  />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          // CIDADES +100 CONTAINER

          w={"full"}
          maxW={{ base: "343px", md: "1160px" }}
          mx={"auto"}
          direction={"column"}
          mt={{ base: "32px", md: "80px" }}
        >
          <Heading
            color={"dark.headingsAndText"}
            fontWeight={500}
            lineHeight={{ base: "36px", md: "54px" }}
            fontSize={{ base: "24px", md: "36px" }}
          >
            Cidades +100
          </Heading>

          <Flex
            // CIDADES +100 CARD CONTAINER
            gap={{ base: "20px", md: "45px" }}
            w={"full"}
            my={{ base: "20px", md: "40px" }}
            wrap={"wrap"}
            justify={{ base: "center", md: "initial" }}
          >
            {continent.cities?.map((c, i) => (
              <Flex
                // CIDADES +100 CARDS
                key={`${c.city}${i}`}
                w={"256px"}
                h={"279px"}
                borderRadius={"4px"}
                overflow={"hidden"}
                direction={"column"}
                bg={"white"}
              >
                <Image src={c.foto} alt={c.city} w={256} h={173} />

                <Box
                  borderWidth={1}
                  borderTop={"none"}
                  borderColor={"highlight50"}
                  w="full"
                  h="full"
                >
                  <Flex mt={"18px"} mx="auto">
                    <Flex
                      w={208}
                      mx="auto"
                      align={"center"}
                      justify={"space-between"}
                      // bg={"gray.200"}
                    >
                      <Flex direction={"column"} justify={"center"}>
                        <Heading
                          fontFamily={`'Barlow', sans-serif`}
                          fontSize={20}
                          fontWeight={600}
                          lineHeight={"25px"}
                          color={"dark.headingsAndText"}
                        >
                          {c.city}
                        </Heading>
                        <Text
                          color={"dark.info"}
                          fontFamily={`'Barlow', sans-serif`}
                          fontSize={16}
                          fontWeight={500}
                          lineHeight={"26px"}
                          mt={"12px"}
                        >
                          {c.subtitle}
                        </Text>
                      </Flex>
                      <Avatar w={30} h={30} src={c.ellipse} />
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const continent = await getContinentBySlug(slug);

  return {
    props: { continent },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await getContinents();

  const paths = continents.map((c) => ({
    params: {
      slug: c.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
