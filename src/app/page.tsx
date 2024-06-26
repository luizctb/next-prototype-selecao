"use client"

// substituir a página que quer aparecer.

import ProjectForm from "@/components/form/ProjectForm"
import Dashboard from "./dashboard/page"



export default function Home() {
  
  return (
    <main>             
      <div>        
        {/* <Dashboard/>    */}
        <ProjectForm />       
      </div>
      
    </main>
  )
}