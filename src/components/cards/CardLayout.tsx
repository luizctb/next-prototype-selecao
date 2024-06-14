"use client";

import styled from "styled-components";

export const CardContainer = styled.section`
   display: flex;
   background-color: #ffffff;
   width: 525px;   
   height: 412px;
   top: 149px;
   left: 487px;
   border-radius: 5px;
   padding: 16px;
   gap: 24px;

   image{
      width: 493px;
      height: 194px;
      border-radius: 4px;       
   }

   @media (max-width: 768px) {
    width: 30%;     
  }
`;

export const CardRegistrationContainer = styled.section`
   display: flex; 
   background-color: #000000; 
   width: 391px;   
   height: 360px;
   top: 173px;
   left: 540px;
   border-radius: 5px;
   padding: 16px;
   gap: 24px;

   image{
      width: 309px;
      height: 254px;
      border-radius: 4px; 
   }

   @media (max-width: 768px) {
    width: 30%;     
  }
`;

export const CardTextRegister = styled.article`
   width: 493px;
   height: 96px;

   h1{
      text-align: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 32px;
      font-weight: 700;
      line-height: 38.4px;
      color: #ffffff;      
   }

   p{ 
      text-align: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 23px;
      font-weight: 500;
      line-height: 27.6px;
      color: #ffffff;
   }
`;

export const CardText = styled.article`  
   width: 493px;
   height: 96px;

   h1{
      text-align: center;
      margin-bottom: 1rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 28px;
      font-weight: 600;
      line-height: 32px;
      color: #000000;      
   }

   p{ 
      text-align: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #000000;
   }
`;