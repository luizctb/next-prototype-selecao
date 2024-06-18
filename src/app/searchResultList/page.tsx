"use client";

import { CardListProjects } from '@/components/cards/CardListProjects';
import { Navbar } from '@/components/navbar/Navbar';
import Link from 'next/link';
import { information03 } from '../FakeDatas/FakeList';
import { PageContainer, HomeBody } from './layout';
import React from 'react';

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