import Head from "next/head";
import type { NextPage } from "next";

import { Box, Flex, Heading } from "@chakra-ui/react";

import { Slide } from "../components/home/slide";
import { Banner } from "../components/home/banner";
import { TravelTypes } from "../components/home/travel-types";

import { getContinents } from "../../data";

const Home: NextPage = () => {
  const continents = getContinents();

  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>
      <Flex w={"full"} mx={"auto"} direction={"column"} overflow={"hidden"}>
        <Banner />
        <TravelTypes />

        <Box
          // SEPARADOR
          width={"90px"}
          height={`2px`}
          bg="dark.headingsAndText"
          mx="auto"
          mt={20}
        />

        <Heading
          color={"dark.headingsAndText"}
          fontWeight={"500"}
          textAlign="center"
          lineHeight="54px"
          mx="auto"
          mt={"52px"}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>

        <Slide continents={continents} />
      </Flex>
    </>
  );
};

export default Home;
