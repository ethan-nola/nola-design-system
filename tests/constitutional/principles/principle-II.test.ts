/**
 * Constitutional Principle II: Theme-Component Separation
 * 
 * PRINCIPLE: Complete separation between theme definitions and component logic.
 * Themes should only affect visual styling through CSS custom properties.
 * 
 * This test suite ensures:
 * - No theme logic embedded in component files
 * - Themes operate exclusively through CSS custom properties
 * - Component behavior is independent of theme selection
 * - Theme switching affects only visual appearance
 */

import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import { glob } from 'glob';

describe('Constitutional Principle II: Theme-Component Separation', () => {
  
  describe('🚫 Theme Logic Prohibition in Components', () => {
    
    it('should prevent theme-conditional rendering in components', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No theme-based conditional logic
        expect(content).not.toMatch(/if\s*\([^)]*theme[^)]*\)/i);
        expect(content).not.toMatch(/switch\s*\([^)]*theme[^)]*\)/i);
        expect(content).not.toMatch(/theme\s*===\s*['"]foundation['"]|theme\s*===\s*['"]pathways['"]|theme\s*===\s*['"]professional['"]/);
        expect(content).not.toMatch(/theme\s*!==\s*['"]foundation['"]|theme\s*!==\s*['"]pathways['"]|theme\s*!==\s*['"]professional['"]/);
        
        // No ternary operators based on theme
        expect(content).not.toMatch(/theme.*\?.*:.*foundation|theme.*\?.*:.*pathways|theme.*\?.*:.*professional/i);
        expect(content).not.toMatch(/foundation.*\?.*:.*theme|pathways.*\?.*:.*theme|professional.*\?.*:.*theme/i);
        
        // No theme-based class selections
        expect(content).not.toMatch(/theme.*foundation.*className|theme.*pathways.*className|theme.*professional.*className/i);
      }
    });
    
    it('should prevent theme context usage in components', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No theme context hooks (unless documented exception)
        if (!content.includes('CONSTITUTIONAL EXCEPTION')) {
          expect(content).not.toMatch(/useTheme\s*\(/);
          expect(content).not.toMatch(/useContext\s*\([^)]*[Tt]heme[^)]*\)/);
          expect(content).not.toMatch(/ThemeContext|themeContext/);
        }
        
        // No theme provider usage
        expect(content).not.toMatch(/ThemeProvider|themeProvider/);
        
        // No theme state management
        expect(content).not.toMatch(/useState.*theme|useReducer.*theme|useEffect.*theme/i);
      }
    });
    
    it('should prevent hardcoded theme-specific styling', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No hardcoded educational theme colors
        expect(content).not.toMatch(/#8B5CF6|#7C3AED|#6D28D9/i); // Purple variants
        expect(content).not.toMatch(/#06B6D4|#0891B2|#0E7490/i); // Cyan variants
        expect(content).not.toMatch(/#EC4899|#DB2777|#BE185D/i); // Pink variants
        expect(content).not.toMatch(/#1E40AF|#1E3A8A|#1E2A69/i); // Navy variants
        expect(content).not.toMatch(/#D97706|#EA580C|#DC2626/i); // Orange/Red variants
        
        // No hardcoded educational theme measurements
        expect(content).not.toMatch(/48px|44px|40px/); // Educational touch targets
        expect(content).not.toMatch(/0\.75rem|0\.625rem|0\.5rem/); // Educational radius values
        
        // No theme-specific CSS-in-JS
        expect(content).not.toMatch(/foundation.*:\s*{|pathways.*:\s*{|professional.*:\s*{/i);
      }
    });
  });
  
  describe('🎨 CSS Custom Property Enforcement', () => {
    
    it('should use only approved Tailwind token classes', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      const approvedColorTokens = [
        // Base tokens
        'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground',
        'primary', 'primary-foreground', 'secondary', 'secondary-foreground',
        'muted', 'muted-foreground', 'accent', 'accent-foreground',
        'destructive', 'destructive-foreground', 'border', 'input', 'ring',
        // Chart tokens
        'chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5',
        // Sidebar tokens
        'sidebar', 'sidebar-foreground', 'sidebar-primary', 'sidebar-primary-foreground',
        'sidebar-accent', 'sidebar-accent-foreground', 'sidebar-border', 'sidebar-ring'
      ];
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Extract all color class references
        const colorClasses = content.match(/(?:bg-|text-|border-|from-|to-|via-)\w+/g) || [];
        
        colorClasses.forEach(colorClass => {
          const tokenName = colorClass.replace(/^(bg-|text-|border-|from-|to-|via-)/, '');
          
          // Skip Tailwind utility classes that are not theme tokens
          const utilityClasses = ['transparent', 'current', 'inherit', 'white', 'black'];
          if (utilityClasses.includes(tokenName)) return;
          
          // Only approved theme tokens should be used
          expect(approvedColorTokens).toContain(tokenName);
        });
      }
    });
    
    it('should validate proper CSS custom property mapping', () => {
      const themes = ['foundation', 'pathways', 'professional'];
      
      themes.forEach(theme => {
        document.documentElement.className = theme;
        const computedStyle = getComputedStyle(document.documentElement);
        
        // All required custom properties should be defined
        const requiredTokens = [
          '--background', '--foreground', '--primary', '--primary-foreground',
          '--secondary', '--secondary-foreground', '--accent', '--accent-foreground',
          '--destructive', '--destructive-foreground', '--muted', '--muted-foreground',
          '--card', '--card-foreground', '--popover', '--popover-foreground',
          '--border', '--input', '--ring'
        ];
        
        requiredTokens.forEach(token => {
          const value = computedStyle.getPropertyValue(token);
          expect(value).toBeTruthy();
          expect(value.trim()).not.toBe('');
        });
      });
    });
    
    it('should prevent direct CSS value usage in components', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No direct color values
        expect(content).not.toMatch(/rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/);
        expect(content).not.toMatch(/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/);
        expect(content).not.toMatch(/hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)/);
        expect(content).not.toMatch(/oklch\(/);
        
        // No arbitrary Tailwind values for colors
        expect(content).not.toMatch(/bg-\[[#\w]+\]|text-\[[#\w]+\]|border-\[[#\w]+\]/);
        
        // No hardcoded dimension values
        expect(content).not.toMatch(/\[\d+px\]|\[\d+rem\]|\[\d+em\]/);
      }
    });
  });
  
  describe('🔄 Theme Switching Independence', () => {
    
    it('should maintain component behavior across theme changes', () => {
      const themes = ['light', 'dark', 'foundation', 'pathways', 'professional'];
      
      // Create test component
      const testButton = document.createElement('button');
      testButton.className = 'bg-primary text-primary-foreground px-4 py-2 rounded';
      testButton.textContent = 'Test Button';
      testButton.onclick = () => { /* test click handler */ };
      document.body.appendChild(testButton);
      
      const originalHandler = testButton.onclick;
      const originalTextContent = testButton.textContent;
      
      themes.forEach(theme => {
        document.documentElement.className = theme;
        
        // Behavior should remain consistent
        expect(testButton.onclick).toBe(originalHandler);
        expect(testButton.textContent).toBe(originalTextContent);
        expect(testButton.tagName).toBe('BUTTON');
        expect(testButton.disabled).toBe(false);
        
        // Only visual properties should change
        const computedStyle = getComputedStyle(testButton);
        expect(computedStyle.backgroundColor).toBeTruthy();
        expect(computedStyle.color).toBeTruthy();
      });
      
      document.body.removeChild(testButton);
    });
    
    it('should ensure component state is theme-independent', () => {
      const themes = ['foundation', 'pathways', 'professional'];
      
      // Test form components
      const input = document.createElement('input');
      input.type = 'text';
      input.value = 'test value';
      input.className = 'border border-input bg-background text-foreground px-3 py-2';
      document.body.appendChild(input);
      
      const originalValue = input.value;
      
      themes.forEach(theme => {
        document.documentElement.className = theme;
        
        // Component state should be preserved
        expect(input.value).toBe(originalValue);
        expect(input.type).toBe('text');
        
        // Only styling should change
        const computedStyle = getComputedStyle(input);
        expect(computedStyle.backgroundColor).toBeTruthy();
        expect(computedStyle.borderColor).toBeTruthy();
      });
      
      document.body.removeChild(input);
    });
  });
  
  describe('🔍 Theme Isolation Validation', () => {
    
    it('should prevent theme-specific component exports', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // No theme-specific component variants
        expect(content).not.toMatch(/export.*Foundation\w+|export.*Pathways\w+|export.*Professional\w+/);
        expect(content).not.toMatch(/FoundationButton|PathwaysCard|ProfessionalInput/);
        
        // No conditional exports based on theme
        expect(content).not.toMatch(/export.*theme.*foundation|export.*theme.*pathways|export.*theme.*professional/i);
      }
    });
    
    it('should validate theme-agnostic component interfaces', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Component interfaces should not include theme props
        expect(content).not.toMatch(/interface.*Props.*{[^}]*theme[^}]*}/i);
        expect(content).not.toMatch(/type.*Props.*{[^}]*theme[^}]*}/i);
        expect(content).not.toMatch(/theme\s*\?\s*:\s*string|theme\s*:\s*string/);
        
        // No theme-based prop validation
        expect(content).not.toMatch(/PropTypes.*theme|theme.*PropTypes/i);
      }
    });
    
    it('should ensure clean theme boundaries', async () => {
      // Theme files should not import components
      const themeFiles = await glob('registry/themes/**/*.{css,scss,less}');
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        
        // Theme files should only contain CSS
        expect(content).not.toMatch(/@import.*components/);
        expect(content).not.toMatch(/import.*from.*components/);
        expect(content).not.toMatch(/require.*components/);
        
        // No JavaScript/TypeScript in theme files
        expect(content).not.toMatch(/export\s+(default\s+)?/);
        expect(content).not.toMatch(/import\s+.*from/);
        expect(content).not.toMatch(/function\s+\w+/);
        expect(content).not.toMatch(/const\s+\w+\s*=/);
      }
    });
  });
});