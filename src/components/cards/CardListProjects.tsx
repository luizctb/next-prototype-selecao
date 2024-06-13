"use client"

import Image from 'next/image';
import { CardContainer, CardBody } from './CardLayout';
import { TextLimit } from '../TextLimit/TextLimit';

export interface CardInformation03 {
   image: string;
   title: string;
   text: string;
   text1: string;
   limit?: number; 
}
export function CardListProjects({information03}: {information03: CardInformation03}) {   
   console.log(information03);
   return (
      <CardContainer>
         <div>
            <Image src={information03.image} alt="Imagem" width={500} height={500} />
               <CardBody>
                  <h1>{information03.title}</h1>
                  <TextLimit text={information03.text} limit={50}/>   
                  <span>{information03.text1}</span>  
               </CardBody>   
         </div>
      </CardContainer>
   );  
}