"use client";

import styled from "styled-components";

export const Nav = styled.nav`  
  justify-content: space-between;
  align-items: center;
  padding: 0px 56px 0px 16px;
  position: relative;  
  background-color: #000000CC;
  height: 678px;
  width: 100%; 
  left: -2px;

  @media (max-width: 768px) {  
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const InputSpace = styled.div`  
  display: flex;
  position: fixed;
  right: 20px;  
  height: 42px;
  width: 130px;    
  color:#ffffff; 
  top: 70px;  
  border-radius: 3px;      

  i {
    width: 60px;
    height: 26px;     
    color:#ffffff;      
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  input {  
    background-color: #000000CC;
    color: #ffffff;    
    width: 60px;
    height: 26px;    
    left: 0.46px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;    

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  }
`;

export const InputNameProject = styled.div` 
  gap: 10px;
  width: 232px;  
  top: 21px; 
  border-radius: 8px;
  margin-right: 10px;
  border: 1.5px;
  padding: 0px, 16px, 0px, 16px;
  gap: 10px;
  background-color: #000000CC; 
  border: 1.5px solid #ffffff;
  position: fixed;
  right: 480px;
  
  input {  
    width: 332px;
    height: 38px;   
    border: 1.5px solid #ffffff;    
    color: #ffffff;
    padding: 0 16px;
    gap: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15;

    :focus {
      border: 1px solid #F2CDA1;
    }

    @media (max-width: 768px) {
      width: 100%; 
      margin-bottom: 10px;
    }
  }
`;

export const InputNameCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;   
  background-color: #000000CC;
  width: 232px; 
  top: 21px;
  right: 70px;  
  border-radius: 8px;
  border: 1.5px solid #ffffff;
  padding: 0px, 16px, 0px, 16px;
  position: fixed;
 
 
  
  input {  
    width: 332px;
    height: 38px;   
    border: 1.5px solid #ffffff;  
    color: #ffffff;
    padding: 0 16px;
    gap: 10px;    
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15; 

    :focus {
      border: 1px solid #F2CDA1;
    }

    @media (max-width: 768px) {
      width: 100%; 
      margin-bottom: 10px;     
    }
  }
`;

export const FixedNavbarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;  
  background-color: #000000CC;
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
  margin-top: 110px; 
  padding: 20px;
`;

export const TopRightItems = styled.div`
  display: flex;  
  align-items: center;
  margin-bottom: 0px;
  justify-content: space-between;
  padding: 10px;
  top: 21px;
  border-radius: 18px;  
`;