'use client';

import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Switch,
  Stack,
  Paper,
  Button,
  ButtonGroup
} from "@mui/material";
import React, { useState } from "react";
import { buildCheckoutUrl } from "../checkoutUrl";
import ShowAlert, { AlertProps } from "../../_alerts/alert";

const ProjectBuilder = () => {
  const [projectType, setProjectType] = useState("static");
  const [dynamicType, setDynamicType] = useState("serverless");
  const [staticPages, setStaticPages] = useState(5);
  const [dynamicPages, setDynamicPages] = useState(10);

  const [includeDatabase, setIncludeDatabase] = useState(false);
  const [includeFrontend, setIncludeFrontend] = useState(false);
  const [includeBackend, setIncludeBackend] = useState(false);
  const [includeCaching, setIncludeCaching] = useState(false);
  const [includeProviders, setIncludeProviders] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [authAdmin, setAuthAdmin] = useState(false);
  const [includeBlog, setIncludeBlog] = useState(false);
  const [includeEcom, setIncludeEcom] = useState(false);
  const [includeChat, setIncludeChat] = useState(false);
  const [includeFinTech, setIncludeFintech] = useState(false);

  const [checkout, setCheckout] = useState(false);
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const validateSelections = () => {
    if (projectType === "static" && staticPages < 1) {
      setAlert({ variant: "error", text: "Please enter at least 1 page for static site" });
      return false;
    }
    if (projectType === "dynamic" && includeFrontend && dynamicPages < 1) {
      setAlert({ variant: "error", text: "Please enter at least 1 page for dynamic web app" });
      return false;
    }
    if ((includeBlog || includeEcom || includeFinTech || includeChat) && !includeBackend) {
      setAlert({
        variant: "warning",
        text: "Please select necessary backend services before choosing platform-specific services"
      });
      return false;
    }
    if ((includeBlog || includeEcom || includeFinTech || includeChat) && !includeFrontend) {
      setAlert({
        variant: "warning",
        text: "Please select necessary frontend bundle before choosing platform-specific services"
      });
      return false;
    }
    if ((includeBlog || includeEcom || includeFinTech || includeChat) && !includeDatabase) {
      setAlert({
        variant: "warning",
        text: "Please select database services before choosing platform-specific services"
      });
      return false;
    }
    if ((includeBlog || includeEcom || includeFinTech || includeChat) && !includeProviders) {
      setAlert({
        variant: "warning",
        text: "Please select Performance Optimization providers before choosing platform-specific services"
      });
      return false;
    }
    return true;
  };

  function handleCheckout(method: "email" | "whatsapp") {
    if (!validateSelections()) return;

    const details = {
      projectType,
      ...(projectType === "dynamic" && { dynamicType }),
      staticPages: projectType === "static" ? staticPages : undefined,
      dynamicPages: projectType === "dynamic" ? dynamicPages : undefined,
      includeDatabase,
      includeBackend,
      includeFrontend,
      includeCaching,
      includeProviders,
      authUser,
      authAdmin,
      includeBlog,
      includeEcom,
      includeChat,
      includeFinTech,
      estimatedTotal: handleTotal()
    };

    buildCheckoutUrl(details, method);

    const openedEmail = window.location.href.includes("mailto:");
    if (!openedEmail) {
      setAlert({variant: "warning", text: "This option is not available in your location"});
    } else return;
  };

  const handleTotal = () => {
    let total = 0;
    if (projectType === "static") {
      total += 100; // layout & nav
      total += 100; // UI/UX
      total += 100 + Math.max(0, (staticPages - 5) * 25);
      total += 50; // deployment
    } else {
      if (includeDatabase) total += 200;
      if (includeBackend) {
        total += 200;
        total += dynamicType === "serverless" ? 150 : 300;
      }
      if (includeFrontend) {
        total += 100;
        total += 250;
        total += 200 + Math.max(0, (dynamicPages - 10) * 25);
        total += 50;
        total += 50;
      }
      if (includeCaching) total += 100;
      if (includeProviders) total += 200;
      if (authUser) total += 50;
      if (authAdmin) total += 100;
      if (includeBlog) total += 250;
      if (includeEcom) total += 450;
      if (includeFinTech) total += 1000;
      if (includeChat) total += 1500;
    }
    return total;
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 800, mx: "auto" }} elevation={3}>
      {alert && <ShowAlert {...alert} />}

      <Typography variant="h6">Project Builder</Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Select your desired app features and see estimated pricing
      </Typography>

      <Box 
        sx={{ 
          my: 2,
          p: {xs: 2, sm: 3}, 
          bgcolor: 'rgba(0,0,0,0.1)' 
        }} /* Base Setup */
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Type of web project</FormLabel>
          <Typography variant="caption" my={1} color="textSecondary">ECO: Typescript, Next, React, Express & NodeJs</Typography>
          <RadioGroup
            row
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <FormControlLabel
              value="static"
              control={<Radio />}
              label={
                <Box p={0.5}>
                  <Typography>Static (Website)</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Ideal for landing pages or event site
                  </Typography>
                </Box>
              }
            />          
            <FormControlLabel
              value="dynamic"
              control={<Radio />}
              label={
                <Box p={0.5}>
                  <Typography>Dynamic (Web app)</Typography>
                  <Typography variant="caption" color="textSecondary">
                    Ideal for E-commerce, fintech, etc.
                  </Typography>
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {projectType === "static" ? (
        <Box width={'100%'} /* Static Type */>
          <Typography variant="subtitle2" color="textSecondary">Static Website Options</Typography>

          <Stack spacing={2} mt={2}>
            <Typography variant="subtitle2" display={'flex'} justifyContent={'space-between'}>
              Layout & Navigation <span className="text-success">$100</span>
            </Typography>
            <Typography variant="subtitle2" display={'flex'} justifyContent={'space-between'}>
              UI/UX Designs <span className="text-success">$100</span>
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant="subtitle2" display="inline">Page Content</Typography>
              <TextField
                type="number"
                size="small"
                value={staticPages}
                onChange={(e) => setStaticPages(parseInt(e.target.value, 10))}
                sx={{ width: 120 }}
                helperText="Max Default (5)"
              />
              <Typography variant="subtitle2" color="success">
                $100
              </Typography>
            </Box>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack>
                <Typography variant="subtitle2">
                  Deployment 
                </Typography>
                <Typography variant="subtitle2" display={'flex'} justifyContent={'space-between'}>
                  Hosting <Typography display={'inline'} color="textSecondary">&nbsp;(Free Tier)</Typography> 
                </Typography>
              </Stack>
              <Typography variant="subtitle2" color="success" my={'auto'}>$50</Typography>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Box width={'100%'} /* Dynamic Type */> 
          <Box 
            sx={{ 
              my: 2,
              p: {xs: 2, sm: 3}, 
              bgcolor: 'rgba(0,0,0,0.25)' 
            }} /* Base Setup */
          >
            <FormControl component="fieldset">
              <FormLabel component="legend" sx={{ my: 1}}>Dynamic (Web) App</FormLabel>
              <RadioGroup
                row
                value={dynamicType}
                onChange={(e) => setDynamicType(e.target.value)}
              >
                <FormControlLabel
                  value="serverless"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography>Serverless</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Only calls the backend services on client demand— Saves resources
                      </Typography>
                    </Box>
                  }
                />
                <FormControlLabel
                  value="server"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography>Server</Typography>
                      <Typography variant="caption" color="textSecondary">
                        Backend services run 24/7 
                        <span className="block">Ideal for tracking, fintech, chat apps, etc</span>
                      </Typography>
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Box>
          
          <Box my={4}> {/* Common Services */}
            <Typography mb={2} variant="subtitle2" color="textSecondary">Common App Services</Typography>
            
            <Stack spacing={2} mt={1}>
              <Box display={'flex'} justifyContent={'space-between'}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={includeDatabase}
                      onChange={(e) => setIncludeDatabase(e.target.checked)}
                    />
                  }
                  label={
                    <Stack>
                      <Typography variant="body1" mb={1}>
                        Database
                      </Typography>
                      <Typography variant="caption" display="block">
                        Simple, Secure & Structured
                      </Typography>
                      <Typography variant="caption"> Relational Schema Designs</Typography>
                    </Stack>
                  }
                />
                <Typography my={'auto'} color="success">$200</Typography>
              </Box>
              
              <Box borderBottom={1}> {/* Backend */}
                <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                  <FormControlLabel
                    control={
                    <Checkbox
                      checked={includeBackend}
                      onChange={(e) => setIncludeBackend(e.target.checked)}
                    />
                    }
                    label={
                      <Stack>
                        <Typography variant="body1" my={1}>
                          Backend & APIs
                        </Typography>
                        <Typography variant="caption">
                          API Setup — $200 
                        </Typography>
                        <Typography variant="caption">Hosting (Basic Tier) — {dynamicType === "serverless" ? "$150" : "$300"}</Typography> 
                      </Stack>
                    }
                  />
                  <Typography my={'auto'} justifyContent={'flex-end'} color="success">{dynamicType === "serverless" ? "$350" : "$500"}</Typography>
                </Box>

                {includeBackend && (
                  <Box sx={{ ml: 2, my: 2 }}>
                    <Typography my={2} variant="subtitle2" color="textSecondary">Backend Add-ons</Typography>

                    <Box>
                      <TextField
                        label="API routes"
                        type="number"
                        size="small"
                        defaultValue={dynamicPages}
                        helperText="API routes mostly depend on pages"
                      />
                    </Box>
                    <FormControlLabel /* Optimization with Caching */
                      control={
                      <Checkbox
                        checked={includeCaching}
                        onChange={(e) => setIncludeCaching(e.target.checked)}
                      />
                    }
                      label={
                        <Box my={2} gap={4} display={'flex'} justifyContent={'space-between'}>
                          <Typography variant="caption">
                            Optimizes Storage, Speed and Security
                          </Typography>
                          <Typography my={'auto'} color="success">$100</Typography> 
                        </Box>
                      }
                    />
                    <Typography mt={2} variant="body1" display={'flex'} justifyContent={'space-between'}> 
                      Third-party integrations <span className="text-success">$100</span>
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box borderBottom={1}> {/* Frontend */}
                <Box display={'flex'} justifyContent={'space-between'}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={includeFrontend}
                        onChange={(e) => setIncludeFrontend(e.target.checked)}
                      />
                    }
                    label={
                      <Stack>
                        <Typography variant="body1" my={1}>
                          Frontend Bundle
                        </Typography>
                        <Typography variant="caption">
                          Layout & Navigation — $100
                        </Typography>
                        <Typography variant="caption">
                          Page Content — $200<span className="text-success">*</span>
                        </Typography>
                        <Typography variant="caption">
                          UI/UX (pro) — $250<span className="text-success">*</span>
                        </Typography>
                        <Typography variant="caption">
                          Deployment — $50
                        </Typography>
                      </Stack>
                    }
                  />
                  <Typography alignContent={'flex-end'} color="success">$650</Typography>
                </Box>

                {includeFrontend && (
                  <Box sx={{ ml: 2, my: 2 }}>
                    <Typography my={2} variant="subtitle2" color="textSecondary">Frontend Add-ons</Typography>

                    <Box>
                      <TextField
                        label="Pages"
                        type="number"
                        size="small"
                        value={dynamicPages}
                        onChange={(e) => setDynamicPages(parseInt(e.target.value, 10))}
                        helperText="$25 per page"
                        sx={{ width: 111 }}
                      />
                    </Box>
                    <FormControlLabel
                      control={<Switch />}
                      label={
                        <Box my={2}>
                          <Typography>Feedback form</Typography>
                          <Typography variant="caption" color="textSecondary">
                            $25 each (1 free)
                          </Typography>
                        </Box>
                      }
                    />
                    
                    <Stack my={1}>
                      <Typography variant="body1" display={'flex'} justifyContent={'space-between'}>
                        Generative Pages with AI <span className="text-success">$50</span>
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        Privacy Policy, Cookie Policy, etc
                      </Typography>
                    </Stack>

                    <FormControlLabel /* Optimization with Providers */
                      control={
                      <Checkbox
                        checked={includeProviders}
                        onChange={(e) => setIncludeProviders(e.target.checked)}
                      />
                    }
                      label={
                        <Box gap={3} display={'flex'} justifyContent={'space-between'}>
                          <Stack>
                            <Typography variant="body1" my={1}>
                              Performance Optimization
                            </Typography>
                            <Typography variant="caption">
                              <span className="block">Providers:</span> Alert, Loading, Product, User, Search
                            </Typography>
                          </Stack>
                          <Typography my={'auto'} color="success">$200</Typography> 
                        </Box>
                      }
                    />
                    <Typography mt={2} variant="body1" display={'flex'} justifyContent={'space-between'}> 
                      Third-party integrations <span className="text-success">$50</span>
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box> {/* Auth and Access Levels */}
                <Typography variant="subtitle2" color="textSecondary">Auth and Access Levels</Typography>

                <Box my={1} display="flex" justifyContent={'space-between'}>
                  <FormControlLabel
                    control={<Checkbox checked={authUser} onChange={(e) => setAuthUser(e.target.checked)} />}
                    label={
                      <Stack>
                        <Typography variant="body1"> User Profile </Typography>
                        <Typography variant="caption" display="block"> Sign-up, Login, Password Reset </Typography>
                      </Stack>  
                    }
                  />
                  <Typography color="success">$50</Typography> 
                </Box>

                <Box my={1} display="flex" justifyContent={'space-between'}>
                  <FormControlLabel
                    control={<Checkbox checked={authAdmin} onChange={(e) => setAuthAdmin(e.target.checked)} />}
                    label={
                      <Stack>
                          <Typography variant="body1">
                          Admin/ Mod Profile
                        </Typography>
                        <Typography variant="caption" display="block">
                          Role-based access controls (CRUD)
                        </Typography>
                      </Stack>
                    }
                  />
                  <Typography color="success">$100</Typography>
                </Box>
              </Box>

              <Box width={'100%'} justifyContent={'space-between'}> {/* Platform specific services */}
                <Typography variant="subtitle2" color="textSecondary">Platform-specific Services</Typography>

                <FormControlLabel sx={{ mx: 1}}
                  control={<Checkbox checked={includeBlog} onChange={(e) => setIncludeBlog(e.target.checked)} />}
                  label={
                    <Box my={1} display="flex" justifyContent={'space-between'}>
                      <Stack>
                        <Typography variant="body1"> Blog </Typography>
                        <Typography variant="caption"> Content Upload, Content Management </Typography>
                      </Stack>
                      <Typography color="success">$250+</Typography>
                    </Box>
                  }
                />
                <FormControlLabel sx={{ mx: 1}}
                  control={<Checkbox checked={includeEcom} onChange={(e) => setIncludeEcom(e.target.checked)} />}
                  label={
                    <Box my={1} display="flex" justifyContent={'space-between'}>
                      <Stack>
                        <Typography variant="body1"> E-commerce </Typography>
                        <Typography variant="caption"> Cart, Checkout, Payment Integration</Typography>
                      </Stack>
                      <Typography color="success">$450+</Typography>
                    </Box>
                  }
                />
                <FormControlLabel sx={{ mx: 1}}
                  control={<Checkbox checked={includeFinTech} onChange={(e) => setIncludeFintech(e.target.checked)} />}
                  label={
                    <Box my={1} display="flex" justifyContent={'space-between'}>
                      <Stack>
                        <Typography variant="body1"> Fin-tech </Typography>
                      <Typography variant="caption"> Accounts, Balances, Payment Solutions </Typography>
                      </Stack>
                      <Typography color="success">$1000+</Typography>
                    </Box>
                  }
                />
                <FormControlLabel sx={{ mx: 1}}
                  control={<Checkbox checked={includeChat} onChange={(e) => setIncludeChat(e.target.checked)} />}
                  label={
                    <Box my={1} display="flex" justifyContent={'space-between'}>
                      <Stack>
                        <Typography variant="body1"> Chat app </Typography>
                      <Typography variant="caption" display="block"> P2P network, Chat rooms, Notifications </Typography>
                      </Stack>  
                      <Typography color="success">$1500+</Typography>
                    </Box>
                  }
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      )}

      <Box p={1} mt={4} bgcolor={'rgba(0,0,0,0.1)'} /* Checkout */>
        <Box display={'grid'}>
          {! checkout && <Box display="flex" justifyContent={'flex-end'}>
            <Button
              variant="contained"
              onClick={() => setCheckout(true)}
            >
              Checkout
            </Button>
          </Box>}
          
          <Box display="flex" justifyContent={'flex-end'}>
            { checkout && 
              <ButtonGroup>
                <Button color="warning" variant="contained"
                  onClick={() => handleCheckout("email")}
                >
                  Pay Now
                </Button>
                <Button color="success" variant="contained"
                  onClick={() => handleCheckout("whatsapp")}
                >
                  WhatsApp
                </Button>
              </ButtonGroup>
            }
          </Box>
        </Box>
      </Box>

      <Box
        p={2}
        zIndex={1}
        boxShadow={2}
        width={"100%"}
        bgcolor="white"
        position="fixed"
        bottom={0} left={0}
      >
        <Typography display="flex" justifyContent="space-around">
          Estimated Total: <strong>${handleTotal()}</strong>
        </Typography>
      </Box>
    </Paper>
  );
};

export default ProjectBuilder;
