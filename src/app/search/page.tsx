"use client";

import { CardRegistration } from '@/components/cards/CardRegistration';
import Link from 'next/link';
import { information } from '../FakeDatas/FakeRegistration';
import { PageContainer, HomeBody } from './layout';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';



const SearchService: React.FC = () => {
  return (
    <PageContainer>
      <Navbar >     
        <HomeBody>
          {information.map((item: any, index: number) => (
            <CardRegistration 
              key={index}
              information={item} 
            />
          ))}
        </HomeBody>                
                          
      </Navbar>
    </PageContainer>
  );
}

export default SearchService;
