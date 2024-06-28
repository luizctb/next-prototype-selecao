"use client";

import React, { useRef } from 'react';
import { Container, CustomUploadFileIcon, StyledButton, StyledText, StyledTypography, VisuallyHiddenInput } from './ProjectUploadLayout';

interface ProjectUploadFileProps {
  apiUrl: string;
  projectId: string;
  onSuccess: (fileUrl: string) => void;
}

const ProjectUploadFile: React.FC<ProjectUploadFileProps> = ({ apiUrl, projectId, onSuccess }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);  

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('projectId', projectId);
      formData.append('file', file);

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          onSuccess(result.fileUrl);
        } else {
          console.error('Upload failed:', response.statusText);
        }
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  };
         
  return (
   <Container>
    <StyledButton      
      role="button"
      variant="contained"
      tabIndex={0}      
      onClick={handleClick} 
      startIcon={<CustomUploadFileIcon />}       
    >
      <StyledText>
        INSERIR ARQUIVO
        <StyledTypography>
          ARQUIVOS PERMITIDO: .KML          
        </StyledTypography>
        <StyledTypography>          
          TAMANHO MÁXIMO: 50Mb
        </StyledTypography>
      </StyledText>    
      <VisuallyHiddenInput type="file" ref={fileInputRef} onChange={handleFileChange} />
    </StyledButton>
    </Container>
  );
};

export default ProjectUploadFile;