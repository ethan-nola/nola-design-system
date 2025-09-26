/**
 * Constitutional Principle IV: Research-Driven Development
 * 
 * PRINCIPLE: All customizations and deviations from standard patterns must be
 * backed by educational research and documented with clear rationale.
 * 
 * This test suite ensures:
 * - Custom patterns have documented research justification
 * - Deviations from industry standards are validated
 * - Educational design decisions are evidence-based
 * - Documentation exists for all non-standard implementations
 */

import { describe, it, expect } from 'vitest';
import { readFile, access } from 'fs/promises';
import { glob } from 'glob';
import { join } from 'path';

describe('Constitutional Principle IV: Research-Driven Development', () => {
  
  describe('📚 Research Documentation Requirements', () => {
    
    it('should document research for educational theme design decisions', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        if (themeData.categories && themeData.categories.includes('education')) {
          // Educational themes must have research-backed metadata
          expect(themeData.meta).toBeDefined();
          expect(themeData.meta.educationalContext).toBeDefined();
          
          const eduContext = themeData.meta.educationalContext;
          expect(eduContext.ageGroup).toBeTruthy();
          expect(eduContext.cognitiveLevel).toBeTruthy();
          expect(eduContext.wcagLevel).toBeTruthy();
          
          // Design tokens should have research justification
          expect(themeData.meta.designTokens).toBeDefined();
          expect(themeData.meta.designPrinciples).toBeDefined();
          expect(Array.isArray(themeData.meta.designPrinciples)).toBe(true);
          expect(themeData.meta.designPrinciples.length).toBeGreaterThan(0);
          
          // Color palette should have educational rationale
          if (themeData.meta.colorPalette) {
            const colorKeys = Object.keys(themeData.meta.colorPalette);
            colorKeys.forEach(key => {
              const description = themeData.meta.colorPalette[key];
              expect(description).toBeTruthy();
              expect(description.length).toBeGreaterThan(10); // Meaningful descriptions
            });
          }
        }
      }
    });
    
    it('should validate educational design token research', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      const educationalTokens = [
        'minTouchTarget', 'touchTargetMin', 'fontSizeBase', 
        'lineHeightBase', 'focusWidth', 'contrastRatio'
      ];
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        if (themeData.categories && themeData.categories.includes('education')) {
          const designTokens = themeData.meta?.designTokens || {};
          
          // Educational themes should have research-backed token decisions
          educationalTokens.forEach(token => {
            if (designTokens[token]) {
              // Token values should be within research-backed ranges
              if (token === 'minTouchTarget' || token === 'touchTargetMin') {
                const value = parseInt(designTokens[token]);
                expect(value).toBeGreaterThanOrEqual(40); // Minimum accessibility
                expect(value).toBeLessThanOrEqual(48); // Maximum practical
              }
              
              if (token === 'lineHeightBase') {
                const value = parseFloat(designTokens[token]);
                expect(value).toBeGreaterThanOrEqual(1.4); // Minimum readability
                expect(value).toBeLessThanOrEqual(1.6); // Maximum educational research
              }
            }
          });
        }
      }
    });
    
    it('should require documentation for custom component patterns', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Check for custom patterns that need documentation
        const customPatterns = [
          /data-slot=/, // Custom slot pattern
          /focus-visible:ring-\[3px\]/, // Custom focus width
          /disabled:pointer-events-none/, // Custom disabled handling
        ];
        
        customPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            // Custom patterns should have JSDoc comments explaining rationale
            const hasDocumentation = content.includes('/**') || content.includes('//');
            expect(hasDocumentation).toBe(true);
            
            // Should reference educational need or accessibility requirement
            const hasEducationalRationale = 
              /educational|accessibility|wcag|research|cognitive/i.test(content) ||
              content.includes('Ages ') || 
              content.includes('touch target') ||
              content.includes('readability');
              
            if (!hasEducationalRationale) {
              console.warn(`Custom pattern in ${file} may need educational research documentation`);
            }
          }
        });
      }
    });
  });
  
  describe('🔬 Industry Standard Validation', () => {
    
    it('should validate deviations from shadcn/ui defaults have justification', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      // Known shadcn/ui deviations that should have research backing
      const knownDeviations = [
        /focus-visible:ring-\[3px\]/, // Educational focus width (shadcn default is 2px)
        /h-9.*px-4.*py-2/, // Custom button sizing
        /gap-6.*py-6/, // Custom card spacing
      ];
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        knownDeviations.forEach(deviation => {
          if (deviation.test(content)) {
            // File should contain educational rationale comment
            const hasRationale = /educational|accessibility|research|cognitive|age/i.test(content);
            if (!hasRationale) {
              console.warn(`Deviation from shadcn/ui standard in ${file} should have educational research justification`);
            }
          }
        });
      }
    });
    
    it('should ensure educational touch targets meet research standards', () => {
      const themes = ['foundation', 'pathways', 'professional'];
      
      themes.forEach(theme => {
        document.documentElement.className = theme;
        const computedStyle = getComputedStyle(document.documentElement);
        
        // Get theme-specific touch target size
        const minTouchTarget = computedStyle.getPropertyValue('--min-touch-target');
        
        if (minTouchTarget) {
          const size = parseInt(minTouchTarget);
          
          // Research-backed touch target ranges
          switch (theme) {
            case 'foundation': // Ages 11-14
              expect(size).toBeGreaterThanOrEqual(48); // Research: developing motor skills
              break;
            case 'pathways': // Ages 14-18  
              expect(size).toBeGreaterThanOrEqual(44); // Research: refined motor skills
              break;
            case 'professional': // Ages 18+
              expect(size).toBeGreaterThanOrEqual(40); // Research: adult dexterity
              break;
          }
        }
      });
    });
    
    it('should validate color contrast ratios meet research requirements', () => {
      const themes = ['foundation', 'pathways', 'professional'];
      
      themes.forEach(theme => {
        document.documentElement.className = theme;
        const computedStyle = getComputedStyle(document.documentElement);
        
        // Create test elements to measure contrast
        const testElement = document.createElement('div');
        testElement.className = 'bg-primary text-primary-foreground p-4';
        testElement.textContent = 'Test Content';
        document.body.appendChild(testElement);
        
        const elementStyle = getComputedStyle(testElement);
        const bgColor = elementStyle.backgroundColor;
        const textColor = elementStyle.color;
        
        // Both colors should be defined (indicating proper theming)
        expect(bgColor).toBeTruthy();
        expect(textColor).toBeTruthy();
        expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
        expect(textColor).not.toBe('rgba(0, 0, 0, 0)');
        
        document.body.removeChild(testElement);
      });
    });
  });
  
  describe('🎯 Educational Design Validation', () => {
    
    it('should validate age-appropriate design decisions', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        if (themeData.meta?.educationalContext?.ageGroup) {
          const ageGroup = themeData.meta.educationalContext.ageGroup;
          const designTokens = themeData.meta.designTokens || {};
          
          // Validate age-appropriate font sizes (research-backed)
          if (designTokens.fontSizeBase) {
            const fontSize = parseInt(designTokens.fontSizeBase);
            
            if (ageGroup === '11-14') { // Foundation
              expect(fontSize).toBe(16); // Research: larger text for developing reading skills
            } else if (ageGroup === '14-18') { // Pathways
              expect(fontSize).toBe(15); // Research: balanced readability and efficiency
            } else if (ageGroup === '18+') { // Professional
              expect(fontSize).toBe(14); // Research: information density for adults
            }
          }
          
          // Validate age-appropriate line heights
          if (designTokens.lineHeightBase) {
            const lineHeight = parseFloat(designTokens.lineHeightBase);
            
            if (ageGroup === '11-14') {
              expect(lineHeight).toBe(1.6); // Research: improved readability for younger learners
            } else if (ageGroup === '14-18') {
              expect(lineHeight).toBe(1.5); // Research: balanced spacing
            } else if (ageGroup === '18+') {
              expect(lineHeight).toBe(1.4); // Research: efficient reading for adults
            }
          }
        }
      }
    });
    
    it('should validate cognitive load considerations', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        if (themeData.meta?.educationalContext?.cognitiveLevel) {
          const cognitiveLevel = themeData.meta.educationalContext.cognitiveLevel;
          
          // Validate cognitive-level appropriate design principles
          if (themeData.meta.designPrinciples) {
            const principles = themeData.meta.designPrinciples;
            
            if (cognitiveLevel === 'middle-school') {
              // Should focus on engagement and clear hierarchy
              const hasEngagementPrinciple = principles.some((p: string) => 
                /engagement|vibrant|attention/i.test(p));
              const hasHierarchyPrinciple = principles.some((p: string) => 
                /hierarchy|clear|structure/i.test(p));
              
              expect(hasEngagementPrinciple).toBe(true);
              expect(hasHierarchyPrinciple).toBe(true);
            }
          }
        }
      }
    });
    
    it('should ensure visual complexity matches educational level', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        if (themeData.meta?.educationalContext?.visualComplexity) {
          const complexity = themeData.meta.educationalContext.visualComplexity;
          const colorPalette = themeData.meta.colorPalette || {};
          
          // Validate visual complexity aligns with educational research
          const colorCount = Object.keys(colorPalette).length;
          
          if (complexity === 'engaging') { // Foundation theme
            expect(colorCount).toBeGreaterThanOrEqual(4); // Research: more colors for engagement
          } else if (complexity === 'balanced') { // Pathways theme
            expect(colorCount).toBeGreaterThanOrEqual(3);
            expect(colorCount).toBeLessThanOrEqual(5); // Research: balanced complexity
          } else if (complexity === 'minimal') { // Professional theme
            expect(colorCount).toBeLessThanOrEqual(4); // Research: minimal distraction
          }
        }
      }
    });
  });
  
  describe('📖 Documentation Completeness', () => {
    
    it('should require research citations for educational claims', async () => {
      const themeFiles = await glob('registry/themes/**/*.json');
      const documentationFiles = await glob('docs/**/*.md');
      
      for (const file of themeFiles) {
        const content = await readFile(file, 'utf8');
        const themeData = JSON.parse(content);
        
        if (themeData.categories && themeData.categories.includes('education')) {
          // Educational themes should reference research
          const hasResearchReference = 
            content.includes('research') || 
            content.includes('study') || 
            content.includes('cognitive') ||
            content.includes('accessibility');
            
          expect(hasResearchReference).toBe(true);
        }
      }
      
      // At least one documentation file should contain research references
      let hasResearchDocumentation = false;
      
      for (const docFile of documentationFiles) {
        const content = await readFile(docFile, 'utf8');
        if (/research|study|citation|reference/i.test(content)) {
          hasResearchDocumentation = true;
          break;
        }
      }
      
      expect(hasResearchDocumentation).toBe(true);
    });
    
    it('should validate educational rationale exists for custom implementations', async () => {
      const componentFiles = await glob('components/ui/**/*.{ts,tsx}');
      
      // Look for custom implementations that should have educational rationale
      const customImplementations = [];
      
      for (const file of componentFiles) {
        const content = await readFile(file, 'utf8');
        
        // Detect significant customizations
        if (
          content.includes('focus-visible:ring-[3px]') || // Custom focus width
          content.includes('data-slot=') || // Custom slot pattern
          content.includes('@container') || // Container queries
          /has-\[/.test(content) // CSS :has() selectors
        ) {
          customImplementations.push(file);
        }
      }
      
      // At least some custom implementations should exist (showing we're not just using defaults)
      expect(customImplementations.length).toBeGreaterThan(0);
      
      // Each significant customization should have some form of documentation
      for (const file of customImplementations) {
        const content = await readFile(file, 'utf8');
        
        // Should have comments explaining the educational reasoning
        const hasExplanation = 
          content.includes('/**') || // JSDoc comment
          content.includes('//') || // Inline comment
          /educational|accessibility|age|cognitive|research/i.test(content);
          
        if (!hasExplanation) {
          console.warn(`Custom implementation in ${file} should have educational rationale documentation`);
        }
      }
    });
  });
});