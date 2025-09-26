#!/usr/bin/env bun
/**
 * Constitutional Compliance Pre-commit Hook
 * 
 * This script runs critical constitutional compliance checks before allowing commits.
 * It focuses on the most important principles to catch violations early.
 */

import { execSync } from 'child_process';
import { readFile } from 'fs/promises';
import { glob } from 'glob';

interface ViolationReport {
  principle: string;
  violations: string[];
  severity: 'critical' | 'warning' | 'info';
}

async function runConstitutionalChecks(): Promise<ViolationReport[]> {
  process.stderr.write('🏛️  Running constitutional compliance pre-commit checks...\n');
  
  const reports: ViolationReport[] = [];
  
  // Quick check for critical violations
  try {
    // Run only critical principles for speed
    const criticalPrinciples = ['III', 'V']; // Registry compliance & Quality
    
    for (const principle of criticalPrinciples) {
      try {
        execSync(`bun test tests/constitutional/principles/principle-${principle}.test.ts --run --reporter=basic`, {
          stdio: 'pipe',
          encoding: 'utf8'
        });
        
        process.stderr.write(`✅ Principle ${principle}: PASSED\n`);
      } catch {
        const violation: ViolationReport = {
          principle,
          violations: [`Principle ${principle} compliance check failed`],
          severity: 'critical'
        };
        
        reports.push(violation);
        process.stderr.write(`❌ Principle ${principle}: FAILED\n`);
      }
    }
    
    // Quick file-based checks for common violations
    await runQuickFileChecks(reports);
    
  } catch {
    reports.push({
      principle: 'System',
      violations: ['Failed to run constitutional compliance checks'],
      severity: 'critical'
    });
  }
  
  return reports;
}

async function runQuickFileChecks(reports: ViolationReport[]): Promise<void> {
  // Quick check for theme violations in app layer
  try {
    const appGlobals = await readFile('app/globals.css', 'utf8');
    
    const themeViolations = [];
    
    if (appGlobals.includes('.foundation {')) {
      themeViolations.push('Foundation theme CSS found in app/globals.css');
    }
    if (appGlobals.includes('.pathways {')) {
      themeViolations.push('Pathways theme CSS found in app/globals.css');
    }
    if (appGlobals.includes('.professional {')) {
      themeViolations.push('Professional theme CSS found in app/globals.css');
    }
    
    if (themeViolations.length > 0) {
      reports.push({
        principle: 'III',
        violations: themeViolations,
        severity: 'critical'
      });
    }
    
  } catch {
    console.warn('Could not check app/globals.css for theme violations');
  }
  
  // Quick check for quality violations
  try {
    const sourceFiles = await glob('components/**/*.{ts,tsx}');
    const qualityViolations = [];
    
    for (const file of sourceFiles.slice(0, 10)) { // Check first 10 files for speed
      const content = await readFile(file, 'utf8');
      
      if (content.includes('console.log(')) {
        qualityViolations.push(`Debug console.log found in ${file}`);
      }
      if (content.includes('// TODO') || content.includes('// FIXME')) {
        qualityViolations.push(`TODO/FIXME comment found in ${file}`);
      }
    }
    
    if (qualityViolations.length > 0) {
      reports.push({
        principle: 'V',
        violations: qualityViolations.slice(0, 3), // Limit to first 3
        severity: 'warning'
      });
    }
    
  } catch {
    console.warn('Could not run quick quality checks');
  }
}

function printReport(reports: ViolationReport[]): boolean {
  const criticalViolations = reports.filter(r => r.severity === 'critical');
  const warnings = reports.filter(r => r.severity === 'warning');
  
  if (criticalViolations.length === 0 && warnings.length === 0) {
    console.log('✅ Constitutional compliance verified - commit allowed');
    return true;
  }
  
  console.log('\\n🚨 Constitutional Compliance Issues Detected:\\n');
  
  if (criticalViolations.length > 0) {
    console.log('❌ CRITICAL VIOLATIONS (blocking commit):');
    criticalViolations.forEach(report => {
      console.log(`   Principle ${report.principle}:`);
      report.violations.forEach(violation => {
        console.log(`     • ${violation}`);
      });
    });
    console.log('');
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:');
    warnings.forEach(report => {
      console.log(`   Principle ${report.principle}:`);
      report.violations.forEach(violation => {
        console.log(`     • ${violation}`);
      });
    });
    console.log('');
  }
  
  if (criticalViolations.length > 0) {
    console.log('🛑 Commit blocked due to critical constitutional violations.');
    console.log('Please fix the issues above and try again.');
    console.log('');
    console.log('For help, run: bun run test:constitutional');
    return false;
  }
  
  if (warnings.length > 0) {
    console.log('⚠️  Commit allowed with warnings.');
    console.log('Consider addressing these issues in a follow-up commit.');
  }
  
  return true;
}

// Main execution
if (import.meta.main) {
  runConstitutionalChecks()
    .then(reports => {
      const canCommit = printReport(reports);
      process.exit(canCommit ? 0 : 1);
    })
    .catch(error => {
      console.error('❌ Constitutional compliance check failed:', error.message);
      process.exit(1);
    });
}

export { runConstitutionalChecks, printReport };