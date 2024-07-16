"use client";

import React, { useState } from 'react';
import { BoxProgress, Container, CustomCheckCircleRoundedIcon, CustomCircularProgress, StyledText, StyledTypography, InfoTypography } from './ProjectLoadSuccessLayout';

const ProjectLoadSuccess: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsProcessing(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <BoxProgress>
                {isProcessing ? (
                    <CustomCircularProgress />
                ) : (
                    <CustomCheckCircleRoundedIcon />
                )}
                <StyledText>
                    <StyledTypography>
                        {isProcessing ? 'Processando o documento, aguarde alguns instantes' : 'Arquivo processado!'}
                    </StyledTypography>
                    {!isProcessing && (
                        <InfoTypography>
                            Avance para finalizar o cadastro do projeto.
                        </InfoTypography>
                    )}
                </StyledText>
            </BoxProgress>
        </Container>
    );
};

export default ProjectLoadSuccess;






