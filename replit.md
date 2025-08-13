# PlaceElements HR Website

## Overview

PlaceElements HR is a modern HR consultancy website built as a single-page application showcasing the company's services and expertise. The application presents a professional landing page with sections for services, industries served, client testimonials, and contact information. It emphasizes the company's three-pillar approach: People, Process, and Technology for HR transformation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui for consistent, accessible design system
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: TanStack React Query for server state and API interactions

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development Setup**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstract storage layer with in-memory implementation for user management
- **Middleware**: Request logging and error handling with JSON response capture

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema**: User table with username/password authentication structure
- **Validation**: Zod schemas integrated with Drizzle for runtime type validation
- **Migrations**: Drizzle Kit for database schema management

### Component Architecture
- **Design System**: Comprehensive UI component library based on Radix primitives
- **Layout**: Modular component structure with dedicated sections (Hero, About, Services, etc.)
- **Responsiveness**: Mobile-first design with Tailwind responsive utilities
- **Theming**: CSS custom properties for consistent branding and dark mode support

### Development Workflow
- **TypeScript**: Strict type checking across client, server, and shared code
- **Module Resolution**: Custom path aliases for clean imports
- **Hot Reload**: Vite HMR integration with Express server
- **Error Handling**: Runtime error overlays and comprehensive error boundaries

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full TypeScript support with strict configuration
- **Build Tools**: Vite, ESBuild for production builds
- **Development**: TSX for TypeScript execution, Replit-specific plugins

### UI and Styling
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Utilities**: Class Variance Authority for component variants, clsx for conditional classes

### Backend and Database
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation

### State Management and Data Fetching
- **Server State**: TanStack React Query for API state management
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Utilities**: date-fns for date manipulation

### Development and Deployment
- **Runtime**: Node.js with ES modules
- **Package Manager**: npm with lock file for dependency consistency
- **Environment**: Replit-optimized configuration with cartographer integration
- **Error Tracking**: Custom error handling with development overlays