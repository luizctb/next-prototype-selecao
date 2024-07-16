"use client";

import DrawerProject from "@/components/drawer/DrawerProject";
// import ProjectUploadFile from "@/components/upload/ProjectUpload";
import { PageContainer } from "./layout";
// import ProjectLoadSuccess from "@/components/loading/ProjectLoadSuccess";
import EmptyState from "@/components/empty/EmptyState";
import Navbar from "@/components/navbar/Navbar";
import TestBasics from "@/components/testesBasicos/TestesBasicos";






const TestsPage: React.FC = () => {
  return (
    <PageContainer>
      {/* <ProjectLoadSuccess /> */}

      {/* <EmptyState /> */}

      <DrawerProject />

      {/* <Navbar /> */}

      {/* <TestBasics /> */}
      
    </PageContainer>
  );
}

export default TestsPage;

{/* <SearchIconWrapper>
  <SearchIcon />
</SearchIconWrapper> */}
