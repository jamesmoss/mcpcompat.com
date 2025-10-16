// GENERATED FROM SPEC - DO NOT EDIT
// @generated with Tessl (local) from ../../specs/feature-compatibility-table.spec.md
// (spec:a7e47267) (code:6b8abc30)

import React from "react";
import featuresData from "../data/features.json";
import clientsData from "../data/clients.json";

interface Feature {
  name: string;
  title: string;
  category: string;
  description: string;
  link?: string;
}

interface FeatureSection {
  title: string;
  description: string;
  items: Feature[];
}

interface Client {
  name: string;
  title: string;
  link: string;
  support: {
    name: string;
    support: "full" | "partial" | "none";
    notes?: string;
  }[];
}

const FeatureCompatibilityTable: React.FC = () => {
  const featureSections = featuresData as FeatureSection[];
  const clients = clientsData as Client[];

  const getSupportStatus = (
    feature: Feature,
    client: Client
  ): "supported" | "unsupported" | "unknown" => {
    if (!client.support) {
      return "unknown";
    }
    if (client.support.includes(feature.name)) {
      return "supported";
    }
    if (client.support.includes(`!${feature.name}`)) {
      return "unsupported";
    }
    return "unknown";
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead className="sticky top-0 z-10 bg-base-200">
          <tr>
            <th className="text-left bg-base-200" style={{ maxWidth: "200px" }}>
              Feature
            </th>
            {clients.map((client) => (
              <th key={client.name} className="text-center">
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  {client.title}
                </a>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureSections.map((section) => (
            <React.Fragment key={section.title}>
              <tr className="bg-base-300">
                <td colSpan={clients.length + 1} className="font-bold">
                  {section.title}
                </td>
              </tr>
              {section.items.map((feature) => (
                <tr key={feature.name} className="hover">
                  <td style={{ maxWidth: "200px" }}>
                    <div>
                      {feature.link ? (
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link link-primary font-semibold"
                        >
                          {feature.title}
                        </a>
                      ) : (
                        <span className="font-semibold">{feature.title}</span>
                      )}
                      <div className="text-sm text-base-content/70 mt-1">
                        {feature.description}
                      </div>
                    </div>
                  </td>
                  {clients.map((client) => {
                    const status = getSupportStatus(feature, client);
                    return (
                      <td
                        key={`${feature.name}-${client.name}`}
                        className="text-center"
                      >
                        <span
                          className={`badge ${
                            status === "supported"
                              ? "badge-success badge-outline"
                              : status === "unsupported"
                              ? "badge-error badge-outline"
                              : "badge-warning badge-outline"
                          }`}
                        >
                          {status === "supported"
                            ? "✓"
                            : status === "unsupported"
                            ? "✗"
                            : "?"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureCompatibilityTable;
