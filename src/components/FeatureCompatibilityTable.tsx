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

  const getSupportData = (
    feature: Feature,
    client: Client
  ): { support: "full" | "partial" | "none"; notes?: string } | null => {
    if (!client.support) {
      return null;
    }
    const supportItem = client.support.find((item) => item.name === feature.name);
    return supportItem || null;
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead className="sticky top-0 z-10 bg-base-200">
          <tr>
            <th className="text-left bg-base-200 text-lg" style={{ maxWidth: "200px" }}>
              Feature
            </th>
            {clients.map((client) => (
              <th key={client.name} className="text-center text-lg">
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
              <tr className="bg-base-100">
                <td colSpan={clients.length + 1}>
                  <div className="font-bold text-lg">{section.title}</div>
                  <div className="text-sm text-base-content/70 mt-1">
                    {section.description}
                  </div>
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
                    const supportData = getSupportData(feature, client);
                    const support = supportData?.support || "none";
                    const notes = supportData?.notes;

                    return (
                      <td
                        key={`${feature.name}-${client.name}`}
                        className="text-center"
                      >
                        <div className="tooltip relative inline-block" data-tip={notes || ""}>
                          <span
                            className={`badge ${
                              support === "full"
                                ? "badge-success badge-outline"
                                : support === "partial"
                                ? "badge-warning badge-outline"
                                : "badge-error badge-outline"
                            }`}
                          >
                            {support === "full"
                              ? "✓"
                              : support === "partial"
                              ? "◐"
                              : "✗"}
                          </span>
                          {notes && <span className="absolute -top-1 -right-2 text-xs">*</span>}
                        </div>
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
