import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import DiscreteSlider from "./components/Slider";
import PlusIcon from "./components/PlusIcon";
import ShowWindowDimensions from "./utils/resize";

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

const carDetail = [
  { image: 1, x: 25, y: 50, title: "the hood" },
  { image: 2, x: 25, y: 50, title: "the hood" },
  { image: 3, x: 20, y: 50, title: "the hood" },
  { image: 4, x: 20, y: 50, title: "the hood" },
  { image: 5, x: 15, y: 50, title: "the hood" },
  { image: 6, x: 30, y: 60, title: "the hood" },
  { image: 7, x: 30, y: 60, title: "the hood" },
  { image: 8, x: 30, y: 60, title: "the hood" },
  { image: 9, x: 40, y: 50, title: "the hood" },
  { image: 10, x: 40, y: 50, title: "the hood" },
  { image: 11, x: 70, y: 60, title: "the hood" },
  { image: 12, x: 85, y: 60, title: "the hood" },
  { image: 13, x: 87, y: 50, title: "the hood" },
  { image: 14, x: 85, y: 50, title: "the hood" },
  { image: 15, x: 30, y: 60, title: "the hood" },
  { image: 16, x: 40, y: 50, title: "the hood" },
  { image: 17, x: 40, y: 50, title: "the hood" },
  { image: 18, x: 70, y: 60, title: "the hood" },
  { image: 19, x: 50, y: 60, title: "the hood" },
  { image: 20, x: 70, y: 50, title: "the hood" },
  { image: 21, x: 50, y: 50, title: "the hood" },
  { image: 22, x: 25, y: 50, title: "the hood" },
  { image: 23, x: 25, y: 50, title: "the hood" },
  { image: 24, x: 20, y: 50, title: "the hood" },
  { image: 25, x: 20, y: 50, title: "the hood" },
  { image: 26, x: 15, y: 50, title: "the hood" },
  { image: 27, x: 30, y: 60, title: "the hood" },
  { image: 28, x: 30, y: 60, title: "the hood" },
  { image: 29, x: 30, y: 60, title: "the hood" },
  { image: 30, x: 40, y: 50, title: "the hood" },
  { image: 31, x: 40, y: 50, title: "the hood" },
  { image: 32, x: 70, y: 60, title: "the hood" },
  { image: 33, x: 85, y: 60, title: "the hood" },
  { image: 34, x: 90, y: 50, title: "the hood" },
  { image: 35, x: 90, y: 50, title: "the hood" },
  { image: 36, x: 30, y: 60, title: "the hood" },
  { image: 37, x: 40, y: 50, title: "the hood" },
  { image: 38, x: 40, y: 50, title: "the hood" },
  { image: 39, x: 70, y: 60, title: "the hood" },
  { image: 40, x: 85, y: 60, title: "the hood" },
  { image: 41, x: 50, y: 50, title: "the hood" },
  { image: 42, x: 90, y: 50, title: "the hood" },
  { image: 43, x: 50, y: 60, title: "the hood" },
  { image: 44, x: 40, y: 50, title: "the hood" },
  { image: 45, x: 40, y: 50, title: "the hood" },
  { image: 46, x: 50, y: 60, title: "the hood" },
  { image: 47, x: 50, y: 60, title: "the hood" },
  { image: 48, x: 60, y: 50, title: "the hood" },
  { image: 49, x: 50, y: 50, title: "the hood" },
  { image: 50, x: 60, y: 50, title: "the hood" },
];

export default function Car360() {
  const [imageIndex, setImageIndex]: any = useState(1);
  const [oldX, setOldX] = useState(0);
  const [drag, setDrag] = useState(false);

  const ref: any = useRef();

  const src: any = useMemo(() => `/image/lambo${imageIndex}.jpg`, [imageIndex]);

  const imageStyle = {
    height: "auto",
    borderRadius: 8,
    cursor: drag ? "grabbing" : "grab",
  };

  var clientWidth = ref?.current?.clientWidth,
    offsetLeft = ref?.current?.offsetLeft,
    offsetTop = ref?.current?.offsetTop,
    clientHeight = ref?.current?.clientHeight;

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

  const handleMouseMove = (e: any) => {
    if (!drag) return;
    if (e.pageX < oldX) setImageIndex((current: number) => --current);
    else if (e.pageX > oldX) setImageIndex((current: number) => ++current);

    setOldX(e.pageX);
  };

  useEffect(() => {
    if (imageIndex < 1) {
      setImageIndex(50);
      return;
    } else if (imageIndex > 50) {
      setImageIndex(1);
      return;
    }
  }, [imageIndex]);

  const { width }: any = ShowWindowDimensions();

  return (
    <Container>
      <Image
        onDragStart={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onMouseUp={() => setDrag(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={imageStyle}
        src={src}
        ref={ref}
        width={width * 0.8}
        height={500}
        alt={"image"}
      />
      <DiscreteSlider
        index={imageIndex}
        setImageIndex={(data: React.SetStateAction<number>) =>
          handleChaneIndex(data)
        }
      />
      {carDetail?.map((data, id) => (
        <Tooltip key={id} title={data.title} sx={{ curso: "pointer" }}>
          <Box
            sx={{
              cursor: "pointer",
              position: "absolute",
              top: offsetTop + (clientHeight / 100) * data.y,
              left: offsetLeft + (clientWidth / 100) * data.x,
              display: data?.image === imageIndex ? "flex" : "none",
            }}
          >
            <PlusIcon />
          </Box>
        </Tooltip>
      ))}
    </Container>
  );
}
