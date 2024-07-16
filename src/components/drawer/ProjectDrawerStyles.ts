"use client"

import { styled } from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { SearchOutlined } from "@mui/icons-material";
import { 
  TextField, 
  BottomNavigationAction, 
  BottomNavigation, 
  List as MuiList, 
  ListItem as MuiListItem, 
  Checkbox as MuiCheckbox, 
  ListItemText as MuiListItemText, 
  IconButton,
  FormControlLabel,
  Button,
  Drawer,
  Box,
  Tabs,
  Tab,
  Typography,
  Checkbox,
  Paper
} from "@mui/material";


export const MenuDrawer = styled(IconButton)`
   display: flex;   
   flex-direction: row;   
   padding-left: 40px;   
`;

export const GridColumn = styled.div`  
  max-width: 451px;
  display: flex;  
  align-items: center;  
  gap: 30px;
  margin: 20px 30px 0px 30px;   
`;

export const CageContainer = styled.div`
  display: flex;
  max-width: 451px;
  flex-direction: column;
  margin: 24px 10px 10px 10px;
`;

export const CustomBoxTab = styled(Box)`
  display: flex;
  padding-left: 20px;
`;

export const CustomTabs = styled(Tabs)`   
  background-color: transparent;   

  .MuiTabs-indicator {    
    background-color: #dadada;    
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    color: #000000; 
    font-size: 16px;
    font-weight: 700;  
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    line-height: 19.2px; 
    letter-spacing: 0.15px;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  color: #e08214; 
  &.Mui-checked {
    color: #e08214; 
  } 
  .MuiSvgIcon-root {
    font-size: 28px; 
  }
`;


export const CustomTab = styled(Tab)`
  &.MuiTab-root {    
    background-color: #864e0c;    
    margin-right: 16px;    
    color: #f7f7fb;
    text-transform: none;
    border-radius: 8px 8px 0 0; 
    max-width: 114px;
    max-height: 32px;
    font-size: 12px;
      font-weight: 700;  
      font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif;
      line-height: 14.4px; 
      align-items: center; 
    &.Mui-selected {
      color: #151515;
      background-color: #dadada;
      border-radius: 8px 8px 0 0; 
      font-size: 12px;
      font-weight: 700;  
      font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif;
      line-height: 14.4px; 
      align-items: center;    
    }
  }
`;

export const ContainerTabs = styled.div`
  display: flex;  
  border-radius: 8px;    
  background-color: #dadada;  
  padding: 10px 20px 10px 0px;  
`;


export const CustomBottomNavigation = styled(BottomNavigation)`
  display: flex;
  gap: 10px;
  justify-content: space-around;
`;

export const CustomMenuIcon = styled(MenuIcon)`
   color: #e08214;
   max-width: 40px;
`;

export const CustomHomeIcon = styled(HomeIcon)`
   color: #e08214;
   max-width: 40px;
`;

export const CustomSearchOutlined = styled(SearchOutlined)`
   color: #e08214;
   cursor: pointer;

   &:hover {    
    color: #f2cda1;
  }
`;

export const CustomTextField = styled(TextField)`  
   height: 38px;
   border-radius: 8px !important;    

   .MuiInputBase-root {
   color: #484848;
   font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: 0.15px;
   border-radius: 8px !important;
}   
.MuiInput-underline:before,
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1.5px solid #7c7c7c;
    border-radius: 12px !important;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #7c7c7c;
    }
    fieldset {
      border-color: #7c7c7c;
    }
  }

  .MuiInputLabel-root {
    color: #7c7c7c;
  }

  .MuiInputLabel-root.Mui-focused {
    color: #7c7c7c;
  }
`;


export const StyledListItem = styled(MuiListItem)`
  background-color: #ffffff;
  margin: 0px 10px 10px 0px;
  padding: 10px; 
  max-width: 403px;  
  border-radius: 5px;

.MuiListItemText-primary {
  color: #000000 !important;
  font-size: 16px;
  font-weight: 700;  
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  line-height: 19.2px;  
}
.MuiListItemText-secondary {
  color: #000000 !important;
  font-size: 16px;
  font-weight: 500;  
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  line-height: 19.2px; 
  }

  box-shadow: 5px 5px 5px 0px #999999; 

  &:last-child {
    margin-bottom: 0;
  }
`;



export const StyledListItemText = styled(MuiListItemText)`
  color: #000000 !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;  
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  line-height: 19.2px;  
`;

  
export const CustomInformFragment = styled('div')`
  display: flex;
  justify-content: center;  
  background-color: #ffffff; 
  margin: 0px 0px 10px 0px; 
  max-width: 403px;  
  border-radius: 5px;
  padding-left: 10px;
  box-shadow: 5px 5px 5px 0px #999999; 
`;

export const StyleBoxText = styled('div')`
  max-width: 403px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 10px;  
  padding: 10px;
  background-color: transparent;`;


export const RankingText = styled(Typography)` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #d9d9d9;
  color: #000000;
  border-radius: 8px;
  border: 1px solid  #999999;
  gap: 10px;  
  margin-right: 8px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;  
  letter-spacing: 0.46;
`;

export const TitleText = styled(Typography)`
  margin-bottom: 4px;
  color: #000000;  
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;  
  letter-spacing: 0.15;
`;

export const SubtitleText = styled(Typography)`  
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.2px;  
  letter-spacing: 0.15;
`;




export const CustomPaper = styled(Paper)`
  display: flex;
  max-width: 467px;
  align-items: center;
  justify-content: space-around; 
  gap: 20px;
  border: none;
  background-image: linear-gradient(#ffffff, #666f45);
  
`;

export const InternalPaper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-top: 25px; 
`;















export const ButtonExit = styled(Button)`
  display: flex;   
  align-items: center; 
  justify-content: center; 
  max-width: 163px;   
  background-color: transparent;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;  
  letter-spacing: 0.10px;
  cursor: pointer;  
  border: none; 
  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: #000000;
    border-color: #ffffff;
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
    background-color: #f2cda1;
    border-color: none;
  }

  .icon {
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    color: #ffffff;
  }
`;