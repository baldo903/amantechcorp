# Quick Reference: ESLint & Prettier Commands

## Essential Commands

```bash
# Check code quality
npm run lint

# Fix automatically fixable issues
npm run lint:fix

# Format all code
npm run format

# Verify formatting without changing files
npm run format:check

# Run full development build
npm start

# Production build
npm run build
```

## Code Quality Workflow

### Daily Development
1. Write or modify code
2. Before committing: `npm run format && npm run lint:fix && npm run lint`
3. If lint passes, you're good to commit

### Quick Fixes
- **Formatting issues**: `npm run format` (auto-fixes)
- **Linting issues**: `npm run lint:fix` (auto-fixes what it can)
- **Remaining issues**: Review output and fix manually

## ESLint Rules in Effect

- ✅ Proper TypeScript usage
- ✅ No unused variables (warns)
- ✅ No any types without reason (warns)
- ✅ No console statements in production code (warns)
- ✅ Prettier formatting enforced (errors)
- ✅ Semicolons required
- ✅ Single quotes preferred
- ✅ 100-character line width
- ✅ 2-space indentation

## Disabling Rules (When Needed)

For specific lines:
```typescript
// eslint-disable-next-line no-console
console.log('Debug info');
```

For entire files:
```typescript
/* eslint-disable no-console */
console.log('Debug info');
```

## Status Check

To see if everything is working:
```bash
npm run lint && npm run format:check && echo "✅ All checks passed!"
```

## Configuration Files

- `.eslintrc.json` - Legacy (reference only)
- `eslint.config.js` - Active ESLint v10 configuration
- `.prettierrc.json` - Prettier formatting rules
- `package.json` - npm scripts and dependencies

## Getting Help

If you see an ESLint error:
1. Read the error message carefully
2. Check `eslint.config.js` for the rule
3. Run `npm run lint:fix` to auto-fix
4. If manual fix needed, search the rule name online

If Prettier conflicts with ESLint:
- They're already integrated to prevent conflicts
- Run `npm run format` first, then `npm run lint:fix`
