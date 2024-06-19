"use client"

import Image from 'next/image'
import { Nav, InputNameProject, InputNameCompany, InputSpace, TopRightItems, FixedNavbarSection, ContentContainer } from './NavbarLayout';
import { ButtonRegister } from '../buttons/ButtonsLayout';
import React from 'react';
import { SearchOutlined } from '@mui/icons-material';
import Link from 'next/link';

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
              <Link href="/dashboard?page=searchResult" passHref>           
              <i className='link-content'>
                <div className='icon'>
                  <SearchOutlined /> 
                </div> 
                BUSCAR
              </i>                
              </Link>  
            </InputSpace>
          </FixedNavbarSection>       
        <ContentContainer>             
          {children}
      </ContentContainer>
    </Nav>
  );
}

