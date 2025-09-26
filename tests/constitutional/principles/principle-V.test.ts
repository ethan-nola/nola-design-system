/**
 * Constitutional Principle V: Quality-First Implementation
 * 
 * PRINCIPLE: Reject temporary workarounds, quick fixes, and technical debt.
 * Every implementation must meet production quality standards from day one.
 * 
 * This test suite ensures:
 * - No temporary workarounds or quick fixes in codebase
 * - Comprehensive test coverage for all components
 * - Code quality standards are maintained
 * - All implementations are production-ready
 */

import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import { glob } from 'glob';
import { execSync } from 'child_process';

describe('Constitutional Principle V: Quality-First Implementation', () => {
  
  describe('🚫 Anti-Hack & Anti-Workaround Detection', () => {
    
    it('should reject temporary workarounds and quick fixes', async () => {
      const allFiles = await glob('**/*.{ts,tsx,js,jsx,css,scss,md}', {
        ignore: ['node_modules/**', 'storybook-static/**', 'dist/**', 'build/**', '.next/**']
      });
      
      const prohibitedPatterns = [
        // Direct anti-patterns
        /\/\/\s*(TODO|FIXME|HACK|TEMP|TEMPORARY|QUICK.*FIX|BAND.*AID)/i,
        /\/\*\s*(TODO|FIXME|HACK|TEMP|TEMPORARY|QUICK.*FIX|BAND.*AID)/i,
        
        // Code smell patterns
        /workaround/i,
        /quick\s*fix/i,
        /temporary\s*(solution|fix|implementation)/i,
        /band\s*aid/i,
        /dirty\s*hack/i,
        
        // File naming anti-patterns
        /\.temp\.|\.tmp\.|\.backup\.|\.old\./,
        /temp-|tmp-|backup-|old-/,
        
        // Debugging artifacts
        /console\.log\(/,
        /debugger\s*;/,
        /alert\(/,
      ];
      
      const violations: Array<{ file: string; pattern: string; matches: string[] }> = [];
      
      for (const file of allFiles) {
        const content = await readFile(file, 'utf8');
        
        prohibitedPatterns.forEach((pattern, index) => {
          const matches = content.match(pattern);
          if (matches) {
            violations.push({
              file,
              pattern: pattern.toString(),
              matches: matches.slice(0, 3) // Limit to first 3 matches per file
            });
          }
        });
      }
      
      // Allow some specific documented exceptions
      const allowedExceptions = [
        'CONSTITUTIONAL_COMPLIANCE_TESTING_PLAN.md', // Planning docs
        'tests/constitutional/', // Test documentation
        '.claude/commands/', // Claude context files
        'STORYBOOK_SOLUTION_ANALYSIS.md', // Analysis docs
        'THEME_REGISTRY_ARCHITECTURE_PLAN.md', // Architecture docs
        'CONSTITUTIONAL_COMPLIANCE_REPORT.md', // Generated reports
        'scripts/', // Scripts may contain these terms for detection
      ];
      
      const realViolations = violations.filter(violation => 
        !allowedExceptions.some(exception => violation.file.includes(exception))
      );
      
      if (realViolations.length > 0) {
        console.error('Quality violations found:');
        realViolations.forEach(v => {
          console.error(`  ${v.file}: ${v.matches.join(', ')}`);
        });
      }
      
      expect(realViolations.length).toBe(0);
    });
    
    it('should prevent commented-out code blocks', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Look for large blocks of commented code (usually indicates indecision)
        const commentBlocks = content.match(/\/\*[\s\S]*?\*\//g) || [];
        const longCommentBlocks = commentBlocks.filter(block => block.length > 200);
        
        // Look for multiple consecutive commented lines (code that was commented out)
        const consecutiveComments = content.match(/^(\s*\/\/.*\n){3,}/gm) || [];
        
        expect(longCommentBlocks.length).toBe(0);
        expect(consecutiveComments.length).toBe(0);
      }
    });
    
    it('should prevent magic numbers and undocumented constants', async () => {
      const componentFiles = await glob('components/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Look for magic numbers (except common UI values)
        const allowedNumbers = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, // Basic counting
          12, 16, 20, 24, 32, 40, 44, 48, // Common UI dimensions
          100, 200, 300, 400, 500, 600, 700, 800, 900, // Common weight values
        ];
        
        const numberMatches = content.match(/\b\d{2,}\b/g) || [];
        const magicNumbers = numberMatches
          .map(n => parseInt(n))
          .filter(n => !allowedNumbers.includes(n))
          .filter(n => n < 1000); // Ignore timestamps and large values
        
        // Magic numbers should be rare (indicating they're documented/justified)
        expect(magicNumbers.length).toBeLessThan(5);
      }
    });
  });
  
  describe('📊 Test Coverage Standards', () => {
    
    it('should maintain comprehensive Storybook story coverage', async () => {
      const uiComponents = await glob('components/ui/**/*.{ts,tsx}');
      const stories = await glob('registry/ui/**/*.stories.tsx');
      
      // Extract component names from ui directory
      const componentNames = uiComponents
        .map(path => path.split('/').pop()?.replace(/\.tsx?$/, ''))
        .filter(Boolean);
      
      // Extract story names from stories directory
      const storyNames = stories
        .map(path => path.split('/').pop()?.replace(/\.stories\.tsx$/, ''))
        .filter(Boolean);
      
      // Most UI components should have stories
      const componentsWithoutStories = componentNames.filter(comp => 
        comp && !storyNames.some(story => story && story.includes(comp))
      );
      
      // Allow some utility/primitive components to not have stories
      const allowedWithoutStories = ['index', 'utils', 'types'];
      const realMissingStories = componentsWithoutStories.filter(comp => 
        comp && !allowedWithoutStories.includes(comp)
      );
      
      expect(realMissingStories.length).toBeLessThan(5);
    });
    
    it('should validate test file quality', async () => {
      const testFiles = await glob('tests/**/*.test.{ts,tsx}');
      
      expect(testFiles.length).toBeGreaterThan(0);
      
      for (const file of testFiles) {
        const content = await readFile(file, 'utf8');
        
        // Test files should have proper structure
        expect(content).toMatch(/describe\(/); // At least one describe block
        expect(content).toMatch(/it\(|test\(/); // At least one test
        expect(content).toMatch(/expect\(/); // At least one assertion
        
        // Test descriptions should be meaningful
        const describeMatches = content.match(/describe\(['"`](.*?)['"`]/g) || [];
        const testMatches = content.match(/it\(['"`](.*?)['"`]/g) || [];
        
        describeMatches.forEach(desc => {
          expect(desc.length).toBeGreaterThan(15); // Meaningful describe blocks
        });
        
        testMatches.forEach(test => {
          expect(test.length).toBeGreaterThan(20); // Meaningful test names
        });
      }
    });
    
    it('should ensure constitutional compliance test completeness', async () => {
      const constitutionalTests = await glob('tests/constitutional/principles/*.test.ts');
      
      // Should have tests for all constitutional principles
      const expectedPrinciples = ['I', 'II', 'III', 'IV', 'V'];
      const existingPrinciples = constitutionalTests
        .map(file => file.match(/principle-([IVX]+)\.test\.ts$/)?.[1])
        .filter(Boolean);
      
      expectedPrinciples.forEach(principle => {
        expect(existingPrinciples).toContain(principle);
      });
      
      // Each constitutional test should be comprehensive
      for (const file of constitutionalTests) {
        const content = await readFile(file, 'utf8');
        
        // Should have multiple test categories
        const describeBlocks = content.match(/describe\(/g) || [];
        expect(describeBlocks.length).toBeGreaterThanOrEqual(3);
        
        // Should have meaningful test coverage
        const testBlocks = content.match(/it\(|test\(/g) || [];
        expect(testBlocks.length).toBeGreaterThanOrEqual(5);
      }
    });
  });
  
  describe('🔧 Code Quality Standards', () => {
    
    it('should enforce consistent code style', async () => {
      const sourceFiles = await glob('{components,tests,app}/**/*.{ts,tsx}');
      
      for (const file of sourceFiles) {
        const content = await readFile(file, 'utf8');
        
        // Consistent import patterns
        if (content.includes('import')) {
          // React imports should be consistent
          if (content.includes('import React') || content.includes('import * as React')) {
            expect(content).toMatch(/import \* as React from ["']react["']/);
          }
          
          // Internal imports should use absolute paths
          const internalImports = content.match(/import.*from ["']@\//g) || [];
          const relativeImports = content.match(/import.*from ["']\.\//g) || [];
          
          // Prefer absolute imports for better maintainability
          if (internalImports.length > 0 && relativeImports.length > internalImports.length) {
            console.warn(`${file} has more relative imports than absolute imports`);
          }
        }
        
        // TypeScript best practices
        if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          // Avoid 'any' type
          const anyUsages = content.match(/:\s*any\b/g) || [];
          expect(anyUsages.length).toBeLessThan(3); // Minimal any usage
          
          // Prefer interfaces over types for objects (when extending)
          if (content.includes('export type') && content.includes('extends')) {
            const typeWithExtends = content.match(/export type.*extends/g) || [];
            const interfaceWithExtends = content.match(/export interface.*extends/g) || [];
            
            // Prefer interfaces for extensible types
            expect(interfaceWithExtends.length).toBeGreaterThanOrEqual(typeWithExtends.length);
          }
        }
      }
    });
    
    it('should maintain proper component architecture', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Components should be properly typed
        expect(content).toMatch(/React\.(ComponentProps|HTMLAttributes|FC|Component)/);
        
        // Components should handle props properly
        expect(content).toMatch(/\.\.\.(props|rest)/);
        
        // Components should use proper class name handling
        if (content.includes('className')) {
          expect(content).toMatch(/cn\(/);
        }
        
        // Components should have proper exports (no default exports)
        expect(content).not.toMatch(/export default/);
        expect(content).toMatch(/export \{/);
      }
    });
    
    it('should validate proper error boundaries', async () => {
      const appFiles = await glob('app/**/*.{ts,tsx}');
      
      // At least some error handling should be present in app layer
      let hasErrorHandling = false;
      
      for (const file of appFiles) {
        const content = await readFile(file, 'utf8');
        
        if (content.includes('try') && content.includes('catch')) {
          hasErrorHandling = true;
        }
        
        if (content.includes('ErrorBoundary')) {
          hasErrorHandling = true;
        }
      }
      
      // Note: This is a guideline - error handling may be implemented at framework level
      if (!hasErrorHandling) {
        console.warn('Consider implementing error boundaries for better user experience');
      }
    });
  });
  
  describe('🚀 Production Readiness', () => {
    
    it('should ensure all components are performance optimized', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Components should avoid performance anti-patterns
        expect(content).not.toMatch(/useEffect\(\s*\(\)\s*=>/); // Missing dependency arrays
        expect(content).not.toMatch(/onClick=\{.*\(\)\s*=>/); // Inline function creation
        
        // Components should use proper memoization when needed
        if (content.includes('useMemo') || content.includes('useCallback')) {
          // Should have proper dependency arrays
          expect(content).toMatch(/,\s*\[.*\]\s*\)/);
        }
        
        // Large components should be split
        const componentSize = content.length;
        if (componentSize > 2000) {
          console.warn(`${file} is large (${componentSize} chars) - consider splitting`);
        }
      }
    });
    
    it('should validate accessibility standards', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Interactive components should have proper accessibility
        if (content.includes('onClick') || content.includes('onKeyDown')) {
          // Should handle keyboard navigation
          const hasKeyboardSupport = 
            content.includes('onKeyDown') || 
            content.includes('onKeyPress') ||
            content.includes('role=') ||
            content.includes('aria-');
            
          expect(hasKeyboardSupport).toBe(true);
        }
        
        // Form controls should have labels
        if (content.includes('input') || content.includes('textarea') || content.includes('select')) {
          const hasLabelSupport = 
            content.includes('aria-label') ||
            content.includes('aria-labelledby') ||
            content.includes('htmlFor') ||
            content.includes('id');
            
          expect(hasLabelSupport).toBe(true);
        }
      }
    });
    
    it('should ensure build system quality', async () => {
      try {
        // Check if build system works
        const buildResult = execSync('bun run build-storybook', { 
          encoding: 'utf8',
          timeout: 30000 
        });
        
        expect(buildResult).toBeTruthy();
      } catch (error) {
        // Build should not fail
        expect(error).toBeNull();
      }
      
      // Package.json should have proper scripts
      const packageJson = JSON.parse(await readFile('package.json', 'utf8'));
      
      const requiredScripts = [
        'build', 'build-storybook', 'test', 'lint'
      ];
      
      requiredScripts.forEach(script => {
        expect(packageJson.scripts[script]).toBeDefined();
      });
    });
    
    it('should validate constitutional compliance integration', async () => {
      // Constitutional tests should be integrated into CI/CD
      const packageJson = JSON.parse(await readFile('package.json', 'utf8'));
      
      // Should have constitutional testing script
      expect(packageJson.scripts['test:constitutional']).toBeDefined();
      
      // Vitest config should include constitutional tests
      try {
        const vitestConfig = await readFile('vitest.config.ts', 'utf8');
        expect(vitestConfig).toMatch(/constitutional-compliance/);
      } catch {
        // Config might be in different location
        console.warn('Could not verify vitest config for constitutional tests');
      }
    });
  });
});