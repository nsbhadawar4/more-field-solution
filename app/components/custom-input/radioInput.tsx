import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Option {
  value: string;
  label: string;
}

interface SingleSelectionRadioGroupProps {
  options: Option[];
  label?: string;
  name: string;
}
 
const RadioInputComponent: React.FC<SingleSelectionRadioGroupProps> = ({
  options,
  label, 
  name,
}) => {
  const [value] = React.useState();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <FormControl>
      {label && (
        <FormLabel
          sx={{
            color: "#fff",
            fontSize: "18px",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {label}
        </FormLabel>
      )}
      <RadioGroup name={name} value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: "#A8A8A8",
                  "&.Mui-checked": {
                    color: "#F59A2E",
                  },
                }}
              />
            }
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInputComponent;
