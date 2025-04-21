import { Box, Typography, Stack, TextField } from '@mui/material';
import { Action } from './builder-state';
import { Dispatch } from 'react';

interface StaticOptionsProps {
  staticPages: number;
  dispatch: Dispatch<Action>;
}

export const StaticOptions = ({ 
    staticPages, 
    dispatch 
  }: StaticOptionsProps
) => (
  <Box width="100%" /* Static Type */>
    <Typography variant="subtitle2" color="textSecondary">
      Static Website Options
    </Typography>

    <Stack spacing={2} mt={2}>
      <Typography variant="subtitle2" display="flex" justifyContent="space-between">
        Layout & Navigation <span className="text-success">$100</span>
      </Typography>
      <Typography variant="subtitle2" display="flex" justifyContent="space-between">
        UI/UX Designs <span className="text-success">$100</span>
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle2">Page Content</Typography>
        <TextField
          type="number"
          size="small"
          value={staticPages}
          onChange={e => dispatch({ type: 'SET_STATIC_PAGES', payload: parseInt(e.target.value, 10) })}
          sx={{ width: 120 }}
          helperText="Max Default (5)"
        />
        <Typography variant="subtitle2" color="success">$100</Typography>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography variant="subtitle2">Deployment</Typography>
          <Typography variant="subtitle2" display="flex" justifyContent="space-between">
            Hosting <Typography color="textSecondary">(Free Tier)</Typography>
          </Typography>
        </Stack>
        <Typography variant="subtitle2" color="success" my="auto">$50</Typography>
      </Stack>
    </Stack>
  </Box>
);