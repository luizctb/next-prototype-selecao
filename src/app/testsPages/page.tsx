"use client";

import ProjectUploadFile from "@/components/upload/ProjectUpload";
import { PageContainer } from "./layout";
import ProjectLoadSuccess from "@/components/loading/ProjectLoadSuccess";


const TestsPage: React.FC = () => {
  return (
    <PageContainer>
      <ProjectLoadSuccess />
      
    </PageContainer>
  );
}

export default TestsPage;
