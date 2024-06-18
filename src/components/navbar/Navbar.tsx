"use client"

import Image from 'next/image'
import { SearchIcon } from 'lucide-react';
import { Nav, InputNameProject, InputNameCompany, InputSpace, TopRightItems, FixedNavbarSection, ContentContainer } from './NavbarLayout';
import { ButtonRegister } from '../buttons/ButtonsLayout';
import React from 'react';

interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <Nav>   
      <FixedNavbarSection>         
        <TopRightItems>
          <ButtonRegister>CADASTRAR NOVO PROJETO</ButtonRegister>   

          <InputNameProject>
            <input type="text" placeholder="Nome do projeto" />
          </InputNameProject>

          <InputNameCompany className="search-company">
            <input type="text" placeholder="Nome da Instituição/empresa" />
          </InputNameCompany>

          </TopRightItems>
            <InputSpace>            
              <i>
                <SearchIcon />  
              </i>  
              <input 
                type="text" 
                placeholder="BUSCAR" 
              />  
            </InputSpace>
          </FixedNavbarSection>       
        <ContentContainer>             
          {children}
      </ContentContainer>
    </Nav>
  );
}

