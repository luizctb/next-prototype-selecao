"use client"

import Image from 'next/image';
import { CardBody, CardRegistrationContainer } from './CardLayout';
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
            <Image src={information.image} alt="Imagem" width={500} height={500} />
               <CardBody>
                  <h1>{information.title}</h1>
                  <TextLimit text={information.text} limit={50}
                  /> 
               </CardBody> 
            </div>                             
      </CardRegistrationContainer>
   );  
}