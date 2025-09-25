#!/bin/bash

# Upstream Sync Script for ethan-nola/shadcn-storybook-registry
# Run this periodically to pull updates from lloydrichards/shadcn-storybook-registry

set -e

echo "🔄 Syncing ethan-nola fork with upstream lloydrichards repository..."

# Step 1: Ensure we're in the right directory
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Run this from your corporate fork directory."
    exit 1
fi

# Step 2: Check if upstream remote exists
if ! git remote | grep -q upstream; then
    echo "❌ Error: No upstream remote found."
    echo "Run: git remote add upstream https://github.com/lloydrichards/shadcn-storybook-registry.git"
    exit 1
fi

# Step 3: Display current status
echo "📊 Repository Status:"
echo "Origin: $(git remote get-url origin)"
echo "Upstream: $(git remote get-url upstream)"
echo "Current branch: $(git branch --show-current)"
echo ""

# Step 4: Stash any uncommitted changes
if ! git diff --quiet || ! git diff --staged --quiet; then
    echo "💾 Stashing uncommitted changes..."
    git stash push -m "Auto-stash before upstream sync $(date)"
    STASHED=true
else
    STASHED=false
fi

# Step 5: Switch to main branch and fetch upstream
echo "🌐 Fetching upstream changes..."
git checkout main
git fetch upstream

# Step 6: Show what's new from upstream
echo "🔍 New commits from upstream:"
git log --oneline --graph --max-count=10 upstream/main ^main || echo "No new commits from upstream"
echo ""

# Step 7: Merge upstream changes
echo "🔀 Merging upstream changes into main..."
if git merge upstream/main --no-edit; then
    echo "✅ Successfully merged upstream changes"
else
    echo "⚠️  Merge conflicts detected. Please resolve manually."
    echo "After resolving conflicts:"
    echo "1. git add ."
    echo "2. git commit"
    echo "3. git push origin main"
    echo "4. Run this script again to continue"
    exit 1
fi

# Step 8: Push updated main to your fork
echo "📤 Pushing updated main to ethan-nola fork..."
git push origin main

# Step 9: Update develop branch if it exists
if git branch | grep -q develop; then
    echo "🌿 Updating develop branch..."
    git checkout develop
    if git merge main --no-edit; then
        echo "✅ Successfully updated develop branch"
        git push origin develop
        echo "📤 Pushed develop branch to ethan-nola fork"
    else
        echo "⚠️  Merge conflicts in develop branch. Please resolve manually."
        echo "Your main branch has been updated successfully."
        echo "To resolve develop conflicts:"
        echo "1. Fix conflicts in develop branch"
        echo "2. git add ."
        echo "3. git commit"
        echo "4. git push origin develop"
    fi
else
    echo "ℹ️  No develop branch found, staying on main"
fi

# Step 10: Restore stashed changes if any
if [ "$STASHED" = true ]; then
    echo "💾 Restoring stashed changes..."
    if git stash pop; then
        echo "✅ Stashed changes restored successfully"
    else
        echo "⚠️  Could not restore stashed changes automatically"
        echo "Check your stash: git stash list"
    fi
fi

echo ""
echo "🎉 Upstream sync complete!"
echo ""
echo "📊 Summary:"
echo "- ✅ Fetched latest changes from upstream"
echo "- ✅ Updated main branch"
if git branch | grep -q develop; then
    echo "- ✅ Updated develop branch"
fi
echo "- 🔗 Corporate fork: https://github.com/ethan-nola/shadcn-storybook-registry"
echo "- 🔗 Original repo: https://github.com/lloydrichards/shadcn-storybook-registry"
echo ""
echo "🚀 Next steps:"
echo "1. Test your corporate customizations"
echo "2. Run: npm install (or bun install)"
echo "3. Run: npm run dev (or bun dev)"
echo "4. Run: npm run storybook (or bun storybook)"
echo ""
echo "🔄 Last synced: $(date)"