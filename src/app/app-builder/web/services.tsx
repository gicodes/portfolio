import { 
  Box, 
  FormControlLabel, 
  Checkbox, 
  Stack, 
  Typography, 
  FormControl, 
  RadioGroup, 
  Radio, 
  Divider 
} from "@mui/material";
import { Action } from "./state";
import React, { Dispatch } from "react";

interface ServiceOptionProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  description?: React.ReactNode;
  price: number;
  children?: React.ReactNode;
}

export const ServiceOption: React.FC<ServiceOptionProps> = (
  { checked, onChange, label, description, price, children }
) => (
  <Box  
    p={1}
    display="flex" 
    justifyContent="space-between" 
    borderBottom={children ? 0 : 1} 
    bgcolor={'rgba(0,0,0,0.04)'}
  >
    <FormControlLabel
      control={React.isValidElement(children) ? children : <Checkbox checked={checked} onChange={onChange} />}
      label={
        <Stack>
          <Typography variant="body1" my={children ? 1 : 0}>{label}</Typography>
          {description && <Typography variant="caption" display="block">{description}</Typography>}
        </Stack>
      }
    />
    <Typography variant="body2" my="auto" color="success">${price}+</Typography>
  </Box>
);

interface ProjectTypeSelectorProps {
  projectType: string;
  dispatch: Dispatch<Action>;
}

export const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({ projectType, dispatch }) => (
  <Box sx={{ my: 2, p: { xs: 2, sm: 3 }, bgcolor: 'whitesmoke' }} /* Base Setup */>
    <FormControl component="fieldset">
      <Stack spacing={2}>
        <Typography variant="h5"fontWeight={500}>Choose Project Type</Typography>
        <Typography variant="body2" color="textSecondary">
          Choose between a static website or a dynamic web application based on your needs and goals. You can also select specific features and integrations to further customize your project.
        </Typography>
      </Stack>
      
      <Divider sx={{ my: 2 }} />

      <RadioGroup
        row 
        value={projectType}
        onChange={e => dispatch({ 
          type: 'SET_PROJECT_TYPE', 
          payload: e.target.value as 'static' | 'dynamic' }
        )}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} width={'100%'}>
          <FormControlLabel 
            value="static" 
            control={<Radio />} 
            label={<span>Static </span>} 
          />
          <FormControlLabel 
            value="dynamic" 
            control={<Radio />} 
            label={<span>Dynamic </span>} 
          />
        </Stack>
      </RadioGroup>

      <Typography 
        p={1}  
        borderRadius={1}
        variant="caption"
        maxWidth={'max-content'}
        color="white"
        bgcolor={'rgba(0,0,0,1)'}
      >
        { projectType === 'static' ? 
          "Ideal for landing pages or portfolios, blogs, documentation site."
          : "Ideal for user interactions i.e. E-commerce, Fintech, Gaming, etc."
        }
      </Typography>
    </FormControl>
  </Box>
);
