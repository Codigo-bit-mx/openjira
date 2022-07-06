import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, {FC} from 'react'


export const EntryCard = () => {
    return ( 

       <Card>
           <CardActionArea>

               <CardContent>
                    <Typography sx={{whiteSpace: 'pre-line'}}>Esto es la descripción</Typography>
               </CardContent>
        
               <CardActions>
                    <Typography variant='body2'>hace 30 minutos</Typography>
               </CardActions>
           
           </CardActionArea>
       </Card>

     );
}
 
