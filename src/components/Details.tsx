import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import BackgroundHeader from "../assets/bgheader.png"
import IconButton from '@mui/material/IconButton';
import { ReactComponent as CloseIcon } from '../assets/close.svg'

export default function Details(props: any) {

    const {close} = props;

    return (
        <div>
            <Box sx={{ borderTopRadius: '16px', flexGrow: 1, width: '768px', height: '743px', background: '#fbfbfd !important' }}>
                <Box sx={{backgroundImage: `url(${BackgroundHeader}), linear-gradient(to top left, #207cca, #e87bf2)`, display: 'inline-flex', width: '100%'}}>
                <Typography sx={{ paddingLeft: '32px !important', height: '80px', p: 1, fontFamily: 'Rubik', lineHeight: 3.33, fontWeight: 500, fontSize: '18px', color: '#fff', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Computers Item Friendly Name</Typography>
                <IconButton onClick={() => close()} sx={{  position: 'absolute', right: '3%', top: '3%' }}>
                    <CloseIcon />
                </IconButton>
                </Box>
               
                <Box sx={{ background: 'white', p: 3, }}>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ p: 1, width: '238px', fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Friendly Name</Typography>
                        <Typography sx={{ pt: 0, width: '238px', p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Friendly Name</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ p: 1, width: '238px', fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Environment</Typography>
                        <Typography sx={{ pt: 0, width: '238px', p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>Environment</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ p: 1, width: '238px', fontFamily: 'Rubik', lineHeight: 1.33, fontWeight: 500, fontSize: '12px', color: '#9b9b9b', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>End Date</Typography>
                        <Typography sx={{ pt: 0, width: '238px', p: 1, fontFamily: 'Rubik', lineHeight: 1.14, fontWeight: 500, fontSize: '14px', color: '#000', letterSpacing: 'normal', fontStyle: 'normal', fontStretch: 'normal' }}>21/11/2021   02:33 a.m.</Typography>
                    </Box>
                </Box>
                <Button onClick={() => close()} sx={{ ml: 3, mt: 1, backgroundColor: '#307fc1', border: 'solid 1px #307fc1', borderRadius: '4px', color: '#fff' }} variant="contained">Close</Button>
            </Box>
        </div>
    );
}