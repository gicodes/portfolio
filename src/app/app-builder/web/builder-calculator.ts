export interface CalculateTotalParams {
  projectType: string;
  dynamicType: string;
  staticPages: number;
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
  include 
}: CalculateTotalParams) => {
  let total = 0;

  if (projectType === 'static') {
    total += 100; // layout & nav
    total += 100; // UI/UX
    total += 100 + Math.max(0, (staticPages - 5) * 25);
    total += 50;  // deployment
  } else {
    if (include.database) total += 200;
    if (include.backend) {
      total += 200;
      total += dynamicType === 'serverless' ? 150 : 300;
    }
    if (include.frontend) {
      total += 100;
      total += 250;
      total += 200 + Math.max(0, (dynamicPages - 10) * 25);
      total += 50;
    }
    if (include.caching) total += 100;
    if (include.providers) total += 200;
    if (include.generative) total += 50;
    if (include.authUser) total += 50;
    if (include.authAdmin) total += 100;
    if (include.blog) total += 250;
    if (include.ecom) total += 450;
    if (include.fintech) total += 1000;
    if (include.chat) total += 1500;
  }

  return total;
};