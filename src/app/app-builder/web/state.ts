import { AlertProps } from '../../_alerts/alert';

export interface BuilderState { // Define the shape of your builder's state
  projectType: 'static' | 'dynamic';
  dynamicType: 'serverless' | 'server';
  staticPages: number;
  staticAddon: [] | ('generative' | 'form' | 'plugin')[];
  dynamicPages: number;
  include: {
    database: boolean;
    backend: boolean;
    frontend: boolean;
    caching: boolean;
    providers: boolean;
    generative: boolean;
    authUser: boolean;
    authAdmin: boolean;
    blog: boolean;
    ecom: boolean;
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
    authAdmin: false,
    blog: false,
    ecom: false,
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
    case 'SET_CHECKOUT':
      return { ...state, checkout: action.payload };
    case 'SET_DURATION' : 
      return { ...state, duration: action.payload };
    case 'SET_ALERT':
      return { ...state, alert: action.payload };
    default: return state;
  }
}
