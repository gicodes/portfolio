import { Action } from "./state";
import React, { useState} from "react";
import { ServiceOption } from "./services";
import { State } from "./builder-calculator";
import { Remove, Add } from "@mui/icons-material";
import { MarketingOptions } from "./marketingOptions";
import { 
  Box, 
  Checkbox, 
  Typography, 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio, 
  TextField, 
  Stack, 
  IconButton, 
  Card, 
  Paper 
} from "@mui/material";

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
  const [formCount, setFormCount] = useState<number>(1);
  
  return (
    <Box width="100%" /* Base Setup */>
      <Paper sx={{ p: 3, maxWidth: 500, }}>
        <FormControl 
          component="fieldset" 
          sx={{ 
            mx: 'auto',
            display: 'flex',
            textAlign: 'center' 
          }}
        >
          <FormLabel 
            component="legend" 
            sx={{ fontWeight: 600}}
          > 
            How Should Your Application Run?
            </FormLabel>
            <RadioGroup 
              row 
                sx={{ 
                  py: 1, 
                  gap: { xs: 1, sm: 2, md: 3 },
                  mx: 'auto',
                  justifyContent: 'center', 
                }}
              value={dynamicType}
              onChange={e => dispatch({ type: 'SET_DYNAMIC_TYPE', payload: e.target.value as 'serverless' | 'server' })}
            >
              <FormControlLabel value="serverless" control={<Radio />} label={<span >Serverless 🚀</span>} />
              <FormControlLabel value="server" control={<Radio />} label={<span>Server 🖥️</span>} />
            </RadioGroup>

            <Box 
              bgcolor={'rgba(0,0,0,0.1)'} 
              borderRadius={2}
              p={1}
            >
              <Typography variant="caption">
                { dynamicType === 'serverless'
                  ? "Backend services run on client demand — Saves resources"
                  : "Backend services run 24/7 — Better for performance and complex tasks"}
              </Typography>
            </Box>
        </FormControl>
      </Paper>
      
      <Box my={4} /* Common Services */>
        <Box>
          <Typography variant="h6" gutterBottom>
            ⌝ Primary Services <span className="fs-sm text-gray">(Choose at least 1)</span>
          </Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            Core services required for the web app, such as database setup, backend development, frontend development, and deployment. These services form the foundation of the web app and are essential for its functionality and performance.
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
            <Box 
              sx={{ 
                px: 2,
                py: 3,  
                my: 2,
                bgcolor: 'rgba(0,0,0,0.05)',
                borderRadius: 4
              }} /* Auth and Access Levels */
            >
              <Stack my={1} spacing={1}>
                <Typography>
                  Authentication, Authorization & Access Levels (RBAC)
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  User roles, permissions, and secure access control for the web app. This includes features such as user registration, login, role-based access control (RBAC), and other authentication mechanisms to ensure that only authorized users can access certain parts of the web app.
                </Typography>
              </Stack>
              
              <Box py={1} display="flex" justifyContent="space-between">
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
                      <Typography variant="caption" display="block"> Define user roles and permissions. Permissions vary and can be customized for each role, with added cost. </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">${100 * (include.authUserCount || 1)}+</Typography>
              </Box>
              {include.authUser && (
                <Box my={2}>
                  <TextField
                    label="Number Of User Roles"
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
                        Higher access level with permissions to manage users, content, and settings. Requires user role(s) to be defined. Permissions vary and can be customized for each role, with added cost.
                      </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$200</Typography>
              </Box>

              <Box py={2}>
                <Typography variant="h6">
                  ⌍ Backend Add‑ons
                </Typography>
                <Typography variant="caption" color="text.secondary">

                </Typography>
              </Box>

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
                  <Typography color="success">$750+</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Requires in‑depth discuss on cost evaluation
                </Typography>

                <Box display="flex" justifyContent="space-between">
                  <Typography>Cloud services</Typography>
                  <Typography color="success">$500+</Typography>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  Requires in‑depth discuss on cost evaluation
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography>Subscription services</Typography>
                  <Typography color="success">$300+</Typography>
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
                Layout & Landing— $100, Pages— $200, UI/UX— $250, Deploy— $50
              </Typography>
            }
            price={600}
          />

          {include.frontend && (
            <Box sx={{ ml: 2, py: 2 }}>
              <Stack>
                <Typography variant="h6">
                  ⌍ Frontend Add‑ons
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
                  sx={{ width: 111 }}
                  helperText="$25 per page"
                />
              </Box>

              <Box display="flex" justifyContent="space-between" my={2}>
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
                      <Typography variant="caption"> Alert system, loading, memorization etc. </Typography>
                    </Stack>
                  }
                />
                <Typography color="success">$200</Typography>
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

              <Box display="flex" justifyContent="space-between" mb={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={include.forms > 0}
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
                  helperText="Each form adds $25. Extra Billed on app completion."
                  sx={{ width: 180 }}
                />
              </Box>
            )}
            <Typography variant='body2' color="success">${include.forms ? formCount * 25 : 0}</Typography>
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
                      onClick={() => dispatch({ type: 'SET_LOGIC_COUNT', payload: include.logics + 1 })}
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
                  These are additional features that can be integrated into the web app using third‑party services or APIs, such as payment gateways, social media integrations, analytics tools, and more. The cost of these integrations can vary widely depending on the specific services chosen and the complexity of the integration
                  <br/>
                  Requires in‑depth discuss on cost evaluation.
                  <br/>
                  Examples include payment solutions, QR codes, sockets, real-time communication/ indicators, Google map, etc
                </Typography>
              </Card>
            </Box>
          )}

          
          <MarketingOptions state={state as any} dispatch={dispatch} isDynamic={true} />

          <Box width="100%" display={'grid'} gap={2}> {/* Platform specific services */}
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>
                ⚙︎ Business Application
              </Typography>
              <Typography variant="caption" color="textSecondary" paragraph>  
                Services that are specific to the web platform, such as SEO optimization, web accessibility compliance, and cross-browser compatibility testing. These services ensure that the web app performs well across different browsers and devices, and is optimized for search engines to improve visibility and reach
              </Typography>
            </Box>
            
            {(['blog','ecom', 'crm', 'chat', 'fintech'] as Array<'blog' | 'ecom' | 'crm' | 'chat' | 'fintech'>).map((key) => {
              const labels = {
                blog: 'Blog app',
                ecom: 'E-commerce app',
                crm: 'CRM / HR app',
                chat: 'Chat app',
                fintech: 'Fin tech app',
              };

              const prices = { blog: 500, ecom: 1000, crm: 2000, chat: 5000, fintech: 10000 };
              
              const descs = {
                blog: 'Article listing, Categories, Comments, etc',
                ecom: 'Product listing, Cart, Checkout, etc',
                crm: 'Customer management, interactions, etc',
                chat: 'Real-time communication, indicators, etc',
                fintech: 'Financial services, banking, secure payments, etc',
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
        </Stack>
      </Box>
    </Box>
  );
};
