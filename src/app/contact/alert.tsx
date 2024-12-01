import { Alert, Stack } from "@mui/material";

export interface AlertProps {
  text: string;
  variant: 'error' | 'warning' | 'info' | 'success';
}

const ShowAlert: React.FC<AlertProps> = ({ text, variant }) => {
  return (
    <Stack
      position="fixed"
      top="10%"
      left={0}
      right={0}
      margin="auto"
      zIndex={9999}
      spacing={2}
      width={{xs: "90%", sm: '99%', lg: "45%"}}
    >
      <Alert
        color={variant}
        variant="filled"
        severity={variant}
        className="mx-auto"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {text}
      </Alert>
    </Stack>
  );
};

export default ShowAlert;