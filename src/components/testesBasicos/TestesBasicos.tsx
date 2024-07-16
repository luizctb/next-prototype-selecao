"use client";

import Image from "next/image";
import React, { useState } from "react";
import { 
  Box,     
  Drawer,    
  IconButton,   
  InputAdornment,   
  Paper,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  Typography,  
  TextField
} from "@mui/material";
import { 
  CustomHomeIcon, 
  CustomMenuIcon, 
  CustomTextField,  
  CustomSearchOutlined, 
  GridColumn,  
  ButtonExit,
  MenuDrawer 
} from "../drawer/DrawerProjectStyles";
import { ButtonRegister } from "../buttons/ButtonsLayout";


export interface DrawerProps {
  imagePath: string;
}

interface FragmentsProps {
  ranking: string;
  title: string;
  text: string;
  adress: string;
}

const creationItems: readonly FragmentsProps[] = [
  { ranking: '001', title: 'Fragmento abc', text: "Bioma X, ocorrência de espécies de animais mamíferos", adress: 'rua um, bairro dois' },
  { ranking: '002', title: 'Fragmento bcd', text: "Bioma X, ocorrência de espécies de animais mamíferos", adress: 'rua vinte e um, bairro três' },
];

const monitoringItems: readonly FragmentsProps[] = [
  { ranking: '001', title: 'Monitoramento abc', text: "Bioma X, ocorrência de espécies de animais mamíferos", adress: 'rua quatro, bairro dois' },
  { ranking: '002', title: 'Monitoramento bcd', text: "Bioma X, ocorrência de espécies de animais mamíferos", adress: 'rua sete, bairro oito' },
];

const newPopulationItems: readonly FragmentsProps[] = [
  { ranking: '001', title: 'Nova População abc', text: "Bioma X, ocorrência de espécies de animais mamíferos", adress: 'rua cinco, bairro dois' },
  { ranking: '002', title: 'Nova População bcd', text: "Bioma X, ocorrência de espécies de animais mamíferos", adress: 'rua nove, bairro dois' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface CustomTextFieldProps {
  onInputChange: (value: string) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ onInputChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onInputChange(newValue);
  };

  return (
    <CustomTextField
      label="Buscar endereço"
      name="street"
      fullWidth
      margin="normal"
      onChange={handleInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CustomSearchOutlined onClick={() => {}} />
          </InputAdornment>
        ),
      }}
    />
  );
};

const TestBasics: React.FC<DrawerProps> = ({ imagePath = '/images/logoName.png' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[][]>([
    Array(creationItems.length).fill(false),
    Array(monitoringItems.length).fill(false),
    Array(newPopulationItems.length).fill(false),
  ]);
  const [value, setValue] = useState(0);
  const [filteredFragments, setFilteredFragments] = useState<FragmentsProps[]>([]);

  const handleInputChange = (inputValue: string) => {
    const filtered = [...creationItems, ...monitoringItems, ...newPopulationItems].filter((fragment) =>
      fragment.adress.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredFragments(filtered);
  };

  const handleParentChange = (tabIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const newCheckedItems = [...checkedItems];
    newCheckedItems[tabIndex] = newCheckedItems[tabIndex].map(() => isChecked);
    setCheckedItems(newCheckedItems);
  };

  const handleChildChange = (tabIndex: number, index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[tabIndex][index] = event.target.checked;
    setCheckedItems(newCheckedItems);
  };

  const renderItems = (items: readonly FragmentsProps[], tabIndex: number) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checkedItems[tabIndex].every(Boolean)}
            indeterminate={checkedItems[tabIndex].some(Boolean) && !checkedItems[tabIndex].every(Boolean)}
            onChange={handleParentChange(tabIndex)}
          />
        }
      />
      {items.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            control={<Checkbox checked={checkedItems[tabIndex][index]} onChange={handleChildChange(tabIndex, index)} />}
            label={
              <Box>
                <Typography variant="subtitle1">{`${index + 1} - ${item.title}`}</Typography>
                <Typography variant="body2">{item.text}</Typography>
              </Box>
            }
          />
        </Box>
      ))}
    </Box>
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <MenuDrawer
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <CustomMenuIcon />
      </MenuDrawer>

      <Drawer anchor="left" open={isDrawerOpen}>
        <GridColumn>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setIsDrawerOpen(false)}
          >
            <CustomMenuIcon />
          </IconButton>
          <CustomHomeIcon />
          {imagePath ? <Image alt="logoName" height={40.66} src={imagePath} width={144} /> : null}
        </GridColumn>    

        <GridColumn>
          <CustomTextField onInputChange={handleInputChange} />
          <Box>
            {filteredFragments.map((fragment, index) => (
              <Typography key={index} variant="body2">{fragment.adress}</Typography>
            ))}
          </Box>
        </GridColumn>

        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Criação" {...a11yProps(0)} />
            <Tab label="Monitoramento" {...a11yProps(1)} />
            <Tab label="Novas populações" {...a11yProps(2)} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            {renderItems(creationItems, 0)}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {renderItems(monitoringItems, 1)}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {renderItems(newPopulationItems, 2)}
          </CustomTabPanel>
        </Box>
        
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, maxWidth: 451 }} elevation={3}>
          <Box sx={{ pb: 5 }}>
            <ButtonExit>Sair do sistema</ButtonExit>
            <ButtonRegister>GERAR RELATÓRIO DE AÇÃO</ButtonRegister>
          </Box>
        </Paper>       
      </Drawer>
    </Box>
  );
};

export default TestBasics;

