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
      sx={{
        width: "auto",
        height: 300,
        gridTemplateColumns: {
          xs: "repeat(1, 1fr) !important",
          sm: "repeat(2, 1fr) !important",
          md: "repeat(4, 1fr) !important",
          lg: "repeat(5, 1fr) !important",
          xl: "repeat(6, 1fr) !important",
        },
      }}
    >
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
              borderRadius: 8,
              height: 200,
            }}
            src={`/image/lambo${item?.image}.jpg`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      https://shift.com/car/2021-black-bmw-4-series/c1865309
    </ImageList>
  );
}
