import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BackgroundHeader from "../assets/bgheader.png"
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Details from './Details'

export default function ResponsiveGrid() {
    const [open, setOpen] = React.useState(false);

    const close = () => {
        setOpen(false)
    }
    return (
        <Box sx={{ flexGrow: 1, mt: 2.5, p:2 }}>
            <Grid container spacing={{ xs: 2, md: 3, p: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        {/* <Item>xs=2</Item> */}
                        <Box>
                            <Box sx={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.05)', backgroundColor: '#fff' }}>
                                <Typography sx={{ borderTopRightRadius: '8px !important', borderTopLeftRadius: '8px !important', backgroundImage: `url(${BackgroundHeader}), linear-gradient(to top left, #207cca, #e87bf2)`, height: '80px', p: 1, fontFamily: 'Rubik', lineHeight: 3.33, fontWeight: 500, fontSize: '18px', color: '#fff', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Friendly Name</Typography>
                                <Box sx={{ p: 1.5 }}>
                                    <Typography sx={{ p: 1, fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Friendly Name</Typography>
                                    <Typography sx={{ pt: 0, p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Friendly Name</Typography>

                                    <Typography sx={{ p: 1, fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>DNS Name</Typography>
                                    <Typography sx={{ pt: 0, p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>DNS Name</Typography>

                                    <Typography sx={{ p: 1, fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Description</Typography>
                                    <Typography sx={{ pt: 0, p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Description</Typography>

                                    <Typography sx={{ p: 1, fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>End Date</Typography>
                                    <Typography sx={{ pt: 0, p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>21/11/2021, 02:33 am.</Typography>
                                </Box>
                                <Box
                                    m={1}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Button onClick={() => setOpen(!open)} sx={{ width: '95%', mb: 3, mt: 1, backgroundColor: '#01ae8f', border: 'solid 1px #01ae8f', borderRadius: '4px', color: '#fff' }} variant="contained">Details</Button>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                ))}
                <SwipeableDrawer
                    anchor={'right'}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    sx={{ background: 'transparent' }}
                >
                    <Details close={close} />
                </SwipeableDrawer>
            </Grid>
        </Box>
    );
}