"use client"

import Image from "next/image";
import React, { useState } from "react";
import { TextLimit } from "../TextLimit/TextLimit";
import {   
  BottomNavigationAction,
  Box,   
  Button,   
  CssBaseline, 
  Drawer,   
  Grid, 
  IconButton,   
  InputAdornment,   
  List, 
  Paper
} from "@mui/material";
import { 
  CustomHomeIcon, 
  CustomMenuIcon, 
  CustomTextField, 
  MenuDrawer, 
  CustomSearchOutlined, 
  GridColumn, 
  DrawerContainer, 
  CustomBottomNavigationAction, 
  CustomBottomNavigation, 
  StyledList, 
  StyledListItem, 
  StyledListItemText, 
  StyledCheckbox, 
  CustomFormControlLabel,
  ButtonExit
} from "./DrawerProjectStyles";
import { ButtonRegister } from "../buttons/ButtonsLayout";


export interface FragmentsProps {
   id: string;
   primary: string;
   secondary: string;
 }


 const creationItems: readonly FragmentsProps[] = [
  {
    id: 'creation-1',
    primary: 'Fragmento 01', 
    secondary: "Bioma X, ocorrência de espécies de animais mamíferos",
  },
  {
    id: 'creation-2',
    primary: 'Fragmento 02', 
    secondary: "Bioma X, ocorrência de espécies animais ovinos",    
  },
  {
    id: 'creation-3',
    primary: 'Fragmento 03', 
    secondary: "Bioma X, ocorrência de espécies répteis",    
  },
  {
    id: 'creation-4',
    primary: 'Fragmento 04', 
    secondary: "Bioma X, ocorrência de espécies de animais mamíferos",    
  },
  {
    id: 'creation-5',
    primary: 'Fragmento 05', 
    secondary: "Bioma X, ocorrência de espécies animais ovinos",    
  }, 
  {
    id: 'creation-2',
    primary: 'Fragmento 02', 
    secondary: "Bioma X, ocorrência de espécies animais ovinos",    
  },
  {
    id: 'creation-3',
    primary: 'Fragmento 03', 
    secondary: "Bioma X, ocorrência de espécies répteis",    
  },
  {
    id: 'creation-4',
    primary: 'Fragmento 04', 
    secondary: "Bioma X, ocorrência de espécies de animais mamíferos",    
  },
  {
    id: 'creation-5',
    primary: 'Fragmento 05', 
    secondary: "Bioma X, ocorrência de espécies animais ovinos",    
  }, 
];
 
 
 const monitoringItems: readonly FragmentsProps[] = [
   { 
    id: 'creation-6',
    primary: 'Monitoramento 01', 
    secondary: "Bioma Y, ocorrência de espécies mamíferos" 
  }, 
  { 
    id: 'creation-7',
    primary: 'Monitoramento 01', 
    secondary: "Bioma Y, ocorrência de espécies mamíferos" 
  },   
 ];
 
 const newPopulationItems: readonly FragmentsProps[] = [
   { 
    id: 'creation-8',
    primary: 'Nova População 01', 
    secondary: "Bioma Z, ocorrência de espécies mamíferos" 
  },
   { 
    id: 'creation-9',
    primary: 'Nova População 02', 
    secondary: "Bioma Z, ocorrência de espécies aves" },
 ];
 
 export interface DrawerProps {
   imagePath: string;
 }
 
 const DrawerProject001: React.FC<DrawerProps> = ({ imagePath = '/images/logoName.png' }) => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const handleSearchClick = () => { };
 
   const [value, setValue] = useState(0);
  
 
   const [checkedItems, setCheckedItems] = useState<boolean[][]>(
     [new Array(creationItems.length).fill(false), new Array(monitoringItems.length).fill(false), new Array(newPopulationItems.length).fill(false)]
   );
 
   const handleToggle = (index: number, newIndex: number) => () => {
     const newCheckedItems = [...checkedItems];
     newCheckedItems[newIndex][index] = !newCheckedItems[newIndex][index];
     setCheckedItems(newCheckedItems);
   };
 
   const isAllChecked = checkedItems[value]?.every(Boolean) || false;
   const isSomeChecked = checkedItems[value]?.some(Boolean) || false;
 
   const handleParentToggle = () => {
     const newCheckedItems = [...checkedItems];
     if (isAllChecked) {
       newCheckedItems[value] = newCheckedItems[value].map(() => false);
     } else {
       newCheckedItems[value] = newCheckedItems[value].map(() => true);
     }
     setCheckedItems(newCheckedItems);
   };
 
   const getItemsForValue = (newValue: number): FragmentsProps[] => {
    switch (newValue) {
      case 0: return creationItems.map((item) => ({ ...item, id: '' }));
      case 1: return monitoringItems.map((item) => ({ ...item, id: '' }));
      case 2: return newPopulationItems.map((item) => ({ ...item, id: '' }));
      default: return [];
    }
  };

   const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  return (
     <Box >       
         <MenuDrawer 
          size='large' 
          edge='start' 
          color='inherit' 
          aria-label='logo' 
          onClick={() => 
          setIsDrawerOpen(true)}>
           <CustomMenuIcon />
         </MenuDrawer>       
       <div>
         <Drawer anchor='left' open={isDrawerOpen}>
           <GridColumn>
             <IconButton 
              size='large' 
              edge='start' 
              color='inherit' 
              aria-label='logo' 
              onClick={() => 
              setIsDrawerOpen(false)}>
               <CustomMenuIcon />
             </IconButton>
             <CustomHomeIcon />
             {imagePath ? <Image alt="logoName" height={40.66} src={imagePath} width={144} /> : null}
           </GridColumn>
           <GridColumn>
             <CustomTextField
               id="outlined-basic"
               label="Buscar endereço"
               variant="outlined"
               InputProps={{
                 endAdornment: (
                   <InputAdornment position="end">
                     <CustomSearchOutlined onClick={handleSearchClick} />
                   </InputAdornment>
                 ),
               }}
             />
           </GridColumn>           
            <GridColumn >
             <CustomBottomNavigation
               showLabels
               value={value}
               onChange={(event, newValue) => {
                 setValue(newValue);
               }}
             >
               <CustomBottomNavigationAction               
                onClick={handleButtonClick}
                label="Criação"
                value={0}                
                />
               <CustomBottomNavigationAction 
                onClick={handleButtonClick}
                label="Monitoramento" 
                value={1}                
                />
               <CustomBottomNavigationAction                
                onClick={handleButtonClick}
                label="Novas populações" 
                value={2}                
                />
             </CustomBottomNavigation>
             </GridColumn>             
              <DrawerContainer>                
               <Grid>
               <CssBaseline />
               <CustomFormControlLabel
                 label="Não explorar esse eixo"
                 control={
                   <StyledCheckbox
                     checked={isAllChecked}
                     indeterminate={!isAllChecked && isSomeChecked}
                     onChange={handleParentToggle}
                   />
                 }
               />
               </Grid>
               <Grid>
               <StyledList>
                 {getItemsForValue(value).map((item, index) => (
                   <StyledListItem  key={item.id}>
                     <StyledCheckbox
                       edge="start"
                       onChange={handleToggle(index, value)}
                       checked={checkedItems[value]?.[index] || false}
                     />
                     <StyledListItemText  
                      primary={<TextLimit text = {item.primary} limit={43}/>} 
                      secondary={<TextLimit text ={item.secondary} limit={43}/>} />
                   </StyledListItem >
                 ))}
               </StyledList>            
             </Grid>
             </DrawerContainer>   

           
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, maxWidth: 451 }} elevation={3}>
              <Box sx={{ pb: 5 }}>  
                 
                  <ButtonExit>
                    Sair do sistema
                  </ButtonExit>

                  <ButtonRegister>
                    GERAR RELATÓRIO DE AÇÃO
                  </ButtonRegister>  

                  <ButtonRegister>
                    GERAR RELATÓRIO DE AÇÃO
                  </ButtonRegister>                
              </Box>
            </Paper>                        
         </Drawer>
       </div>
     </Box>
   );
 };
 
 export default DrawerProject;
