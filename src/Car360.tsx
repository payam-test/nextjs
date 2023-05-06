import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Tooltip } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import DiscreteSlider from "./components/Slider";
import PlusIcon from "./components/PlusIcon";
import ShowWindowDimensions from "./utils/resize";
import { carDetail } from "./utils/data";

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

  var clientWidth = ref?.current,
    offsetLeft = ref?.current?.offsetLeft,
    offsetTop = ref?.current?.offsetTop,
    clientHeight = ref?.current?.clientHeight;
  console.log(clientWidth);

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
