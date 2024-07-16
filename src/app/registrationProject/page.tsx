"use client"

import { ButtonNext } from "@/components/buttons/ButtonsLayout";
import Image from "next/image";
import { AlignInputs, Container, Form, Input, InputStreet, LinkArrowLeft, SectionInfo, Select, StyledH2 } from "./layout";
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const RegistrationProject: React.FC = () => {  
   return (
      <Container>
         <LinkArrowLeft>
            <Link href="/dashboard?page=searchService" passHref> 
              <i className='link-content'>
                <div className='icon'>              
                  <ArrowBackIcon />
                </div>                
              </i>
            </Link>
         </LinkArrowLeft>
      <Form>
        <SectionInfo>
            <StyledH2>
               <h2>Informações do projeto</h2>
            </StyledH2>
               <AlignInputs>
                  <Input type="text" placeholder="Nome do projeto" />
                  <Input type="text" placeholder="Empresa/Instituição" />
               </AlignInputs>
                  <InputStreet type="text" placeholder="Rua" />
               <AlignInputs>
                  <Input type="text" placeholder="Cidade" />
                  <Input type="text" placeholder="Número" />
                  <Input type="text" placeholder="Estado" />
                  <Input type="text" placeholder="Bairro" />
                  <Input type="text" placeholder="Latitude" />
                  <Input type="text" placeholder="Longitude" /> 
               <Select>
                  <option>Formato da coordenada</option>
                  {/* Add other options here */}
               </Select>
               <Select>
                  <option>Área de atuação</option>
                  {/* Add other options here */}
               </Select>
            </AlignInputs>
         </SectionInfo>

         <SectionInfo>
            <StyledH2>  
               <h2>Informações do responsável</h2>
            </StyledH2>
            <AlignInputs>
               <Input type="text" placeholder="Nome" />
               <Input type="text" placeholder="Cargo" />
               <Input type="text" placeholder="Telefone" />
               <Input type="text" placeholder="E-mail" />
            </AlignInputs>
         </SectionInfo>       
      </Form>
         <ButtonNext 
            onClick={() => alert('Form submitted!')}>Próximo
         </ButtonNext>
    </Container>
  );
};

export default RegistrationProject;