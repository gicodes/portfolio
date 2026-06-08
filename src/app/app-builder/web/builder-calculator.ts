export interface State { 
  dynamicType: string;
  dynamicPages: number;
  projectType?: string;
  staticPages?: number;
  staticAddon?: any;
  checkout?: any;
  include: {
    forms: number;
    logics: number;
    database: boolean;
    backend: boolean;
    authUser: boolean;
    authAdmin: boolean;
    caching: boolean;
    frontend: boolean;
    generative: boolean;
    providers: boolean;
    authUserCount?: any;
    [key: string]: boolean | number; 
  };
}


export interface CalculateTotalParams {
  projectType: string;
  dynamicType: string;
  staticPages: number;
  staticAddon: ('generative' |'plugin')[];
  dynamicPages: number;
  include: {
    forms: number;
    logics: number;
    database?: boolean;
    backend?: boolean;
    frontend?: boolean;
    caching?: boolean;
    providers?: boolean;
    generative?: boolean;
    authUser?: boolean;
    authUserCount: number;
    authAdmin?: boolean;
    blog?: boolean;
    ecom?: boolean;
    basicSeo?: boolean;
    advancedSeo?: boolean;
    googleBusiness?: boolean;
    analytics?: boolean;
    performanceOpt?: boolean;
    socialIntegration?: boolean;
    googleAds?: boolean;
    metaAds?: boolean;
    leadGen?: boolean;
    emailMarketing?: boolean;
    chatbot?: boolean;
    crm?: boolean;
    chat?: boolean;
    fintech?: boolean;
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
    total += 120; // layout & nav
    total += 120; // UI/UX
    total += 100 + Math.max(0, (staticPages - 5) * 25);
    total += 50;  // deployment
    duration += 14; // duration in duration

    if (include.forms && include.forms > 0) {
      console.log('Including forms:', include);
      total += include.forms * 25;
      duration += include.forms * 2;
    }

    if (staticAddon.includes('plugin')) {
      total += 75;
      duration += 3;
    };
    if (staticAddon.includes('generative')) {
      total += 50;
      duration += 2;
    }
    if (include.advancedSeo) {
      total += 650;
      duration += 18;
    }
    if (include.googleBusiness) {
      total += 150;
      duration += 3;
    }
    if (include.analytics) {
      total += 120;
      duration += 3;
    }
    if (include.performanceOpt) {
      total += 200;
      duration += 5;
    }
    if (include.socialIntegration) {
      total += 150;
      duration += 4;
    }
    if (include.googleAds) {
      total += 200;
      duration += 5;
    }
    if (include.metaAds) {
      total += 200;
      duration += 5;
    }
    if (include.leadGen) {
      total += 300;
      duration += 7;
    }
    if (include.emailMarketing) {
      total += 250;
      duration += 6;
    }
    if (include.chatbot) {
      total += 350;
      duration += 10;
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
      if (include.logics) {
        total += include.logics * 100;
        duration += include.logics * 5;
      }
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
      if (include.authUserCount) {
        total += include.authUserCount * 100;
        duration += include.authUserCount * 4;
      } else {
        total += 100;
        duration += 4;
      }
    }
    if (include.authAdmin) {
      total += 200;
      duration += 7;
    }
    if (include.blog) {
      total += 500;
      duration += 10;
    }
    if (include.ecom) {
      total += 1000;
      duration += 14;
    }
    if (include.basicSeo) {
      total += 250;
      duration += 7;
    }
    if (include.advancedSeo) {
      total += 650;
      duration += 18;
    }
    if (include.googleBusiness) {
      total += 150;
      duration += 3;
    }
    if (include.analytics) {
      total += 120;
      duration += 3;
    }
    if (include.performanceOpt) {
      total += 200;
      duration += 5;
    }
    if (include.socialIntegration) {
      total += 150;
      duration += 4;
    }
    if (include.googleAds) {
      total += 200;
      duration += 5;
    }
    if (include.metaAds) {
      total += 200;
      duration += 5;
    }
    if (include.leadGen) {
      total += 300;
      duration += 7;
    }
    if (include.emailMarketing) {
      total += 250;
      duration += 6;
    }
    if (include.chatbot) {
      total += 350;
      duration += 10;
    }
    if (include.crm) {
      total += 2000;
      duration += 5;
    }
    if (include.chat) {
      total += 5000;
      duration += 36;
    }
    if (include.fintech) {
      total += 10000;
      duration += 30;
    }
  }

  return { total, duration };
};