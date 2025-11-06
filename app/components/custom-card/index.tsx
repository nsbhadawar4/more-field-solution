import React, { ReactNode } from "react";
import { Card, CardContent, Box, SxProps, Theme } from "@mui/material";

interface PricingCardProps {
  children?: ReactNode;
  styleRest?: SxProps<Theme>;
}

const CustomCard: React.FC<PricingCardProps> = ({ children, styleRest }) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 4px 4px 0px #00000040",
        padding: "0px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #FFFFFF",
        "&:hover": {
          border: "1px solid #EBF4FF",
          transition: "0.1s",
        },
        ...styleRest,
      }}
    >
      <CardContent>
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
