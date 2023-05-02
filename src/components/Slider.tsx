import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

type Props = {
  setImageIndex: any;
  index: any;
};

export default function DiscreteSlider(props: Props) {
  const { setImageIndex, index } = props;

  function handleOnChane(data: any) {
    const {
      target: { value },
    } = data;
    setImageIndex(value);
  }

  return (
    <Slider
      style={{
        cursor: "ew-resize",
        width: "inherit",
        height: 10,
      }}
      value={index}
      onChange={(data) => handleOnChane(data)}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={1}
      max={50}
    />
  );
}
