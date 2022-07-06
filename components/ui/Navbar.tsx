import {FC, useContext} from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {UIContext} from '../../context/ui'

export const Navbar: FC = () => {
    
    const { openMenuSidebar } = useContext(UIContext); 
    
    return ( 
        <AppBar>
            <Toolbar>
                <IconButton
                    size= 'large'
                    edge= 'start'
                    onClick= {openMenuSidebar}
                >
                    <MenuOutlinedIcon />                    
                </IconButton>
                <Typography variant='h6'>Open-Jira</Typography>
            </Toolbar>
        </AppBar>
     );
}
 