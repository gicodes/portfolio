
export function buildCheckoutUrl(
  details: Record<string, any>, 
  method: "email" | "whatsapp"
){
  const lines = Object.entries(details).map(([key, val]) => {
    const label = key
      .replace(/([A-Z])/g, ' $1')       
      .replace(/^./, str => str.toUpperCase());

    let displayVal;
    
    if (typeof val === 'boolean') {
      displayVal = val ? 'Yes' : 'No';
    } else if (val === undefined) return null;
    else displayVal = String(val);

    return `${label}: ${displayVal}`;
  }).filter(Boolean);

  const message = lines.join("\n");
  const encodedMessage = encodeURIComponent(message);

  if (method === "email") {
    const subject = encodeURIComponent("New Project Request");

    window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ORIGIN}?subject=${subject}&body=${encodedMessage}`;
  } else window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ORIGIN}?text=${encodedMessage}`);
}