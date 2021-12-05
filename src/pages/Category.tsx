import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Category = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 3, paddingBottom: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ paddingTop: 3, paddingBottom: 3 }}>
          <Box sx={{ marginBottom: 3, borderBottom: '1px solid #313131' }}>
            <Typography variant="h4">Category's post</Typography>
          </Box>
          {/* // TODO, this is where we want to add the dropzone */}
          <p>Dropzone area</p>
        </Grid>
        <Grid item xs={4}>
          {/* // TODO, this is where we want to list all categories */}
          <p>Categories list</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Category;
