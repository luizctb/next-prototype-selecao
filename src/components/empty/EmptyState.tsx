"use client"

import Image from 'next/image';
import { Box, CustomTypographyOne, CustomTypographyTwo } from './EmptyStateLayout';


export interface EmptyStateProps {
  imagePath: string;
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ imagePath, title, subtitle }) => {
  return (
    <Box>
      <Image
        src={imagePath}
        alt="Imagem"
        width={309}
        height={254}
      />
      <CustomTypographyOne variant="h6" color="textSecondary">
        {title}
      </CustomTypographyOne>
      <CustomTypographyTwo variant="body1" color="textSecondary">
        {subtitle}
      </CustomTypographyTwo>        
    </Box>
  );
};

export default EmptyState;



// como utilizar a props: 
// import React, { useState } from 'react';
// import EmptyState from '../components/EmptyState';

// const ExamplePage = () => {
//   const [isFinished, setIsFinished] = useState(false);

//   const handleToggle = () => {
//     setIsFinished(!isFinished);
//   };

//   return (
//     <div>
//       <EmptyState
//         imagePath={isFinished ? '/images/image_finished.png' : '/images/image_not_finished.png'}
//         title={isFinished ? 'Projeto Finalizado!' : 'Nenhum Projeto Cadastrado!'}
//         subtitle={isFinished ? 'Clique em voltar para ir para tela inicial' : 'Cadastre algum projeto para continuar'}
//       />
//       <button onClick={handleToggle}>
//         {isFinished ? 'Reiniciar' : 'Finalizar'}
//       </button>
//     </div>
//   );
// }