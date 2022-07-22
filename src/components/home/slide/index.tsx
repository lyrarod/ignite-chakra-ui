import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

type Continents = {
  name: string;
  slug: string;
  title: string;
  slideImg: string;
};

interface SlideProps {
  continents: Continents[];
}

export const Slide = ({ continents }: SlideProps) => {
  return (
    <Flex
      mx="auto"
      w={"full"}
      maxW={{ base: "375px", md: "1240px" }}
      h={{ base: "250px", md: "450px" }}
      my={{ base: "20px", md: "52px" }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {continents?.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Link href={`/continent/${continent.slug}`}>
              <a>
                <Flex
                  w="full"
                  maxW={{ base: "375px", md: "1240px" }}
                  h={{ base: "250px", md: "450px" }}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  backgroundSize={"cover"}
                  backgroundPosition={"center"}
                  backgroundRepeat={"no-repeat"}
                  backgroundImage={`linear-gradient(#00000075, #00000075), url('${continent.slideImg}')`}
                >
                  <Heading
                    fontSize={{ base: "24px", md: "48px" }}
                    lineHeight={{ base: "36px", md: "72px" }}
                    color={"light.headingsAndText"}
                  >
                    {continent.name}
                  </Heading>
                  <Text
                    fontSize={{ base: "14px", md: "24px" }}
                    lineHeight={{ base: "21px", md: "36px" }}
                    color={"light.info"}
                  >
                    {continent.title}
                  </Text>
                </Flex>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
