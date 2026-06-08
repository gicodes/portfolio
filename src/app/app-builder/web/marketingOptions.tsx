import { Box, Typography, Stack } from "@mui/material";
import { ServiceOption } from "./services";
import { MarketingProps } from "./state";

export const MarketingOptions = ({ state, dispatch, isDynamic }: MarketingProps) => {
  return (
    <Box py={2}>
      <Typography variant="h6" gutterBottom>
         ⌍ Growth & Audience Acquisition
      </Typography>
      <Typography variant="caption" color="textSecondary" paragraph>
        Connect with more customers and scale your business
      </Typography>

      <Stack spacing={2}>
        <ServiceOption
          checked={state.include.analytics}
          onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'analytics' })}
          label="Google Analytics 4 + Tag Manager"
          description="Event tracking and conversion setup"
          price={isDynamic ? 150 : 100}
        />
        <ServiceOption
          checked={state.include.basicSeo}
          onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'basicSeo' })}
          label="Basic SEO Optimization"
          description="On-page SEO, technical setup, Google Search Console"
          price={150}
        />
        <ServiceOption
          checked={state.include.googleBusiness}
          onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'googleBusiness' })}
          label="Google Business Profile Setup"
          description="Local SEO, reviews, photos, posts"
          price={150}
        />
        <ServiceOption
          checked={state.include.socialIntegration}
          onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'socialIntegration' })}
          label="Social Media Integration"
          description="Integrate your business profiles and posts i.e. IG, FB, X, Tiktok"
          price={150}
        />
        <ServiceOption
          checked={state.include.chatbot}
          onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'chatbot' })}
          label="Chatbot"
          description="Use AI to respond/ engage clients who visit your webpage. Continue chats at will"
          price={150}
        />
        
        {isDynamic && (
          <>
            <ServiceOption
              checked={state.include.advancedSeo}
              onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'advancedSeo' })}
              label="Advanced SEO"
              description="Scale your business with elite level search engine, insights and recommendations"
              price={500}
            />
            <ServiceOption 
              checked={state.include.emailMarketing}
              onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'emailMarketing' })}
              label="Email Marketing Setup"
              description="Mailchimp or SendGrid integration, 1 campaign setup"
              price={200}
            />
            <ServiceOption 
              checked={state.include.leadGen}
              onChange={() => dispatch({ type: 'TOGGLE_INCLUDE', payload: 'leadGen' })}
              label="Lead Generation"
              description="Form integration, landing pages, conversion optimization i.e. Google, Meta Ads"
              price={500}
            />
          </>
        )}
      </Stack>
    </Box>
  );
};