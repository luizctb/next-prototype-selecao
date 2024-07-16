"use client"

import Link from "next/link"
import { MainSearch } from "./MainContentLayout"
import { HomeBody } from "@/app/search/layout"
import { information } from "@/app/FakeDatas/FakeRegistration"
import { CardRegistration } from "../cards/CardRegistration"

export function MainContent() {
   return (
      <>
         <MainSearch>
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
         </MainSearch>
      </>
   )
}