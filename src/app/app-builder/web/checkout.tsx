import jsPDF from 'jspdf';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import { useRef, useState } from "react";
import { Download } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Card, Divider, Typography } from "@mui/material";

export interface Items {
  projectType: string
  dynamicType?: string
  staticPages?: number
  staticAddons?: Record<string, any>
  dynamicPages?: number
  include: Record<string, any>
  estimatedTotal: number
  estimatedTime: number
}

interface CheckoutSectionProps {
  items: Items,
  checkout: boolean;
  setCheckout: (value: boolean) => void;
  handleCheckout: (method: "email" | "whatsapp") => void;
}

const CheckoutSection = (
  { 
    items,
    checkout, 
    setCheckout, 
    handleCheckout 
  }: CheckoutSectionProps
) => {
  const [ receipt, setReceipt] = useState(false);
  const getreceipt = () => setReceipt(!receipt);
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!receiptRef.current) return;

    const canvas = await html2canvas(receiptRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgWidth = pageWidth - 40;
    const imgHeight = (canvas.height * imgWidth)/ canvas.width;

    pdf.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    pdf.save('Gicodes_app_builder_summary.pdf');
  };

  return (
    <Box>
      <Box p={1} mt={4} bgcolor="rgba(0,0,0,0.1)">
        {!checkout && (
          <Box display="flex" justifyContent="flex-end">
            <Button 
              variant="contained" 
              onClick={() => setCheckout(true)}
              sx={{ bgcolor: 'darkslategray'}}
            >
              Checkout
            </Button>
          </Box>
        )}
        { checkout && (
            <Box display="flex" justifyContent="flex-end">
              <ButtonGroup>
                <Button sx={{ bgcolor: 'darkseagreen'}} variant="contained" onClick={() => handleCheckout('email')}>Pay Now</Button>
                <Button color="success" variant="contained" onClick={() => handleCheckout('whatsapp')}>WhatsApp</Button>
              </ButtonGroup>
            </Box>
        )}
      </Box>
      { checkout && 
        <Box> 
          <Button 
            onClick={getreceipt}
            sx={{ 
              fontSize: 11,
              display: 'grid', 
              textTransform: 'none',
            }}
            color={receipt ? "warning" : "info"}
          >
            {receipt ? "" : "View"} Checkout Summary
          </Button>
        </Box>
      }
      { checkout && receipt && (
        <Box>
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            bgcolor="rgba(0, 0, 0, 0.5)"
            zIndex={1300}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              bgcolor="whitesmoke"
              p={2}
              borderRadius={2}
              boxShadow={3}
              maxWidth="90%"
              maxHeight="90%"
              overflow="auto"
            >
              <Receipt items={items} receiptRef={receiptRef} />
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                  sx={{ textTransform: 'none', fontSize: 12 }}
                  onClick={handleDownload}
                  startIcon={<Download fontSize="small" />}
                >
                  Download
                </Button>
                <Button
                  color="warning"
                  variant="contained"
                  onClick={() => setReceipt(false)}
                >
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CheckoutSection;

interface ReceiptProps { 
  items: Items 
  receiptRef: React.RefObject<HTMLDivElement>
}

export const Receipt: React.FC<ReceiptProps> = ({ items, receiptRef }) => (
  <Card
    ref={receiptRef}
    sx={{ py: 3, px: 4, mx: 'auto', maxWidth: 369, position: 'relative' }}
  >
    <Box display={'flex'} justifyContent={'space-between'}>
      <Typography variant="h6" fontSize={14} gutterBottom>
        App Builder Summary
      </Typography>
      <Box alignSelf={'end'}>
        <Link className='text-link fs-xs' href={'https://gicodes.dev'}>
          www.gicodes.dev
        </Link>
      </Box>
    </Box>
    <Divider />

    <Box my={2}>
      <Typography variant="subtitle2">
        Project type:{" "} 
        <span className='fw-light'>{items.projectType==="static" ? "Client" : "Full Stack"}</span>
      </Typography>

      {items.dynamicType && (
        <Typography variant="caption">
          Dynamic type: {items.dynamicType==="server" ? "Server" : "Serverless"}
        </Typography>
      )}

      {items.staticPages != null && (
        <Box my={1} color="textSecondary" display="grid">
          <Typography variant="caption">Layout & Navigation: Yes</Typography>
          <Typography variant="caption">UI/UX Designs: Yes</Typography>
          <Typography variant="caption">Page Content: Yes</Typography>
          { items.staticAddons && Object.keys(items.staticAddons).length > 0 
            ? Object.entries(items.staticAddons).map(([key, value]) => (
                <Typography key={key} variant="caption">
                  {String(value).replace(/^./, str => str.toUpperCase())} client
                </Typography>
              ))
            : ""}
          <Typography variant="caption">
            Static pages: {items.staticPages}
          </Typography>
        </Box>
      )}

      { items.dynamicPages != null && (
        <Box my={1} color="textSecondary" display="grid">
          {Object.entries(items.include).map(
            ([feature, value]) =>
              value && (
                <Typography key={feature} variant="caption">
                  {feature.replace(/^./, str => str.toUpperCase())}: Yes
                </Typography>
              )
          )}
          {items.estimatedTotal > 0 ? (
            <Typography variant="caption">
              Dynamic pages: {items.dynamicPages}
            </Typography>
          ) : (
            <Typography variant="caption">
              No services were selected!
            </Typography>
          )}
        </Box>
      )}
    </Box>
    
    <Typography variant='caption'> <strong>Note: </strong> 
      For project requirements to be met, there are no-code resources needed—
      Product design, standard set of logos, etc. 
      <span className='block'> Domain is setup on demand. Learn more from <Link className='text-link' 
      href={'https://www.wpbeginner.com/beginners-guide/beginners-guide-what-is-a-domain-name-and-how-do-domains-work/'}>WpBeginners</Link>.</span>
    </Typography>

    <Typography variant="subtitle2" my={2}>
      Estimated Time: <span className='fw-light'>{items.estimatedTime} days</span>
    </Typography>
    <Typography variant="h6" fontSize={15}>
      Estimated Cost: <span className='fw-light'>${items.estimatedTotal}</span>
    </Typography>
  </Card>
);



export const TotalBar: React.FC<{ total: number, duration: number }> = ({ total, duration }) => (
  <Box py={2} px={1.5} zIndex={1} boxShadow={2} width="100%" bgcolor="white" position="fixed" bottom={0} left={0}>
    <Typography display="flex" justifyContent="space-around">
      Estimated Total: 
      <span>
        <strong>{duration} </strong>days
      </span> 
      <strong className="text-success">${total}.00</strong>
    </Typography>
  </Box>
);
