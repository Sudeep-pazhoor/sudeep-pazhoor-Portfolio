# 🚀 Quick Deploy to Netlify (5 Minutes)

## Step 1: Go to Netlify
👉 Visit: **https://www.netlify.com**

Click: **"Sign up with GitHub"**

---

## Step 2: Import Your Project

1. Click: **"Add new site"** → **"Import an existing project"**
2. Click: **"GitHub"**
3. Find and click your repository name

---

## Step 3: Configure Build Settings

Fill in these fields:

```
Branch to deploy: main
Build command: npm run build
Publish directory: dist
```

---

## Step 4: Add Environment Variables ⚠️

**IMPORTANT:** Click **"Show advanced"** → **"New variable"**

Add these 3 variables (copy-paste exactly):

### Variable 1:
```
Key: VITE_EMAILJS_SERVICE_ID
Value: service_isredjp
```

### Variable 2:
```
Key: VITE_EMAILJS_TEMPLATE_ID
Value: template_c78ky2c
```

### Variable 3:
```
Key: VITE_EMAILJS_PUBLIC_KEY
Value: LmaKTAbrD2jm5UJnh
```

---

## Step 5: Deploy!

Click: **"Deploy site"**

⏳ Wait 2-3 minutes...

✅ Done! Your site is live!

---

## Step 6: Test Your Site

Visit your Netlify URL and test:
- ✅ Contact form (send yourself a test email)
- ✅ All navigation links
- ✅ Mobile menu
- ✅ Resume download
- ✅ Certificate links

---

## Optional: Change Site Name

1. Go to: **Site settings** → **Site details**
2. Click: **"Change site name"**
3. Enter: `sudeep-portfolio` (or your choice)
4. Your URL: `https://sudeep-portfolio.netlify.app`

---

## 🎉 Congratulations!

Your portfolio is now live and accessible worldwide!

**Share your link:**
- LinkedIn: Add to profile
- GitHub: Add to README
- Resume: Add under "Portfolio"
- Job applications: Include the link

---

## Auto-Deploy Enabled ✨

Every time you push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Netlify automatically rebuilds and deploys! 🚀

---

## Need Help?

- Full guide: See `NETLIFY_DEPLOYMENT_GUIDE.md`
- Checklist: See `DEPLOYMENT_CHECKLIST.md`
- Netlify support: https://answers.netlify.com
