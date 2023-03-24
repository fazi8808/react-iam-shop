import React, {ReactElement, FC} from "react";
import { Box, Divider } from "@mui/material";
import SubHeader from '../components/SubHeader'
import Container from '../components/Container'
  
const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{ minWidth: 275, background: '#eef0f4'}}>
            {/* <SubHeader/> */}
            <Divider variant="middle" />
            <Container/>
        </Box>
    );
};

export default Home;