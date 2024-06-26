"use client";

import { CardListProjects } from '@/components/cards/CardListProjects';
import Link from 'next/link';
import { information03 } from '../FakeDatas/FakeList';
import { PageContainer, HomeBody } from './layout';
import React from 'react';
import { ButtonExit } from '@/components/buttons/ButtonsLayout';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Navbar from '@/components/navbar/Navbar';

const SearchResultList: React.FC = () => {
  return (
    <PageContainer>
      <Navbar >
        <HomeBody>
          {information03.map((item: any, index: number) => (
            <CardListProjects 
              key={index} 
            information03={item} 
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
          <Link href="/dashboard?page=searchService">
            Página Cadastrar de Projeto
          </Link>
        </div>
      </Navbar>
    </PageContainer>
  );
}

export default SearchResultList;