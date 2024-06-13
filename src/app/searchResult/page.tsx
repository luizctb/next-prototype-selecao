"use client";

import { CardNewProject } from '@/components/cards/CardNewProject';
import { Navbar } from '@/components/navbar/Navbar';
import Link from 'next/link';
import { information02 } from '../FakeDatas/FakeNewProject';
import { PageContainer, HomeBody } from './layout';

export default function SearchResult() {
  return (
    <PageContainer>
      <Navbar />
      <HomeBody>
        {information02.map((item: any, index: number) => (
          <CardNewProject 
            key={index}
            information02={item} 
          />
        ))}
      </HomeBody>
      <div>        
        <Link href="/dashboard?page=searchResultList">
          Página lista de projetos
        </Link>
      </div>
    </PageContainer>
  );
}
