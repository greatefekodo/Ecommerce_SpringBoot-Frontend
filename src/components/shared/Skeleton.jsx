import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';



const SkeletonCreated = () => {

  return (
    <Box sx={{ width: 700 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />

      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />

      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}


 

export default SkeletonCreated;