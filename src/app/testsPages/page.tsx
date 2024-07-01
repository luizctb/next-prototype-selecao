"use client";

// import ProjectUploadFile from "@/components/upload/ProjectUpload";
import { PageContainer } from "./layout";
// import ProjectLoadSuccess from "@/components/loading/ProjectLoadSuccess";
import EmptyState from "@/components/empty/EmptyState";




const TestsPage: React.FC = () => {
  return (
    <PageContainer>
      {/* <ProjectLoadSuccess /> */}
      <EmptyState />
      
    </PageContainer>
  );
}

export default TestsPage;
