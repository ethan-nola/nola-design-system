# NOLA Design System

A comprehensive educational design system built for NOLA Education, providing age-appropriate, accessible UI components for K-12 and post-graduate learning platforms. Based on the proven [shadcn/ui](https://ui.shadcn.com/) foundation with educational enhancements.

## 🎯 Project Mission

The NOLA Design System extends shadcn/ui with educational themes and components specifically designed for three distinct user groups:

- **🎨 Foundation** - Middle school students (ages 11-14)
- **🚀 Pathways** - High school students (ages 14-18)
- **💼 Professional** - Post-graduate learners (ages 18+)

Our goal is to create a standardized UI library that reduces development costs by 46% while providing age-appropriate, accessible, and engaging educational interfaces.


## 🎨 Educational Themes

### Foundation (Middle School)
- **Design Philosophy**: Engaging, clear, and accessible
- **Features**: Larger touch targets, higher contrast, gamification elements
- **Colors**: Vibrant blue, warm purple, soft green
- **Typography**: 16px base, relaxed line height for easier reading

### Pathways (High School)
- **Design Philosophy**: Modern, balanced, and social
- **Features**: Contemporary design, career exploration tools, collaborative features
- **Colors**: Modern teal, deep purple, energetic coral
- **Typography**: 15px base, balanced spacing

### Professional (Post-Graduate)
- **Design Philosophy**: Sophisticated and efficient
- **Features**: Information-dense layouts, productivity tools, minimal design
- **Colors**: Navy blue, slate gray, gold accents
- **Typography**: 14px base, compact spacing

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ethan-nola/nola-design-system.git
cd nola-design-system

# Install dependencies (bun preferred)
bun install
# or
npm install

# Start development servers
bun dev          # Next.js app on http://localhost:3000
bun storybook    # Storybook on http://localhost:6006
```

### Using the Registry

Configure this registry in your `components.json`:

```json
{
  "registries": {
    "@nola": "https://registry.nolaeducation.org/v2/r/{name}.json",
    "@storybook": "https://registry.lloydrichards.dev/v2/r/{name}.json"
  }
}
```

Install components with educational themes:

```bash
# Install themes
npx shadcn@latest add @nola/theme-foundation
npx shadcn@latest add @nola/theme-pathways
npx shadcn@latest add @nola/theme-professional

# Install educational blocks
npx shadcn@latest add @nola/assignment-card
npx shadcn@latest add @nola/progress-tracker
npx shadcn@latest add @nola/grade-entry

# Install complete patterns
npx shadcn@latest add @nola/student-dashboard
npx shadcn@latest add @nola/teacher-workspace
```

## 📦 Component Categories

### Core UI Components (47 components)
All standard shadcn/ui components enhanced with NOLA educational themes, comprehensive Storybook documentation, and age-appropriate adaptations.

### Educational Blocks (In Development)
- **Student Components**: Assignment cards, progress trackers, achievement badges
- **Teacher Tools**: Grade entry, lesson planners, attendance tracking
- **Admin Dashboards**: Enrollment stats, compliance tracking, resource allocation

### Application Patterns (Planned)
- **Authentication**: Role-based login flows
- **Dashboards**: Student home, teacher workspace, admin overview
- **Learning Modules**: Lesson viewers, quiz interfaces, assignment submission

## 🛠️ Development

### Available Scripts

```bash
# Development
bun dev                # Start Next.js development server
bun storybook         # Start Storybook
bun registry:build    # Build registry files
bun registry:dev      # Build registry in watch mode

# Testing
bun test              # Run all tests
bun test:unit         # Run unit tests
bun test:storybook    # Run Storybook tests
bun type-check        # TypeScript validation

# Code Quality
bun lint              # Run ESLint
bun format:write      # Format with Prettier
bun format:check      # Check formatting

# Build
bun build             # Build for production
bun start             # Start production server
```

### Project Structure

```
nola-design-system/
├── registry/
│   ├── ui/               # Core components with stories
│   ├── tokens/           # Design token documentation
│   ├── themes/           # Educational themes (new)
│   ├── blocks/           # Composite components (new)
│   └── patterns/         # Page patterns (new)
├── components/ui/        # shadcn/ui components
├── .storybook/          # Storybook configuration
├── app/                 # Next.js app
├── public/r/            # Generated registry files
└── STORYBOOK_SOLUTION_ANALYSIS.md  # Theme switching implementation docs
```

### Theme Switching

The design system implements advanced theme switching in Storybook with reactive CSS custom properties. Components that display design tokens automatically update when switching between Foundation, Pathways, and Professional themes.

**Technical Implementation**: Uses industry-standard MutationObserver pattern for CSS custom property reactivity, following best practices from major design systems like IBM Carbon and Material-UI. See `STORYBOOK_SOLUTION_ANALYSIS.md` for comprehensive research and validation.

## 🎯 Success Metrics

- **Development**: 46% reduction in design and development costs
- **Accessibility**: WCAG 2.1 AA/AAA compliance by theme
- **Performance**: <5 second component installation
- **Coverage**: 90%+ test coverage
- **Adoption**: 100% usage in new NOLA Education projects

## 🤝 Contributing

### For NOLA Education Team

1. Create feature branches from `develop`
2. Prefix commits with scope: `feat:`, `fix:`, `docs:`, `theme:`, `block:`
3. Follow the educational design guidelines
4. Ensure accessibility compliance for target age group
5. Submit PRs with complete test coverage

### Syncing with Upstream

We regularly sync with the original [lloydrichards/shadcn-storybook-registry](https://github.com/lloydrichards/shadcn-storybook-registry):

```bash
# Run monthly sync
./sync-upstream.sh
```

## 📄 License

MIT License - See [LICENSE](./LICENSE) file

## 🙏 Acknowledgments

- Original registry by [Lloyd Richards](https://github.com/lloydrichards)
- Built on [shadcn/ui](https://ui.shadcn.com/) by [@shadcn](https://twitter.com/shadcn)
- Powered by [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Storybook](https://storybook.js.org/)

## 📞 Support

- **NOLA Issues**: [GitHub Issues](https://github.com/ethan-nola/nola-design-system/issues)
- **Documentation**: See `/docs` folder
- **Storybook**: http://localhost:6006 (development)
- **Registry**: http://localhost:3000 (development)

---

**Current Version**: 0.1.0
**Last Updated**: September 2025
**Next Sync**: October 2025

*Part of the NOLA Education Digital Transformation Initiative*
