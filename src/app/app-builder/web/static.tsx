import { 
  Box, 
  Typography, 
  Stack, 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  Divider 
} from '@mui/material';
import { Action, AddonKey } from './state';
import React, { useState, Dispatch } from 'react';
import { MarketingOptions } from './marketingOptions';

interface StaticOptionsProps {
  state: any;
  staticPages: number;
  dispatch: Dispatch<Action>;
}

export const StaticOptions: React.FC<StaticOptionsProps> = ({ state, staticPages, dispatch }) => {
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({
    generative: false,
    plugin: false,
  });
  const [formCount, setFormCount] = useState<number>(1);
  const { include } = state;

  const handleAddonChange = (addon: AddonKey) => {
    const newValue = !addons[addon];
    const nextAddons = { ...addons, [addon]: newValue };

    setAddons(nextAddons);

    const enabled = (Object.keys(nextAddons) as AddonKey[]).filter(key => nextAddons[key]);
    dispatch({ type: 'SET_STATIC_ADDON', payload: enabled });
  };

  return (
    <Box width="100%" /* Static Type */>
      <Box py={1} gap={1} display={'grid'}>
        <Typography variant='h6' fontWeight={600}>
          Static Website Options
        </Typography>
        <Typography color="textSecondary" variant='caption'>
          Landing Pages, Portfolio, Blogs and more. Use lightweight but powerful tools to run dynamic tasks, give feedback and convert clients
        </Typography> 
      </Box>

      <Divider />
      <Stack spacing={2} mt={2}>
        <Typography variant="subtitle2" display="flex" justifyContent="space-between">
          UI/UX Designs <span className="text-success"> $200+</span>
        </Typography>
        <Box display="flex" justifyContent="space-between" gap={1.5}>
          <Typography variant="subtitle2">Page(s) as Menu</Typography>
          <TextField
            type="number"
            size="small"
            value={staticPages}
            onChange={e => dispatch({ type: 'SET_STATIC_PAGES', payload: parseInt(e.target.value, 10) })}
            sx={{ width: 120 }}
            helperText="Max Default (5)"
          />
          <Typography variant="subtitle2" color="success"> $125+ </Typography>
        </Box>
        <Typography variant="subtitle2" display="flex" justifyContent="space-between">
          Layout & Landing Page <span className="text-success"> $65</span>
        </Typography>

        <Stack my={1} direction="column" justifyContent="space-between">
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" display="flex" justifyContent="space-between">
              Hosting <span className='text-secondary'>&nbsp;<i>(pay for your tier)</i></span>
            </Typography>
            <Typography variant="subtitle2" color="success" my="auto"> $50 </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2">Deployment</Typography>
          <Typography variant="subtitle2" color="success" my="auto"> $0 </Typography>
        </Stack>
        <Divider />

        <Box py={1}>
          <Typography variant='h6'> ⌍ Website Add‑ons</Typography>
          <Typography variant={'caption'} color='textSecondary'>
            Lightweight options you can add or build into your static website to make it look better and function dynamically
          </Typography>
        </Box>

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
                  Covers Extensions/ Plugins/ Mirroring/ Third-party services 
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
                  READ-MEs/ info pages or content generation
                </Typography>
              </Stack>
            }
          />
          <Typography variant='body2' color="success">$50</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={include.forms && include.forms > 0}
                onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'forms' })}
              />
            }
            label={
              <Stack>
                <Typography>Follow up forms</Typography>
                <Typography variant="caption" display="block"> Retain users and gather feedback </Typography>
              </Stack>
            }
          />
          {include.forms > 0 && (
            <Box my={2}>
              <TextField
                label="Number of forms"
                type="number"
                size="small"
                value={formCount}
                onChange={e => {
                  const count = parseInt(e.target.value, 10);
                  setFormCount(count);
                  dispatch({ type: 'SET_FORMS', payload: count });
                }}
                InputProps={{ inputProps: { min: 0 } }}
                helperText="Each form adds $25. Extra billed on completion."
                sx={{ width: 180 }}
              />
            </Box>
          )}
          <Typography variant='body2' color="success">${include.forms ? formCount * 25 : 0}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={include.performanceOpt}
                onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'performanceOpt' })}
              />
            }
            label={
              <Stack>
                <Typography variant='body2'>Optimize Performance</Typography>
                <Typography variant="caption" color="textSecondary">
                  Improve performance with client-side caching, CDN and Network trottling
                </Typography>
              </Stack>
            }
          />
          <Typography variant='body2' color="success">$200</Typography>
        </Box>

        <MarketingOptions state={{ include: include } as any} dispatch={dispatch} isDynamic={false} />
        
      </Stack>
    </Box>
  );
};
