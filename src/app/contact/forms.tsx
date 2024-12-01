import { 
  Box, 
  Card, 
  Button, 
  Checkbox, 
  TextField, 
  FormGroup, 
  FormControlLabel, 
} from '@mui/material';
import { FormEventHandler } from "react";

interface LeaveContactInfoProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export const LeaveContactInfo = ({ handleSubmit }: LeaveContactInfoProps
) => {
  return (
    <Card 
      elevation={4} 
      sx={{ p: 2, mt: 3, width: {lg: '100%'} }}
    >
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            name="name"
            label="Your Name"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={3}>
          <TextField
            name="country"
            label="Country"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={3}>
          <TextField
            name="phone"
            label="Phone Number"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={3}>
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            type="email"
            fullWidth required
          />
        </Box>

        <Box mb={3}>
          <p> What Service(s) are you hiring for?</p>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox name="services" value="Website" />}
              label="Website" sx={{ '.MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <FormControlLabel
              control={<Checkbox name="services" value="Web App (Full-Stack)" />}
              label="Web Application" sx={{ '.MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <FormControlLabel
              control={<Checkbox name="services" value="Mobile App" />}
              label="Mobile Application" sx={{ '.MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
            <FormControlLabel
              control={<Checkbox name="services" value="Other" />}
              label="Other" sx={{ '.MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
            />
          </FormGroup>
        </Box>

        <Box textAlign="center">
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            size="large"
          >
            Save Information
          </Button>
        </Box>
      </form>
    </Card>
  );
}

interface SendInstantEmailProps {
  handleSendEmail: FormEventHandler<HTMLFormElement>;
}

export const SendInstantEmail = ({ handleSendEmail }: SendInstantEmailProps) => {
  return (
    <Card 
      elevation={4} 
      sx={{ p: 2, mt: 3, width: {lg: '100%'} }}
    >
      <form onSubmit={handleSendEmail}>
        <h4 className='mt-2 text-center'> Construct an e-mail</h4><br/>
        
        <Box mb={3}>
          <TextField
            name="subject"
            label="Subject"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={3}>
          <TextField
            multiline
            rows={4}
            name="body"
            label="Body"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={3}>
          <TextField
            name="recipientEmail"
            label="Your Email"
            variant="outlined"
            type="email"
            fullWidth required
          />
        </Box>

        <Box textAlign="center">
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            size="large"
          >
            Send Email
          </Button>
        </Box>
      </form>
    </Card>
  )
}
