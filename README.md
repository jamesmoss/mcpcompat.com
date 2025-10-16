# Agent Compat

A comprehensive compatibility matrix for [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) clients, showing which features are supported by different AI coding assistants.

## About

This project tracks MCP feature support across popular AI coding clients like Claude Code, Cursor, VSCode (GitHub Copilot), and others. It helps developers understand which MCP capabilities are available in their preferred development environment.

## Features

- **Compatibility Matrix**: Visual comparison of MCP feature support across clients
- **Feature Categories**: Organized by transport, authorization, core features, and client-specific capabilities
- **Detailed Notes**: Support status includes partial support explanations and issue tracking
- **Real-time Updates**: Data-driven table with expandable categories

## Getting Started

```bash
npm install
npm run dev
```

## Building For Production

```bash
npm run build
```

## Project Structure

- `src/data/clients.json` - Client feature support data
- `src/data/features.json` - MCP feature definitions and categories
- `src/components/FeatureCompatibilityTable.tsx` - Main compatibility table component

## Tech Stack

- [TanStack Router](https://tanstack.com/router) - File-based routing
- [TanStack Query](https://tanstack.com/query) - Data fetching and caching
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [DaisyUI](https://daisyui.com/) - Component library
- [Biome](https://biomejs.dev/) - Linting and formatting

## Contributing

Contributions are welcome! To update feature support:

1. Edit `src/data/clients.json` to update client support status
2. Edit `src/data/features.json` to add new features or categories
3. Submit a pull request with documentation sources

## Development Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run linter
npm run format    # Format code
npm run test      # Run tests
```

## License

MIT
