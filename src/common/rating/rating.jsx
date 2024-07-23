import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const HalfRating = () => {
  return (
    <Stack>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
  );
};
export default HalfRating;
