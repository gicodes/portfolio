import { Box, Button, ButtonGroup, Typography } from "@mui/material";

interface CheckoutSectionProps {
  checkout: boolean;
  setCheckout: (value: boolean) => void;
  handleCheckout: (method: "email" | "whatsapp") => void;
}

const CheckoutSection = (
  { 
    checkout, 
    setCheckout, 
    handleCheckout 
  }: CheckoutSectionProps
) => (
  <Box p={1} mt={4} bgcolor="rgba(0,0,0,0.1)">
    <Box display="grid">
      {!checkout && (
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={() => setCheckout(true)}>Checkout</Button>
        </Box>
      )}
      {checkout && (
        <Box display="flex" justifyContent="flex-end">
          <ButtonGroup>
            <Button color="warning" variant="contained" onClick={() => handleCheckout('email')}>Pay Now</Button>
            <Button color="success" variant="contained" onClick={() => handleCheckout('whatsapp')}>WhatsApp</Button>
          </ButtonGroup>
        </Box>
      )}
    </Box>
  </Box>
);

export default CheckoutSection;

export const TotalBar: React.FC<{ total: number }> = ({ total }) => (
  <Box p={2} zIndex={1} boxShadow={2} width="100%" bgcolor="white" position="fixed" bottom={0} left={0}>
    <Typography display="flex" justifyContent="space-around">
      Estimated Total: <strong className="text-success">${total}.00</strong>
    </Typography>
  </Box>
);