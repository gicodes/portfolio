# portfolio.app

- is a react application detailing about me, my resume, experience and previous projects.
- This project was built on ReactJS with npm ^18, react-fonts, Bulma CSS and Material-UI.


## Render Structure
  
- The absolute responsiveness of this app's UI depends on how the components are rendered.
- Applying 'create-react-app' default, App.js is rendered inside the *index.js* file like so;

  *import App from './App' ;*

  *ReactDOM.createRoot(document.getElementById('root'))
    .render(
      <React.StrictMode><App /></React.StrictMode>
      ) ;*
    
- However, App.js renders the application components dynamically with material's MediaQuery.
- The viewports are defined by two major material breakpoints; 
- i. *MobileApp* | mobile and ii. *DesktApp* | larger viewports.


## Component Structure

  The main components of this application can be found under the *src* directory like so;
  
* src
  * components 
    * > 0-hero-components
    * > 1-header-components
    * > 2-terminal-components
    * > 3-summary-components
    * > 4-resume-components
    * > 5-abme-components
    * > 6-xp-components
    * > 8-sppro-components
    * > 9-footer-components
   

## 0-hero-components
The Hero components hold a Bulma style used dynamically from 1-header-components to 9-footer-components.

## 1-header-components
The header components run the header and toobar section of this app and renders to both mobile and larger viewports.

## 2-terminal-components
The terminal component is a single, integral 'fa-' element that renders to both mobile and larger viewports.

## 3-summary-components
The summary components show the summary and rotating image section, and renders to both mobile and larger viewports.

## 4-resume-components
The resume components hold a resume document, displays modal and renders to both mobile and larger viewports.

## 5-abme-components
The abme components show a png image, 'ABOUT ME' and sub-components, and renders to both mobile and larger viewports.

## 6-xp-components
The xp components run the 'EXPERIENCE' and xp-cards section, and renders to both mobile and larger viewports.

## 8-sppro-components
The sppro components show the 'PREVIOUS PROJECTS' and images section, and renders to both mobile and larger viewports.

## 9-footer-components
The footer components run the footer and contact icons section and renders to both mobile and larger viewports.


# Designed & Developed by Gideon, I
