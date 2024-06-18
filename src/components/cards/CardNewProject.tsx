"use client"

import Image from 'next/image';
import { CardContainer, CardText } from './CardLayout';
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
      <CardContainer>
         <div>
            <Image src={information02.image} alt="Imagem" width={493} height={194} 
            />
               <CardText>
                  <h1>{information02.title}</h1>
                  <TextLimit text={information02.text} limit={125}/>                
               </CardText>
            <ButtonEnter>ENTRAR</ButtonEnter>   
         </div>
      </CardContainer>
   );  
}