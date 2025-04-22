import React from "react";
import { Action } from "./builder-state";
import { ServiceOption } from "./services";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Switch, Stack } from "@mui/material";

interface State { 
  dynamicType: string;
  dynamicPages: number;
  include: {
    database: boolean;
    backend: boolean;
    authUser: boolean;
    authAdmin: boolean;
    caching: boolean;
    frontend: boolean;
    generative: boolean;
    providers: boolean;
    [key: string]: boolean;
  };
}

interface DynamicOptionProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  handleCheckout: (method: "email" | "whatsapp") => void;
}

export const DynamicOptions = ({ 
  state, 
  dispatch,
  handleCheckout,
}: DynamicOptionProps) => {
  const { dynamicType, dynamicPages, include } = state;

  return (
    <Box width="100%" /* Base Setup */>
      <Box sx={{ my: 2, p: { xs: 2, sm: 3 }, bgcolor: 'rgba(0,0,0,0.1)' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Dynamic Web App</FormLabel>
            <RadioGroup 
              row sx={{ pt: 1 }}
              value={dynamicType}
              onChange={e => dispatch({ type: 'SET_DYNAMIC_TYPE', payload: e.target.value as 'serverless' | 'server' })}
            >
              <FormControlLabel value="serverless" control={<Radio />} label={<span>Serverless</span>} />
              <FormControlLabel value="server" control={<Radio />} label={<span>Server</span>} />
            </RadioGroup>
            <Typography variant="caption" color="textSecondary">
              { dynamicType === 'serverless'
                ? "Only calls the backend services on client demand— Saves resources"
                : "Backend services run 24/7. Ideal for tracking, fintech, chat apps, etc"}
            </Typography>
        </FormControl>
      </Box>
      
      <Box my={4} /* Common Services */>
        <Typography mb={2} variant="subtitle2" color="textSecondary">
          Common App Services
        </Typography>
        <Stack spacing={2} mt={1}>
          <ServiceOption
            checked={include.database}
            onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'database' })}
            label="Database"
            description="Models, Schemas and Pools"
            price={200}
          />

          <ServiceOption
            checked={include.backend}
            onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'backend' })}
            label="Backend & APIs"
            description={`API Setup— $200, Hosting— ${dynamicType === 'serverless' ? '$150' : '$300'}`}
            price={dynamicType === 'serverless' ? 350 : 500}
          />

          {include.backend && (
            <Box sx={{ ml: 2, my: 2 }} /* Auth and Access Levels */>
              <Typography variant="subtitle2" color="textSecondary">
                Auth and Access Levels
              </Typography>
              <Box my={1} display="flex" justifyContent="space-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={include.authUser}
                      onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'authUser' })}
                    />
                  }
                  label={
                    <Stack>
                      <Typography>User Profile</Typography>
                      <Typography variant="caption" display="block">
                        Sign‑up, Login, Password Reset
                      </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$50</Typography>
              </Box>
              <Box my={1} display="flex" justifyContent="space-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={include.authAdmin}
                      onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'authAdmin' })}
                    />
                  }
                  label={
                    <Stack>
                      <Typography>Admin/ Mod Profile</Typography>
                      <Typography variant="caption" display="block">
                        Role‑based access controls (CRUD)
                      </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$100</Typography>
              </Box>

              <Typography my={2} variant="subtitle2" color="textSecondary">
                Backend Add‑ons
              </Typography>
              <Box my={2}>
                <TextField
                  label="API routes"
                  type="number"
                  size="small"
                  defaultValue={dynamicPages}
                  helperText="API routes mostly depend on pages"
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={include.caching}
                      onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'caching' })}
                    />
                  }
                  label={
                    <Stack>
                      <Typography>Caching</Typography>
                      <Typography variant="caption"> Optimizes Storage, Speed and Security </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$100</Typography>
              </Box>

              <Stack spacing={1}>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Cloud services</Typography>
                  <Typography color="success">$500</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Requires in‑depth discuss on cost evaluation
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography>Micro services</Typography>
                  <Typography color="success">$300</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Requires in‑depth discuss on cost evaluation
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography>Third‑party integrations</Typography>
                  <Typography color="success">$100</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Payment solutions, QR codes, sockets, etc
                </Typography>
              </Stack>
            </Box>
          )}

          <ServiceOption
            checked={include.frontend}
            onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'frontend' })}
            label="Frontend Bundle"
            description="Layout & Nav— $100, Pages— $200, UI/UX— $250, Deployment— $50"
            price={600}
          />

          {include.frontend && (
            <Box sx={{ ml: 2, my: 2 }}>
              <Typography variant="subtitle2" color="textSecondary">
                Frontend Add‑ons
              </Typography>
              <Box my={2}>
                <TextField
                  label="Pages"
                  type="number"
                  size="small"
                  value={dynamicPages}
                  onChange={e =>
                    dispatch({ type: 'SET_DYNAMIC_PAGES', payload: +e.target.value })
                  }
                  helperText="$25 per page"
                  sx={{ width: 111 }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={include.generative}
                      onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'generative' })}
                    />
                  }
                  label={
                    <Stack>
                      <Typography>Generative Pages with AI</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Privacy Policy, Cookie Policy, etc
                      </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$50</Typography>
              </Box>

              <FormControlLabel
                control={<Switch />}
                label={
                  <Stack display={'flex'} justifyContent={'space-between'}>
                    <Typography variant="body2">Feedback form (1 free)</Typography>
                    <Typography variant="caption"><span className="text-success">$25</span> each. Billed as you go</Typography>
                  </Stack>
                }
              />

              <Box display="flex" justifyContent="space-between" mt={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={include.providers}
                      onChange={() =>
                        dispatch({ type: 'TOGGLE_INCLUDE', payload: 'providers' })
                      }
                    />
                  }
                  label={
                    <Stack>
                      <Typography>Performance Providers</Typography>
                      <Typography variant="caption">
                        Alert, Loader, User, Product, Search
                      </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$200</Typography>
              </Box>

              <Typography display="flex" justifyContent="space-between" mt={2}>
                Third‑party integrations <span className="text-success">$50</span>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Auto‑responder, Google Analytics, Pop‑ups, etc
              </Typography>
            </Box>
          )}

          <Box width="100%"> {/* Platform specific services */}
            <Typography variant="subtitle2" my={1} color="textSecondary">Platform-specific Services</Typography>
            {(['blog','ecom','fintech','chat'] as Array<'blog' | 'ecom' | 'fintech' | 'chat'>).map((key) => {
              const labels = {
                blog: 'Blog app',
                ecom: 'E-commerce',
                fintech: 'Fin Tech',
                chat: 'Chat app'
              };
              const prices = { blog: 250, ecom: 450, fintech: 1000, chat: 1500 };
              const descs = {
                blog: 'Control, Manage, Publish Content',
                ecom: 'Store, Cart, Checkout, Payments',
                fintech: 'Accounts, Banking, Payments',
                chat: 'Chat rooms, p2p networks, Notifications'
              };
              return (
                <ServiceOption
                  key={key}
                  checked={include[key]}
                  onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: key })}
                  label={labels[key]}
                  description={descs[key]}
                  price={prices[key]}
                />
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
