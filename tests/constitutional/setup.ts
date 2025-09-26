/**
 * Constitutional Compliance Testing Setup
 * 
 * This setup file configures the environment for constitutional compliance tests
 * and provides utilities for detecting architectural violations.
 */

import { vi } from 'vitest';
import { glob } from 'glob';

// Mock browser globals for Node.js environment
global.document = {
  documentElement: {
    className: '',
    style: {},
  },
  createElement: vi.fn(() => ({
    className: '',
    style: {},
    onclick: null,
    getAttribute: vi.fn(() => null),
  })),
} as any;

global.getComputedStyle = vi.fn(() => ({
  getPropertyValue: vi.fn(() => ''),
})) as any;

// Constitutional testing utilities
export const ConstitutionalTestUtils = {
  
  /**
   * Check if educational themes exist in app layer (the violation we missed)
   */
  async detectAppLayerThemeViolations(content: string): Promise<string[]> {
    const violations: string[] = [];
    
    const educationalThemePatterns = [
      { pattern: /\.foundation\s*\{/, violation: 'Foundation theme class found in app layer' },
      { pattern: /\.pathways\s*\{/, violation: 'Pathways theme class found in app layer' },
      { pattern: /\.professional\s*\{/, violation: 'Professional theme class found in app layer' },
      { pattern: /--rich-purple/, violation: 'Foundation theme colors found in app layer' },
      { pattern: /--teal-500/, violation: 'Pathways theme colors found in app layer' },
      { pattern: /--navy-600/, violation: 'Professional theme colors found in app layer' },
      { pattern: /Educational Theme:/, violation: 'Educational theme comments found in app layer' },
    ];
    
    educationalThemePatterns.forEach(({ pattern, violation }) => {
      if (pattern.test(content)) {
        violations.push(violation);
      }
    });
    
    return violations;
  },

  /**
   * Validate registry theme structure
   */
  validateRegistryThemeStructure(themeData: any): string[] {
    const violations: string[] = [];
    
    if (themeData.type !== 'registry:theme') {
      violations.push('Theme must have type "registry:theme"');
    }
    
    if (!themeData.cssVars || !themeData.cssVars.light) {
      violations.push('Theme must include cssVars.light definition');
    }
    
    if (!themeData.meta || !themeData.meta.educationalContext) {
      violations.push('Theme must include educational metadata');
    }
    
    const requiredCssVars = [
      'background', 'foreground', 'primary', 'primary-foreground',
      'secondary', 'secondary-foreground', 'accent', 'accent-foreground'
    ];
    
    if (themeData.cssVars && themeData.cssVars.light) {
      requiredCssVars.forEach(varName => {
        if (!themeData.cssVars.light[varName]) {
          violations.push(`Missing required CSS variable: --${varName}`);
        }
      });
    }
    
    return violations;
  },

  /**
   * Check for theme-component separation violations
   */
  detectThemeComponentSeparationViolations(content: string): string[] {
    const violations: string[] = [];
    
    const separationViolations = [
      { pattern: /(if|switch).*theme/i, violation: 'Theme-conditional logic found in component' },
      { pattern: /foundation|pathways|professional/i, violation: 'Educational theme references in component' },
      { pattern: /#[0-9a-f]{6}/i, violation: 'Hardcoded hex colors found' },
      { pattern: /rgb\(|hsl\(/, violation: 'Direct color values found' },
      { pattern: /\d+px(?!\s*var)/, violation: 'Hardcoded pixel values found' },
    ];
    
    separationViolations.forEach(({ pattern, violation }) => {
      if (pattern.test(content)) {
        violations.push(violation);
      }
    });
    
    return violations;
  },

  /**
   * Validate upstream-first architecture
   */
  detectUpstreamFirstViolations(content: string): string[] {
    const violations: string[] = [];
    
    const upstreamViolations = [
      { pattern: /style\s*=\s*\{/, violation: 'Inline styling found in component' },
      { pattern: /className.*\[.*\]/, violation: 'Arbitrary Tailwind values found' },
    ];
    
    upstreamViolations.forEach(({ pattern, violation }) => {
      if (pattern.test(content)) {
        violations.push(violation);
      }
    });
    
    return violations;
  },

  /**
   * Check for quality-first implementation violations
   */
  detectQualityViolations(content: string): string[] {
    const violations: string[] = [];
    
    const qualityViolations = [
      { pattern: /\/\/ TODO.*hack/i, violation: 'Hack TODO found' },
      { pattern: /\/\/ FIXME.*temp/i, violation: 'Temporary FIXME found' },
      { pattern: /\.temp\./, violation: 'Temporary file pattern found' },
      { pattern: /quick.?fix/i, violation: 'Quick fix pattern found' },
      { pattern: /workaround/i, violation: 'Workaround pattern found' },
    ];
    
    qualityViolations.forEach(({ pattern, violation }) => {
      if (pattern.test(content)) {
        violations.push(violation);
      }
    });
    
    return violations;
  },

  /**
   * Generate constitutional compliance report
   */
  generateComplianceReport(violations: { [principle: string]: string[] }): {
    compliant: boolean;
    summary: { total: number; critical: number; major: number; minor: number };
    violations: Array<{ principle: string; severity: string; description: string }>;
  } {
    const allViolations = Object.entries(violations).flatMap(([principle, violationList]) => 
      violationList.map(violation => ({
        principle,
        severity: principle === 'III' ? 'critical' : 'major',
        description: violation,
      }))
    );
    
    const summary = {
      total: allViolations.length,
      critical: allViolations.filter(v => v.severity === 'critical').length,
      major: allViolations.filter(v => v.severity === 'major').length,
      minor: allViolations.filter(v => v.severity === 'minor').length,
    };
    
    return {
      compliant: allViolations.length === 0,
      summary,
      violations: allViolations,
    };
  },
};

// Export for use in tests
export { glob };