"use client";

import styled from "styled-components";

export const Nav = styled.nav`  
  justify-content: space-between;
  align-items: center;  
  position: relative;  
  height: 678px;
  width: 100%; 
  left: -2px;
  background-color: #000000CC;
  padding: 0px 56px 0px 16px;  

  @media (max-width: 768px) {  
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const SearchPosition = styled.div`  
  display: flex;
  position: fixed;
  height: 42px;
  width: 130px;
  right: 20px;         
  top: 84px; 
  border-radius: 3px;   
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;
    

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }  
`;

export const InputLayoutSearch = styled.div`  
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  position: fixed;
  top: 21px;
  right: 20px;
  padding: 0 16px;  
  
  input {
    width: 332px;   
    border-radius: 8px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    
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

