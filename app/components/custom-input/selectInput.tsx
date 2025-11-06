"use client";
import { Box, FormLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { SelectOptions } from ".";
import styles from "./style.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ISelectInput {
  id?: string;
  name?: string;
  label?: string;
  options: SelectOptions[];
  placeholder?: string;
  styleRest?: any;
  value?: string | undefined;
}

function SelectInputComponent({
  id,
  placeholder,
  label,
  options,
  styleRest,
  value,
  ...rest
}: ISelectInput) {
  const [open, setOpen] = useState(false);

  const handleIconClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box className="muiSelectInput">
      {label && (
        <FormLabel
          sx={{
            color: "#333333",
            fontSize: "16px",
            fontWeight: "500",
            padding: "8px 0px",
            textTransform: "capitalize",
            "@media (max-width: 600px)": {
              fontSize: "16px",
            },
          }}
        >
          {label}
        </FormLabel>
      )}

      <Select
        id={id}
        className={styles.muiSelect_Input}
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{
          fontSize: "14px",
          color: "#94A3B8 ",
          fontWeight: "500",
          // paddingLeft: "20px",
          borderRadius: "8px",
          borderColor: "unset",
          backgroundColor: " #FFFFFF",
          border: "1px solid #D0D5DD",
          height: "48px",
          mt: 1,
          "&.Mui-focused": {
            color: "#000",
          },
          ...styleRest,
        }}
        IconComponent={() => (
          <Box
            sx={{
              position: "absolute",
              right: "10px",
              top: "8px",
              cursor: "pointer",
            }}
            onClick={handleIconClick}
          >
            {open ? (
              <KeyboardArrowUpIcon className={styles.dropArrow} />
            ) : (
              <KeyboardArrowDownIcon className={styles.dropArrow} />
            )}
          </Box>
        )}
        displayEmpty
        value={value}
        renderValue={(selected) => (selected ? selected : placeholder)}
        {...rest}
      >
        <MenuItem disabled sx={{ textTransform: "capitalize" }}>
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default SelectInputComponent;
