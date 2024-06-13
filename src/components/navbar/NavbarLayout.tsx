"use client";

import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20px 15px;  
  /* background-color: #000000CC; */

  @media (max-width: 768px) {  
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const Button = styled.button`  
  width: 254px;
  height: 42px;
  border-radius: 3px;
  background-color: #F2CDA1;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-color: #0a86af;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px;
  }
`;

export const InputSpace = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 42px;
  width: 230px;    
  color:#ffffff;   

  i {
    width: 38px;
    height: 42px;     
    color:#ffffff;      
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #000000CC;
    color: #fafafa;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
    margin-left: 0.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.46;

    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
    }
  }
`

export const InputNameProject = styled.div`  
  display: flex;  
  flex-direction: column;
  align-items: center;
  margin: 0 10px;    
  
  input { 
    top: 21px;
    left: 931px;
    width: 252px;
    height: 38px;
    border-radius: 8px;
    border: 1.5px solid #ffffff;
    background-color: #000000CC;   
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
  align-items: flex-end;
  margin-right: 10px;   
  
  input {  
    top: 21px;
    left: 1179px;
    width: 252px;
    height: 38px;
    border-radius: 8px;
    border: 1.5px solid #ffffff;
    background-color: #000000CC;
    color: #ffffff;
    padding: 0 16px;
    gap: 10px;
    margin-bottom: 20px;   
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

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;