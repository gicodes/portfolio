import React from "react";
import { Action } from "./state";
import { ServiceOption } from "./services";
import { MarketingOptions } from "./marketingOptions";
import { Remove, Add } from "@mui/icons-material";
import { Box, Checkbox, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Stack, IconButton, Card } from "@mui/material";

interface State { 
  dynamicType: string;
  dynamicPages: number;
  projectType?: string;
  staticPages?: number;
  staticAddon?: any;
  checkout?: any;
  include: {
    database: boolean;
    backend: boolean;
    authUser: boolean;
    authAdmin: boolean;
    caching: boolean;
    frontend: boolean;
    generative: boolean;
    providers: boolean;
    logics: number;
    authUserCount?: any;
    [key: string]: boolean | number; 
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
}: DynamicOptionProps) => {
  const { dynamicType, dynamicPages, include } = state;

  return (
    <Box width="100%" /* Base Setup */>
      <Box sx={{ my: 2, p: { xs: 2, sm: 3 }, bgcolor: 'rgba(0,0,0,0.05)' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ fontWeight: 500}}>Dynamic Web App</FormLabel>
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
        <Box>
          <Typography variant="h6" gutterBottom>
            Primary Services <span className="fs-sm text-gray">(Must Choose at least 1)</span>
          </Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            Core services that are essential for any dynamic web application, such as database setup, backend and API development, and frontend development. These services form the foundation of the web app and are necessary for its basic functionality and performance.
          </Typography>
        </Box>
        
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
                      <Typography>User Role(s)</Typography>
                      <Typography variant="caption" display="block"> Sign‑up, Login, Edit Profile, etc </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">${100 * (include.authUserCount || 1)}</Typography>
              </Box>
              {include.authUser && (
                <Box my={2}>
                  <TextField
                    label="Number of User Roles"
                    type="number"
                    size="small"
                    value={include.authUser ? (include.authUserCount ?? 1) : 1}
                    onChange={(e) =>
                      dispatch({ type: 'SET_AUTH_USER_COUNT', payload: Math.max(1, +e.target.value) })
                    }
                    helperText="i.e. Sellers, Buyers, etc"
                    sx={{ width: 180 }}
                  />
                </Box>
              )}
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
                      <Typography>Admin/ Moderator Role(s)</Typography>
                      <Typography variant="caption" display="block">
                        Sudo role‑based functions <span className="-mt block fs-xs text-gray">i.e. Create, Read, Update, Delete</span>
                      </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$200</Typography>
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
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography>Micro services</Typography>
                  <Typography color="success">$750</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Requires in‑depth discuss on cost evaluation
                </Typography>

                <Box display="flex" justifyContent="space-between">
                  <Typography>Cloud services</Typography>
                  <Typography color="success">$500</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Requires in‑depth discuss on cost evaluation
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography>Subscription services</Typography>
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
            description={
              <Typography variant="caption" color="textSecondary">
                Layout & Nav— $100, Pages— $200, UI/UX— $250, Deploy— $50
              </Typography>
            }
            price={600}
          />

          {include.frontend && (
            <Box sx={{ ml: 2, py: 2 }}>
              <Stack>
                <Typography variant="h6">
                Frontend Add‑ons
              </Typography>
              <Typography variant="caption" color="textSecondary" paragraph>
                Additional features and functionalities that can be added to the frontend of the web app, such as interactive pages, generative AI content, complex logic, performance providers, and third‑party integrations. These add‑ons enhance the user experience and provide additional value to the web app.
              </Typography>
              </Stack>
              
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
                      <Typography variant="caption"> Alert, Loading, User, Product, Search </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$200</Typography>
              </Box>

              <Card sx={{ p: 2, my: 1}}>  
                <Box display="flex" justifyContent="space-between">
                  <Stack>
                    <Typography>Math/ Logic</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Complex calculations, data processing, etc
                    </Typography>
                  </Stack>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      onClick={() => dispatch({ type: 'SET_LOGIC_COUNT', payload: Math.max(0, include.logics - 1) })}
                    >
                      <Remove />
                    </IconButton>
                    <TextField
                      type="number"
                      value={include.logics}
                      onChange={e =>
                        dispatch({ type: 'SET_LOGIC_COUNT', payload: +e.target.value })
                      }
                      sx={{ maxWidth: 66, width: '100%', mx: 'auto' }}
                    />
                    <IconButton
                      onClick={() =>
                        dispatch({ type: 'SET_LOGIC_COUNT', payload: include.logics + 1 })
                      }
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  <Typography color="success">${include.logics * 100}</Typography>
                </Box>
              </Card>

              <Card sx={{ p: 2, my: 1, bgcolor: 'rgba(0,0,0,0.03)' }}>  
                <Typography display="flex" justifyContent="space-between" mb={1}>
                  Third‑party integrations <span className="text-success">$100+</span>
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  These are additional features that can be integrated into the web app using third‑party services or APIs, such as payment gateways, social media integrations, analytics tools, and more. The cost of these integrations can vary widely depending on the specific services chosen and the complexity of the integration.
                  <br/>
                  Requires in‑depth discuss on cost evaluation.
                  <br/>
                  Examples include payment solutions, QR codes, sockets, real-time communication/ indicators, Google map, etc
                </Typography>
              </Card>
            </Box>
          )}

          <br/>
          <Box width="100%" display={'grid'} gap={2}> {/* Platform specific services */}
            <Box>
              <Typography variant="h6" gutterBottom>
                Platform-specific Services <span className="fs-sm text-gray">(optional)</span>
              </Typography>
              <Typography variant="caption" color="textSecondary" paragraph>  
                Services that are specific to the web platform, such as SEO optimization, web accessibility compliance, and cross-browser compatibility testing. These services ensure that the web app performs well across different browsers and devices, and is optimized for search engines to improve visibility and reach.
              </Typography>
            </Box>
            
            {(['blog','ecom', 'ticketing', 'chat', 'fintech'] as Array<'blog' | 'ecom' | 'ticketing' | 'chat' | 'fintech'>).map((key) => {
              const labels = {
                blog: 'Blog app',
                ecom: 'E-commerce',
                ticketing: 'Ticketing',
                fintech: 'Fin Tech',
                chat: 'Chat app'
              };

              const prices = { blog: 250, ecom: 450, ticketing: 750, chat: 1500, fintech: 2000 };
              
              const descs = {
                blog: 'Control, Manage, Publish Content',
                ecom: 'Store, Cart, Checkout, Payment solution',
                ticketing: 'Automated logs for Tasks, Features, Issues, Fixes',
                chat: 'Chat rooms, p2p networks, Notifications',
                fintech: 'Accounts, Banking, Secure payments',
              };

              return (
                <ServiceOption
                  key={key}
                  checked={!!include[key]}
                  onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: key })}
                  label={labels[key]}
                  description={descs[key]}
                  price={prices[key]}
                />
              );
            })}
          </Box>
          <MarketingOptions state={state as any} dispatch={dispatch} isDynamic={true} />
        </Stack>
      </Box>
    </Box>
  );
};
