import { useCallback, useMemo } from "react";
import { Items } from "./checkout";
import { calculateTotal } from "./builder-calculator";
import { Action, BuilderState } from "./state";

export const validateSelections = (
  state: BuilderState, 
  dispatch: React.Dispatch<Action>
) => {
  const { projectType, staticPages, include, dynamicPages } = state;
  const { blog, ecom, fintech, chat, backend, frontend, database, providers } = include ?? {};

  if (projectType === 'dynamic' && !database || projectType === 'dynamic' && !backend) {
    dispatch({ type: "SET_ALERT", payload: { variant: 'error', text: 'Did you mean to proceed without core app services?' } });
    return false;
  }
  if (projectType === 'static' && (typeof staticPages !== 'number' || staticPages < 1)) {
    dispatch({ type: "SET_ALERT", payload: { variant: 'error', text: 'Please enter at least 1 page for a static site' } });
    return false;
  }
  if (projectType === 'dynamic' && frontend && (typeof dynamicPages !== 'number' || dynamicPages < 1)) {
    dispatch({ type: "SET_ALERT", payload: { variant: 'error', text: 'Please enter at least 2 pages for a dynamic web app' } });
    return false;
  }
  const platformServices = blog || ecom || fintech || chat;
  if (platformServices && (!backend || !frontend || !database || !providers)) {
    dispatch({ type: "SET_ALERT", payload: { variant: 'warning', text: 'Please select all necessary services for platform-specific features' } });
    return false;
  }

  return true;
};

export const useHandlers = (
  state: BuilderState, 
  dispatch: React.Dispatch<Action>
) => {
  const items: Items = useMemo(() => ({
    projectType: state.projectType,
    ...(state.projectType === 'dynamic' && { dynamicType: state.dynamicType }),
    staticPages: state.projectType === 'static' ? state.staticPages : undefined,
    staticAddons: {...state.staticAddon},
    dynamicPages: state.projectType === 'dynamic' ? state.dynamicPages : undefined,
    include: { ...state.include },
    estimatedTime: calculateTotal(state).duration,
    estimatedTotal: calculateTotal(state).total,
  }), [state])
  
  const handleCheckout = useCallback(
    (method: 'email' | 'whatsapp') => {
      if (!validateSelections(state, dispatch)) return

      const details = { ...items }
      buildCheckoutUrl(details, method)

      if (method === 'email' && !window.location.href.includes('mailto:')) {
        dispatch({
          type: 'SET_ALERT',
          payload: {
            variant: 'warning',
            text: 'This option is not available in your location',
          },
        })
      }
    },
    [state, dispatch, items]
  )

  return { handleCheckout, items };
};

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

  const project = lines.join("\n");
  const message = `Hello, I would like to start a project with the following details:\n\n${project}\n\nPlease let me know how we can proceed. Thank you!`;
  const encodedMessage = encodeURIComponent(message);

  if (method === "email") {
    const subject = encodeURIComponent("New Project Request");

    window.location.href = `mailto:${process.env.NEXT_PUBLIC_EMAIL_ORIGIN}?subject=${subject}&body=${encodedMessage}`;
  } else window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_ORIGIN}?text=${encodedMessage}`);
}