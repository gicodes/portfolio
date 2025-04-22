import { 
  Box, 
  Card, 
  Button, 
  Checkbox, 
  TextField, 
  FormGroup, 
  FormControlLabel,
  Typography, 
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
      sx={{ 
        p: 2, 
        mt: 3, 
        width: {lg: '100%'} 
      }}
    >
      <Box my={2} className='text-center'>
        <Typography variant='h6'> Register a Prospective Project </Typography >
        <Typography variant='caption' color='textSecondary'>Have we met? Tell me something I should know</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box mb={1}>
          <TextField
            name="name"
            label="Preferred Name"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={1}>
          <TextField
            name="phone"
            label="Phone or Whatsapp"
            variant="outlined"
            fullWidth required
          />
        </Box>

        <Box mb={1}>
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            type="email"
            fullWidth required
          />
        </Box>

        <Box my={3}>
          <Box 
            mx={{ lg: 1}}
            px={1}
          >
            <Typography mb={1} variant='body1' color='textSecondary'> What is this project about?</Typography>
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
        </Box>

        <Box textAlign="center">
          <Button 
            type="submit" 
            variant="contained" 
            color="inherit" 
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
    <section id='email-me' className='w-100'>
      <Card 
        elevation={4} 
        sx={{ p: 2, mt: 3, width: {lg: '100%'} }}
      >
        <form onSubmit={handleSendEmail}>
          <Box my={2} className='text-center'>
            <Typography variant='h6'> Send Instant E-mail </Typography >
            <Typography variant='caption' color='textSecondary'>You can send detailed information on what you want</Typography>
          </Box>

          <Box mb={1}>
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              fullWidth required
            />
          </Box>

          <Box mb={1}>
            <TextField
              multiline
              rows={6}
              name="body"
              label="Body"
              variant="outlined"
              fullWidth required
            />
          </Box>

          <Box mb={1}>
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
              color="inherit" 
              size="large"
            >
              Send Email
            </Button>
          </Box>
        </form>
      </Card>
    </section>
  )
}
