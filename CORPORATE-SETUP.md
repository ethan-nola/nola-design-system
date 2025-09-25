# Corporate Setup Guide - NOLA Education

## Repository Information

**Corporate Fork:** https://github.com/ethan-nola/shadcn-storybook-registry  
**Original Upstream:** https://github.com/lloydrichards/shadcn-storybook-registry  
**Setup Date:** September 25, 2025

## Quick Start

This repository is already configured as a corporate fork with proper upstream tracking.

### Development Setup

```bash
# Clone the corporate repository (if starting fresh)
git clone https://github.com/ethan-nola/shadcn-storybook-registry.git
cd shadcn-storybook-registry

# Install dependencies
npm install  # or bun install if you have bun

# Start development
npm run dev          # Next.js app on http://localhost:3000
npm run storybook    # Storybook on http://localhost:6006
```

### Repository Structure

```
Current branch setup:
├── main              # Synced with upstream, contains WARP.md
└── develop           # Corporate development branch
```

## Corporate Development Workflow

### Making Changes

```bash
# Start from develop branch
git checkout develop

# Create feature branch for corporate changes
git checkout -b feature/nola-branding

# Make your changes...
# Edit files, add NOLA-specific customizations

# Commit and push
git add .
git commit -m "feat: add NOLA education branding"
git push origin feature/nola-branding

# Merge back to develop (via PR or directly)
git checkout develop
git merge feature/nola-branding
git push origin develop
```

### Syncing with Upstream

Run the sync script monthly or before major releases:

```bash
./sync-upstream.sh
```

This will:
- Fetch latest changes from lloydrichards/shadcn-storybook-registry
- Merge updates into your main branch
- Update your develop branch
- Push changes to ethan-nola/shadcn-storybook-registry

## Corporate Customization Areas

### 1. NOLA Education Branding
- **Colors:** Update `app/globals.css` with NOLA brand colors
- **Logo:** Add NOLA logo to `public/nola/` directory
- **Theme:** Create NOLA-specific theme in `registry/nola/`

### 2. Educational Components
Create NOLA-specific educational components:
```bash
registry/nola/
├── lesson-card-story/
├── student-progress-story/
├── teacher-dashboard-story/
└── course-catalog-story/
```

### 3. Configuration
- **Registry URL:** Point to NOLA's internal registry if deployed
- **Environment:** Create `.env.nola` for NOLA-specific settings

## Recommended Corporate Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "dev:nola": "NOLA_THEME=true npm run dev",
    "build:nola": "NOLA_THEME=true npm run build", 
    "storybook:nola": "NOLA_THEME=true npm run storybook",
    "sync:upstream": "./sync-upstream.sh",
    "deploy:nola": "npm run build:nola && <deploy-to-nola-servers>"
  }
}
```

## Environment Variables (.env.nola)

```bash
# NOLA Education Theme
NEXT_PUBLIC_NOLA_THEME=true
NEXT_PUBLIC_BRAND_COLOR="#your-nola-brand-color"
NEXT_PUBLIC_LOGO_URL="/nola/logo.png"

# NOLA Registry (when deployed internally)
NEXT_PUBLIC_REGISTRY_URL="https://storybook.nolaedu.com/v2/r"
NEXT_PUBLIC_REGISTRY_NAME="NOLA Education Storybook Registry"
```

## Deployment

### Development Environment
- **URL:** TBD (set up Vercel/Netlify for NOLA)
- **Branch:** `develop`

### Production Environment  
- **URL:** TBD (NOLA production domain)
- **Branch:** `main` (synced with corporate changes)

## Maintenance

### Monthly Tasks
1. Run `./sync-upstream.sh` to get upstream updates
2. Test NOLA-specific features after sync
3. Update dependencies if needed
4. Deploy to NOLA staging environment

### When Adding New Corporate Features
1. Work in feature branches off `develop`
2. Keep changes isolated to NOLA-specific directories when possible
3. Document changes in commit messages with `nola:` prefix
4. Test both upstream stories and NOLA customizations

## Team Access

**Repository Access:** https://github.com/ethan-nola/shadcn-storybook-registry  
**Settings:** Configure team access in GitHub repository settings

## Support

- **WARP Development:** See `WARP.md` for development commands
- **Original Documentation:** See `README.md` for upstream documentation  
- **Corporate Issues:** Create issues in ethan-nola/shadcn-storybook-registry
- **Upstream Issues:** Report to lloydrichards/shadcn-storybook-registry

## Files Added for Corporate Fork

- `WARP.md` - Development workflow guide
- `sync-upstream.sh` - Upstream synchronization script
- `CORPORATE-SETUP.md` - This file
- Future: `.env.nola`, `registry/nola/`, `components/nola/`

---

**Last Updated:** September 25, 2025  
**Next Sync Due:** October 25, 2025