import { createFileRoute } from "@tanstack/react-router";
import FeatureCompatibilityTable from "../components/FeatureCompatibilityTable";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        MCP Feature Compatibility
      </h1>
      <FeatureCompatibilityTable />
    </div>
  );
}
