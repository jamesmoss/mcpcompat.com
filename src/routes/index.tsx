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
      <div className="mx-auto mb-8" style={{ maxWidth: "800px" }}>
        <p className="text-lg mb-4">
          Building{" "}
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            Model Context Protocol
          </a>{" "}
          servers and related tooling for agents can be hard. Different clients
          support different part of the MCP spec. Even if an agent claims to
          support the spec, there might be caveats. On top of this there's no
          universal standard for defining, including, and loading context for
          agents.
        </p>
        <p className="text-lg mb-4">
          This table shows which AI agents support which features of MCP and how
          they load context.
        </p>
      </div>
      <FeatureCompatibilityTable />
    </div>
  );
}
