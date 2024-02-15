import { Button, Grid, Stack } from '@mui/material';
import React from 'react'

const Page = () => {
  return (
    <>
      <Grid
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
        direction="column"
        >
          <h1>Using MUI with Next.js 13</h1>
          <Stack direction="row" columnGap={1}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
      </Grid>
    </>
  )
}

export default Page;