"use client";

import styled from "styled-components";

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
   gap: 24px;    

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
`;

export const CardRegistrationContainer = styled.section`
   background-color: #000000; 
   width: 391px;   
   height: 360px;
   top: 173px;
   left: 540px;
   margin: 0;

   image{
      width: 309px;
      height: 254px;
      top: 173px;
      left: 564px;
      border-radius: 4px; 
   }

   @media (max-width: 768px) {
    width: 100%;
    max-width: 270px;
    height: auto; 
    padding: 10px; 
  }
`;

export const CardTextRegister = styled.article`
   width: 390px;
   height: 67px;
   top: 459px;
   left: 540px;

   h1{
      width: 493px;
      height: 32px;
      top: 234px;
      left: 16px;
      text-align: left;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 28px;
      font-weight: 700;
      line-height: 38.4px;
      color: #181818;      
   }

   p{ 
      width: 493px;
      height: 48px;
      top: 282px;
      left: 16px;
      text-align: left;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 27.6px;
      color: #474747;
   }

   @media (max-width: 768px) {
    width: 100%;
    max-width: 270px;
    height: auto;     
  }
`;

