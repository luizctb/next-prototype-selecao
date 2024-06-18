"use client";

import { CardRegistration } from '@/components/cards/CardRegistration';
import { Navbar } from '@/components/navbar/Navbar';
import Link from 'next/link';
import { information } from '../FakeDatas/FakeRegistration';
import { PageContainer, HomeBody } from './layout';
import { ButtonExit } from '@/components/buttons/ButtonsLayout';
import Image from 'next/image';
import { LogOut } from 'lucide-react';


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
          <ButtonExit>          
            <Link href="/dashboard?page=searchResult" passHref> 
              <i className='link-content'>
                <div className='icon'>              
                  <LogOut />
                </div>
                Sair do Sistema
              </i>
            </Link>
          </ButtonExit>        
      </Navbar>
    </PageContainer>
  );
}

export default SearchService;
