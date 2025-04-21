'use client';

import React, { useReducer } from 'react';
import type { Dispatch } from 'react';
import { StaticOptions } from './static';
import { DynamicOptions } from './dynamic';
import ShowAlert from '../../_alerts/alert';
import type { Action } from './builder-state';
import { useHandlers } from './builder-checkout';
import { calculateTotal } from './builder-calculator';
import CheckoutSection, { TotalBar } from './checkout';
import { reducer, initialState } from './builder-state';
import { Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Stack, Paper } from '@mui/material';

interface ServiceOptionProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  description?: string;
  price: number;
  children?: React.ReactNode;
}

export const ServiceOption: React.FC<ServiceOptionProps> = (
  { checked, onChange, label, description, price, children }
) => (
  <Box display="flex" justifyContent="space-between" borderBottom={children ? 0 : 1} bgcolor={children ? 'rgba(0,0,0,0.05)' : 'inherit'} p={children ? 1 : 0}>
    <FormControlLabel
      control={React.isValidElement(children) ? children : <Checkbox checked={checked} onChange={onChange} />}
      label={
        <Stack>
          <Typography variant="body1" my={children ? 1 : 0}>{label}</Typography>
          {description && <Typography variant="caption" display="block">{description}</Typography>}
        </Stack>
      }
    />
    <Typography my="auto" color="success">${price}</Typography>
  </Box>
);

interface ProjectTypeSelectorProps {
  projectType: string;
  dispatch: Dispatch<Action>;
}

const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({ projectType, dispatch }) => (
  <Box sx={{ my: 2, p: { xs: 2, sm: 3 }, bgcolor: 'rgba(0,0,0,0.1)' }} /* Base Setup */>
    <FormControl component="fieldset">
      <FormLabel component="legend">Type of web project</FormLabel>
      <Typography variant="caption" my={1} color="textSecondary">
        💼 Typescript, Next, React, Express & NodeJs
      </Typography>
      <RadioGroup
        row
        value={projectType}
        onChange={e => dispatch({ type: 'SET_PROJECT_TYPE', payload: e.target.value as 'static' | 'dynamic' })}
      >
        <FormControlLabel value="static" control={<Radio />} label={<span>Static (Website)</span>} />
        <FormControlLabel value="dynamic" control={<Radio />} label={<span>Dynamic (Web app)</span>} />
      </RadioGroup>
    </FormControl>
  </Box>
);

const ProjectBuilder: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { handleCheckout } = useHandlers(state, dispatch);
  const total = calculateTotal(state);

  const setCheckout = (checkout: boolean) => dispatch({ type: 'SET_CHECKOUT', payload: checkout });

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }} elevation={3}>
      {state.alert && <ShowAlert {...state.alert} />}

      <Typography variant="h6">Project Builder</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Select your desired app features and see estimated pricing
      </Typography>

      <ProjectTypeSelector projectType={state.projectType} dispatch={dispatch} />

      {state.projectType === 'static' ? (
        <StaticOptions staticPages={state.staticPages} dispatch={dispatch} />
      ) : (
        <DynamicOptions state={state} dispatch={dispatch} handleCheckout={handleCheckout} />
      )}

      <CheckoutSection checkout={state.checkout} handleCheckout={handleCheckout} setCheckout={setCheckout} />
      <TotalBar total={total} />
    </Paper>
  );
};

export default ProjectBuilder;
