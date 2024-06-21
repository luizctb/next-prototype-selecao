"use client";

import { CardNewProject } from '@/components/cards/CardNewProject';
import Link from 'next/link';
import { information02 } from '../FakeDatas/FakeNewProject';
import { PageContainer, HomeBody } from './layout';
import React from 'react';
import { ButtonExit } from '@/components/buttons/ButtonsLayout';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Navbar from '@/components/navbar/Navbar';


const SearchResult: React.FC = () => {
  return (
    <PageContainer>
      <Navbar >
        <HomeBody>
          {information02.map((item: any, index: number) => (
            <CardNewProject 
              key={index}
            information02={item} 
            />
          ))}
        </HomeBody>
        <ButtonExit>          
            <Link href="/dashboard?page=searchService" passHref> 
              <i className='link-content'>
                <div className='icon'>              
                  <LogoutOutlinedIcon />
                </div>
                Sair do Sistema
              </i>
            </Link>
          </ButtonExit>  
        <div>        
          <Link href="/dashboard?page=searchResultList">
          Página lista de projetos
          </Link>
        </div>
      </Navbar>
    </PageContainer>
  );
}

export default SearchResult;