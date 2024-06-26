"use client";

import Button from "@mui/material/Button";
import { styled } from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 525px;
  height: 412px;
  top: 149px;
  left: 487px;
  border-radius: 5px;
  padding: 16px;

  image{
    width: 493px;
    height: 194px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardContainer = styled.article`
  width: 493px;
  height: 96px;
`;

export const CardTitle = styled.div`
  width: 493px;
  height: 32px;
  top: 234px;
  left: 16px;
  text-align: left;
  margin-bottom: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  color: #181818;
`;

export const CardData = styled.div`
  width: 493px;
  height: 48px;
  top: 282px;
  left: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #474747;
  margin-bottom: 16px;
`;

export const CustomButtonAccess = styled(Button)`
  display: flex;
  width: 487px;
  height: 42px;
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