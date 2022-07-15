import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import Head from "next/head";
import type { NextPage } from "next";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>
      <Flex direction={"column"}>
        <Flex
          // HEADER

          as={"header"}
          width={"100vw"}
          maxWidth={"1440px"}
          height={"100px"}
          mx={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            src={"/assets/logo.svg"}
            alt="logo"
            width={"184.06px"}
            height={"45.92px"}
          />
        </Flex>

        <Flex
          // BANNER

          width={"full"}
          height={"368.21px"}
          alignItems="center"
          justifyContent={"space-between"}
          px={"140px"}
          backgroundImage={"url('/assets/background.svg')"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
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

        <Flex
          // TRAVEL TYPES
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
            <Image
              src="/assets/surf 1.svg"
              alt="cocktail"
              width={85}
              height={85}
            />
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

        <Flex width={"1240px"} h={"450px"} mx="auto" my={"52px"}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Flex position={"relative"}>
                <Image src="/assets/europe.svg" alt="Europe" />
                <Box
                  position={"absolute"}
                  top="50%"
                  left={"50%"}
                  transform="translate(-50%, -50%)"
                  textAlign={"center"}
                  fontWeight={"700"}
                >
                  <Heading
                    fontSize={"48px"}
                    lineHeight={"72px"}
                    color={"light.headingsAndText"}
                  >
                    Europa
                  </Heading>
                  <Text
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    color={"light.info"}
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex position={"relative"}>
                <Image src="/assets/europe.svg" alt="Europe" />
                <Box
                  position={"absolute"}
                  top="50%"
                  left={"50%"}
                  transform="translate(-50%, -50%)"
                  textAlign={"center"}
                  fontWeight={"700"}
                >
                  <Heading
                    fontSize={"48px"}
                    lineHeight={"72px"}
                    color={"light.headingsAndText"}
                  >
                    Europa
                  </Heading>
                  <Text
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    color={"light.info"}
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex position={"relative"}>
                <Image src="/assets/europe.svg" alt="Europe" />
                <Box
                  position={"absolute"}
                  top="50%"
                  left={"50%"}
                  transform="translate(-50%, -50%)"
                  textAlign={"center"}
                  fontWeight={"700"}
                >
                  <Heading
                    fontSize={"48px"}
                    lineHeight={"72px"}
                    color={"light.headingsAndText"}
                  >
                    Europa
                  </Heading>
                  <Text
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    color={"light.info"}
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex position={"relative"}>
                <Image src="/assets/europe.svg" alt="Europe" />
                <Box
                  position={"absolute"}
                  top="50%"
                  left={"50%"}
                  transform="translate(-50%, -50%)"
                  textAlign={"center"}
                  fontWeight={"700"}
                >
                  <Heading
                    fontSize={"48px"}
                    lineHeight={"72px"}
                    color={"light.headingsAndText"}
                  >
                    Europa
                  </Heading>
                  <Text
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    color={"light.info"}
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex position={"relative"}>
                <Image src="/assets/europe.svg" alt="Europe" />
                <Box
                  position={"absolute"}
                  top="50%"
                  left={"50%"}
                  transform="translate(-50%, -50%)"
                  textAlign={"center"}
                  fontWeight={"700"}
                >
                  <Heading
                    fontSize={"48px"}
                    lineHeight={"72px"}
                    color={"light.headingsAndText"}
                  >
                    Europa
                  </Heading>
                  <Text
                    fontSize={"24px"}
                    lineHeight={"36px"}
                    color={"light.info"}
                  >
                    O continente mais antigo.
                  </Text>
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
