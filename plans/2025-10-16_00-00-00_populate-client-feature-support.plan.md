# Plan: Populate Client Feature Support Data

Add support information for each feature to all clients in the compatibility database.

## Tasks

- [x] Research Claude Code feature support
  > **WebSearch** queries for Claude Code MCP support, hooks, slash commands, subagents, extensions
  >
  > Found:
  > - Full MCP support (tools, resources, prompts, all transport features)
  > - Comprehensive extension system (hooks, slash commands, subagents, plugins, marketplace)
  > - Complete support for all MCP spec features

- [x] Research Cursor feature support
  > **WebSearch** queries for Cursor MCP support, hooks, plugins, slash commands
  >
  > Found:
  > - MCP tools: full support
  > - MCP resources: not yet supported
  > - MCP prompts: not currently supported
  > - Hooks: full support (6 lifecycle hooks)
  > - Slash commands: full support
  > - Subagents: no support
  > - Plugins: partial (VS Code extensions)

- [x] Research GitHub Copilot feature support
  > **WebSearch** queries for GitHub Copilot VSCode MCP support, extensions, slash commands, agent customization
  >
  > Found:
  > - Full MCP support (GA in VS Code 1.102+)
  > - Slash commands: full support
  > - Extensions: GitHub Copilot Extensions from marketplace
  > - Hooks: no native support
  > - Subagents: no support
  > - System prompt override: partial (via custom chat modes)

- [x] Research Codex feature support
  > **WebSearch** queries for OpenAI Codex MCP support
  >
  > Found:
  > - Full MCP support (tools, resources, prompts)
  > - Configuration via ~/.codex/config.toml
  > - No extension system (hooks, slash commands, subagents, plugins)

- [x] Update clients.json with all feature support data
  > **Write** [src/data/clients.json](../src/data/clients.json)
  >
  > Added comprehensive support data for all 24 features across all 4 clients:
  > - Claude Code: full support for all features
  > - Cursor: mixed support, lacking MCP resources/prompts and subagents
  > - GitHub Copilot: strong MCP support, lacking hooks and subagents
  > - Codex: full MCP support, no extension features
