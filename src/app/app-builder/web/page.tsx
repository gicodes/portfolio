'use client';

import React, { useReducer, useState } from 'react';
import { StaticOptions } from './static';
import { DynamicOptions } from './dynamic';
import ShowAlert from '../../_alerts/alert';
import { ProjectTypeSelector } from './services';
import { useHandlers } from './builder-checkout';
import { Typography, Paper, Box, Grid, Card } from '@mui/material';
import { calculateTotal } from './builder-calculator';
import CheckoutSection, { TotalBar } from './checkout';
import { stateReducer, initialState } from './state';
import WebDevDescription from './web-desc';

const Page: React.FC = () => {
  const [description, setDescription] = useState(false);
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const handlers = useHandlers(state, dispatch) || { items: [], handleCheckout: () => {} };
  const { items, handleCheckout } = handlers;
  const { duration, total } = calculateTotal(state);
  const setCheckout = (checkout: boolean) => dispatch({ type: 'SET_CHECKOUT', payload: checkout });

  return (
    <Paper 
      sx={{ 
        p: 4, 
        maxWidth: 1000, 
        mx: 'auto', 
        gap: 3, 
        display: 'grid' 
      }} 
      elevation={3}
    >
      {state.alert && <ShowAlert {...state.alert} />}

      <Box gap={1} display={'grid'}>
        <Typography variant="h4" fontWeight={600}>Web App Builder</Typography>
        <Typography variant="body1" display="block" gutterBottom>
          A simple tool to estimate the cost of your web project. Select options as you build on paper, and get a quote instantly.
        </Typography>
        <Grid display="grid" gap={2}>
          <Typography 
            variant="caption" 
            color="textSecondary" 
            sx={{
              cursor: 'pointer',
              ":hover": {
                textDecoration: 'underline'
              }
            }}
          >
            <Box onClick={() => setDescription(!description)}>
              What is a web app?
            </Box> 
          </Typography>  
          {
            description && <WebDevDescription />
          }       
        </Grid>
      </Box>
      
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
