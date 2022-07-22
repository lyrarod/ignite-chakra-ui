import Head from "next/head";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Divider, Flex, Heading } from "@chakra-ui/react";

import { Slide } from "../components/home/slide";
import { Banner } from "../components/home/banner";
import { TravelTypes } from "../components/home/travel-types";

import { getContinents } from "../data";

type Continents = {
  name: string;
  slug: string;
  title: string;
  slideImg: string;
};

const Home: NextPage = () => {
  const [continents, setContinents] = useState<Continents[]>([]);

  useEffect(() => {
    const loadContinents = async () => {
      const res = await getContinents();
      setContinents(res);
    };
    loadContinents();
  }, []);

  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>
      <Flex w={"full"} mx={"auto"} direction={"column"} overflow={"hidden"}>
        <Banner />
        <TravelTypes />

        <Divider
          mx="auto"
          bg="dark.headingsAndText"
          width={{ base: "60px", md: "90px" }}
          height={{ base: "1px", md: "2px" }}
          mt={{ base: "36px", md: "80px" }}
        />

        <Heading
          fontSize={{ base: "20px", md: "36px" }}
          color={"dark.headingsAndText"}
          fontWeight={500}
          textAlign="center"
          lineHeight={{ base: "30px", md: "54px" }}
          mx="auto"
          mt={{ base: "24px", md: "52px" }}
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
