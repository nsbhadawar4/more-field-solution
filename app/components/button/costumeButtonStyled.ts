import { styled } from "@mui/material";
export const CostumeButtonStyled = styled("div")(() => ({
  // COMON BTN START
  "& .primaryBtn": {
    background: "#489D56",
    color: "#FFFFFF",
    border: "1px solid #489D56",
    borderRadius: "8px",
    height: "40px",
    width: "100%",
    fontSize: "16px",
    textTransform: "capitalize",
    boxShadow: "none",
    fontWeight: "600",
    transition: "all 0.4s ease",
  },
  "& .primaryBtn:hover": {
    background: "transparent !important",
    color: "#489D56",
    border: "1px solid #489D56",
    transition: "all 0.4s ease",
    boxShadow: "none",
  },

  // OUTLINE
  "& .customBtnOutline": {
    background: "#FFFFFF",
    color: "#4C4C4C",
    border: "1px solid #D9D9D9",
    borderRadius: "8px",
    height: "36px",
    fontSize: "16px",
    textTransform: "capitalize",
    boxShadow: "0px 1px 2px 0px #1A19190D",
    fontWeight: "600",
    transition: "all 0.4s ease",
    width: "100%",
  },
  "& .customBtnOutline:hover": {
    background: "#FFFFFF",
    color: "#4C4C4C",
    border: "1px solid #D9D9D9",
    transition: "all 0.4s ease",
    boxShadow: "none",
  },

  // DISABLED STYLE BTN
  "& .inheritCssComonBtn, .inheritCssComonBtn:hover": {
    background: "transparent",
    color: "#0F172A",
    border: "none",
    fontSize: "14px",
    textTransform: "capitalize",
    boxShadow: "none",
    padding: "0",
    lineHeight: "inherit",
    width: "unset",
    minWidth: "fit-content",
  },
}));
