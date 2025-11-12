# 🚀 Netlify Deployment Checklist

Quick checklist to deploy your portfolio to Netlify.

---

## Before Deployment

- [x] Code uploaded to GitHub
- [x] `.env` file in `.gitignore` (not committed)
- [x] `netlify.toml` configuration file created
- [x] `public/_redirects` file created
- [ ] Test build locally: `npm run build`
- [ ] Preview build locally: `npm run preview`

---

## Netlify Setup (5 Minutes)

### 1. Sign Up
- [ ] Go to [netlify.com](https://www.netlify.com)
- [ ] Click "Sign up with GitHub"
- [ ] Authorize Netlify

### 2. Import Project
- [ ] Click "Add new site" → "Import an existing project"
- [ ] Select "GitHub"
- [ ] Choose your portfolio repository

### 3. Configure Build
```
Branch: main
Build command: npm run build
Publish directory: dist
```

### 4. Add Environment Variables ⚠️ IMPORTANT
Click "Show advanced" → "New variable"

Add these 3 variables:

```
VITE_EMAILJS_SERVICE_ID = service_isredjp
VITE_EMAILJS_TEMPLATE_ID = template_c78ky2c
VITE_EMAILJS_PUBLIC_KEY = LmaKTAbrD2jm5UJnh
```

### 5. Deploy
- [ ] Click "Deploy site"
- [ ] Wait 2-3 minutes
- [ ] Check build status (should be green ✅)

---

## After Deployment

### Test Your Site
- [ ] Visit your Netlify URL
- [ ] Test navigation (all sections)
- [ ] Test mobile menu (hamburger)
- [ ] Test contact form (send test email)
- [ ] Check email received at `sudeeppazhoor@gmail.com`
- [ ] Test resume download
- [ ] Test certificate links
- [ ] Test project links
- [ ] Test social media links
- [ ] Check on mobile device
- [ ] Check on different browsers

### Optional: Customize
- [ ] Change site name (Site settings → Site details)
- [ ] Add custom domain (if you have one)

---

## Quick Reference

**Your EmailJS Credentials:**
```
Service ID: service_isredjp
Template ID: template_c78ky2c
Public Key: LmaKTAbrD2jm5UJnh
```

**Build Settings:**
```
Build command: npm run build
Publish directory: dist
Node version: 18
```

---

## Troubleshooting

### Build Failed?
1. Check Netlify build logs
2. Verify environment variables are set
3. Try: "Trigger deploy" → "Clear cache and deploy site"

### Contact Form Not Working?
1. Verify all 3 environment variables in Netlify
2. Check EmailJS dashboard logs
3. Redeploy site after adding variables

### 404 Errors?
- `public/_redirects` file should exist ✅
- `netlify.toml` should exist ✅

---

## Success! 🎉

Your portfolio is live at:
`https://[your-site-name].netlify.app`

**Share it:**
- Add to LinkedIn profile
- Add to GitHub README
- Add to resume
- Share on social media

---

## Need Full Guide?

See `NETLIFY_DEPLOYMENT_GUIDE.md` for detailed instructions.
