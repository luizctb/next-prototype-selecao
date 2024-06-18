"use client"

import styled from "styled-components";

export const ButtonRegister = styled.button`
  width: 254px;
  height: 42px;  
  padding: 8px, 22px, 8px, 22px;
  top: 24px;
  left: 48px;
  border-radius: 3px;  
  background-color: #F2CDA1;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;  
  cursor: pointer;  

  :hover {
    background-color: #b87d35;
    color: #2d2727;
  }

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px;
  }
`;

export const ButtonEnter = styled.button`
  width: 487px;
  height: 42px;
  border-radius: 3px;  
  background-color: #F2CDA1;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;  
  letter-spacing: 0cap.46;
  cursor: pointer;  
  margin-top: 45px;

  :hover {
    background-color: #e08214;
    color: #595959;
  }

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px;
  }
`;

export const ButtonExit = styled.button`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 162px;
  height: 40px;
  padding: 0px, 8px;  
  background-color: #000000;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;  
  letter-spacing: 0.15;
  cursor: pointer;  
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  .link-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-decoration: none;
    color: #ffffff;
  }

  .icon {
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
  
  :hover {
    background-color: #0000CC;    
  }

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px;
  }
`;
