"use client";

import styled from "styled-components";

export const CardContainer = styled.section`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center; 
   object-position: center; 
   background-color: #ffffff;
   gap: 0;
   width: 391px;
   height: 360px;
   top: 173px;
   left: 540px;
   box-shadow: #000000;
   border-radius: 0.3rem;

   image{
      width: 309px;
      height: 254px;
      top: 173px;
      left: 564px;
      gap: 0px;
      opacity: 0px;  
      justify-content: center;
      align-items: center; 
   }

   @media (max-width: 768px) {
    width: 50%;     
  }
`;

export const CardRegistrationContainer = styled.section`
   display: flex;  
   justify-content: center;
   align-items: center;    
   gap: 0;
   width: 391px;   
   height: 360px;
   top: 173px;
   left: 540px;   

   image{
      display: flex;
      width: 309px;
      height: 254px;
      top: 173px;
      left: 564px;
      gap: 0px;
      opacity: 0px;  
      justify-content: center;
      align-items: center;
   }

   @media (max-width: 768px) {
    width: 50%;     
  }
`;

export const CardBody = styled.article`
   display: grid;
   align-items: center;
   object-position: center;
   gap: 1rem;
   justify-content: center;
   align-items: center;  

   h1{
      margin-bottom: 1rem;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 28px;
      font-weight: 700;
      line-height: 38.4px;
      color: #ffffff;      
   }

   p{ 
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 21px;
      font-weight: 500;
      line-height: 27.6px;
      color: #ffffff;
   }
`;