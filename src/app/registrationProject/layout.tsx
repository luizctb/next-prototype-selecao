"use client"

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  flex-direction: column;
  align-items: center; 
  background-image: linear-gradient(to right, #FFFFFF -50%, #717171, #FFFFFF, #717171);
  color: #000000;
  gap: 40px;
`;

export const LinkArrowLeft = styled.div`
  position: absolute;
  top: 20px; 
  left: 20px; 
  display: flex;
  align-items: center;
  color: #E08214;

  .link-content {
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const SectionInfo = styled.div`
  margin-bottom: 1.5rem;
`;



export const Input = styled.input`
  width: 428px;
  height: 38px;
  padding: 0px 16px 0px 16px;
  margin-bottom: 1rem;
  border: 1.5px solid #000000;
  border-radius: 8px; 
  justify-content: space-between;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #898989;
  background-color: transparent;
`;

export const InputStreet = styled.input`
  width: 872px;
  height: 38px;
  padding: 0px 16px 0px 16px;
  margin-bottom: 1rem;
  border: 1.5px solid #000000;
  border-radius: 8px; 
  justify-content: space-between;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #898989;
  background-color: transparent;
`;

export const Select = styled.select`
  width: 428px;
  height: 38px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1.5px solid #000000;;
  border-radius: 8px;
  justify-content: space-between;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #898989;
  background-color: transparent;

  option {
    padding: 10px;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 16px;
  font-weight: 800;
  color: #666F45;  
  margin: 20px 0 20px 0;
  line-height: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.15px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const AlignInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;   
`;