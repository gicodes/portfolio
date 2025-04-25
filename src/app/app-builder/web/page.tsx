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
import { stateReducer, initialState } from './state';

const Page: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const handlers = useHandlers(state, dispatch) || { items: [], handleCheckout: () => {} };
  const { items, handleCheckout } = handlers;
  const { duration, total } = calculateTotal(state);
  const setCheckout = (checkout: boolean) => dispatch({ type: 'SET_CHECKOUT', payload: checkout });

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }} elevation={3}>
      {state.alert && <ShowAlert {...state.alert} />}

      <Typography variant="h6">App Builder</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Select your desired services. Get estimated pricing
      </Typography>

      <ProjectTypeSelector projectType={state.projectType} dispatch={dispatch} />

      {state.projectType === 'static' ? (
        <StaticOptions staticPages={state.staticPages} dispatch={dispatch} />
      ) : (
        <DynamicOptions state={state} dispatch={dispatch} handleCheckout={handleCheckout} />
      )}

      <CheckoutSection 
        items={items}
        checkout={state.checkout} 
        setCheckout={setCheckout} 
        handleCheckout={handleCheckout} 
      />
      <TotalBar duration={duration} total={total} />
    </Paper>
  );
};

export default Page;
