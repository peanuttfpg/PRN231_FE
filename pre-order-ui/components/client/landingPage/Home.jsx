import Link from "next/link";
import React from "react";
import {
  Image,
  Heading,
  Box,
  Button,
  Spacer,
  Text,
  Flex,
  Img,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import "firebase/compat/auth";

import Action from "../nav";
import { MdTrendingFlat } from "react-icons/md";
import background from "../../../public/assets/images/PreOrder-Banner.png";
import ProductListView from "../productList/productListView";
import Slider from "react-slick";
import LB from "../../../public/assets/images/PreOrder-Banner.png";

export default function SplitWithImage() {
  const router = useRouter();
  const slider = useRef(null);
  const settings = {
    lazyLoad: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    ltr: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    <Box background={"background_main"} height={"100vh"}>
      <Flex
        direction={{ base: "column", sm: "column", md: "row" }}
        pl={{ md: "10%" }}
        mt={{ md: "2rem" }}
      >
        <Box mt="0.5rem">
          {/* dog background */}
          <Box>
            <Image
              alt="doggo"
              src={background.src}
              boxSize="450px"
              mx="-5rem"
              my="-0.5rem"
              width="450rem"
              height="30rem"
            />
          </Box>
          {/* web description */}
          <Box background="background_main" my="250px" borderRadius={"50px"}>
            <Heading>
              <Text
                bgColor={"background_main"}
                align="center"
                color="text"
                fontSize="2.5rem"
                mx="-15rem"
                my="-15.5rem"
              >
                PRE ORDER SHOP
              </Text>
            </Heading>
          </Box>
          {/* <Box padding={{ base: "0", lg: "0rem 5rem" }}>
        <Slider {...settings} ref={slider}>
          {slideImages.map((slideImage, index) => (
            <Flex
              key={index}
              justifyContent="center"
              height="30rem"
              alignContent="center"
            >
              <Img
                borderRadius="30px"
                h={"20rem"}
                w={"12rem"}
                objectFit={"cover"}
                src={slideImage.src}
                alignSelf="center"
              />
            </Flex>
          ))}
        </Slider>
      </Box> */}
          <ProductListView />
          {/* banner background */}
        </Box>
      
      </Flex>
      {/* <Button
                rightIcon={<MdTrendingFlat />}
                backgroundColor="secondary.main"
                color={"white"}
                width={{ base: "8rem", md: "13rem" }}
                height={{ base: "2.5rem", md: "3rem" }}
                fontFamily="Inter"
                fontSize={{ base: "1rem", md: "1.8rem" }}
                borderRadius="30px"
                my={{ md: "4rem" }}
                _hover={{ opacity: "0.8" }}
                onClick={() => router.push("/blog")}
              >
                <Link href="/blog">Xem Blog</Link>
              </Button> */}
    </Box>
  );
}
const slideImages = [LB, LB, LB, LB];