"use client";

import Image from "next/image";
import React, { useState } from "react";
import { 
  Box,     
  Drawer,    
  IconButton,   
  InputAdornment,   
  Paper,  
  Checkbox,
  FormControlLabel,
  Typography,  
  Grid,
  Button
} from "@mui/material";
import { 
  CustomHomeIcon, 
  CustomMenuIcon, 
  CustomTextField, 
  MenuDrawer, 
  CustomSearchOutlined, 
  GridColumn,  
  ButtonExit,  
  ContainerTabs,
  CustomTabs, 
  CustomTab,  
  CustomItemText,
  CustomInformFragment,
  CustomRankingBox,
  StyleBoxText,
  RankingText,
  SubtitleText,
  TitleText,
  CageContainer,
  CustomBoxTab,
  StyledFormControlLabel,
  StyledCheckbox,
  CustomPaper,
  GradientBox,
  InternalPaper
} from "./ProjectDrawerStyles";
import { ButtonRegister } from "../buttons/ButtonsLayout";
import LogoutIcon from '@mui/icons-material/Logout';

export interface DrawerProps {
  imagePath: string;
}

export interface FragmentsProps {
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

export interface TabPanelProps {
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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export interface TextLimitProps {
  text: string;
  limit: number;
}

const TextLimit: React.FC<TextLimitProps> = ({ text, limit }) => {
  const textLimited = text.length > limit ? `${text.substring(0, limit)}...` : text;
  return <Typography variant="body2">{textLimited}</Typography>;
};

const DrawerProject: React.FC<DrawerProps> = ({ imagePath = '/images/logoName.png' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[][]>([
    Array(creationItems.length).fill(false),
    Array(monitoringItems.length).fill(false),
    Array(newPopulationItems.length).fill(false),
  ]);
  const [value, setValue] = React.useState(0);


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
      <StyledFormControlLabel
        label="Não explorar esse eixo"
        control={
          <StyledCheckbox
            checked={checkedItems[tabIndex].every(Boolean)}
            indeterminate={checkedItems[tabIndex].some(Boolean) && !checkedItems[tabIndex].every(Boolean)}
            onChange={handleParentChange(tabIndex)}
          />
        }
      />
      {items.map((item, index) => (
        <CustomInformFragment key={index} >
          <StyledFormControlLabel
            control={<StyledCheckbox checked={checkedItems[tabIndex][index]} onChange={handleChildChange(tabIndex, index)} />}
            label={  
              <StyleBoxText>

                <div>
                <RankingText variant="body1">{`${index + 1}`}</RankingText>
                </div>
                <div>
                  <TitleText variant="subtitle1">{item.title}</TitleText>

                  <SubtitleText variant="body2">
                    <TextLimit text={item.text} limit={48} />
                  </SubtitleText>
                  </div>
              </StyleBoxText>
            
            }
          />
        </CustomInformFragment>
      ))}
    </Box>
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleGenerateReport = () => {
    const reportData = {
      creationItems,
      monitoringItems,
      newPopulationItems,
    };
    alert(`Relatório gerado com os seguintes dados: ${JSON.stringify(reportData, null, 2)}`);
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

      <Grid>
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
            <CustomTextField
              label="Buscar endereço"
              name="street"                      
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CustomSearchOutlined onClick={() => {}} />
                  </InputAdornment>
                ),
              }}
            />
          </GridColumn>          
          
        
          <CageContainer>
            <Grid>
            <CustomBoxTab sx={{ width: '100%' }}>
              <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <CustomTab label="Criação" {...a11yProps(0)} />
                <CustomTab label="Monitoramento" {...a11yProps(1)} />
                <CustomTab label="Novas populações" {...a11yProps(2)} />            
              </CustomTabs>          
            </CustomBoxTab> 
            </Grid>
            <Grid>

              <ContainerTabs>          
                <CustomTabPanel value={value} index={0}>
                  {renderItems(creationItems, 0)}            
                </CustomTabPanel>          
                <CustomTabPanel value={value} index={1}>
                  {renderItems(monitoringItems, 1)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  {renderItems(newPopulationItems, 2)}
                </CustomTabPanel>
              </ContainerTabs>
            </Grid>
          </CageContainer>  
            
            
        
        <CustomPaper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <InternalPaper sx={{ pb: 3 }}>            
          <ButtonExit variant="outlined" startIcon={<LogoutIcon />}>
          Sair do Sistema
          </ButtonExit>
           
            <ButtonRegister onClick={handleGenerateReport}>
              GERAR RELATÓRIO DE AÇÃO
            </ButtonRegister>
            
          </InternalPaper>
        </CustomPaper>    
        
      </Drawer>
      </Grid>
    </Box>
  );
};

export default DrawerProject;