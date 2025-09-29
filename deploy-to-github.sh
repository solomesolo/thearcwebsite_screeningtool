#!/bin/bash

# TheArc Website + Screening Tool - GitHub Deployment Script
# This script will help you deploy the project to GitHub

echo "🚀 TheArc Website + Screening Tool - GitHub Deployment"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "✅ Project directory found"

# Create a clean deployment directory
echo "📦 Creating deployment package..."
rm -rf ../thearc-deployment
mkdir -p ../thearc-deployment
cp -r . ../thearc-deployment/

# Remove unnecessary files
cd ../thearc-deployment
rm -rf .git
rm -rf node_modules
rm -rf next-app/node_modules
rm -rf next-app/website-extension-backup-20250918-104005/questionnaire-extension/backend/node_modules
rm -rf test-vite-app/node_modules
rm -f *.log
rm -f next-app/*.log
rm -f next-app/website-extension-backup-20250918-104005/questionnaire-extension/backend/*.log

echo "✅ Clean deployment package created"

# Create a simple deployment guide
cat > DEPLOYMENT_INSTRUCTIONS.md << 'EOF'
# 🚀 Quick GitHub Deployment Instructions

## Step 1: Create Repository
1. Go to https://github.com/new
2. Repository name: `thearcwebsite_screeningtool`
3. Description: "TheArc website with integrated Right Screening Finder tool"
4. Make it Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Upload Files
1. In the new repository, click "uploading an existing file"
2. Drag and drop ALL files from this directory
3. Commit message: "Initial commit: TheArc website with integrated screening tool"
4. Click "Commit changes"

## Step 3: Verify
- Check that all files are uploaded
- README.md should be visible
- All directories should be present

## Step 4: Clone and Setup
```bash
git clone https://github.com/solomesolo/thearcwebsite_screeningtool.git
cd thearcwebsite_screeningtool
npm run install:all
npm run dev
```

## Access Points
- TheArc Website: http://localhost:3000
- Screening Tool: http://localhost:8085
- Backend API: http://localhost:3001
EOF

echo "✅ Deployment instructions created"

echo ""
echo "🎉 DEPLOYMENT PACKAGE READY!"
echo "=============================="
echo ""
echo "📁 Location: $(pwd)"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://github.com/new"
echo "2. Create repository: thearcwebsite_screeningtool"
echo "3. Upload all files from: $(pwd)"
echo "4. Follow DEPLOYMENT_INSTRUCTIONS.md"
echo ""
echo "🌐 After deployment, access:"
echo "- TheArc Website: http://localhost:3000"
echo "- Screening Tool: http://localhost:8085"
echo "- Backend API: http://localhost:3001"
echo ""
echo "✅ All files are ready for GitHub upload!"
