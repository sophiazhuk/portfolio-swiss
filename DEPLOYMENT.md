# Deployment Setup Guide

This project uses GitHub Actions to automatically deploy to Namecheap hosting via FTP.

## Initial Setup (One-time)

### 1. Add GitHub Secrets

Your FTP credentials need to be stored as GitHub repository secrets:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

| Secret Name | Value |
|------------|-------|
| `FTP_SERVER` | `198.54.114.249` |
| `FTP_USERNAME` | `sophdmks` |
| `FTP_PASSWORD` | Your cPanel/FTP password |

**Important:** Never commit your FTP password to the repository. GitHub Secrets are encrypted and secure.

### 2. Verify Target Directory

The workflow deploys to `/public_html/` on your server. If your site is in a different directory:
1. Edit `.github/workflows/deploy.yml`
2. Update the `server-dir` value under "Deploy to Namecheap via FTP"

### 3. Enable Workflows (if needed)

1. Go to **Actions** tab in your GitHub repository
2. If workflows are disabled, click **Enable workflows**

## How It Works

### Automatic Deployment

Every time you push to the `main` branch:

1. ✅ Code is checked out
2. ✅ Dependencies are installed
3. ✅ ESLint runs (must pass)
4. ✅ Prettier format check runs (must pass)
5. ✅ Tests run (must pass)
6. ✅ Production build is created (`npm run build`)
7. ✅ Built files are uploaded to Namecheap via FTP

If any step fails, deployment is canceled.

### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab
2. Select **Build and Deploy to Namecheap**
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## What Gets Deployed

Only the contents of the `dist/` folder are deployed, which includes:
- `index.html`
- JavaScript bundles
- CSS files
- Images and fonts from `public/`
- `.htaccess` (for React Router support)
- `robots.txt` and `sitemap.xml`

## React Router Support

The `.htaccess` file in `public/` ensures all routes redirect to `index.html`, allowing client-side routing to work correctly.

## Troubleshooting

### Deployment fails with "Authentication failed"
- Verify `FTP_USERNAME` and `FTP_PASSWORD` secrets are correct
- Try logging into cPanel with the same credentials

### Deployment succeeds but site doesn't update
- Check that `server-dir` is set to the correct directory
- Verify files were uploaded to `/public_html/` in cPanel File Manager
- Clear your browser cache

### ESLint or tests fail
- Run `npm run lint` locally to fix linting errors
- Run `npm test` locally to fix failing tests
- Fix issues before pushing to `main`

### Build fails
- Run `npm run build` locally to reproduce the error
- Check for any console errors or missing dependencies

## Local Testing Before Deploy

Always test locally before pushing:

```bash
# Run all checks
npm run lint
npm run format:check
npm test
npm run build

# Preview production build
npm run preview
```

## Updating Workflow

To modify the deployment process, edit `.github/workflows/deploy.yml`.

Common changes:
- **Different branch**: Change `branches: [main]` to your preferred branch
- **Skip tests**: Comment out the "Run tests" step
- **Different Node version**: Update `node-version` in "Setup Node.js"

## Security Notes

- ✅ FTP credentials are stored securely as GitHub Secrets
- ✅ Secrets are never exposed in logs
- ✅ Only repository administrators can view/edit secrets
- ⚠️ Consider enabling SFTP (port 22) instead of FTP for better security
