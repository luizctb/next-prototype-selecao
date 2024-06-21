"use client"

import Image from 'next/image'
import { Nav, FixedNavbarSection, ContentContainer,InputLayoutSearch, SearchPosition } from './NavbarLayout';
import React from 'react';
import { SearchOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { LogOutIcon } from 'lucide-react';


interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }: NavbarProps) => {
  return (
    <Nav>   
      <FixedNavbarSection>        
        <Button variant="contained" color="primary">
          CADASTRAR NOVO PROJETO
        </Button>          
        <InputLayoutSearch>          
          <>
            <TextField id="outlined-basic" label="Nome do projeto" variant="outlined" />
          </>          
          <>
            <TextField id="outlined-basic" label="Nome da instituição/empresa" variant="outlined" />
          </>           
        </InputLayoutSearch>        
        <SearchPosition> 
          <Button 
            variant="contained" 
            startIcon={<SearchOutlined />}
            >
            BUSCAR
          </Button>                    
        </SearchPosition>
      </FixedNavbarSection>       
      <ContentContainer>             
        {children}
      </ContentContainer>        
      <Button 
        variant="contained" 
        startIcon={<LogOutIcon />}
        >
        Sair do Sistema
      </Button>      
    </Nav>
  );
}

export default Navbar;
