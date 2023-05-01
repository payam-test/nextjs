import React, { useMemo, useRef, useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import DiscreteSlider from "./components/Slider";

const Container = styled(Box)({
  height: "90vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  boxShadow: "0 0 100px lightyellow",
  border: "1px solid lightyellow",
  borderRadius: 8,
  flexShrink: 1,
  "&:hover": {
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    borderColor: "#005cbf",
  },
});

const imageStyle = {
  width: "auto",
  height: "auto",
  borderRadius: 8,
};

export default function Car360() {
  const [imageIndex, setImageIndex]: any = useState(1);
  const ref: any = useRef();
  const matches = useMediaQuery("(max-width:600px)");
  if (ref?.current) var { clientWidth } = ref?.current;

  const src: any = useMemo(() => {
    return `/image/lambo${imageIndex}.jpg`;
  }, [imageIndex]);

  useEffect(() => {
    if (imageIndex <= 0 || imageIndex >= 51) setImageIndex(50);
  }, [imageIndex]);

  const handleClick = (data: any) => {
    if (imageIndex <= 0 || imageIndex >= 51) return;
    const { nativeEvent } = data;
    const { offsetX } = nativeEvent;
    const divideClienWidth = clientWidth / 2;
    if (offsetX > divideClienWidth) setImageIndex((prev: number) => ++prev);
    else setImageIndex((prev: any) => --prev);
  };

  const handleChaneIndex = (data: React.SetStateAction<number>) => {
    setImageIndex(data);
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    const { nativeEvent } = e;
    const { offsetX } = nativeEvent;
    let oldX = 0; // detect cursor direction

    if (offsetX > oldX) {
      oldX = offsetX;
      setTimeout(() => {
        const time = imageIndex + 1;
        setImageIndex(time);
      }, 100);
      console.log(offsetX, "offset");
    } else if (offsetX < oldX) {
      oldX = offsetX;
      setTimeout(() => {
        const time = imageIndex - 1;
        setImageIndex(time);
      }, 100);
      console.log(oldX, "oldxP");
    }
  };

  return (
    <Container sx={{ width: clientWidth ? clientWidth : "500px" }}>
      <DiscreteSlider
        index={imageIndex}
        setImageIndex={(data: React.SetStateAction<number>) =>
          handleChaneIndex(data)
        }
      />
      <Image
        // onClick={handleClick}
        // onDrag={handleDrag}
        style={imageStyle}
        src={src}
        ref={ref}
        width={matches ? 300 : 600}
        height={500}
        alt={"image"}
      />
    </Container>
  );
}
