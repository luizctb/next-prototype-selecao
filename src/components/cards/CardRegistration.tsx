"use client"

import Image from 'next/image';
import { CardRegistrationContainer, CardTextRegister } from './CardLayout';
import { TextLimit } from '../TextLimit/TextLimit';


export interface CardInformation {
   image: string;
   title: string;  
   text: string;
   limit?: number;    
}

export function CardRegistration({information}: {information: CardInformation}) {     
   return (
      <CardRegistrationContainer>         
         <div>
            <Image src={information.image} alt="Imagem" width={309} height={254} />
               <CardTextRegister>
                  <h1>{information.title}</h1>
                  <TextLimit text={information.text} limit={50}
                  /> 
               </CardTextRegister> 
            </div>                             
      </CardRegistrationContainer>
   );  
}