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
  FormControlLabel
} from "@mui/material";


export const CustomFormControlLabel = styled(FormControlLabel)`  
  .MuiFormControlLabel-label {
   color: #000000;
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
   font-weight: 700;
   font-size: 16px;
   line-height: 19.2px;
   letter-spacing: 0.15px;
  }
`;

export const MenuDrawer = styled(IconButton)`
   display: flex;   
   flex-direction: row;   
   padding-left: 20px;
   gap: 20px;
`;


export const DrawerContainer = styled.div`   
  margin: 0px 10px 0px 10px;
  border-radius: 8px;  
  background-color: #dadada;  
`;

export const GridColumn = styled.div`
  display: flex;
  align-items: center;  
  gap: 20px;
  justify-content: center;  
  margin: 20px;
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

export const CustomBottomNavigationAction = styled(BottomNavigationAction)`
  max-width: 132px;   
  height: 38px;  
  border-radius: 8px 8px 0px 0px !important;
  background-color: #864e0c !important;
  color: #f7f7fb !important;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.4px;
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

    &:hover {
    background-color: #dadada;
    color: #000000;
  } 
`;

export const StyledList = styled(MuiList)`
  max-width: 403px;   
  border-radius: 5px;
  padding: 10px;
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

export const StyledCheckbox = styled(MuiCheckbox)`
  color: #e08214;  
  margin-left: 10px;

  &.Mui-checked {
    color: #864e0c;
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
  
