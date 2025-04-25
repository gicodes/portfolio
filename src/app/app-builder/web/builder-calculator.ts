export interface CalculateTotalParams {
  projectType: string;
  dynamicType: string;
  staticPages: number;
  staticAddon: ('generative' | 'form' | 'plugin')[];
  dynamicPages: number;
  include: {
    database?: boolean;
    backend?: boolean;
    frontend?: boolean;
    caching?: boolean;
    providers?: boolean;
    generative?: boolean;
    authUser?: boolean;
    authAdmin?: boolean;
    blog?: boolean;
    ecom?: boolean;
    fintech?: boolean;
    chat?: boolean;
  };
}

export const calculateTotal = ({ 
  projectType, 
  dynamicType, 
  staticPages, 
  dynamicPages,
  staticAddon, 
  include,
}: CalculateTotalParams) => {
  let total = 0;
  let duration = 0;

  if (projectType === 'static') {
    total += 100; // layout & nav
    total += 100; // UI/UX
    total += 100 + Math.max(0, (staticPages - 5) * 25);
    total += 50;  // deployment
    duration += 14; // duration in duration

    if (staticAddon.includes('plugin')) {
      total += 75;
      duration += 3;
    };
    if (staticAddon.includes('generative')) {
      total += 50;
      duration += 2;
    }
    if (staticAddon.includes('form')) {
      total += 25;
      duration += 1;
    }
  } else {
    if (include.database) {
      total += 200;
      duration += 5;
    }
    if (include.backend) {
      total += 200;
      total += dynamicType === 'serverless' ? 150 : 300;
      duration += dynamicType === 'serverless' ? 7 : 10;
    }
    if (include.frontend) {
      total += 100;
      total += 250;
      total += 200 + Math.max(0, (dynamicPages - 10) * 25);
      total += 50;
      duration += 15;
    }
    if (include.caching) {
      total += 100
      duration += 2;
    };
    if (include.providers) {
      total += 200;
      duration += 5;
    }    
    if (include.generative) {
      total += 50;
      duration += 2;
    }
    if (include.authUser) {
      total += 50;
      duration += 4;
    }
    if (include.authAdmin) {
      total += 100;
      duration += 7;
    }
    if (include.blog) {
      total += 250;
      duration += 10;
    }
    if (include.ecom) {
      total += 450;
      duration += 14;
    }
    if (include.fintech) {
      total += 1000;
      duration += 30;
    }
    if (include.chat) {
      total += 1500;
      duration += 36;
    }
  }

  return { total, duration };
};