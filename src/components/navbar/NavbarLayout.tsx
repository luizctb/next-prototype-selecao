"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 678px;
  left: -2px;
  background-color: #000000;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const CustomButtonSearch = styled(Button)`
  position: fixed;
  top: 85px;
  width: 130px;
  height: 42px;
  right: 20px;
  border-radius: 3px;
  background-color: #000000;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;

  &:hover {
    background-color: #2d2929;
    color: #f1e9e9;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const InputLayoutSearch = styled.div`
  display: flex;
  gap: 20px;
  position: fixed;
  top: 21px;
  right: 20px;
`;

export const CustomTextField = styled(TextField)`
  width: 252px;
  height: 38px;
  border-radius: 8px;

.MuiInputBase-root {
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
}

.MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before {
  border-bottom: 1.5px solid #ffffff;
}

.MuiOutlinedInput-root {
  &.Mui-focused fieldset {
    border-color: #ffffff;
  }
  fieldset {
    border-color: #ffffff;
  }
}

.MuiInputLabel-root {
  color: #ffffff;
}

.MuiInputLabel-root.Mui-focused {
  color: #ffffff;
}
`;

export const FixedNavbarSection = styled.div`
  width: 100%;
  padding: 20px 16px;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 120px;
  padding: 20px;
`;

export const CustomButtonExit = styled(Button)`
  position: fixed;
  width: 159px;
  height: 40px;
  top: 622px;
  left: 48px;
  border-radius: 5px;
  background-color: #000000;
  padding: 0px 8px;

&.MuiButton-contained {
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-transform: none;
}

  &:hover {
    background-color: #2d2929;
    .MuiButton-label {
      color: #f1e9e9;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const CustomButtonNewProject = styled(Button)`
  position: fixed;
  width: 254px;
  height: 42px;
  padding: 8px, 22px, 8px, 22px;
  top: 24px;
  left: 48px;
  border-radius: 3px;
  background-color: #F2CDA1;
  color: #000000;
  font-size: 15px;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 26px;
  letter-spacing: 0.46px;

  &:hover {
    background-color: #E1B988;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;