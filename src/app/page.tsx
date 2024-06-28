"use client"

// import ProjectUploadFile from "@/components/upload/ProjectUpload"
import TestsPage from "./testsPages/page"

// substituir a página que quer aparecer.

// import ProjectForm from "@/components/form/ProjectForm"
// import Dashboard from "./dashboard/page"



export default function Home() {
  
  return (
    <main>             
      <div>        
        {/* <Dashboard/>    */}
        {/* <ProjectForm />        */}
        <TestsPage />
      </div>
      
    </main>
  )
}