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
          This table shows which AI agents support which features of the{" "}
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            Model Context Protocol (MCP)
          </a>
          . The MCP is an open protocol that enables AI applications to
          integrate with external data sources and tools through a standardized
          interface.
        </p>
        <p className="text-lg">
          If you're building MCP servers, this compatibility table is an
          essential resource for understanding which clients support your target
          features and to what extent. Use it to make informed decisions about
          which capabilities to implement, test your server against different
          clients, and ensure broad compatibility across the MCP ecosystem.
        </p>
      </div>
      <FeatureCompatibilityTable />
    </div>
  );
}
