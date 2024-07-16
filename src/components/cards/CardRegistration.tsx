"use client"

import Image from 'next/image';
import { Box, CardContainer, CardData, CardTitle, CustomButtonAccess } from './CardLayout';
import { TextLimit } from '../TextLimit/TextLimit';


export interface CardInformationProps {
   image: string;
   name: string;
   text: string;
   limit?: number;
 }
 const ProjectCard: React.FC<CardInformationProps> = ({ image, name, text }) => {
   return (
     <Box>
       <Image src={image} alt="Imagem" width={493} height={194}
       />
       <CardContainer>
         <CardTitle>
           <h1>{name}</h1>
         </CardTitle>
         <CardData>
           <TextLimit text={text} limit={125} />
         </CardData>
         <div>
           <CustomButtonAccess>ENTRAR</CustomButtonAccess>
         </div>
       </CardContainer>
     </Box>
   );
 }
 
 export default ProjectCard;