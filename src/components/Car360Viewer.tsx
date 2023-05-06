import React, { useEffect, useRef, useState } from "react";

import { useAxes, PanInput } from "@egjs/react-axes";
import Image from "next/image";
import ShowWindowDimensions from "../utils/resize";
import { carDetail } from "../utils/data";
import { Box, Tooltip, Container, Typography, Button } from "@mui/material";
import PlusIcon from "./PlusIcon";
import ShowAllCar from "./ShowAllCar";

const Car360viewer = () => {
  const { width }: any = ShowWindowDimensions();
  const ref: any = useRef();
  const [showAllCar, setShowAllCar]: any = useState();

  const offsetParent = ref?.current?.offsetParent;
  const clientWidth = offsetParent?.clientWidth,
    offsetLeft = offsetParent?.offsetLeft,
    offsetTop = offsetParent?.offsetTop,
    clientHeight = offsetParent?.clientHeight;

  console.log(clientHeight);

  const { connect, angle } = useAxes(
    {
      angle: {
        range: [0, 360],
        circular: true,
      },
    },
    {
      deceleration: 0.01,
    }
  );

  useEffect(() => {
    connect("angle", new PanInput(".car_rotate"));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        2021 BMW 430i xDrive
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom>
        18.2k miles
      </Typography>
      {showAllCar ? (
        <Box
          sx={{
            width: width * 0.9,
            height: 500,
          }}
        >
          <ShowAllCar />
        </Box>
      ) : (
        <div className="car_rotate">
          <div style={{ position: "relative", zIndex: 10 }}>
            {carDetail.map((i, key) => (
              <Box key={key} ref={ref}>
                <Image
                  onDragStart={(e) => e.preventDefault()}
                  alt="image"
                  key={key}
                  src={`/image/lambo${i?.image}.jpg`}
                  style={{
                    borderRadius: 10,
                    height: "auto",
                    display:
                      Math.floor((angle % 360) / 10 + 1) === i?.image
                        ? "flex"
                        : "none",
                  }}
                  width={width * 0.9}
                  height={500}
                />
                <Tooltip title={i.title} sx={{ curso: "pointer" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: (clientHeight / 100) * i.y,
                      left: (clientWidth / 100) * i.x,
                      display:
                        Math.floor((angle % 360) / 10 + 1) === i?.image
                          ? "flex"
                          : "none",
                    }}
                  >
                    <PlusIcon />
                  </Box>
                </Tooltip>
              </Box>
            ))}
          </div>
        </div>
      )}
      <Box display={"flex"} justifyContent={"center"}>
        <Button variant="text" onClick={() => setShowAllCar(!showAllCar)}>
          Photos
        </Button>
      </Box>
    </Container>
  );
};

export default Car360viewer;
