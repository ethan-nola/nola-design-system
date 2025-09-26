/**
 * Constitutional Principle I: Upstream-First Component Architecture
 * 
 * PRINCIPLE: Components must remain compatible with the shadcn/ui ecosystem
 * and avoid modifications that would break upstream compatibility.
 * 
 * This test suite ensures:
 * - No direct modifications to core shadcn/ui components
 * - Components remain theme-agnostic
 * - Upstream ecosystem compatibility is maintained
 * - Component behavior is consistent across all themes
 */

import { describe, it, expect } from 'vitest';
import { readFile, access } from 'fs/promises';
import { glob } from 'glob';
import { join } from 'path';

describe('Constitutional Principle I: Upstream-First Component Architecture', () => {
  
  describe('🔒 Component Integrity Protection', () => {
    
    it('should not modify core shadcn/ui component structure', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Components should maintain standard shadcn patterns (unless documented exception)
        if (!content.includes('CONSTITUTIONAL EXCEPTION')) {
          expect(content).toMatch(/import.*@\/lib\/utils/); // Standard utility import
          expect(content).toMatch(/cn\(/); // Class name utility usage
        }
        
        // Components should not contain custom inline styling
        expect(content).not.toMatch(/style\s*=\s*\{[^}]*px[^}]*\}/); // No hardcoded pixels
        expect(content).not.toMatch(/style\s*=\s*\{[^}]*#[0-9a-f]{6}[^}]*\}/i); // No hardcoded colors
        expect(content).not.toMatch(/className.*\[.*[0-9]+px.*\]/); // No arbitrary pixel values
        expect(content).not.toMatch(/className.*\[.*#[0-9a-f]{6}.*\]/i); // No arbitrary hex colors
      }
    });
    
    it('should maintain CSS custom property usage only', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // If components reference colors, they should use CSS custom properties
        // Only match actual color tokens, not utilities like text-xs, text-sm, etc.
        const colorReferences = content.match(/(?:bg|text|border)-(?:background|foreground|primary|secondary|muted|accent|destructive|card|popover|border|input|ring)(?:-\w+)?/g) || [];
        
        colorReferences.forEach(colorRef => {
          // Standard Tailwind color classes are allowed (they map to CSS custom properties)
          expect(['bg-background', 'text-foreground', 'bg-foreground', 'bg-primary', 'text-primary-foreground', 
                   'bg-primary-foreground', 'text-primary', 'bg-secondary', 'text-secondary-foreground', 'bg-muted', 'text-muted-foreground',
                   'bg-accent', 'text-accent-foreground', 'bg-destructive', 'text-destructive-foreground', 'text-destructive',
                   'bg-card', 'text-card-foreground', 'bg-popover', 'text-popover-foreground',
                   'border-border', 'border-input', 'border-ring', 'border-primary', 'border-destructive',
                   'bg-input', 'bg-border', 'border-transparent', 'text-ring']).toContain(colorRef);
        });
      }
    });
    
    it('should prevent theme-specific logic in components', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Components must be theme-agnostic
        expect(content).not.toMatch(/foundation|pathways|professional/i);
        expect(content).not.toMatch(/age.*\d+-\d+/i);
        expect(content).not.toMatch(/educational.*theme/i);
        
        // No theme hooks or conditional logic (unless documented exception)
        if (!content.includes('CONSTITUTIONAL EXCEPTION')) {
          expect(content).not.toMatch(/if.*theme/i);
          expect(content).not.toMatch(/switch.*theme/i);
          expect(content).not.toMatch(/useTheme/);
          expect(content).not.toMatch(/theme\s*===\s*['"]foundation['"]|theme\s*===\s*['"]pathways['"]|theme\s*===\s*['"]professional['"]/);
        }
      }
    });
  });
  
  describe('🔄 Upstream Ecosystem Compatibility', () => {
    
    it('should maintain standard shadcn/ui export patterns', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        const filename = file.split('/').pop()?.replace(/\.tsx?$/, '') || '';
        
        // Components should export their main component (handle hyphenated names)
        const componentName = filename.split('-').map(part => 
          part.charAt(0).toUpperCase() + part.slice(1)
        ).join('');
        expect(content).toMatch(new RegExp(`export.*${componentName}`));
        
        // No default exports (shadcn/ui pattern)
        expect(content).not.toMatch(/export default/);
      }
    });
    
    it('should use standard dependency patterns', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Standard imports pattern (unless documented exception)
        if (content.includes('React') && !content.includes('CONSTITUTIONAL EXCEPTION')) {
          expect(content).toMatch(/import \* as React from "react"/);
        }
        
        // Radix UI imports should follow standard pattern
        const radixImports = content.match(/import.*@radix-ui/g) || [];
        radixImports.forEach(importLine => {
          expect(importLine).toMatch(/@radix-ui\/react-\w+/);
        });
        
        // Class variance authority usage
        if (content.includes('cva')) {
          expect(content).toMatch(/import.*cva.*from "class-variance-authority"/);
        }
      }
    });
    
    it('should maintain component composability', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Components should accept standard React props (unless documented exception)
        if (!content.includes('CONSTITUTIONAL EXCEPTION')) {
          expect(content).toMatch(/React\.ComponentProps|ComponentProps/);
        }
        
        // Components should forward refs when appropriate
        if (content.includes('forwardRef')) {
          expect(content).toMatch(/React\.forwardRef/);
        }
        
        // Components should spread props
        expect(content).toMatch(/\.\.\.(props|rest)/);
      }
    });
  });
  
  describe('🎨 Theme-Agnostic Behavior Validation', () => {
    
    it('should render consistently across all educational themes', () => {
      const themes = ['foundation', 'pathways', 'professional'];
      
      // Test component rendering consistency across themes
      themes.forEach(theme => {
        document.documentElement.className = theme;
        
        // Create test elements for key components
        const button = document.createElement('button');
        button.className = 'inline-flex items-center justify-center rounded-md text-sm font-medium';
        document.body.appendChild(button);
        
        const computedStyle = getComputedStyle(button);
        
        // Components should get their styling from CSS custom properties
        expect(computedStyle.getPropertyValue('color')).toBeTruthy();
        expect(computedStyle.getPropertyValue('background-color')).toBeTruthy();
        
        document.body.removeChild(button);
      });
    });
    
    it('should not contain theme-specific component variants', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No theme-based variant definitions
        expect(content).not.toMatch(/variants:.*foundation|variants:.*pathways|variants:.*professional/i);
        
        // No conditional styling based on theme
        expect(content).not.toMatch(/theme.*===.*foundation.*\?|theme.*===.*pathways.*\?|theme.*===.*professional.*\?/i);
        
        // No theme context usage
        expect(content).not.toMatch(/useContext.*theme/i);
        expect(content).not.toMatch(/ThemeProvider/);
      }
    });
  });
  
  describe('📦 Registry Compatibility', () => {
    
    it('should maintain shadcn/ui CLI compatibility', async () => {
      const registryManifest = await readFile('registry.json', 'utf8');
      const registry = JSON.parse(registryManifest);
      
      const componentEntries = registry.items.filter((item: any) => 
        item.type === 'registry:component' && item.name.includes('-story')
      );
      
      for (const entry of componentEntries) {
        // Registry entries should follow standard structure
        expect(entry.name).toBeTruthy();
        expect(entry.type).toBe('registry:component');
        expect(entry.files).toBeDefined();
        expect(Array.isArray(entry.files)).toBe(true);
        expect(entry.files.length).toBeGreaterThan(0);
        
        // Files should have proper registry structure
        entry.files.forEach((file: any) => {
          expect(file.path).toBeTruthy();
          expect(file.type).toBe('registry:component');
        });
      }
    });
    
    it('should prevent component registry pollution', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      // Components should not contain registry-specific metadata
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No registry metadata in component files
        expect(content).not.toMatch(/\$schema.*registry/);
        expect(content).not.toMatch(/registry:component/);
        expect(content).not.toMatch(/shadcn.*registry/i);
      }
    });
  });
});