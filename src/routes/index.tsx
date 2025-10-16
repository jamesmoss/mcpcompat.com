import { createFileRoute } from "@tanstack/react-router";
import FeatureCompatibilityTable from "../components/FeatureCompatibilityTable";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <img src="/logo.svg" alt="MCP Feature Compatibility" className="h-32" />
      </div>
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
          support different part of the MCP spec to varying degrees. Even if an
          agent claims to support, there are often caveats. On top of this
          there's no universal standard for defining, including, and loading
          context for agents.
        </p>
        <p className="text-lg mb-4">
          We're tracking support for features across AI agents. Contributions
          are welcome.
        </p>
      </div>
      <FeatureCompatibilityTable />
    </div>
  );
}
