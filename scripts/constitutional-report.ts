#!/usr/bin/env bun
/**
 * Constitutional Compliance Reporting System
 * 
 * Generates comprehensive reports on constitutional compliance across all principles.
 * Provides actionable insights and violation tracking.
 */

import { execSync } from 'child_process';
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

interface PrincipleStatus {
  principle: string;
  name: string;
  status: 'PASS' | 'FAIL' | 'WARNING';
  testsRun: number;
  testsPassed: number;
  violations: string[];
  recommendations: string[];
}

interface ComplianceReport {
  timestamp: string;
  overallStatus: 'COMPLIANT' | 'NON_COMPLIANT' | 'WARNINGS';
  principles: PrincipleStatus[];
  summary: {
    totalTests: number;
    passedTests: number;
    failedTests: number;
    criticalViolations: number;
    warnings: number;
  };
}

const PRINCIPLE_NAMES = {
  'I': 'Upstream-First Component Architecture',
  'II': 'Theme-Component Separation', 
  'III': 'Registry Publishing Compliance',
  'IV': 'Research-Driven Development',
  'V': 'Quality-First Implementation'
};

async function generateComplianceReport(): Promise<ComplianceReport> {
  console.log('🏛️  Generating Constitutional Compliance Report...');
  
  const report: ComplianceReport = {
    timestamp: new Date().toISOString(),
    overallStatus: 'COMPLIANT',
    principles: [],
    summary: {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      criticalViolations: 0,
      warnings: 0
    }
  };
  
  // Test each constitutional principle
  for (const [principle, name] of Object.entries(PRINCIPLE_NAMES)) {
    console.log(`Testing Principle ${principle}: ${name}...`);
    
    const principleStatus = await testPrinciple(principle, name);
    report.principles.push(principleStatus);
    
    // Update summary
    report.summary.totalTests += principleStatus.testsRun;
    report.summary.passedTests += principleStatus.testsPassed;
    report.summary.failedTests += (principleStatus.testsRun - principleStatus.testsPassed);
    
    if (principleStatus.status === 'FAIL') {
      report.summary.criticalViolations += principleStatus.violations.length;
      report.overallStatus = 'NON_COMPLIANT';
    } else if (principleStatus.status === 'WARNING') {
      report.summary.warnings += principleStatus.violations.length;
      if (report.overallStatus === 'COMPLIANT') {
        report.overallStatus = 'WARNINGS';
      }
    }
  }
  
  return report;
}

async function testPrinciple(principle: string, name: string): Promise<PrincipleStatus> {
  const status: PrincipleStatus = {
    principle,
    name,
    status: 'PASS',
    testsRun: 0,
    testsPassed: 0,
    violations: [],
    recommendations: []
  };
  
  try {
    const output = execSync(
      `npx vitest run --project=constitutional-compliance tests/constitutional/principles/principle-${principle}.test.ts --reporter=verbose`, 
      { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
    );
    
    // Parse vitest output more accurately
    const lines = output.split('\n');
    
    // Count tests by looking for test result patterns
    const testResults = lines.filter(line => 
      line.includes(' ✓ ') || 
      line.includes(' × ') || 
      line.includes(' ❯ ')
    );
    
    const passedTests = lines.filter(line => line.includes(' ✓ ')).length;
    const failedTests = lines.filter(line => line.includes(' × ') || line.includes(' ❯ ')).length;
    
    status.testsRun = passedTests + failedTests;
    status.testsPassed = passedTests;
    
    if (failedTests === 0 && passedTests > 0) {
      status.status = 'PASS';
    } else if (passedTests > 0) {
      status.status = 'WARNING';
    } else {
      status.status = 'FAIL';
    }
    
    // Extract failure messages
    const failures = lines.filter(line => 
      line.includes(' × ') || 
      (line.includes('AssertionError') || line.includes('Error:'))
    ).slice(0, 3); // Limit to first 3
    
    status.violations = failures;
    
    // Add principle-specific recommendations
    status.recommendations = getPrincipleRecommendations(principle, status.status);
    
  } catch (error: any) {
    status.status = 'FAIL';
    status.violations.push(`Test execution failed: ${error.message || 'Unknown error'}`);
    status.recommendations.push(`Check test file: tests/constitutional/principles/principle-${principle}.test.ts`);
  }
  
  return status;
}

function getPrincipleRecommendations(principle: string, status: string): string[] {
  const recommendations: Record<string, string[]> = {
    'I': [
      'Ensure components use only CSS custom properties for theming',
      'Avoid hardcoded styling values in components',
      'Maintain compatibility with shadcn/ui ecosystem'
    ],
    'II': [
      'Remove any theme logic from component files',
      'Use CSS custom properties exclusively for theme values',
      'Ensure components work identically across all themes'
    ],
    'III': [
      'Move theme CSS out of app layer into registry structure',
      'Update registry.json to include theme files',
      'Test CLI installation of themes'
    ],
    'IV': [
      'Document research rationale for educational design decisions',
      'Add metadata to theme files explaining age-appropriate choices',
      'Create documentation linking design to educational research'
    ],
    'V': [
      'Remove TODO/FIXME comments and temporary workarounds',
      'Add comprehensive test coverage for components',
      'Ensure all code meets production quality standards'
    ]
  };
  
  const principleRecs = recommendations[principle] || [];
  
  if (status === 'FAIL') {
    return [
      `Address failing tests in Principle ${principle}`,
      ...principleRecs
    ];
  }
  
  return principleRecs;
}

async function generateMarkdownReport(report: ComplianceReport): Promise<string> {
  const statusEmoji = {
    'COMPLIANT': '✅',
    'NON_COMPLIANT': '❌', 
    'WARNINGS': '⚠️'
  };
  
  const principleEmoji = {
    'PASS': '✅',
    'FAIL': '❌',
    'WARNING': '⚠️'
  };
  
  let markdown = `# 🏛️ Constitutional Compliance Report

**Generated**: ${new Date(report.timestamp).toLocaleString()}  
**Overall Status**: ${statusEmoji[report.overallStatus]} ${report.overallStatus}

## Summary

- **Total Tests**: ${report.summary.totalTests}
- **Passed**: ${report.summary.passedTests}
- **Failed**: ${report.summary.failedTests}
- **Critical Violations**: ${report.summary.criticalViolations}
- **Warnings**: ${report.summary.warnings}

## Principle Compliance

`;

  for (const principle of report.principles) {
    markdown += `### ${principleEmoji[principle.status]} Principle ${principle.principle}: ${principle.name}

**Status**: ${principle.status}  
**Tests**: ${principle.testsPassed}/${principle.testsRun} passed

`;

    if (principle.violations.length > 0) {
      markdown += `**Violations**:
`;
      principle.violations.forEach(violation => {
        markdown += `- ${violation}\n`;
      });
      markdown += '\n';
    }
    
    if (principle.recommendations.length > 0) {
      markdown += `**Recommendations**:
`;
      principle.recommendations.forEach(rec => {
        markdown += `- ${rec}\n`;
      });
      markdown += '\n';
    }
  }
  
  markdown += `## Next Steps

`;
  
  if (report.overallStatus === 'NON_COMPLIANT') {
    markdown += `🚨 **Action Required**: Critical constitutional violations detected. Address the failing tests before proceeding.

1. Review the specific violations listed above
2. Fix the code issues identified by the tests
3. Run \`bun run test:constitutional\` to verify fixes
4. Commit changes only after achieving compliance

`;
  } else if (report.overallStatus === 'WARNINGS') {
    markdown += `⚠️ **Recommendations Available**: All critical tests pass, but some warnings were detected.

1. Review the recommendations above for potential improvements
2. Consider addressing warnings in upcoming development cycles
3. Continue monitoring compliance in future changes

`;
  } else {
    markdown += `✅ **Excellent**: All constitutional principles are fully compliant!

The NOLA Design System maintains architectural integrity across all principles:
- Components remain upstream-compatible
- Themes are properly separated from components  
- Registry publishing is compliant
- Implementations are research-driven
- Code quality standards are maintained

Continue following these principles in future development.

`;
  }
  
  markdown += `## About Constitutional Compliance

The NOLA Design System follows five constitutional principles to maintain architectural integrity and educational effectiveness:

1. **Upstream-First Component Architecture**: Maintain compatibility with shadcn/ui ecosystem
2. **Theme-Component Separation**: Complete isolation between themes and component logic
3. **Registry Publishing Compliance**: All themes distributed via standard registry system
4. **Research-Driven Development**: Educational decisions backed by research evidence
5. **Quality-First Implementation**: No temporary fixes or technical debt

For more information, see the [Constitutional Compliance Testing Plan](./CONSTITUTIONAL_COMPLIANCE_TESTING_PLAN.md).
`;

  return markdown;
}

// Main execution
if (import.meta.main) {
  generateComplianceReport()
    .then(async (report) => {
      // Generate markdown report
      const markdown = await generateMarkdownReport(report);
      await writeFile('CONSTITUTIONAL_COMPLIANCE_REPORT.md', markdown);
      
      // Output summary to console
      process.stderr.write(`\\n📊 Constitutional Compliance Report Generated\n`);
      process.stderr.write(`Overall Status: ${report.overallStatus}\n`);
      process.stderr.write(`Tests: ${report.summary.passedTests}/${report.summary.totalTests} passed\n`);
      
      if (report.summary.criticalViolations > 0) {
        process.stderr.write(`Critical Violations: ${report.summary.criticalViolations}\n`);
        process.exit(1);
      } else if (report.summary.warnings > 0) {
        process.stderr.write(`Warnings: ${report.summary.warnings}\n`);
        process.exit(0);
      } else {
        process.stderr.write('✅ Full constitutional compliance achieved!\n');
        process.exit(0);
      }
    })
    .catch(error => {
      console.error('❌ Failed to generate compliance report:', error.message);
      process.exit(1);
    });
}

export { generateComplianceReport, generateMarkdownReport };