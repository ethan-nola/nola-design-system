# 🏛️ Constitutional Compliance Report

**Generated**: 9/26/2025, 10:05:17 AM  
**Overall Status**: ❌ NON_COMPLIANT

## Summary

- **Total Tests**: 16
- **Passed**: 16
- **Failed**: 0
- **Critical Violations**: 4
- **Warnings**: 0

## Principle Compliance

### ❌ Principle I: Upstream-First Component Architecture

**Status**: FAIL  
**Tests**: 0/0 passed

**Violations**:
- Test execution failed: Command failed: npx vitest run --project=constitutional-compliance tests/constitutional/principles/principle-I.test.ts --reporter=verbose
No story files found for the specified pattern: registry/**/*.mdx

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 5 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-I.test.ts > Constitutional Principle I: Upstream-First Component Architecture > 🔒 Component Integrity Protection > should not modify core shadcn/ui component structure
AssertionError: expected '"use client";\n\nimport { ScrollArea …' not to match /className.*\[.*[0-9]+px.*\]/

[32m- Expected:[39m 
/className.*\[.*[0-9]+px.*\]/

[31m+ Received:[39m 
"\"use client\";

import { ScrollArea as ScrollAreaPrimitive } from \"radix-ui\";
import * as React from \"react\";

import { cn } from \"@/lib/utils\";

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot=\"scroll-area\"
      className={cn(\"relative\", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot=\"scroll-area-viewport\"
        className=\"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1\"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = \"vertical\",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot=\"scroll-area-scrollbar\"
      orientation={orientation}
      className={cn(
        \"flex touch-none p-px transition-colors select-none\",
        orientation === \"vertical\" &&
          \"h-full w-2.5 border-l border-l-transparent\",
        orientation === \"horizontal\" &&
          \"h-2.5 flex-col border-t border-t-transparent\",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot=\"scroll-area-thumb\"
        className=\"bg-border relative flex-1 rounded-full\"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
"

 ❯ tests/constitutional/principles/principle-I.test.ts:38:29
     36|         expect(content).not.toMatch(/style\s*=\s*\{[^}]*px[^}]*\}/); /…
     37|         expect(content).not.toMatch(/style\s*=\s*\{[^}]*#[0-9a-f]{6}[^…
     38|         expect(content).not.toMatch(/className.*\[.*[0-9]+px.*\]/); //…
       |                             ^
     39|         expect(content).not.toMatch(/className.*\[.*#[0-9a-f]{6}.*\]/i…
     40|       }

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/5]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-I.test.ts > Constitutional Principle I: Upstream-First Component Architecture > 🔒 Component Integrity Protection > should maintain CSS custom property usage only
AssertionError: expected [ 'bg-background', …(23) ] to include 'bg-foreground'
 ❯ tests/constitutional/principles/principle-I.test.ts:60:46
     58|                    'bg-card', 'text-card-foreground', 'bg-popover', 't…
     59|                    'border-border', 'border-input', 'border-ring', 'bo…
     60|                    'bg-input', 'text-ring']).toContain(colorRef);
       |                                              ^
     61|         });
     62|       }
 ❯ tests/constitutional/principles/principle-I.test.ts:53:25

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/5]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-I.test.ts > Constitutional Principle I: Upstream-First Component Architecture > 🔄 Upstream Ecosystem Compatibility > should maintain standard shadcn/ui export patterns
AssertionError: expected '"use client";\n\nimport * as React fr…' to match /export.*Table/

[32m- Expected:[39m 
/export.*Table/

[31m+ Received:[39m 
"\"use client\";

import * as React from \"react\";

import { cn } from \"@/lib/utils\";

function Table({ className, ...props }: React.ComponentProps<\"table\">) {
  return (
    <div
      data-slot=\"table-container\"
      className=\"relative w-full overflow-x-auto\"
    >
      <table
        data-slot=\"table\"
        className={cn(\"w-full caption-bottom text-sm\", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<\"thead\">) {
  return (
    <thead
      data-slot=\"table-header\"
      className={cn(\"[&_tr]:border-b\", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<\"tbody\">) {
  return (
    <tbody
      data-slot=\"table-body\"
      className={cn(\"[&_tr:last-child]:border-0\", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<\"tfoot\">) {
  return (
    <tfoot
      data-slot=\"table-footer\"
      className={cn(
        \"bg-muted/50 border-t font-medium [&>tr]:last:border-b-0\",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<\"tr\">) {
  return (
    <tr
      data-slot=\"table-row\"
      className={cn(
        \"hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors\",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<\"th\">) {
  return (
    <th
      data-slot=\"table-head\"
      className={cn(
        \"text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]\",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<\"td\">) {
  return (
    <td
      data-slot=\"table-cell\"
      className={cn(
        \"p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]\",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<\"caption\">) {
  return (
    <caption
      data-slot=\"table-caption\"
      className={cn(\"text-muted-foreground mt-4 text-sm\", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
"

 ❯ tests/constitutional/principles/principle-I.test.ts:100:25
     98|           part.charAt(0).toUpperCase() + part.slice(1)
     99|         ).join('');
    100|         expect(content).toMatch(new RegExp(`export.*${componentName}`)…
       |                         ^
    101|         
    102|         // No default exports (shadcn/ui pattern)

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/5]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-I.test.ts > Constitutional Principle I: Upstream-First Component Architecture > 🔄 Upstream Ecosystem Compatibility > should use standard dependency patterns
AssertionError: expected 'import { cn } from "@/lib/utils";\n\n…' to match /import \* as React from "react"/

[32m- Expected:[39m 
/import \* as React from "react"/

[31m+ Received:[39m 
"import { cn } from \"@/lib/utils\";

function Skeleton({ className, ...props }: React.ComponentProps<\"div\">) {
  return (
    <div
      data-slot=\"skeleton\"
      className={cn(\"bg-accent animate-pulse rounded-md\", className)}
      {...props}
    />
  );
}

export { Skeleton };
"

 ❯ tests/constitutional/principles/principle-I.test.ts:115:27
    113|         // Standard imports pattern (unless documented exception)
    114|         if (content.includes('React') && !content.includes('CONSTITUTI…
    115|           expect(content).toMatch(/import \* as React from "react"/);
       |                           ^
    116|         }
    117|         

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/5]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-I.test.ts > Constitutional Principle I: Upstream-First Component Architecture > 🎨 Theme-Agnostic Behavior Validation > should render consistently across all educational themes
TypeError: Cannot read properties of undefined (reading 'appendChild')
 ❯ tests/constitutional/principles/principle-I.test.ts:165:23
    163|         const button = document.createElement('button');
    164|         button.className = 'inline-flex items-center justify-center ro…
    165|         document.body.appendChild(button);
       |                       ^
    166|         
    167|         const computedStyle = getComputedStyle(button);
 ❯ tests/constitutional/principles/principle-I.test.ts:159:14

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/5]⎯



**Recommendations**:
- Check test file: tests/constitutional/principles/principle-I.test.ts

### ❌ Principle II: Theme-Component Separation

**Status**: FAIL  
**Tests**: 0/0 passed

**Violations**:
- Test execution failed: Command failed: npx vitest run --project=constitutional-compliance tests/constitutional/principles/principle-II.test.ts --reporter=verbose
No story files found for the specified pattern: registry/**/*.mdx

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-II.test.ts > Constitutional Principle II: Theme-Component Separation > 🚫 Theme Logic Prohibition in Components > should prevent hardcoded theme-specific styling
AssertionError: expected '"use client";\n\nimport { Tooltip as …' not to match /0\.75rem|0\.625rem|0\.5rem/

[32m- Expected:[39m 
/0\.75rem|0\.625rem|0\.5rem/

[31m+ Received:[39m 
"\"use client\";

import { Tooltip as TooltipPrimitive } from \"radix-ui\";
import * as React from \"react\";

import { cn } from \"@/lib/utils\";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot=\"tooltip-provider\"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot=\"tooltip\" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot=\"tooltip-trigger\" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot=\"tooltip-content\"
        sideOffset={sideOffset}
        className={cn(
          \"bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance\",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className=\"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_0.5rem)] rotate-45 rounded-sm\" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
"

 ❯ tests/constitutional/principles/principle-II.test.ts:79:29
     77|         // No hardcoded educational theme measurements
     78|         expect(content).not.toMatch(/48px|44px|40px/); // Educational …
     79|         expect(content).not.toMatch(/0\.75rem|0\.625rem|0\.5rem/); // …
       |                             ^
     80|         
     81|         // No theme-specific CSS-in-JS

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-II.test.ts > Constitutional Principle II: Theme-Component Separation > 🎨 CSS Custom Property Enforcement > should use only approved Tailwind token classes
AssertionError: expected [ 'background', 'foreground', …(30) ] to include 'top'
 ❯ tests/constitutional/principles/principle-II.test.ts:119:39
    117|           
    118|           // Only approved theme tokens should be used
    119|           expect(approvedColorTokens).toContain(tokenName);
       |                                       ^
    120|         });
    121|       }
 ❯ tests/constitutional/principles/principle-II.test.ts:111:22

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-II.test.ts > Constitutional Principle II: Theme-Component Separation > 🎨 CSS Custom Property Enforcement > should validate proper CSS custom property mapping
AssertionError: expected '' to be truthy

[32m- Expected:[39m 
true

[31m+ Received:[39m 
""

 ❯ tests/constitutional/principles/principle-II.test.ts:142:25
    140|         requiredTokens.forEach(token => {
    141|           const value = computedStyle.getPropertyValue(token);
    142|           expect(value).toBeTruthy();
       |                         ^
    143|           expect(value.trim()).not.toBe('');
    144|         });
 ❯ tests/constitutional/principles/principle-II.test.ts:140:24
 ❯ tests/constitutional/principles/principle-II.test.ts:127:14

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-II.test.ts > Constitutional Principle II: Theme-Component Separation > 🎨 CSS Custom Property Enforcement > should prevent direct CSS value usage in components
AssertionError: expected '"use client";\n\nimport { cva, type V…' not to match /\[\d+px\]|\[\d+rem\]|\[\d+em\]/

[32m- Expected:[39m 
/\[\d+px\]|\[\d+rem\]|\[\d+em\]/

[31m+ Received:[39m 
"\"use client\";

import { cva, type VariantProps } from \"class-variance-authority\";
import { Toggle as TogglePrimitive } from \"radix-ui\";
import * as React from \"react\";

import { cn } from \"@/lib/utils\";

const toggleVariants = cva(
  \"hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4\",
  {
    variants: {
      variant: {
        default: \"bg-transparent\",
        outline:
          \"border-input hover:bg-accent hover:text-accent-foreground border bg-transparent shadow-xs\",
      },
      size: {
        default: \"h-9 min-w-9 px-2\",
        sm: \"h-8 min-w-8 px-1.5\",
        lg: \"h-10 min-w-10 px-2.5\",
      },
    },
    defaultVariants: {
      variant: \"default\",
      size: \"default\",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot=\"toggle\"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
"

 ❯ tests/constitutional/principles/principle-II.test.ts:164:29
    162|         
    163|         // No hardcoded dimension values
    164|         expect(content).not.toMatch(/\[\d+px\]|\[\d+rem\]|\[\d+em\]/);
       |                             ^
    165|       }
    166|     });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-II.test.ts > Constitutional Principle II: Theme-Component Separation > 🔄 Theme Switching Independence > should maintain component behavior across theme changes
TypeError: Cannot read properties of undefined (reading 'appendChild')
 ❯ tests/constitutional/principles/principle-II.test.ts:179:21
    177|       testButton.textContent = 'Test Button';
    178|       testButton.onclick = () => { /* test click handler */ };
    179|       document.body.appendChild(testButton);
       |                     ^
    180|       
    181|       const originalHandler = testButton.onclick;

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-II.test.ts > Constitutional Principle II: Theme-Component Separation > 🔄 Theme Switching Independence > should ensure component state is theme-independent
TypeError: Cannot read properties of undefined (reading 'appendChild')
 ❯ tests/constitutional/principles/principle-II.test.ts:210:21
    208|       input.value = 'test value';
    209|       input.className = 'border border-input bg-background text-foregr…
    210|       document.body.appendChild(input);
       |                     ^
    211|       
    212|       const originalValue = input.value;

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯



**Recommendations**:
- Check test file: tests/constitutional/principles/principle-II.test.ts

### ✅ Principle III: Registry Publishing Compliance

**Status**: PASS  
**Tests**: 16/16 passed

**Recommendations**:
- Move theme CSS out of app layer into registry structure
- Update registry.json to include theme files
- Test CLI installation of themes

### ❌ Principle IV: Research-Driven Development

**Status**: FAIL  
**Tests**: 0/0 passed

**Violations**:
- Test execution failed: Command failed: npx vitest run --project=constitutional-compliance tests/constitutional/principles/principle-IV.test.ts --reporter=verbose
No story files found for the specified pattern: registry/**/*.mdx
stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/toggle.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/textarea.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/tabs.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/switch.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/select.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/scroll-area.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/radio-group.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/navigation-menu.tsx should have educational research justification
Deviation from shadcn/ui standard in components/ui/navigation-menu.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/input.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/checkbox.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/card.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/button.tsx should have educational research justification
Deviation from shadcn/ui standard in components/ui/button.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/badge.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate deviations from shadcn/ui defaults have justification
Deviation from shadcn/ui standard in components/ui/accordion.tsx should have educational research justification

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/tooltip.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/toggle.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/toggle-group.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/textarea.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/tabs.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/table.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/switch.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/slider.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/skeleton.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/sheet.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/separator.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/select.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/scroll-area.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/resizable.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/radio-group.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/progress.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/popover.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/navigation-menu.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/menubar.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/label.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/input.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/input-otp.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/hover-card.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/dropdown-menu.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/drawer.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/dialog.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/context-menu.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/command.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/collapsible.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/checkbox.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/carousel.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/card.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/calendar.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/button.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/badge.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/aspect-ratio.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/alert.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/alert-dialog.tsx should have educational rationale documentation

stderr | tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📖 Documentation Completeness > should validate educational rationale exists for custom implementations
Custom implementation in components/ui/accordion.tsx should have educational rationale documentation


⎯⎯⎯⎯⎯⎯⎯ Failed Tests 2 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 📚 Research Documentation Requirements > should require documentation for custom component patterns
AssertionError: expected false to be true // Object.is equality

[32m- Expected[39m
[31m+ Received[39m

[32m- true[39m
[31m+ false[39m

 ❯ tests/constitutional/principles/principle-IV.test.ts:111:38
    109|             // Custom patterns should have JSDoc comments explaining r…
    110|             const hasDocumentation = content.includes('/**') || conten…
    111|             expect(hasDocumentation).toBe(true);
       |                                      ^
    112|             
    113|             // Should reference educational need or accessibility requ…
 ❯ tests/constitutional/principles/principle-IV.test.ts:107:24

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/2]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-IV.test.ts > Constitutional Principle IV: Research-Driven Development > 🔬 Industry Standard Validation > should validate color contrast ratios meet research requirements
TypeError: Cannot read properties of undefined (reading 'appendChild')
 ❯ tests/constitutional/principles/principle-IV.test.ts:196:23
    194|         testElement.className = 'bg-primary text-primary-foreground p-…
    195|         testElement.textContent = 'Test Content';
    196|         document.body.appendChild(testElement);
       |                       ^
    197|         
    198|         const elementStyle = getComputedStyle(testElement);
 ❯ tests/constitutional/principles/principle-IV.test.ts:188:14

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/2]⎯



**Recommendations**:
- Check test file: tests/constitutional/principles/principle-IV.test.ts

### ❌ Principle V: Quality-First Implementation

**Status**: FAIL  
**Tests**: 0/0 passed

**Violations**:
- Test execution failed: Command failed: npx vitest run --project=constitutional-compliance tests/constitutional/principles/principle-V.test.ts --reporter=verbose
No story files found for the specified pattern: registry/**/*.mdx
stderr | tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚫 Anti-Hack & Anti-Workaround Detection > should reject temporary workarounds and quick fixes
Quality violations found:
  THEME_REGISTRY_ARCHITECTURE_PLAN.md: workaround
  STORYBOOK_SOLUTION_ANALYSIS.md: workaround
  CONSTITUTIONAL_COMPLIANCE_REPORT.md: // TODO, TODO
  CONSTITUTIONAL_COMPLIANCE_REPORT.md: Workaround
  CONSTITUTIONAL_COMPLIANCE_REPORT.md: quick fix
  CONSTITUTIONAL_COMPLIANCE_REPORT.md: temporary fix, fix
  CONSTITUTIONAL_COMPLIANCE_REPORT.md: old-
  CONSTITUTIONAL_COMPLIANCE_REPORT.md: console.log(
  tests/css-tokens.test.ts: old-
  scripts/constitutional-report.ts: workaround
  scripts/constitutional-report.ts: temporary fix, fix
  scripts/constitutional-report.ts: console.log(
  scripts/constitutional-pre-commit.ts: // TODO, TODO
  scripts/constitutional-pre-commit.ts: console.log(
  specs/001-we-should-create/contracts/theme-api.md: old-
  registry/themes/professional-theme/professional.css: old-

stderr | tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚀 Production Readiness > should ensure all components are performance optimized
components/ui/table.tsx is large (2464 chars) - consider splitting

$ storybook build
unable to find package.json for radix-ui
No story files found for the specified pattern: registry/**/*.mdx
components/ui/aspect-ratio.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/aspect-ratio.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/aspect-ratio.tsx" was ignored.
components/ui/label.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/label.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/label.tsx" was ignored.
components/ui/table.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/table.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/table.tsx" was ignored.
components/ui/alert-dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/alert-dialog.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/alert-dialog.tsx" was ignored.
components/ui/accordion.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/accordion.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/accordion.tsx" was ignored.
components/ui/checkbox.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/checkbox.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/checkbox.tsx" was ignored.
components/ui/avatar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/avatar.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/avatar.tsx" was ignored.
components/ui/calendar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/calendar.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/calendar.tsx" was ignored.
components/ui/collapsible.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/collapsible.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/collapsible.tsx" was ignored.
components/ui/carousel.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/carousel.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/carousel.tsx" was ignored.
components/ui/command.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/command.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/command.tsx" was ignored.
components/ui/chart.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/chart.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/chart.tsx" was ignored.
components/ui/drawer.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/drawer.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/drawer.tsx" was ignored.
components/ui/input-otp.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/input-otp.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/input-otp.tsx" was ignored.
components/ui/popover.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/popover.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/popover.tsx" was ignored.
components/ui/dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dialog.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/dialog.tsx" was ignored.
components/ui/context-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/context-menu.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/context-menu.tsx" was ignored.
components/ui/dropdown-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dropdown-menu.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/dropdown-menu.tsx" was ignored.
components/ui/form.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/form.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/form.tsx" was ignored.
components/ui/hover-card.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/hover-card.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/hover-card.tsx" was ignored.
components/ui/resizable.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/resizable.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/resizable.tsx" was ignored.
components/ui/radio-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/radio-group.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/radio-group.tsx" was ignored.
components/ui/progress.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/progress.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/progress.tsx" was ignored.
components/ui/scroll-area.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/scroll-area.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/scroll-area.tsx" was ignored.
components/ui/select.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/select.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/select.tsx" was ignored.
components/ui/separator.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/separator.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/separator.tsx" was ignored.
components/ui/menubar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/menubar.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/menubar.tsx" was ignored.
node_modules/sonner/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/sonner/dist/index.mjs" was ignored.
components/ui/switch.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/switch.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/switch.tsx" was ignored.
components/ui/sonner.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sonner.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/sonner.tsx" was ignored.
components/ui/toggle-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle-group.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/toggle-group.tsx" was ignored.
components/ui/tooltip.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tooltip.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/tooltip.tsx" was ignored.
components/ui/toggle.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/toggle.tsx" was ignored.
components/ui/tabs.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tabs.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/tabs.tsx" was ignored.
components/ui/sheet.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sheet.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/sheet.tsx" was ignored.
components/ui/sidebar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sidebar.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/sidebar.tsx" was ignored.
components/ui/slider.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/slider.tsx (1:0): Module level directives cause errors when bundled, "use client" in "components/ui/slider.tsx" was ignored.
node_modules/cmdk/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/cmdk/dist/index.mjs" was ignored.
node_modules/next-themes/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/next-themes/dist/index.mjs" was ignored.
node_modules/vaul/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/vaul/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-accordion/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-accordion/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-alert-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-alert-dialog/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-avatar/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-avatar/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-collapsible/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-collapsible/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-context-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-context-menu/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-checkbox/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-checkbox/dist/index.mjs" was ignored.
node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-label/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-label/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-hover-card/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-hover-card/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-form/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-form/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-menubar/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-menubar/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-navigation-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-navigation-menu/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-portal/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-portal/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-popover/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-popover/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-progress/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-progress/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-radio-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-radio-group/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-scroll-area/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-scroll-area/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-select/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-select/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-switch/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-switch/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-tabs/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-tabs/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-toggle/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-toggle/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-slider/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-slider/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-toast/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-toast/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-toggle-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-toggle-group/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-toolbar/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-toolbar/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-tooltip/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-tooltip/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-dialog/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-collection/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-collection/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-presence/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-menu/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-focus-scope/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-focus-scope/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-focus-guards/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-popper/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-popper/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-roving-focus/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-roving-focus/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, "use client" in "node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs" was ignored.
✗ Build failed in 7.01s
[38;2;241;97;97m=> Failed to build the preview[39m
registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx (1:7): "default" is not exported by "virtual:next/image", imported by "registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx".
file: ./registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx:1:7

1: import Image from "next/image";
          ^
2: // Replace nextjs-vite with the name of your framework
3: import type { Meta, StoryObj } from "@storybook/nextjs-vite";

    at getRollupError (file://./node_modules/rollup/dist/es/shared/parseAst.js:400:41)
    at error (file://./node_modules/rollup/dist/es/shared/parseAst.js:396:42)
    at Module.error (file://./node_modules/rollup/dist/es/shared/node-entry.js:16788:16)
    at Module.traceVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:17237:29)
    at ModuleScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:14893:39)
    at ReturnValueScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at FunctionBodyScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at Identifier.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:5391:40)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:2782:28)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:11978:15)
error: script "build-storybook" exited with code 1

⎯⎯⎯⎯⎯⎯⎯ Failed Tests 9 ⎯⎯⎯⎯⎯⎯⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚫 Anti-Hack & Anti-Workaround Detection > should reject temporary workarounds and quick fixes
AssertionError: expected 16 to be +0 // Object.is equality

[32m- Expected[39m
[31m+ Received[39m

[32m- 0[39m
[31m+ 16[39m

 ❯ tests/constitutional/principles/principle-V.test.ts:85:37
     83|       }
     84|       
     85|       expect(realViolations.length).toBe(0);
       |                                     ^
     86|     });
     87|     

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚫 Anti-Hack & Anti-Workaround Detection > should prevent commented-out code blocks
AssertionError: expected 1 to be +0 // Object.is equality

[32m- Expected[39m
[31m+ Received[39m

[32m- 0[39m
[31m+ 1[39m

 ❯ tests/constitutional/principles/principle-V.test.ts:101:42
     99|         const consecutiveComments = content.match(/^(\s*\/\/.*\n){3,}/…
    100|         
    101|         expect(longCommentBlocks.length).toBe(0);
       |                                          ^
    102|         expect(consecutiveComments.length).toBe(0);
    103|       }

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚫 Anti-Hack & Anti-Workaround Detection > should prevent magic numbers and undocumented constants
AssertionError: expected 6 to be less than 5
 ❯ tests/constitutional/principles/principle-V.test.ts:126:37
    124|         
    125|         // Magic numbers should be rare (indicating they're documented…
    126|         expect(magicNumbers.length).toBeLessThan(5);
       |                                     ^
    127|       }
    128|     });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 📊 Test Coverage Standards > should validate test file quality
AssertionError: expected 6 to be greater than 20
 ❯ tests/constitutional/principles/principle-V.test.ts:183:31
    181|         
    182|         testMatches.forEach(test => {
    183|           expect(test.length).toBeGreaterThan(20); // Meaningful test …
       |                               ^
    184|         });
    185|       }
 ❯ tests/constitutional/principles/principle-V.test.ts:182:21

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🔧 Code Quality Standards > should enforce consistent code style
AssertionError: expected '/**\n * Constitutional Principle V: Q…' to match /import \* as React from ["']react["']/

[32m- Expected:[39m 
/import \* as React from ["']react["']/

[31m+ Received:[39m 
"/**
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
        /\\/\\/\\s*(TODO|FIXME|HACK|TEMP|TEMPORARY|QUICK.*FIX|BAND.*AID)/i,
        /\\/\\*\\s*(TODO|FIXME|HACK|TEMP|TEMPORARY|QUICK.*FIX|BAND.*AID)/i,
        
        // Code smell patterns
        /workaround/i,
        /quick\\s*fix/i,
        /temporary\\s*(solution|fix|implementation)/i,
        /band\\s*aid/i,
        /dirty\\s*hack/i,
        
        // File naming anti-patterns
        /\\.temp\\.|\\.tmp\\.|\\.backup\\.|\\.old\\./,
        /temp-|tmp-|backup-|old-/,
        
        // Debugging artifacts
        /console\\.log\\(/,
        /debugger\\s*;/,
        /alert\\(/,
      ];
      
      const violations = [];
      
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
        const commentBlocks = content.match(/\\/\\*[\\s\\S]*?\\*\\//g) || [];
        const longCommentBlocks = commentBlocks.filter(block => block.length > 200);
        
        // Look for multiple consecutive commented lines (code that was commented out)
        const consecutiveComments = content.match(/^(\\s*\\/\\/.*\\n){3,}/gm) || [];
        
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
        
        const numberMatches = content.match(/\\b\\d{2,}\\b/g) || [];
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
        .map(path => path.split('/').pop()?.replace(/\\.tsx?$/, ''))
        .filter(Boolean);
      
      // Extract story names from stories directory
      const storyNames = stories
        .map(path => path.split('/').pop()?.replace(/\\.stories\\.tsx$/, ''))
        .filter(Boolean);
      
      // Most UI components should have stories
      const componentsWithoutStories = componentNames.filter(comp => 
        !storyNames.some(story => story.includes(comp))
      );
      
      // Allow some utility/primitive components to not have stories
      const allowedWithoutStories = ['index', 'utils', 'types'];
      const realMissingStories = componentsWithoutStories.filter(comp => 
        !allowedWithoutStories.includes(comp)
      );
      
      expect(realMissingStories.length).toBeLessThan(5);
    });
    
    it('should validate test file quality', async () => {
      const testFiles = await glob('tests/**/*.test.{ts,tsx}');
      
      expect(testFiles.length).toBeGreaterThan(0);
      
      for (const file of testFiles) {
        const content = await readFile(file, 'utf8');
        
        // Test files should have proper structure
        expect(content).toMatch(/describe\\(/); // At least one describe block
        expect(content).toMatch(/it\\(|test\\(/); // At least one test
        expect(content).toMatch(/expect\\(/); // At least one assertion
        
        // Test descriptions should be meaningful
        const describeMatches = content.match(/describe\\(['\"`](.*?)['\"`]/g) || [];
        const testMatches = content.match(/it\\(['\"`](.*?)['\"`]/g) || [];
        
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
        .map(file => file.match(/principle-([IVX]+)\\.test\\.ts$/)?.[1])
        .filter(Boolean);
      
      expectedPrinciples.forEach(principle => {
        expect(existingPrinciples).toContain(principle);
      });
      
      // Each constitutional test should be comprehensive
      for (const file of constitutionalTests) {
        const content = await readFile(file, 'utf8');
        
        // Should have multiple test categories
        const describeBlocks = content.match(/describe\\(/g) || [];
        expect(describeBlocks.length).toBeGreaterThanOrEqual(3);
        
        // Should have meaningful test coverage
        const testBlocks = content.match(/it\\(|test\\(/g) || [];
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
            expect(content).toMatch(/import \\* as React from [\"']react[\"']/);
          }
          
          // Internal imports should use absolute paths
          const internalImports = content.match(/import.*from [\"']@\\//g) || [];
          const relativeImports = content.match(/import.*from [\"']\\.\\//g) || [];
          
          // Prefer absolute imports for better maintainability
          if (internalImports.length > 0 && relativeImports.length > internalImports.length) {
            console.warn(`${file} has more relative imports than absolute imports`);
          }
        }
        
        // TypeScript best practices
        if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          // Avoid 'any' type
          const anyUsages = content.match(/:\\s*any\\b/g) || [];
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
        expect(content).toMatch(/React\\.(ComponentProps|HTMLAttributes|FC|Component)/);
        
        // Components should handle props properly
        expect(content).toMatch(/\\.\\.\\.(props|rest)/);
        
        // Components should use proper class name handling
        if (content.includes('className')) {
          expect(content).toMatch(/cn\\(/);
        }
        
        // Components should have proper exports (no default exports)
        expect(content).not.toMatch(/export default/);
        expect(content).toMatch(/export \\{/);
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
        expect(content).not.toMatch(/useEffect\\(\\s*\\(\\)\\s*=>/); // Missing dependency arrays
        expect(content).not.toMatch(/onClick=\\{.*\\(\\)\\s*=>/); // Inline function creation
        
        // Components should use proper memoization when needed
        if (content.includes('useMemo') || content.includes('useCallback')) {
          // Should have proper dependency arrays
          expect(content).toMatch(/,\\s*\\[.*\\]\\s*\\)/);
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
});"

 ❯ tests/constitutional/principles/principle-V.test.ts:228:29
    226|           // React imports should be consistent
    227|           if (content.includes('import React') || content.includes('im…
    228|             expect(content).toMatch(/import \* as React from ["']react…
       |                             ^
    229|           }
    230|           

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🔧 Code Quality Standards > should maintain proper component architecture
AssertionError: expected '"use client";\n\nimport { useTheme } …' to match /React\.(ComponentProps|HTMLAttributes…/

[32m- Expected:[39m 
/React\.(ComponentProps|HTMLAttributes|FC|Component)/

[31m+ Received:[39m 
"\"use client\";

import { useTheme } from \"next-themes\";
import { Toaster as Sonner, ToasterProps } from \"sonner\";

/**
 * CONSTITUTIONAL EXCEPTION: This component uses useTheme as an approved exception
 * because Sonner (third-party toast library) requires explicit theme prop.
 * All custom styling still uses CSS custom properties for theme separation.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = \"system\" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps[\"theme\"]}
      className=\"toaster group\"
      style={
        {
          \"--normal-bg\": \"var(--popover)\",
          \"--normal-text\": \"var(--popover-foreground)\",
          \"--normal-border\": \"var(--border)\",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
"

 ❯ tests/constitutional/principles/principle-V.test.ts:266:25
    264|         
    265|         // Components should be properly typed
    266|         expect(content).toMatch(/React\.(ComponentProps|HTMLAttributes…
       |                         ^
    267|         
    268|         // Components should handle props properly

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚀 Production Readiness > should ensure all components are performance optimized
AssertionError: expected '"use client";\n\nimport { Slider as S…' to match /,\s*\[.*\]\s*\)/

[32m- Expected:[39m 
/,\s*\[.*\]\s*\)/

[31m+ Received:[39m 
"\"use client\";

import { Slider as SliderPrimitive } from \"radix-ui\";
import * as React from \"react\";

import { cn } from \"@/lib/utils\";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot=\"slider\"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        \"relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col\",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot=\"slider-track\"
        className={cn(
          \"bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5\",
        )}
      >
        <SliderPrimitive.Range
          data-slot=\"slider-range\"
          className={cn(
            \"bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full\",
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot=\"slider-thumb\"
          key={index}
          className=\"border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50\"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
"

 ❯ tests/constitutional/principles/principle-V.test.ts:322:27
    320|         if (content.includes('useMemo') || content.includes('useCallba…
    321|           // Should have proper dependency arrays
    322|           expect(content).toMatch(/,\s*\[.*\]\s*\)/);
       |                           ^
    323|         }
    324|         

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[7/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚀 Production Readiness > should validate accessibility standards
AssertionError: expected false to be true // Object.is equality

[32m- Expected[39m
[31m+ Received[39m

[32m- true[39m
[31m+ false[39m

 ❯ tests/constitutional/principles/principle-V.test.ts:359:35
    357|             content.includes('id');
    358|             
    359|           expect(hasLabelSupport).toBe(true);
       |                                   ^
    360|         }
    361|       }

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[8/9]⎯

 FAIL  |constitutional-compliance| tests/constitutional/principles/principle-V.test.ts > Constitutional Principle V: Quality-First Implementation > 🚀 Production Readiness > should ensure build system quality
AssertionError: expected Error: Command failed: bun run build-stor… { …(6) } to be null

[32m- Expected:[39m 
null

[31m+ Received:[39m 
Error {
  "message": "Command failed: bun run build-storybook
$ storybook build
unable to find package.json for radix-ui
No story files found for the specified pattern: registry/**/*.mdx
components/ui/aspect-ratio.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/aspect-ratio.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/aspect-ratio.tsx\" was ignored.
components/ui/label.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/label.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/label.tsx\" was ignored.
components/ui/table.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/table.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/table.tsx\" was ignored.
components/ui/alert-dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/alert-dialog.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/alert-dialog.tsx\" was ignored.
components/ui/accordion.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/accordion.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/accordion.tsx\" was ignored.
components/ui/checkbox.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/checkbox.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/checkbox.tsx\" was ignored.
components/ui/avatar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/avatar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/avatar.tsx\" was ignored.
components/ui/calendar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/calendar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/calendar.tsx\" was ignored.
components/ui/collapsible.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/collapsible.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/collapsible.tsx\" was ignored.
components/ui/carousel.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/carousel.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/carousel.tsx\" was ignored.
components/ui/command.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/command.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/command.tsx\" was ignored.
components/ui/chart.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/chart.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/chart.tsx\" was ignored.
components/ui/drawer.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/drawer.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/drawer.tsx\" was ignored.
components/ui/input-otp.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/input-otp.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/input-otp.tsx\" was ignored.
components/ui/popover.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/popover.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/popover.tsx\" was ignored.
components/ui/dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dialog.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/dialog.tsx\" was ignored.
components/ui/context-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/context-menu.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/context-menu.tsx\" was ignored.
components/ui/dropdown-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dropdown-menu.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/dropdown-menu.tsx\" was ignored.
components/ui/form.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/form.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/form.tsx\" was ignored.
components/ui/hover-card.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/hover-card.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/hover-card.tsx\" was ignored.
components/ui/resizable.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/resizable.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/resizable.tsx\" was ignored.
components/ui/radio-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/radio-group.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/radio-group.tsx\" was ignored.
components/ui/progress.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/progress.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/progress.tsx\" was ignored.
components/ui/scroll-area.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/scroll-area.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/scroll-area.tsx\" was ignored.
components/ui/select.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/select.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/select.tsx\" was ignored.
components/ui/separator.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/separator.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/separator.tsx\" was ignored.
components/ui/menubar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/menubar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/menubar.tsx\" was ignored.
node_modules/sonner/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/sonner/dist/index.mjs\" was ignored.
components/ui/switch.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/switch.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/switch.tsx\" was ignored.
components/ui/sonner.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sonner.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sonner.tsx\" was ignored.
components/ui/toggle-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle-group.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/toggle-group.tsx\" was ignored.
components/ui/tooltip.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tooltip.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/tooltip.tsx\" was ignored.
components/ui/toggle.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/toggle.tsx\" was ignored.
components/ui/tabs.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tabs.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/tabs.tsx\" was ignored.
components/ui/sheet.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sheet.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sheet.tsx\" was ignored.
components/ui/sidebar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sidebar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sidebar.tsx\" was ignored.
components/ui/slider.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/slider.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/slider.tsx\" was ignored.
node_modules/cmdk/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/cmdk/dist/index.mjs\" was ignored.
node_modules/next-themes/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/next-themes/dist/index.mjs\" was ignored.
node_modules/vaul/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/vaul/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-accordion/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-accordion/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-alert-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-alert-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-avatar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-avatar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-collapsible/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-collapsible/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-context-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-context-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-checkbox/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-checkbox/dist/index.mjs\" was ignored.
node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-label/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-label/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-hover-card/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-hover-card/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-form/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-form/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-menubar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-menubar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-navigation-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-navigation-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-portal/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-portal/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-popover/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-popover/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-progress/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-progress/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-radio-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-radio-group/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-scroll-area/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-scroll-area/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-select/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-select/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-switch/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-switch/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-tabs/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-tabs/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toggle/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toggle/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-slider/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-slider/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toast/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toast/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toggle-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toggle-group/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toolbar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toolbar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-tooltip/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-tooltip/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-collection/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-collection/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-presence/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-focus-scope/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-focus-scope/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-focus-guards/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-popper/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-popper/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-roving-focus/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-roving-focus/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs\" was ignored.
✗ Build failed in 7.01s
[38;2;241;97;97m=> Failed to build the preview[39m
registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx (1:7): \"default\" is not exported by \"virtual:next/image\", imported by \"registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx\".
file: ./registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx:1:7

1: import Image from \"next/image\";
          ^
2: // Replace nextjs-vite with the name of your framework
3: import type { Meta, StoryObj } from \"@storybook/nextjs-vite\";

    at getRollupError (file://./node_modules/rollup/dist/es/shared/parseAst.js:400:41)
    at error (file://./node_modules/rollup/dist/es/shared/parseAst.js:396:42)
    at Module.error (file://./node_modules/rollup/dist/es/shared/node-entry.js:16788:16)
    at Module.traceVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:17237:29)
    at ModuleScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:14893:39)
    at ReturnValueScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at FunctionBodyScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at Identifier.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:5391:40)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:2782:28)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:11978:15)
error: script \"build-storybook\" exited with code 1
",
  "status": 1,
  "signal": null,
  "output": [
    null,
    "storybook v9.1.8

info => Cleaning outputDir: storybook-static
info => Loading presets
info => Building manager..
info => Building preview..
info Using tsconfig paths for react-docgen
vite v6.3.5 building for production...
transforming...
✓ 3533 modules transformed.
",
    "$ storybook build
unable to find package.json for radix-ui
No story files found for the specified pattern: registry/**/*.mdx
components/ui/aspect-ratio.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/aspect-ratio.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/aspect-ratio.tsx\" was ignored.
components/ui/label.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/label.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/label.tsx\" was ignored.
components/ui/table.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/table.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/table.tsx\" was ignored.
components/ui/alert-dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/alert-dialog.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/alert-dialog.tsx\" was ignored.
components/ui/accordion.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/accordion.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/accordion.tsx\" was ignored.
components/ui/checkbox.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/checkbox.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/checkbox.tsx\" was ignored.
components/ui/avatar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/avatar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/avatar.tsx\" was ignored.
components/ui/calendar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/calendar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/calendar.tsx\" was ignored.
components/ui/collapsible.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/collapsible.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/collapsible.tsx\" was ignored.
components/ui/carousel.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/carousel.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/carousel.tsx\" was ignored.
components/ui/command.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/command.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/command.tsx\" was ignored.
components/ui/chart.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/chart.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/chart.tsx\" was ignored.
components/ui/drawer.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/drawer.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/drawer.tsx\" was ignored.
components/ui/input-otp.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/input-otp.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/input-otp.tsx\" was ignored.
components/ui/popover.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/popover.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/popover.tsx\" was ignored.
components/ui/dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dialog.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/dialog.tsx\" was ignored.
components/ui/context-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/context-menu.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/context-menu.tsx\" was ignored.
components/ui/dropdown-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dropdown-menu.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/dropdown-menu.tsx\" was ignored.
components/ui/form.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/form.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/form.tsx\" was ignored.
components/ui/hover-card.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/hover-card.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/hover-card.tsx\" was ignored.
components/ui/resizable.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/resizable.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/resizable.tsx\" was ignored.
components/ui/radio-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/radio-group.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/radio-group.tsx\" was ignored.
components/ui/progress.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/progress.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/progress.tsx\" was ignored.
components/ui/scroll-area.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/scroll-area.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/scroll-area.tsx\" was ignored.
components/ui/select.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/select.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/select.tsx\" was ignored.
components/ui/separator.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/separator.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/separator.tsx\" was ignored.
components/ui/menubar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/menubar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/menubar.tsx\" was ignored.
node_modules/sonner/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/sonner/dist/index.mjs\" was ignored.
components/ui/switch.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/switch.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/switch.tsx\" was ignored.
components/ui/sonner.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sonner.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sonner.tsx\" was ignored.
components/ui/toggle-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle-group.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/toggle-group.tsx\" was ignored.
components/ui/tooltip.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tooltip.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/tooltip.tsx\" was ignored.
components/ui/toggle.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/toggle.tsx\" was ignored.
components/ui/tabs.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tabs.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/tabs.tsx\" was ignored.
components/ui/sheet.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sheet.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sheet.tsx\" was ignored.
components/ui/sidebar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sidebar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sidebar.tsx\" was ignored.
components/ui/slider.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/slider.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/slider.tsx\" was ignored.
node_modules/cmdk/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/cmdk/dist/index.mjs\" was ignored.
node_modules/next-themes/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/next-themes/dist/index.mjs\" was ignored.
node_modules/vaul/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/vaul/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-accordion/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-accordion/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-alert-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-alert-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-avatar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-avatar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-collapsible/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-collapsible/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-context-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-context-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-checkbox/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-checkbox/dist/index.mjs\" was ignored.
node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-label/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-label/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-hover-card/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-hover-card/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-form/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-form/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-menubar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-menubar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-navigation-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-navigation-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-portal/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-portal/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-popover/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-popover/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-progress/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-progress/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-radio-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-radio-group/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-scroll-area/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-scroll-area/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-select/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-select/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-switch/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-switch/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-tabs/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-tabs/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toggle/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toggle/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-slider/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-slider/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toast/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toast/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toggle-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toggle-group/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toolbar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toolbar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-tooltip/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-tooltip/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-collection/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-collection/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-presence/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-focus-scope/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-focus-scope/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-focus-guards/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-popper/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-popper/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-roving-focus/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-roving-focus/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs\" was ignored.
✗ Build failed in 7.01s
[38;2;241;97;97m=> Failed to build the preview[39m
registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx (1:7): \"default\" is not exported by \"virtual:next/image\", imported by \"registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx\".
file: ./registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx:1:7

1: import Image from \"next/image\";
          ^
2: // Replace nextjs-vite with the name of your framework
3: import type { Meta, StoryObj } from \"@storybook/nextjs-vite\";

    at getRollupError (file://./node_modules/rollup/dist/es/shared/parseAst.js:400:41)
    at error (file://./node_modules/rollup/dist/es/shared/parseAst.js:396:42)
    at Module.error (file://./node_modules/rollup/dist/es/shared/node-entry.js:16788:16)
    at Module.traceVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:17237:29)
    at ModuleScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:14893:39)
    at ReturnValueScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at FunctionBodyScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at Identifier.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:5391:40)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:2782:28)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:11978:15)
error: script \"build-storybook\" exited with code 1
",
  ],
  "pid": 65002,
  "stdout": "storybook v9.1.8

info => Cleaning outputDir: storybook-static
info => Loading presets
info => Building manager..
info => Building preview..
info Using tsconfig paths for react-docgen
vite v6.3.5 building for production...
transforming...
✓ 3533 modules transformed.
",
  "stderr": "$ storybook build
unable to find package.json for radix-ui
No story files found for the specified pattern: registry/**/*.mdx
components/ui/aspect-ratio.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/aspect-ratio.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/aspect-ratio.tsx\" was ignored.
components/ui/label.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/label.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/label.tsx\" was ignored.
components/ui/table.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/table.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/table.tsx\" was ignored.
components/ui/alert-dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/alert-dialog.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/alert-dialog.tsx\" was ignored.
components/ui/accordion.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/accordion.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/accordion.tsx\" was ignored.
components/ui/checkbox.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/checkbox.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/checkbox.tsx\" was ignored.
components/ui/avatar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/avatar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/avatar.tsx\" was ignored.
components/ui/calendar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/calendar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/calendar.tsx\" was ignored.
components/ui/collapsible.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/collapsible.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/collapsible.tsx\" was ignored.
components/ui/carousel.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/carousel.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/carousel.tsx\" was ignored.
components/ui/command.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/command.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/command.tsx\" was ignored.
components/ui/chart.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/chart.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/chart.tsx\" was ignored.
components/ui/drawer.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/drawer.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/drawer.tsx\" was ignored.
components/ui/input-otp.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/input-otp.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/input-otp.tsx\" was ignored.
components/ui/popover.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/popover.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/popover.tsx\" was ignored.
components/ui/dialog.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dialog.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/dialog.tsx\" was ignored.
components/ui/context-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/context-menu.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/context-menu.tsx\" was ignored.
components/ui/dropdown-menu.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/dropdown-menu.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/dropdown-menu.tsx\" was ignored.
components/ui/form.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/form.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/form.tsx\" was ignored.
components/ui/hover-card.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/hover-card.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/hover-card.tsx\" was ignored.
components/ui/resizable.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/resizable.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/resizable.tsx\" was ignored.
components/ui/radio-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/radio-group.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/radio-group.tsx\" was ignored.
components/ui/progress.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/progress.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/progress.tsx\" was ignored.
components/ui/scroll-area.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/scroll-area.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/scroll-area.tsx\" was ignored.
components/ui/select.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/select.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/select.tsx\" was ignored.
components/ui/separator.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/separator.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/separator.tsx\" was ignored.
components/ui/menubar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/menubar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/menubar.tsx\" was ignored.
node_modules/sonner/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/sonner/dist/index.mjs\" was ignored.
components/ui/switch.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/switch.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/switch.tsx\" was ignored.
components/ui/sonner.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sonner.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sonner.tsx\" was ignored.
components/ui/toggle-group.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle-group.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/toggle-group.tsx\" was ignored.
components/ui/tooltip.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tooltip.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/tooltip.tsx\" was ignored.
components/ui/toggle.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/toggle.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/toggle.tsx\" was ignored.
components/ui/tabs.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/tabs.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/tabs.tsx\" was ignored.
components/ui/sheet.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sheet.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sheet.tsx\" was ignored.
components/ui/sidebar.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/sidebar.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/sidebar.tsx\" was ignored.
components/ui/slider.tsx (1:0): Error when using sourcemap for reporting an error: Can't resolve original location of error.
components/ui/slider.tsx (1:0): Module level directives cause errors when bundled, \"use client\" in \"components/ui/slider.tsx\" was ignored.
node_modules/cmdk/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/cmdk/dist/index.mjs\" was ignored.
node_modules/next-themes/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/next-themes/dist/index.mjs\" was ignored.
node_modules/vaul/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/vaul/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-accordion/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-accordion/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-alert-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-alert-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-avatar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-avatar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-collapsible/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-collapsible/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-context-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-context-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-checkbox/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-checkbox/dist/index.mjs\" was ignored.
node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/radix-ui/node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-label/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-label/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-hover-card/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-hover-card/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-form/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-form/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-menubar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-menubar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-password-toggle-field/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-one-time-password-field/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-navigation-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-navigation-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-portal/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-portal/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-popover/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-popover/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-progress/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-progress/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-radio-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-radio-group/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-scroll-area/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-scroll-area/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-select/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-select/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-switch/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-switch/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-tabs/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-tabs/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toggle/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toggle/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-slider/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-slider/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toast/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toast/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toggle-group/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toggle-group/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-toolbar/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-toolbar/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-tooltip/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-tooltip/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-collection/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-collection/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-presence/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-alert-dialog/node_modules/@radix-ui/react-dialog/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-menu/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-menu/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-focus-scope/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-focus-scope/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-focus-guards/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-popper/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-popper/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-roving-focus/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-roving-focus/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-presence/dist/index.mjs\" was ignored.
node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs (1:0): Module level directives cause errors when bundled, \"use client\" in \"node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-focus-guards/dist/index.mjs\" was ignored.
✗ Build failed in 7.01s
[38;2;241;97;97m=> Failed to build the preview[39m
registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx (1:7): \"default\" is not exported by \"virtual:next/image\", imported by \"registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx\".
file: ./registry/ui/aspect-ratio-story/aspect-ratio.stories.tsx:1:7

1: import Image from \"next/image\";
          ^
2: // Replace nextjs-vite with the name of your framework
3: import type { Meta, StoryObj } from \"@storybook/nextjs-vite\";

    at getRollupError (file://./node_modules/rollup/dist/es/shared/parseAst.js:400:41)
    at error (file://./node_modules/rollup/dist/es/shared/parseAst.js:396:42)
    at Module.error (file://./node_modules/rollup/dist/es/shared/node-entry.js:16788:16)
    at Module.traceVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:17237:29)
    at ModuleScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:14893:39)
    at ReturnValueScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at FunctionBodyScope.findVariable (file://./node_modules/rollup/dist/es/shared/node-entry.js:5617:38)
    at Identifier.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:5391:40)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:2782:28)
    at CallExpression.bind (file://./node_modules/rollup/dist/es/shared/node-entry.js:11978:15)
error: script \"build-storybook\" exited with code 1
",
}

 ❯ tests/constitutional/principles/principle-V.test.ts:375:23
    373|       } catch (error) {
    374|         // Build should not fail
    375|         expect(error).toBeNull();
       |                       ^
    376|       }
    377|       

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[9/9]⎯



**Recommendations**:
- Check test file: tests/constitutional/principles/principle-V.test.ts

## Next Steps

🚨 **Action Required**: Critical constitutional violations detected. Address the failing tests before proceeding.

1. Review the specific violations listed above
2. Fix the code issues identified by the tests
3. Run `bun run test:constitutional` to verify fixes
4. Commit changes only after achieving compliance

## About Constitutional Compliance

The NOLA Design System follows five constitutional principles to maintain architectural integrity and educational effectiveness:

1. **Upstream-First Component Architecture**: Maintain compatibility with shadcn/ui ecosystem
2. **Theme-Component Separation**: Complete isolation between themes and component logic
3. **Registry Publishing Compliance**: All themes distributed via standard registry system
4. **Research-Driven Development**: Educational decisions backed by research evidence
5. **Quality-First Implementation**: No temporary fixes or technical debt

For more information, see the [Constitutional Compliance Testing Plan](./CONSTITUTIONAL_COMPLIANCE_TESTING_PLAN.md).
