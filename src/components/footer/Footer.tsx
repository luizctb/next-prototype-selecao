"use client"

import { ButtonNext } from "../buttons/ButtonsLayout";
import { FooterContainer } from "./FooterLayout";

const Footer = () => {
   return (
     <FooterContainer>
       <ButtonNext onClick={() => alert('Form submitted!')}>Próximo</ButtonNext>
     </FooterContainer>
   );
 };
 
 export default Footer;