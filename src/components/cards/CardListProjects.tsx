"use client"

import Image from 'next/image';
import { CardContainer, CardText } from './CardLayout';
import { TextLimit } from '../TextLimit/TextLimit';

export interface CardInformation03 {
   image: string;
   title: string;
   text: string;   
   limit?: number; 
}
export function CardListProjects({information03}: {information03: CardInformation03}) {   
   console.log(information03);
   return (
      <CardContainer>
         <div>
            <Image src={information03.image} alt="Imagem" width={493} height={194} />
               <CardText>
                  <h1>{information03.title}</h1>
                  <TextLimit text={information03.text} limit={50}/>                    
               </CardText>   
         </div>
      </CardContainer>
   );  
}