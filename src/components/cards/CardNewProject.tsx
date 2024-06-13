"use client"

import Image from 'next/image';
import { CardContainer, CardBody } from './CardLayout';
import { TextLimit } from '../TextLimit/TextLimit';


export interface CardInformation02 {
   image: string;
   title: string;
   text: string;
   text1: string;
   limit?: number; 
}
export function CardNewProject({information02}: {information02: CardInformation02}) {   
   console.log(information02);

   return (
      <CardContainer>
         <div>
            <Image src={information02.image} alt="Imagem" width={500} height={500} />

            <CardBody>
               <h1>{information02.title}</h1>
               <TextLimit text={information02.text} limit={50}/>   
               <span>{information02.text1}</span>  
            </CardBody>   
         </div>
      </CardContainer>
   );  
}