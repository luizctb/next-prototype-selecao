"use client";

import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "styled-components";

export const Form = styled.form`
  width: 872px;
  display: block;  
  justify-content: center;
  align-items: center;  
  background-color: #fbfbfb;
  margin: 0 auto; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const CustomTypography = styled(Typography)`
   color: #666F45;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   font-weight: 800;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: 0.15px;
`;

export const CustomTextField = styled(TextField)`  
  height: 38px;
  border-radius: 8px;

.MuiInputBase-root {
  color: #898989;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before {
  border-bottom: 1.5px solid #7C7C7C;
}

.MuiOutlinedInput-root {
  &.Mui-focused fieldset {
    border-color: #7C7C7C;
  }
  fieldset {
    border-color: #7C7C7C;
  }
}

.MuiInputLabel-root {
  color: #7C7C7C;
}

.MuiInputLabel-root.Mui-focused {
  color: #7C7C7C;
}
`;

export const CustomFormControl = styled(FormControl)`
  margin: 0;
  width: 810px;
  color: #898989;  
  border: 1.5px; 
  border-radius: 8px;
  border-color: #7C7C7C;  
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const StyledInputLabel = styled(InputLabel)`
  color: #898989;

  &.Mui-focused {
    color: #7C7C7C;
  }
`;

export const StyledSelect = styled(Select)`
  .MuiOutlinedInput-notchedOutline {
    border-color: #7C7C7C;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #5C5C5C;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #5C5C5C;
  }

  .MuiSelect-icon {
    color: #898989;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  background-color: #fbfbfb;

&:hover {
  background-color: #717171;
}

&.Mui-selected {
  background-color: #717171;
  color: #ffffff;
}

&.Mui-selected:hover {
  background-color: #5C5C5C;
}
`;

