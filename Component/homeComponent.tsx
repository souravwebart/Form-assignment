import React from "react";
import MapComponent from "../subComponent/map";
import FormComponent from "../subComponent/form";
import { Box } from "@mui/material";

interface Props {
  data: any;
}

function homeComponent(Props: Props) {
  const { data } = Props;
  return (
    <Box className="home_component">
      <Box>
        <Box className="form_section">
          <FormComponent data={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default homeComponent;
