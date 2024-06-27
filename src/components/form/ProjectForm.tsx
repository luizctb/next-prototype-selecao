"use client";

import React, { useState } from 'react';
import { Box, Grid, Divider, SelectChangeEvent } from '@mui/material';
import { CustomTextField, CustomTypography, CustomFormControl, StyledInputLabel, StyledSelect, Form } from './ProjectFormLayout';

export interface ProjectFormProps {
  initialData?: {
    name: string;
    companyName: string;
    street?: string;
    city: string;
    number?: string;
    state: string;
    neighborhood?: string;
    responsibleName: string;
    responsiblePosition: string;
    responsiblePhone: string;
    responsibleEmail: string;
    area?: string[];
    subArea?: string[];
  };
  onSubmit?: (data: {
    name: string;
    companyName: string;
    street?: string;
    city: string;
    number?: string;
    state: string;
    neighborhood?: string;
    responsibleName: string;
    responsiblePosition: string;
    responsiblePhone: string;
    responsibleEmail: string;
    area?: string[];
    subArea?: string[];
  }) => void;
}

const sectors = [
  {
    value: 'agro',
    label: 'Setor Agrícola',
    activities: [
      { value: 'soja', label: 'Soja' },
      { value: 'milho', label: 'Milho' },
    ],
  },
  {
    value: 'pecuaria',
    label: 'Setor Pecuária',
    activities: [
      { value: 'bovino', label: 'Criação de bovino' },
      { value: 'suino', label: 'Criação de suíno' },
    ],
  },
];
  

// const areasWithSubAreas: Record<string, string[]> = {
//   'Agrícola': ['Soja', 'Milho', 'Café'],
//   'Pecuária': ['Criação de bovino', 'Criação de suíno', 'Criação de ovino'],
//   'Florestal': ['Garimpo', 'Extrativismo', 'Mineração'],
// };

const ProjectForm: React.FC<ProjectFormProps> = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData.name || '');
  const [companyName, setCompanyName] = useState(initialData.companyName || '');
  const [street, setStreet] = useState(initialData.street || '');
  const [city, setCity] = useState(initialData.city || '');
  const [number, setNumber] = useState(initialData.number || '');
  const [state, setState] = useState(initialData.state || '');
  const [neighborhood, setNeighborhood] = useState(initialData.neighborhood || '');
  const [responsibleName, setResponsibleName] = useState(initialData.responsibleName || '');
  const [responsiblePosition, setResponsiblePosition] = useState(initialData.responsiblePosition || '');
  const [responsiblePhone, setResponsiblePhone] = useState(initialData.responsiblePhone || '');
  const [responsibleEmail, setResponsibleEmail] = useState(initialData.responsibleEmail || '');
  const [subArea, setSubArea] = useState<string[]>(initialData.subArea || []);


  const handleSubAreaChange = (event: SelectChangeEvent<unknown>) => {
   const selectedSubAreas = event.target.value as string[];
   setSubArea(selectedSubAreas);
   };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      companyName,
      street,
      city,
      number,
      state,
      neighborhood,
      responsibleName,
      responsiblePosition,
      responsiblePhone,
      responsibleEmail,
      subArea,
    };
    if (onSubmit) {
      onSubmit(data);
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box margin={0} mb={0} display="flex">
        <Grid container direction="column" padding={4} spacing={2}>
          <Grid item>
            <CustomTypography variant="h6">Informações do projeto</CustomTypography>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={6}>
              <CustomTextField
                label="Nome do Projeto"
                name="name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Empresa/Instituição"
                name="companyName"
                value={companyName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCompanyName(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={12}>
              <CustomTextField
                label="Rua"
                name="street"
                value={street}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setStreet(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={6}>
              <CustomTextField
                label="Cidade"
                name="city"
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setCity(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Número"
                name="number"
                value={number}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNumber(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={6}>
              <CustomTextField
                label="Estado"
                name="state"
                value={state}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setState(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Bairro"
                name="neighborhood"
                value={neighborhood}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setNeighborhood(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <CustomFormControl sx={{ m: 0, width: 810 }}>
                <StyledInputLabel htmlFor="grouped-native-select">Área de atuação</StyledInputLabel>
                <StyledSelect
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping">
                  <option aria-label="None" value="" />
                  {sectors.map(({ value, label, activities }) => (
                    <optgroup key={value} label={label}>
                      {activities.map((activity) => (
                        <option key={activity.value} value={activity.value}>
                          {activity.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </StyledSelect>
              </CustomFormControl>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box margin={2} mb={0} display="flex">
        <Grid container direction="column" padding={2} spacing={2}>
          <Grid item>
            <CustomTypography variant="h6">Informações do responsável</CustomTypography>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={6}>
              <CustomTextField
                label="Nome do Responsável"
                name="responsibleName"
                value={responsibleName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setResponsibleName(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Cargo do Responsável"
                name="responsiblePosition"
                value={responsiblePosition}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setResponsiblePosition(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container item direction="row" spacing={2}>
            <Grid item xs={6}>
              <CustomTextField
                label="Telefone do Responsável"
                name="responsiblePhone"
                value={responsiblePhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setResponsiblePhone(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Email do Responsável"
                name="responsibleEmail"
                value={responsibleEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setResponsibleEmail(e.target.value); }}
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default ProjectForm;


