# Netlify Deployment Guide

Complete step-by-step guide to deploy your portfolio to Netlify for FREE.

---

## Prerequisites

✅ Your code is uploaded to GitHub
✅ You have a GitHub account
✅ Your `.env` file is NOT committed (it's in `.gitignore`)

---

## Step 1: Create Netlify Account

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **"Sign up"** (top right)
3. Choose **"Sign up with GitHub"** (recommended)
4. Authorize Netlify to access your GitHub account

---

## Step 2: Deploy Your Site

### Option A: Deploy from GitHub (Recommended)

1. **Click "Add new site"** → **"Import an existing project"**

2. **Connect to Git provider**
   - Click **"GitHub"**
   - Authorize Netlify if prompted

3. **Select your repository**
   - Find and click your portfolio repository
   - Example: `Sudeep-pazhoor/portfolio`

4. **Configure build settings**
   ```
   Branch to deploy: main (or master)
   Build command: npm run build
   Publish directory: dist
   ```

5. **Add Environment Variables** (IMPORTANT!)
   - Click **"Show advanced"**
   - Click **"New variable"**
   - Add these three variables:

   | Key | Value |
   |-----|-------|
   | `VITE_EMAILJS_SERVICE_ID` | `service_isredjp` |
   | `VITE_EMAILJS_TEMPLATE_ID` | `template_c78ky2c` |
   | `VITE_EMAILJS_PUBLIC_KEY` | `LmaKTAbrD2jm5UJnh` |

6. **Click "Deploy site"**
   - Netlify will start building your site
   - Wait 2-3 minutes for deployment

---

## Step 3: Configure Your Site

### Change Site Name (Optional)

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter your desired name: `sudeep-portfolio` (or any available name)
4. Your URL will be: `https://sudeep-portfolio.netlify.app`

### Add Custom Domain (Optional)

1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (if you have one)
4. Follow DNS configuration instructions

---

## Step 4: Verify Deployment

1. **Check build status**
   - Go to **Deploys** tab
   - Status should show **"Published"** (green)

2. **Visit your site**
   - Click the site URL (e.g., `https://your-site.netlify.app`)
   - Test all features:
     - ✅ Navigation works
     - ✅ Contact form sends emails
     - ✅ All links work
     - ✅ Images load
     - ✅ Certificates open

3. **Test contact form**
   - Fill out the form
   - Click "Send Message"
   - Check your email: `sudeeppazhoor@gmail.com`

---

## Step 5: Enable Continuous Deployment

✅ **Already enabled!** When you push to GitHub:
1. Netlify automatically detects changes
2. Rebuilds your site
3. Deploys the new version
4. Takes 2-3 minutes

---

## Troubleshooting

### Build Failed?

**Check build logs:**
1. Go to **Deploys** tab
2. Click the failed deploy
3. Read error messages

**Common issues:**
- Missing environment variables → Add them in Site settings
- Wrong build command → Should be `npm run build`
- Wrong publish directory → Should be `dist`

### Contact Form Not Working?

1. **Check environment variables:**
   - Go to **Site settings** → **Environment variables**
   - Verify all three EmailJS variables are set
   - Values should match your `.env` file

2. **Redeploy after adding variables:**
   - Go to **Deploys** tab
   - Click **"Trigger deploy"** → **"Clear cache and deploy site"**

3. **Check EmailJS dashboard:**
   - Visit [https://dashboard.emailjs.com/admin/logs](https://dashboard.emailjs.com/admin/logs)
   - Look for incoming requests

### Images Not Loading?

- Ensure images are in `public` folder
- Check file names match exactly (case-sensitive)
- Verify paths start with `/` (e.g., `/Sudeep.jpeg`)

### 404 Errors on Refresh?

Create `public/_redirects` file with:
```
/*    /index.html   200
```

---

## Netlify Features (Free Plan)

✅ **100 GB bandwidth/month**
✅ **Automatic HTTPS/SSL**
✅ **Continuous deployment from Git**
✅ **Instant rollbacks**
✅ **Deploy previews for pull requests**
✅ **Custom domain support**
✅ **Form handling**
✅ **Serverless functions**

---

## Quick Commands Reference

### Local Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Update Deployment
```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Netlify auto-deploys!
```

---

## Site Settings Summary

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node version** | 18.x (auto-detected) |
| **Branch** | `main` |

---

## Environment Variables Checklist

Before deploying, ensure these are set in Netlify:

- [ ] `VITE_EMAILJS_SERVICE_ID` = `service_isredjp`
- [ ] `VITE_EMAILJS_TEMPLATE_ID` = `template_c78ky2c`
- [ ] `VITE_EMAILJS_PUBLIC_KEY` = `LmaKTAbrD2jm5UJnh`

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads correctly
- [ ] All sections visible (Home, About, Experience, etc.)
- [ ] Navigation works (including mobile menu)
- [ ] Contact form sends emails
- [ ] Resume downloads
- [ ] Certificate links open
- [ ] Project links work
- [ ] Social media links work
- [ ] Favicon appears in browser tab
- [ ] Site is responsive on mobile

---

## Support & Resources

- **Netlify Docs**: [https://docs.netlify.com](https://docs.netlify.com)
- **Netlify Support**: [https://answers.netlify.com](https://answers.netlify.com)
- **Status Page**: [https://www.netlifystatus.com](https://www.netlifystatus.com)

---

## Your Deployment URLs

After deployment, you'll have:

- **Netlify URL**: `https://[your-site-name].netlify.app`
- **Custom Domain** (if added): `https://yourdomain.com`

---

## Next Steps

1. ✅ Deploy to Netlify
2. ✅ Test all features
3. ✅ Share your portfolio URL
4. ✅ Add to resume and LinkedIn
5. ✅ Monitor EmailJS usage (200 emails/month free)

---

**Congratulations! Your portfolio is now live! 🎉**

Share it with the world:
- LinkedIn profile
- GitHub README
- Resume
- Job applications
- Social media

---

## Need Help?

If you encounter issues:
1. Check Netlify build logs
2. Verify environment variables
3. Test locally with `npm run build && npm run preview`
4. Check browser console for errors
5. Review EmailJS dashboard logs
