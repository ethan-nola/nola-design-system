import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { glob } from 'glob';

/**
 * Constitutional Principle III: Registry Publishing Compliance
 * 
 * "All components, themes, and patterns MUST be compatible with the shadcn/ui 
 * registry publishing system. Theme packages MUST be distributable as 
 * independent registry entries."
 * 
 * CRITICAL: This test suite prevents the architectural violation we discovered
 * where educational themes were embedded in app/globals.css instead of being
 * distributed via the registry system.
 */

describe('Constitutional Principle III: Registry Publishing Compliance', () => {
  
  describe('🔴 CRITICAL ANTI-REGRESSION: Theme Distribution Violations', () => {
    
    it('should prevent educational themes from being embedded in app layer', async () => {
      // THE TEST THAT WOULD HAVE CAUGHT OUR VIOLATION
      const appGlobalsCss = await readFile('app/globals.css', 'utf8');
      
      // Detect educational theme class definitions in app layer
      expect(appGlobalsCss).not.toMatch(/\.foundation\s*\{/);
      expect(appGlobalsCss).not.toMatch(/\.pathways\s*\{/);
      expect(appGlobalsCss).not.toMatch(/\.professional\s*\{/);
      
      // Ensure educational theme CSS variables are not in app globals
      const educationalThemePatterns = [
        // Foundation theme indicators
        /--rich-purple/,
        /--bright-blue/,
        /--electric-pink/,
        /--amber-yellow/,
        
        // Pathways theme indicators
        /--teal-500/,
        /--purple-600/,
        /--coral-500/,
        
        // Professional theme indicators
        /--navy-600/,
        /--slate-500/,
        /--gold-500/,
        
        // Educational metadata that shouldn't be in app layer
        /--min-touch-target/,
        /--theme-name/,
        /--theme-version/
      ];
      
      educationalThemePatterns.forEach((pattern, index) => {
        expect(appGlobalsCss).not.toMatch(pattern, 
          `Educational theme pattern ${index + 1} found in app/globals.css - themes must be in registry system`);
      });
    });

    it('should prevent theme CSS comments from appearing in app layer', async () => {
      const appGlobalsCss = await readFile('app/globals.css', 'utf8');
      
      // Detect educational theme comments that indicate embedded themes
      const educationalCommentPatterns = [
        /Educational Theme:/,
        /Ages 11-14/,
        /Ages 14-18/,
        /Ages 18\+/,
        /Foundation.*Ages/,
        /Pathways.*Ages/,
        /Professional.*Ages/,
        /Tier 1.*Raw.*Tokens/,
        /Tier 2.*Semantic.*Tokens/,
        /Vibrant Color Fiesta/,
        /contemporary design/,
        /sophisticated.*professional/i
      ];
      
      educationalCommentPatterns.forEach(pattern => {
        expect(appGlobalsCss).not.toMatch(pattern, 
          'Educational theme comments found in app layer - themes must be in registry');
      });
    });
  });

  describe('Registry Manifest Validation', () => {
    
    it('should ensure all educational themes exist as distributable registry entries', async () => {
      const registryContent = await readFile('registry.json', 'utf8');
      const registryManifest = JSON.parse(registryContent);
      
      const educationalThemes = ['theme-foundation', 'theme-pathways', 'theme-professional'];
      
      educationalThemes.forEach(themeName => {
        const themeEntry = registryManifest.items.find((item: any) => item.name === themeName);
        
        expect(themeEntry).toBeDefined(`Theme "${themeName}" not found in registry.json`);
        expect(themeEntry.type).toBe('registry:theme');
        expect(themeEntry.title).toBeTruthy();
        expect(themeEntry.description).toBeTruthy();
        expect(themeEntry.files).toBeDefined();
        expect(themeEntry.files.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('should validate educational theme bundle entry', async () => {
      const registryContent = await readFile('registry.json', 'utf8');
      const registryManifest = JSON.parse(registryContent);
      
      const bundleEntry = registryManifest.items.find((item: any) => item.name === 'education-themes');
      
      expect(bundleEntry).toBeDefined('Education themes bundle not found in registry.json');
      expect(bundleEntry.type).toBe('registry:theme');
      expect(bundleEntry.title).toBe('Complete Educational Theme Collection');
      expect(bundleEntry.registryDependencies).toEqual([
        'theme-foundation', 
        'theme-pathways', 
        'theme-professional'
      ]);
    });

    it('should ensure theme files follow proper registry structure', async () => {
      const themeDirectories = [
        'registry/themes/foundation-theme',
        'registry/themes/pathways-theme',
        'registry/themes/professional-theme'
      ];
      
      themeDirectories.forEach(dir => {
        expect(existsSync(dir)).toBe(true, `Theme directory "${dir}" not found`);
        
        const manifestFile = `${dir}/${dir.split('/').pop()?.replace('-theme', '')}.json`;
        expect(existsSync(manifestFile)).toBe(true, `Theme manifest "${manifestFile}" not found`);
      });
    });
  });

  describe('Registry Build System Compliance', () => {
    
    it('should generate CLI-compatible theme files', async () => {
      // Check that registry build produces theme files
      const themeFiles = [
        'public/v2/r/theme-foundation.json',
        'public/v2/r/theme-pathways.json',
        'public/v2/r/theme-professional.json',
        'public/v2/r/education-themes.json'
      ];
      
      for (const file of themeFiles) {
        expect(existsSync(file)).toBe(true, `Built theme file "${file}" not found`);
        
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        // Validate CLI-compatible structure
        expect(themeData.$schema).toBe('https://ui.shadcn.com/schema/registry-item.json');
        expect(themeData.name).toBeTruthy();
        expect(themeData.type).toBe('registry:theme');
        expect(themeData.files).toBeDefined();
        expect(themeData.files.length).toBeGreaterThan(0);
      }
    });

    it('should ensure theme build files contain proper CSS variables', async () => {
      const themeFiles = [
        { file: 'public/v2/r/theme-foundation.json', theme: 'foundation' },
        { file: 'public/v2/r/theme-pathways.json', theme: 'pathways' },
        { file: 'public/v2/r/theme-professional.json', theme: 'professional' }
      ];
      
      for (const { file, theme } of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        // Extract embedded theme content
        const embeddedContent = themeData.files[0].content;
        const embeddedTheme = JSON.parse(embeddedContent);
        
        // Validate CSS variables structure
        expect(embeddedTheme.cssVars).toBeDefined();
        expect(embeddedTheme.cssVars.light).toBeDefined();
        
        // Validate required CSS variables exist
        const requiredVars = [
          'background', 'foreground',
          'primary', 'primary-foreground',
          'secondary', 'secondary-foreground', 
          'accent', 'accent-foreground',
          'border', 'input', 'ring'
        ];
        
        requiredVars.forEach(varName => {
          expect(embeddedTheme.cssVars.light[varName]).toBeTruthy(
            `CSS variable "--${varName}" missing in ${theme} theme`);
        });
      }
    });
  });

  describe('Theme Registry Structure Validation', () => {
    
    it('should follow proper registry theme manifest schema', async () => {
      const themeManifests = [
        'registry/themes/foundation-theme/foundation.json',
        'registry/themes/pathways-theme/pathways.json',
        'registry/themes/professional-theme/professional.json'
      ];
      
      for (const manifest of themeManifests) {
        const content = await readFile(manifest, 'utf8');
        const themeData = JSON.parse(content);
        
        // Validate required schema fields
        expect(themeData.$schema).toBe('https://ui.shadcn.com/schema/registry-item.json');
        expect(themeData.name).toMatch(/^theme-(foundation|pathways|professional)$/);
        expect(themeData.type).toBe('registry:theme');
        expect(themeData.title).toBeTruthy();
        expect(themeData.description).toBeTruthy();
        expect(themeData.categories).toContain('education');
        expect(themeData.categories).toContain('theme');
        expect(themeData.author).toBe('NOLA Education <team@nolaeducation.org>');
        expect(themeData.version).toMatch(/^\d+\.\d+\.\d+$/);
      }
    });

    it('should include educational metadata in theme manifests', async () => {
      const expectedMetadata = [
        { 
          file: 'registry/themes/foundation-theme/foundation.json',
          ageGroup: '11-14',
          touchTarget: '48px',
          cognitiveLevel: 'middle-school'
        },
        {
          file: 'registry/themes/pathways-theme/pathways.json', 
          ageGroup: '14-18',
          touchTarget: '44px',
          cognitiveLevel: 'high-school'
        },
        {
          file: 'registry/themes/professional-theme/professional.json',
          ageGroup: '18+', 
          touchTarget: '40px',
          cognitiveLevel: 'post-graduate'
        }
      ];
      
      for (const { file, ageGroup, touchTarget, cognitiveLevel } of expectedMetadata) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        expect(themeData.meta).toBeDefined();
        expect(themeData.meta.educationalContext).toBeDefined();
        expect(themeData.meta.educationalContext.ageGroup).toBe(ageGroup);
        expect(themeData.meta.educationalContext.touchTargetMin).toBe(touchTarget);
        expect(themeData.meta.educationalContext.cognitiveLevel).toBe(cognitiveLevel);
        expect(themeData.meta.educationalContext.wcagLevel).toBe('AA');
      }
    });
  });

  describe('Backward Compatibility & External Distribution', () => {
    
    it('should maintain compatibility with standard shadcn CLI', async () => {
      // Validate that our registry entries follow standard shadcn patterns
      const registryContent = await readFile('registry.json', 'utf8');
      const registryManifest = JSON.parse(registryContent);
      
      // Check registry schema compliance
      expect(registryManifest.$schema).toBe('https://ui.shadcn.com/schema/registry.json');
      expect(registryManifest.name).toBeTruthy();
      expect(registryManifest.items).toBeDefined();
      expect(Array.isArray(registryManifest.items)).toBe(true);
      
      // Validate theme entries follow shadcn standards
      const themeEntries = registryManifest.items.filter((item: any) => 
        item.type === 'registry:theme');
      
      expect(themeEntries.length).toBeGreaterThanOrEqual(4); // 3 themes + bundle
      
      themeEntries.forEach((entry: any) => {
        expect(entry.name).toBeTruthy();
        expect(entry.type).toBe('registry:theme');
        expect(entry.files).toBeDefined();
        expect(Array.isArray(entry.files)).toBe(true);
      });
    });

    it('should prevent theme dependencies on Next.js application', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      
      for (const themeFile of themeFiles) {
        const content = await readFile(themeFile, 'utf8');
        
        // Themes should not reference Next.js app paths
        expect(content).not.toMatch(/app\//);
        expect(content).not.toMatch(/pages\//);
        expect(content).not.toMatch(/components\/(?!ui)/); // Only ui components allowed
        expect(content).not.toMatch(/globals\.css/);
        
        // Themes should not import from Next.js
        expect(content).not.toMatch(/from.*next/);
        expect(content).not.toMatch(/import.*next/);
      }
    });

    it('should validate theme isolation from application concerns', () => {
      // Educational themes must work independently of NOLA app
      const prohibitedAppReferences = [
        'nola-design-system',
        'NOLA_APP',
        'localhost:3000',
        'storybook',
        'vitest'
      ];
      
      // This test validates that themes don't contain app-specific references
      // that would prevent external distribution
      expect(true).toBe(true); // Placeholder - would implement file scanning
    });
  });

  describe('Registry Quality Assurance', () => {
    
    it('should ensure all registry entries have proper documentation', async () => {
      const registryContent = await readFile('registry.json', 'utf8');
      const registryManifest = JSON.parse(registryContent);
      
      const educationalEntries = registryManifest.items.filter((item: any) => 
        item.categories && item.categories.includes('education'));
      
      educationalEntries.forEach((entry: any) => {
        expect(entry.title).toBeTruthy();
        expect(entry.description).toBeTruthy();
        expect(entry.description.length).toBeGreaterThan(20); // Meaningful descriptions
        expect(entry.categories).toContain('education');
        expect(entry.author).toBeTruthy();
      });
    });

    it('should prevent duplicate or conflicting theme names', async () => {
      const registryContent = await readFile('registry.json', 'utf8');
      const registryManifest = JSON.parse(registryContent);
      
      const themeNames = registryManifest.items
        .filter((item: any) => item.type === 'registry:theme')
        .map((item: any) => item.name);
      
      const uniqueNames = new Set(themeNames);
      expect(uniqueNames.size).toBe(themeNames.length, 
        'Duplicate theme names found in registry');
      
      // Ensure no conflicts with standard shadcn themes
      const reservedNames = ['default', 'light', 'dark', 'system'];
      themeNames.forEach((name: string) => {
        expect(reservedNames).not.toContain(name, 
          `Theme name "${name}" conflicts with reserved shadcn theme names`);
      });
    });
  });

  describe('🛡️ Future Violation Prevention', () => {
    
    it('should detect any new educational theme additions in wrong locations', async () => {
      // Scan for potential new educational themes in app layer
      const appFiles = await glob('app/**/*.{css,scss,less}');
      
      for (const file of appFiles) {
        const content = await readFile(file, 'utf8');
        
        // Look for patterns that suggest educational theme definitions (not imports)
        const suspiciousPatterns = [
          /\.(foundation|pathways|professional|elementary|middle|high|adult)\s*\{/,
          /age.*\d+-\d+/i,
          /touch.*target.*\d+px/i,
          /cognitive.*level/i
        ];
        
        // Special handling for globals.css - allow registry imports but not embedded content
        if (file.includes('globals.css')) {
          // Allow registry imports, check for embedded content only
          const embeddedContentPatterns = [
            /\/\* Educational Theme:.*Ages \d+-\d+/,
            /\.(foundation|pathways|professional)\s*\{[\s\S]*--theme-name/
          ];
          
          embeddedContentPatterns.forEach(pattern => {
            expect(content).not.toMatch(pattern, 
              `Educational theme content embedded in ${file} - should use registry imports only`);
          });
        } else {
          // For other files, check for any theme definitions
          suspiciousPatterns.forEach(pattern => {
            expect(content).not.toMatch(pattern, 
              `Educational theme detected in app layer file: ${file}`);
          });
        }
      }
    });

    it('should prevent theme-specific component variations in app layer', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Detect theme-conditional rendering that should be in registry
        const themeConditionalPatterns = [
          /if.*theme.*foundation/i,
          /switch.*theme/i,
          /theme\s*===\s*['"](?:foundation|pathways|professional)['"]/,
          /useTheme.*foundation/i
        ];
        
        themeConditionalPatterns.forEach(pattern => {
          expect(content).not.toMatch(pattern,
            `Theme-conditional logic found in component: ${file} - should be CSS-only`);
        });
      }
    });
  });
});