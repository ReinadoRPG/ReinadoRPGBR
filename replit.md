# ReinadoRPG - Minecraft Server Website

## Overview

This is a medieval RPG-themed website for a Brazilian Minecraft server called "ReinadoRPG". The application serves as a promotional and community hub featuring server status monitoring, an in-game item shop with WhatsApp checkout integration, server rules, and command documentation. The design follows a dark fantasy aesthetic with gothic typography, parchment textures, and amber/gold color accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state, React Context for client state (Cart, Language)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Storage**: In-memory storage implementation with interface for future database integration

### Design Patterns
- **Component Structure**: Presentational components in `client/src/components/`, pages in `client/src/pages/`
- **Context Providers**: CartContext for shopping cart state, LanguageContext for i18n (Portuguese, English, Spanish)
- **Custom Hooks**: Located in `client/src/hooks/` for reusable logic

### Key Features
1. **Server Status**: Real-time Minecraft server status via external API (mcsrvstat.us)
2. **Shop System**: Item cards with cart functionality, WhatsApp checkout integration
3. **Multi-language Support**: Portuguese (default), English, Spanish translations
4. **Theme Toggle**: Light/dark mode with medieval color palette

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets/`

## External Dependencies

### Third-Party Services
- **Minecraft Server Status API**: `https://api.mcsrvstat.us/2/sd-br7.blazebr.com:25575` - Fetches real-time server status and player count
- **Discord Integration**: Links to server Discord community
- **WhatsApp Integration**: Checkout flow sends pre-formatted purchase messages to WhatsApp number (14998199235)

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current State**: Using in-memory storage (`MemStorage`), ready for PostgreSQL migration when DATABASE_URL is provided

### UI Component Library
- **shadcn/ui**: Full component suite with Radix UI primitives
- **Icons**: Lucide React, React Icons (Discord, WhatsApp)

### Fonts (Google Fonts)
- Cinzel (medieval headings)
- Crimson Text (body text)
- MedievalSharp (decorative)
- Fira Code (monospace/commands)