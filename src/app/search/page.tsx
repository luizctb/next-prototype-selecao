"use client";

import { CardRegistration } from '@/components/cards/CardRegistration';
import { Navbar } from '@/components/navbar/Navbar';
import Link from 'next/link';
import { information } from '../FakeDatas/FakeRegistration';
import { PageContainer, HomeBody } from './layout';


export default function SearchService() {
  return (
    <PageContainer>
      <Navbar />
      <HomeBody>
        {information.map((item: any, index: number) => (
          <CardRegistration 
            key={index}
            information={item} 
          />
        ))}
      </HomeBody>
      <div>        
        <Link href="/dashboard?page=searchResult">
         Página resultado
        </Link>
      </div>
    </PageContainer>
  );
}
