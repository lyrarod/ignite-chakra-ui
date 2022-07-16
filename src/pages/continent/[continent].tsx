import { Flex, Heading } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function Continent() {
  const {
    query: { continent },
  } = useRouter();

  console.log(continent);

  return (
    <>
      <Flex>
        <Heading color={"gray.900"}>Continent Page {continent}</Heading>
      </Flex>
    </>
  );
}
