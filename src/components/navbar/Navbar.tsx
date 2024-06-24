"use client"

import Image from 'next/image'
import { Nav, FixedNavbarSection, ContentContainer,InputLayoutSearch, CustomTextField, CustomButtonSearch, CustomButtonNewProject, CustomButtonExit } from './NavbarLayout';
import React, { ChangeEvent, useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';


interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }: NavbarProps) => {  
  const [projectName, setProjectName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [showCards, setShowCards] = useState(false);


  const handleSearchClick = () => {
    if (projectName || companyName) {
      setShowCards(true);
    }
  };

  return (
    <Nav>   
      <FixedNavbarSection>        
        <CustomButtonNewProject 
        variant="contained" 
        color="primary"
        >
          CADASTRAR NOVO PROJETO
        </CustomButtonNewProject>          
        <InputLayoutSearch>          
          <div>          
            <CustomTextField 
            id="outlined-basic" 
            label="Nome do projeto" 
            variant="outlined"
            value={projectName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)}
            />  
          </div>          
          <div>
            <CustomTextField 
            id="outlined-basic" 
            label="Nome da instituição/empresa" 
            variant="outlined" 
            value={companyName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
            />
          </div>           
        </InputLayoutSearch>           
          <CustomButtonSearch 
            variant="contained" 
            startIcon={<SearchOutlined />}
            onClick={handleSearchClick}
            >
            BUSCAR
          </CustomButtonSearch>          
      </FixedNavbarSection>       
      <ContentContainer>             
        {showCards && children}
      </ContentContainer>        
      <CustomButtonExit 
        variant="contained" 
        startIcon={<LogoutIcon />}
        >
        Sair do Sistema
      </CustomButtonExit>      
    </Nav>
  );
}

export default Navbar;

