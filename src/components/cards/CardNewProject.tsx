"use client"

import Image from 'next/image';
import { Box, CardContainer, CardData, CardTitle } from './CardLayout';
import { TextLimit } from '../TextLimit/TextLimit';
import { ButtonEnter } from '../buttons/ButtonsLayout';


export interface CardInformation02 {
   image: string;
   title: string;
   text: string;   
   limit?: number; 
}
export function CardNewProject({information02}: {information02: CardInformation02}) {   
   console.log(information02);
   return (
      <Box>         
         <Image src={information02.image} alt="Imagem" width={493} height={194} 
         />
            <CardContainer>
               <CardTitle>
                  <h1>{information02.title}</h1>
               </CardTitle>
               <CardData>
                  <TextLimit text={information02.text} limit={125}/>   
               </CardData>             
            </CardContainer>
         <ButtonEnter>ENTRAR</ButtonEnter>   
         
      </Box>
   );  
}