import { Banner } from "@payloadcms/ui/elements/Banner";
import Link from "next/link";
import type React from "react";

import { SeedButton } from "./SeedButton";
import "./index.scss";

const baseClass = "before-dashboard";

const BeforeDashboard: React.FC = () => {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Welcome to your dashboard!</h4>
      </Banner>

      <div className={`${baseClass}__actions`}>
        <Link className={`${baseClass}__back-button`} href="/">
          Back to Website
        </Link>
      </div>

      {isDev && (
        <Banner className={`${baseClass}__dev-alert`} type="info">
          Development Environment
        </Banner>
      )}

      <div className={`${baseClass}__next-steps`}>
        <p>Here&apos;s what to do next:</p>
        <ul className={`${baseClass}__instructions`}>
          <li>
            <SeedButton />
            {
              " with a few pages, posts, and projects to jump-start your new site, then "
            }
            <Link href="/">visit your website</Link>
            {" to see the results."}
          </li>
          <li>
            {"Modify your "}
            <a
              href="https://payloadcms.com/docs/configuration/collections"
              rel="noopener noreferrer"
              target="_blank"
            >
              collections
            </a>
            {" and add more "}
            <a
              href="https://payloadcms.com/docs/fields/overview"
              rel="noopener noreferrer"
              target="_blank"
            >
              fields
            </a>
            {
              " as needed. If you are new to Payload, we also recommend you check out the "
            }
            <a
              href="https://payloadcms.com/docs/getting-started/what-is-payload"
              rel="noopener noreferrer"
              target="_blank"
            >
              Getting Started
            </a>
            {" docs."}
          </li>
          <li>
            Commit and push your changes to the repository to trigger a
            redeployment of your project.
          </li>
        </ul>
        {"Pro Tip: This block is a "}
        <a
          href="https://payloadcms.com/docs/custom-components/overview"
          rel="noopener noreferrer"
          target="_blank"
        >
          custom component
        </a>
        , you can remove it at any time by updating your{" "}
        <strong>payload.config</strong>.
      </div>
    </div>
  );
};

export default BeforeDashboard;
