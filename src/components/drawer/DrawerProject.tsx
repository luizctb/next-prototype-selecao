"use client"

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { TextLimit } from "../TextLimit/TextLimit";
import { 
  Box,   
  CssBaseline, 
  Drawer,   
  Grid, 
  IconButton, 
  InputAdornment 
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
  CustomFormControlLabel
} from "./DrawerProjectStyles";


export interface FragmentsProps {
   primary: string;
   secondary: string;
 }
 
 const creationItems: readonly FragmentsProps[] = [
   { primary: 'Fragmento 01', secondary: "Bioma X, ocorrência de espécies de animais mamíferos" },
   { primary: 'Fragmento 02', secondary: "Bioma X, ocorrência de espécies animais ovinos" },
   { primary: 'Fragmento 03', secondary: "Bioma X, ocorrência de espécies repteis" },
   { primary: 'Fragmento 01', secondary: "Bioma X, ocorrência de espécies de animais mamíferos" },
   { primary: 'Fragmento 02', secondary: "Bioma X, ocorrência de espécies animais ovinos" },
   { primary: 'Fragmento 03', secondary: "Bioma X, ocorrência de espécies repteis" },
   { primary: 'Fragmento 01', secondary: "Bioma X, ocorrência de espécies de animais mamíferos" },
   { primary: 'Fragmento 02', secondary: "Bioma X, ocorrência de espécies animais ovinos" },   
 ];
 
 const monitoringItems: readonly FragmentsProps[] = [
   { primary: 'Monitoramento 01', secondary: "Bioma Y, ocorrência de espécies mamíferos" },
   { primary: 'Monitoramento 02', secondary: "Bioma Y, ocorrência de espécies aves" },
 ];
 
 const newPopulationItems: readonly FragmentsProps[] = [
   { primary: 'Nova População 01', secondary: "Bioma Z, ocorrência de espécies mamíferos" },
   { primary: 'Nova População 02', secondary: "Bioma Z, ocorrência de espécies aves" },
 ];
 
 export interface DrawerProps {
   imagePath: string;
 }
 
 const DrawerProject: React.FC<DrawerProps> = ({ imagePath = '/images/logoName.png' }) => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const handleSearchClick = () => { };
 
   const [value, setValue] = useState(0);
   const ref = React.useRef<HTMLDivElement>(null);
 
   const [checkedItems, setCheckedItems] = useState<boolean[][]>(
     [new Array(creationItems.length).fill(false), new Array(monitoringItems.length).fill(false), new Array(newPopulationItems.length).fill(false)]
   );
 
   const handleToggle = (index: number, navIndex: number) => () => {
     const newCheckedItems = [...checkedItems];
     newCheckedItems[navIndex][index] = !newCheckedItems[navIndex][index];
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
 
   const getItemsForValue = (value: number): FragmentsProps[] => {
     switch (value) {
       case 0: return creationItems;
       case 1: return monitoringItems;
       case 2: return newPopulationItems;
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
       <>
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
                   <StyledListItem  key={index}>
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
         </Drawer>
       </>               
     </Box>
   );
 };
 
 export default DrawerProject;
