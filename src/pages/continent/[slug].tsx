import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Heading, Text } from "@chakra-ui/react";

import { loadAllContinents, loadContinent } from "../../../data";

import { Tooltip } from "@chakra-ui/tooltip";
import { InfoOutlineIcon } from "@chakra-ui/icons";

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
  // console.log(continent);

  return (
    <>
      <Head>
        <title>{`WorldTrip | ${continent.name}`}</title>
      </Head>

      <Flex w={"full"} mx={"auto"} direction={"column"} overflow={"hidden"}>
        <Flex
          // BANNER
          w={"full"}
          h={"500px"}
          backgroundImage={`linear-gradient(#00000085, #00000085), url(${continent.slideImg})`}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
        >
          <Flex
            w={"full"}
            maxW={"1160px"}
            mx={"auto"}
            mb={"59px"}
            alignSelf={"end"}
          >
            <Heading fontSize={"48px"} lineHeight={"72px"} fontWeight={"600"}>
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <Flex
          // BIO - INFO
          w={"full"}
          maxW={"1160px"}
          mx={"auto"}
          my={"80px"}
          align={"center"}
          // bg={"gray.200"}
        >
          <Flex w={"600px"}>
            <Text
              fontSize={"24px"}
              color={"dark.headingsAndText"}
              lineHeight={"36px"}
              textAlign={"justify"}
            >
              {continent.bio}
            </Text>
          </Flex>

          <Flex ml={"70px"} w={"490px"} justify={"space-between"}>
            <Flex direction={"column"} align={"center"}>
              <Heading
                color={"highlight"}
                fontSize={48}
                fontWeight={600}
                lineHeight={"72px"}
              >
                {continent.info.paises}
              </Heading>
              <Text
                color={"dark.headingsAndText"}
                fontWeight={600}
                fontSize={24}
                lineHeight={"36px"}
              >
                países
              </Text>
            </Flex>

            <Flex direction={"column"} align={"center"}>
              <Heading
                color={"highlight"}
                fontSize={48}
                fontWeight={600}
                lineHeight={"72px"}
              >
                {continent.info.linguas}
              </Heading>
              <Text
                color={"dark.headingsAndText"}
                fontWeight={600}
                fontSize={24}
                lineHeight={"36px"}
              >
                línguas
              </Text>
            </Flex>

            <Flex direction={"column"} align={"center"}>
              <Heading
                color={"highlight"}
                fontSize={48}
                fontWeight={600}
                lineHeight={"72px"}
              >
                {continent.info.cidadesmais}
              </Heading>
              <Text
                color={"dark.headingsAndText"}
                fontWeight={600}
                fontSize={24}
                lineHeight={"36px"}
              >
                cidades +100
                <Tooltip hasArrow label={continent.bio} fontSize="md">
                  <InfoOutlineIcon
                    ml={"5px"}
                    fontSize={"16px"}
                    color={"dark.info50"}
                  />
                </Tooltip>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const continent = await loadContinent(slug);

  return {
    props: { continent },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = await loadAllContinents();

  const paths = continents.map((c) => ({
    params: {
      slug: c.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
