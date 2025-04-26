import Link from "next/link";

const Paragraph = ({ children, lineHeight }: { children: React.ReactNode; lineHeight?: number }) => (
  <p style={lineHeight ? { lineHeight } : undefined}>
    &#x2014; {children}
  </p>
);

export const msco = (
  <>
    <h2 className="mb-2">Services</h2>
    <Paragraph><b>Coding as a Product</b>: Write mobile apps, web apps, etc</Paragraph>
    <Paragraph><b>Coding as a Service</b>: App monitoring, DbMs, ticketing</Paragraph>
    <Paragraph lineHeight={1.5}>
      Build full-stack apps from scratch with the right tools.{" "}
      <span>
        Use{" "}
        <Link className="text-silver" href="/app-builder">
          <strong>App Builder</strong>
        </Link>{" "}
        to simulate and estimate project cost
      </span>
    </Paragraph>
    <Paragraph lineHeight={1.5}>
      Design APIs, data models & schemas, app architecture for client apps and backend services
    </Paragraph>
    <Paragraph>Integrate new features & functions, scale applications</Paragraph>
    <Paragraph>Manage Domains, web infrastructure & microservices</Paragraph>
    <Paragraph>Deploy apps to the web, cloud, apple & google playstore</Paragraph>
  </>
);

export const fut = (
  <>
    <h2 className="mb-2">Frequently Used Tools</h2>
    <Paragraph>Next.js: Build client-side & full-stack web apps</Paragraph>
    <Paragraph>
      MERN/ PERN: Build full-stack web apps with Node.js, Express, React, & MongoDB/ Firebase/ PostgresSQL
    </Paragraph>
    <Paragraph>TypeScript: Write clean, robust code that is easily maintainable and scalable</Paragraph>
    <Paragraph>Flutter: Build cross-platform (iOS & android) apps with Dart, and deploy to app stores</Paragraph>
    <Paragraph>
      Material UI: Style apps with in-built plugin support. Other familiar libraries: Tailwind CSS, Bootstrap, SCSS
    </Paragraph>
    <Paragraph>GitHub: Version control, manage codebase and collaborate on projects</Paragraph>
    <Paragraph>Docker: Manage apps in containerized environments. Test, deploy & iterate software</Paragraph>
  </>
);

export const funFacts = (
  <>
    <h2 className="mb-2">Fun Facts About Me</h2>
    <Paragraph>I'm a self-taught Software Developer</Paragraph>
    <Paragraph>I honestly cannot choose between backend and frontend</Paragraph>
    <Paragraph>I'm a big fan of football. Siuuu!!</Paragraph>
    <Paragraph>In my spare time, I draw, write rap or play video games</Paragraph>
    <Paragraph> I'm <span className="text-wheat"><b>1 of 1</b></span>. Literally</Paragraph>
  </>
);
