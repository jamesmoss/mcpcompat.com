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

For each feature-client combination, displays one of three states:

- Supported (✓): The feature's name is included in the client's support array
- Not Supported (✗): The feature's name is prefixed with "!" in the client's support array (e.g., "!feature-name")
- Unknown (?): The feature is neither explicitly supported nor unsupported

The status indicators are displayed using DaisyUI badge components with outline style for soft colors:

- `badge-success badge-outline` for supported features
- `badge-error badge-outline` for unsupported features
- `badge-warning badge-outline` for unknown status

### Group features by category

Organizes features by their category property to improve readability and navigation.

### DaisyUI styling

Uses DaisyUI components and semantic classes for styling. The table uses DaisyUI's `table`, `table-zebra` (for automatic alternating row colors), and `table-pin-rows` (to pin the header when scrolling) classes. Links use `link link-primary` classes. Support status indicators use DaisyUI's `badge` component with outline variants (`badge-success badge-outline`, `badge-error badge-outline`) for soft, accessible colors. Category headers use `bg-base-300` for visual separation.

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

### DaisyUI

Component library for Tailwind CSS providing pre-built UI components and semantic styling classes.
[@use](npm:daisyui)

### Features data

JSON file containing array of feature objects with name, title, category, description, and link properties.
[@use](../src/data/features.json)

### Clients data

JSON file containing array of client objects with name, title, link, and support array properties.
[@use](../src/data/clients.json)
