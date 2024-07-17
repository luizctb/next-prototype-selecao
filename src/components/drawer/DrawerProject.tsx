"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
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
  CustomInformFragment,
  StyleBoxText,
  RankingText,
  SubtitleText,
  TitleText,
  StyledFormControlLabel,
  StyledCheckbox,
  CageContainer,
  CustomBoxTab,
  CustomPaper,
  InternalPaper
} from "./ProjectDrawerStyles";
import LogoutIcon from '@mui/icons-material/Logout';
import { ButtonRegister } from "../buttons/ButtonsLayout";

export interface DrawerProps {
  imagePath?: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface FragmentsProps {
  ranking: string;
  title: string;
  text: string;
  address: string;
  id: string;
}

export interface TextLimitProps {
  text: string;
  limit: number;
}

const creationItems: readonly FragmentsProps[] = [
  { ranking: '001', title: 'Fragmento abc', text: "Bioma X, ocorrência de espécies de animais mamíferos", address: 'rua um, bairro dois', id: 'unique_id-1' },
  { ranking: '002', title: 'Fragmento bcd', text: "Bioma X, ocorrência de espécies de animais mamíferos", address: 'rua vinte e um, bairro três', id: 'unique_id-2' },
];

const monitoringItems: readonly FragmentsProps[] = [
  { ranking: '001', title: 'Monitoramento abc', text: "Bioma X, ocorrência de espécies de animais mamíferos", address: 'rua quatro, bairro dois', id: 'unique_id-3' },
  { ranking: '002', title: 'Monitoramento bcd', text: "Bioma X, ocorrência de espécies de animais mamíferos", address: 'rua sete, bairro oito', id: 'unique_id-4' },
];

const newPopulationItems: readonly FragmentsProps[] = [
  { ranking: '001', title: 'Nova População abc', text: "Bioma X, ocorrência de espécies de animais mamíferos", address: 'rua cinco, bairro dois', id: 'unique_id-5' },
  { ranking: '002', title: 'Nova População bcd', text: "Bioma X, ocorrência de espécies de animais mamíferos", address: 'rua nove, bairro dois', id: 'unique_id-6' },
];

const TextLimit: React.FC<TextLimitProps> = ({ text, limit }) => {
  const textLimited = text.length > limit ? `${text.substring(0, limit)}...` : text;
  return <Typography variant="body2">{textLimited}</Typography>;
};

const CustomTabPanel: React.FC<TabPanelProps> = ({ children, index, value, ...other }) => (
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

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});


const DrawerProject: React.FC<DrawerProps> = ({ imagePath = '/images/logoName.png' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[][]>([
    Array(creationItems.length).fill(false),
    Array(monitoringItems.length).fill(false),
    Array(newPopulationItems.length).fill(false),
  ]);
  const [value, setValue] = useState(0);

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
        <CustomInformFragment key={item.id} >
          <StyledFormControlLabel
            control={<StyledCheckbox
              checked={checkedItems[tabIndex][index]}
              onChange={handleChildChange(tabIndex, index)} />}
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

  const [openReportDialog, setOpenReportDialog] = useState(false);

  const handleGenerateReport = () => {
    const _reportData = {
      creationItems,
      monitoringItems,
      newPopulationItems,
    };
    setOpenReportDialog(true);
  };

  const handleCloseReportDialog = () => {
    setOpenReportDialog(false);
  };

  return (
    <Box>
      <MenuDrawer
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => { setIsDrawerOpen(true); }}
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
              onClick={() => { setIsDrawerOpen(false); }}
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
                    <CustomSearchOutlined onClick={() => { console.log('Search button clicked'); }} />
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
          <CustomPaper
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <InternalPaper
              sx={{ pb: 3 }}
            >
              <ButtonExit
                variant="outlined"
                startIcon={<LogoutIcon />}
              >
                Sair do Sistema
              </ButtonExit>
              <ButtonRegister onClick={handleGenerateReport}>
                GERAR RELATÓRIO DE AÇÃO
              </ButtonRegister>
            </InternalPaper>
          </CustomPaper>
        </Drawer>
      </Grid>
      <Dialog open={openReportDialog} onClose={handleCloseReportDialog}>
        <DialogTitle>Relatório de Fragmentos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Adicionar o report do relatório após integração API */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DrawerProject;