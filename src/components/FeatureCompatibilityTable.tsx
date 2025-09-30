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

  const isSupported = (feature: Feature, client: Client): boolean => {
    return client.support.includes(feature.name);
  };

  const formatCategoryTitle = (category: string): string => {
    return category.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-600 px-4 py-2 text-left font-semibold text-gray-100">
              Feature
            </th>
            {clients.map((client) => (
              <th
                key={client.name}
                className="border border-gray-600 px-4 py-2 text-center font-semibold text-gray-100"
              >
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
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
                <tr className="bg-gray-900">
                  <td
                    colSpan={clients.length + 1}
                    className="border border-gray-600 px-4 py-2 font-semibold text-white"
                  >
                    {formatCategoryTitle(category)}
                  </td>
                </tr>
                {categoryFeatures.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`${
                      index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                    } hover:bg-gray-700`}
                  >
                    <td className="border border-gray-600 px-4 py-2">
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline text-gray-100"
                        title={feature.description}
                      >
                        {feature.title}
                      </a>
                    </td>
                    {clients.map((client) => (
                      <td
                        key={`${feature.name}-${client.name}`}
                        className="border border-gray-600 px-4 py-2 text-center"
                      >
                        <span
                          className={`text-lg font-bold ${
                            isSupported(feature, client)
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {isSupported(feature, client) ? "✓" : "✗"}
                        </span>
                      </td>
                    ))}
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
