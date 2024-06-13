"use client"

import Image from 'next/image'
import { SearchIcon } from 'lucide-react';
import { Nav, Button, InputNameProject, RightContainer, InputNameCompany, InputSpace } from './NavbarLayout';


export function Navbar() {

  return (
    <Nav>      
      <Button>CADASTRAR NOVO PROJETO</Button>   

      <InputNameProject>
        <input type="text" placeholder="Nome do projeto" />
      </InputNameProject>

        <RightContainer>
         <InputNameCompany className="search-company">
            <input type="text" placeholder="Nome da Instituição/empresa" />
         </InputNameCompany>

         <InputSpace>            
          <i>
            <SearchIcon />  
          </i>  
          <input 
            type="text" 
            placeholder="BUSCAR" 
          />  

         </InputSpace>        
      </RightContainer>
    </Nav>
  );
}

