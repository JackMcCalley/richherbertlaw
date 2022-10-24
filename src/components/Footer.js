import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const Footer = () => {
    

    return(
        <Grid sx={{width: '100%', height: '50vh', backgroundColor: 'rgb(24, 24, 24)', color: 'white', alignItems: 'center'}}>
            <Box sx={{margin: '5rem', padding: '1.5rem'}}>
                <Typography sx={{fontSize: '2vmax'}}>
                430 Main Street, Suite 3, Agawam, MA 01001
                </Typography>
                <br/>
                <Typography sx={{fontSize: '.9vmax'}}>
                The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
                </Typography>
            </Box>
        </Grid>
    )
}

export default Footer;