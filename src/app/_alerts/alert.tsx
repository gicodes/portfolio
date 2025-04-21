import { Alert, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export interface AlertProps {
  text: string;
  variant: 'error' | 'warning' | 'info' | 'success';
}

const ShowAlert: React.FC<AlertProps> = ({ text, variant }) => {
  const [open, setOpen] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
      setOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }, []);

    return open ? (
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
    ) : ( null );
};

export default ShowAlert;
