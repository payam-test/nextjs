import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { carDetail } from "../utils/data";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { red, green, blue } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

export default function ShowAllCar() {
  const theme = useTheme();
  return (
    <ImageList
      gap={2}
      style={{
        width: "auto",
        height: 300,
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "repeat(4, 1fr)",
        },
        [theme.breakpoints.down("lg")]: {
          gridTemplateColumns: "repeat(5, 1fr)",
        },
        [theme.breakpoints.up("lg")]: {
          gridTemplateColumns: "repeat(6, 1fr)",
        },
      }}
    >
      https://shift.com/car/2021-black-bmw-4-series/c1865309
      {carDetail.map((item) => (
        <ImageListItem
          sx={{
            width: 200,
            height: 200,
          }}
          key={item.image}
        >
          <img
            style={{
              objectFit: "contain",
              width: 200,
              height: 200,
              borderRadius: 8,
            }}
            src={`/image/lambo${item?.image}.jpg`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
