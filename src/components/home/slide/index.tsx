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
    <Flex w={"full"} maxW={"1240px"} h={"450px"} mx="auto" my={"52px"}>
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
                  w={"1240px"}
                  h={"450px"}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  background={`linear-gradient(#00000075,#00000075), url('${continent.slideImg}')`}
                  backgroundPosition={"center"}
                  backgroundRepeat={"no-repeat"}
                  backgroundSize={"cover"}
                >
                  <Heading
                    fontSize={"48px"}
                    lineHeight={"72px"}
                    color={"light.headingsAndText"}
                  >
                    {continent.name}
                  </Heading>
                  <Text
                    fontSize={"24px"}
                    lineHeight={"36px"}
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
