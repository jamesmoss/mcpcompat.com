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
  link: string;
}

interface Client {
  name: string;
  title: string;
  link: string;
  support: string[];
}

const FeatureCompatibilityTable: React.FC = () => {
  const features = featuresData as Feature[];
  const clients = clientsData as Client[];

  // Group features by category
  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

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

  const formatCategoryTitle = (category: string): string => {
    return category.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra table-pin-rows">
        <thead>
          <tr>
            <th className="text-left">Feature</th>
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
          {Object.entries(groupedFeatures).map(
            ([category, categoryFeatures]) => (
              <React.Fragment key={category}>
                <tr className="bg-base-300">
                  <td colSpan={clients.length + 1} className="font-bold">
                    {formatCategoryTitle(category)}
                  </td>
                </tr>
                {categoryFeatures.map((feature) => (
                  <tr key={feature.name} className="hover">
                    <td>
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary"
                        title={feature.description}
                      >
                        {feature.title}
                      </a>
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
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureCompatibilityTable;
