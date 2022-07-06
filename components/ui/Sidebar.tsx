import React, {useContext} from 'react';
import {Box, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import {UIContext} from '../../context/ui/'


const menuItem:string[] = ['Inbox', 'Starred', 'Send', 'Email', 'Drafts'] 

export const Sidebar = () => {

    const { sideMenuOpen, closeMenuSidebar  } = useContext( UIContext )
    
    return ( 
        <Drawer
            anchor="left"
            open={sideMenuOpen}
            onClose={closeMenuSidebar}
        >

        <Box sx={{ width: 250}}> 
         <Box sx={{padding: '5px 10px'}} >
            <Typography
                variant='h4'
            >
                Menu
            </Typography>
        </Box>

        <List>
        {
            menuItem.map((value, index) => (
                <ListItem button key={value}>
                    <ListItemIcon>
                    {index % 2 ? <AssessmentOutlinedIcon /> : <AttachEmailOutlinedIcon /> }
                    </ListItemIcon>
                    <ListItemText  primary={value}/>
                </ListItem>
            ))  
        }
        </List>

        <Divider />

<List>
        {
            menuItem.map((value, index) => (
                <ListItem button key={value}>
                    <ListItemIcon>
                    {index % 2 ? <AssessmentOutlinedIcon /> : <AttachEmailOutlinedIcon /> }
                    </ListItemIcon>
                    <ListItemText  primary={value}/>
                </ListItem>
            ))  
        }
        </List>
        

        </Box>
        
        </Drawer>
     );
}
 