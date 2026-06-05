import { AlertProps } from '../../_alerts/alert';


export interface BuilderState { // Define the shape of your builder's state
  projectType: 'static' | 'dynamic';
  dynamicType: 'serverless' | 'server';
  staticPages: number;
  staticAddon: [] | ('generative' | 'form' | 'plugin')[];
  dynamicPages: number;
  include: {
    logics: number;
    database: boolean;
    backend: boolean;
    frontend: boolean;
    caching: boolean;
    providers: boolean;
    generative: boolean;
    basicSeo: boolean;
    authUser: boolean;
    authUserCount: number;
    authAdmin: boolean;
    blog: boolean;
    ecom: boolean;
    advancedSeo: boolean;
    googleBusiness: boolean;
    analytics: boolean;
    performanceOpt: boolean;
    socialIntegration: boolean;
    googleAds: boolean;
    metaAds: boolean;
    leadGen: boolean;
    emailMarketing: boolean;
    chatbot: boolean;
    ticketing: boolean;
    chat: boolean;
    fintech: boolean;
  };
  checkout: boolean;
  duration: number | undefined;
  alert: AlertProps | null;
}


export const initialState: BuilderState = { // Initial default values for the builder
  projectType: 'static',
  dynamicType: 'serverless',
  staticPages: 5,
  dynamicPages: 10,
  staticAddon: [],
  include: {
    database: false,
    backend: false,
    frontend: false,
    caching: false,
    providers: false,
    generative: false,
    authUser: false,
    authUserCount: 1,
    logics: 0,
    authAdmin: false,
    blog: false,
    ecom: false,
    basicSeo: false,
    advancedSeo: false,
    googleBusiness: false,
    analytics: false,
    performanceOpt: false,
    socialIntegration: false,
    googleAds: false,
    metaAds: false,
    leadGen: false,
    emailMarketing: false,
    chatbot: false,
    ticketing: false,
    chat: false,
    fintech: false,
  },
  checkout: false,
  duration: undefined,
  alert: null,
};


export type IncludeKey = keyof BuilderState['include']; // Keys of the "include" object, for type-safe toggling

export type AddonKey = 'generative' | 'form' | 'plugin'; // Keys for static addons


export type Action = // Define the actions your reducer can handle
  | { type: 'SET_PROJECT_TYPE'; payload: BuilderState['projectType'] }
  | { type: 'SET_DYNAMIC_TYPE'; payload: BuilderState['dynamicType'] }
  | { type: 'SET_STATIC_PAGES'; payload: BuilderState['staticPages'] }
  | { type: 'SET_DYNAMIC_PAGES'; payload: BuilderState['dynamicPages'] }
  | { type: 'TOGGLE_INCLUDE'; payload: IncludeKey }
  | { type: 'SET_LOGIC_COUNT'; payload: number }
  | { type: 'SET_AUTH_USER_COUNT'; payload: number }
  | { type: 'SET_CHECKOUT'; payload: BuilderState['checkout'] }
  | { type: 'SET_STATIC_ADDON'; payload?: BuilderState['staticAddon'] }
  | { type: 'HANDLE_CHECKOUT'; payload?: 'email' | 'whatsapp' }
  | { type: 'SET_DURATION'; payload?: BuilderState['duration']}
  | { type: 'SET_ALERT'; payload: BuilderState['alert'] };

  
export function stateReducer(
  state: BuilderState, action: Action
): BuilderState {
  switch (action.type) {
    case 'SET_PROJECT_TYPE':
      return { ...state, projectType: action.payload };
    case 'SET_DYNAMIC_TYPE':
      return { ...state, dynamicType: action.payload };
    case 'SET_STATIC_PAGES':
      return { ...state, staticPages: action.payload };
    case 'SET_STATIC_ADDON':
      return { 
        ...state, 
        staticAddon: Array.isArray(action.payload) ? action.payload : [] 
      };
    case 'SET_DYNAMIC_PAGES':
      return { ...state, dynamicPages: action.payload };
    case 'TOGGLE_INCLUDE':
      return {
        ...state,
        include: { ...state.include, 
          [action.payload]: !state.include[action.payload],
        },
      };
    case 'SET_AUTH_USER_COUNT':
      return { 
        ...state, 
        include: { 
          ...state.include, 
          authUserCount: action.payload 
        } 
      };
    case 'SET_CHECKOUT':
      return { ...state, checkout: action.payload };
    case 'SET_DURATION' : 
      return { ...state, duration: action.payload };
    case 'SET_ALERT':
      return { ...state, alert: action.payload };
    case 'SET_LOGIC_COUNT':
      return {
        ...state,
        include: {
          ...state.include,
          logics: action.payload,
        },
      };
    default: return state;
  }
}

export interface MarketingProps {
  state: BuilderState;
  dispatch: React.Dispatch<Action>;
  isDynamic: boolean;
}

export const validateSelections = (state: BuilderState, dispatch: React.Dispatch<Action>): boolean => {
  if (state.projectType === 'dynamic' && !state.include.backend) {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        variant: 'error',
        text: 'Backend is required for dynamic projects. Please include it to proceed.',
      },
    });
    return false;
  }

   if (state.include.authUser && state.include.authUserCount < 1) {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        variant: 'error',
        text: 'Please specify at least 1 user for authentication.',
      },
    });
    return false;
  }

  return true;
};