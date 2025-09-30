# Feature Compatibility Table

React component that displays MCP protocol features in a compatibility table format, showing which features are supported by different MCP clients.

## Target

[@generate](../src/components/FeatureCompatibilityTable.tsx)

## Capabilities

### Display MCP features in rows

Shows features from the features data source, with each feature displayed as a row in the table. The feature title is shown in the first column.

### Display MCP clients in columns

Shows clients from the clients data source, with each client displayed as a column header showing the client title.

### Show feature support status

For each feature-client combination, displays a tick (✓) if the client supports the feature or a cross (✗) if not. Support is determined by checking if the feature's name is included in the client's support array.

### Group features by category

Organizes features by their category property to improve readability and navigation.

### Dark theme styling

Uses a dark color scheme with dark backgrounds (gray-800, gray-900) and light text (gray-100, white) for a modern dark theme appearance. Table headers use darker backgrounds with light text, and alternating row colors provide visual separation.

### Responsive table styling

Table is styled to be responsive and easy to read across different screen sizes.

## API

```typescript { .api }
import React from "react";

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
  // Component implementation
};

export default FeatureCompatibilityTable;
```

## Dependencies

### React

React library for building the component.
[@use](npm:react)

### Features data

JSON file containing array of feature objects with name, title, category, description, and link properties.
[@use](../src/data/features.json)

### Clients data

JSON file containing array of client objects with name, title, link, and support array properties.
[@use](../src/data/clients.json)