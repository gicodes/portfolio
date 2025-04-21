'use client';

import React, { useReducer } from 'react';
import { StaticOptions } from './static';
import { DynamicOptions } from './dynamic';
import ShowAlert from '../../_alerts/alert';
import { ProjectTypeSelector } from './services';
import { useHandlers } from './builder-checkout';
import { Typography, Paper } from '@mui/material';
import { calculateTotal } from './builder-calculator';
import CheckoutSection, { TotalBar } from './checkout';
import { reducer, initialState } from './builder-state';

const Page: React.FC = () => {
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

export default Page;
