import { Box, FormControlLabel, Checkbox, Stack, Typography, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import React, { Dispatch } from "react";
import { Action } from "./builder-state";

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
    <Typography my="auto" color="success">${price}</Typography>
  </Box>
);

interface ProjectTypeSelectorProps {
  projectType: string;
  dispatch: Dispatch<Action>;
}

export const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({ projectType, dispatch }) => (
  <Box sx={{ my: 2, p: { xs: 2, sm: 3 }, bgcolor: 'whitesmoke' }} /* Base Setup */>
    <FormControl component="fieldset">
      <FormLabel component="legend">Type of web project</FormLabel>
      <Typography variant="caption" my={1} color="textSecondary">
        💼 &nbsp;Typescript, Next, React, Express & NodeJs
      </Typography>
      <RadioGroup
        row 
        value={projectType}
        onChange={e => dispatch({ type: 'SET_PROJECT_TYPE', payload: e.target.value as 'static' | 'dynamic' })}
      >
        <FormControlLabel value="static" control={<Radio />} label={<span>Static (Website)</span>} />
        <FormControlLabel value="dynamic" control={<Radio />} label={<span>Dynamic (Web app)</span>} />
      </RadioGroup>
      <Typography variant="caption" color="textSecondary">
        {projectType === 'static'
          ? "Ideal for landing pages or event site"
          : "Ideal for E-commerce, fintech, etc"}
      </Typography>
    </FormControl>
  </Box>
);
