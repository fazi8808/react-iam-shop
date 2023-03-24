import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DropDownWithAccordian from './DropDownWithAccordian'
import SearchField from './SearchField'
import TableView from './TableView'
import BoxesLayout from './BoxesLayout'
import SubHeader from '../components/SubHeader'

export default function Container() {
  const toggleHandle = (index: number) => {
    console.log(index, 'index')
    setShowView(index)
  }
  const [showView, setShowView] = React.useState<number>(1)
 

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <SubHeader toggleHandle={toggleHandle} showView={showView}/>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <DropDownWithAccordian/>
        </Grid>
        <Grid item xs>
          <SearchField />
          {
            showView === 1 ? (<TableView />) : (<BoxesLayout/>)
          }
        </Grid>
      </Grid>
    </Box>
  );
}
