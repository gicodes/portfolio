import { Box, Typography, Stack, TextField, Checkbox, FormControlLabel, Switch } from '@mui/material';
import { Action, AddonKey } from './state';
import React, { useState, Dispatch } from 'react';

interface StaticOptionsProps {
  staticPages: number;
  dispatch: Dispatch<Action>;
}

export const StaticOptions: React.FC<StaticOptionsProps> = ({ staticPages, dispatch }) => {
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({
    generative: false,
    form: false,
    plugin: false,
  });

  const handleAddonChange = (addon: AddonKey) => {
    const newValue = !addons[addon];
    const nextAddons = { ...addons, [addon]: newValue };

    setAddons(nextAddons);

    const enabled = (Object.keys(nextAddons) as AddonKey[]).filter(key => nextAddons[key]);
    dispatch({ type: 'SET_STATIC_ADDON', payload: enabled });
  };

  return (
    <Box width="100%" /* Static Type */>
      <Typography variant="subtitle2" color="textSecondary">
        Static Website Options
      </Typography>

      <Stack spacing={2} mt={2}>
        <Typography variant="subtitle2" display="flex" justifyContent="space-between">
          Layout & Navigation <span className="text-success"> $100</span>
        </Typography>

        <Typography variant="subtitle2" display="flex" justifyContent="space-between">
          UI/UX Designs <span className="text-success"> $100</span>
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle2">Page(s) as Menu Option</Typography>
          <TextField
            type="number"
            size="small"
            value={staticPages}
            onChange={e => dispatch({ type: 'SET_STATIC_PAGES', payload: parseInt(e.target.value, 10) })}
            sx={{ width: 120 }}
            helperText="Max Default (5)"
          />
          <Typography variant="subtitle2" color="success"> $100 </Typography>
        </Box>

        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="subtitle2">Deployment</Typography>
            <Typography variant="subtitle2" display="flex" justifyContent="space-between">
              Hosting <span className='text-secondary'>&nbsp;(Free Tier)</span>
            </Typography>
          </Stack>
          <Typography variant="subtitle2" color="success" my="auto"> $50 </Typography>
        </Stack>

        <Typography my={2} variant="subtitle2" color="textSecondary"> Website Add‑ons</Typography>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={addons.plugin}
                onChange={() => handleAddonChange('plugin')}
              />
            }
            label={
              <Stack>
                <Typography variant='body2'>Integrated Services</Typography>
                <Typography variant="caption" color="textSecondary">
                  Plugin, Client APIs, or 3rd party services 
                </Typography>
              </Stack>
            }
          />
          <Typography variant='body2' color="success">$75</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={addons.generative}
                onChange={() => handleAddonChange('generative')}
              />
            }
            label={
              <Stack>
                <Typography variant='body2'>Generative Pages with AI</Typography>
                <Typography variant="caption" color="textSecondary">
                  Info pages, Deep-search contents, etc
                </Typography>
              </Stack>
            }
          />
          <Typography variant='body2' color="success">$50</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Switch
                checked={addons.form}
                onChange={() => handleAddonChange('form')}
              />
            }
            label={
              <Stack>
                <Typography variant="body2">Opt-in form</Typography>
                <Typography variant="caption" color="textSecondary">
                  Whatsapp or email checkout
                </Typography>
              </Stack>
            }
          />
          <Typography variant='body2' color="success">$25</Typography>
        </Box>
      </Stack>
    </Box>
  );
};
