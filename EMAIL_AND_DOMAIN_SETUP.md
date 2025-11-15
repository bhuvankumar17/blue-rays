# Email & Domain Setup Guide

## 📧 PART 1: Email Notifications Setup (Resend)

### Step 1: Create Resend Account
1. Go to https://resend.com
2. Click "Start Building" or "Sign Up"
3. Sign up with your GitHub account (recommended) or email
4. Verify your email

### Step 2: Get API Key
1. After logging in, go to **API Keys** in the dashboard
2. Click **"Create API Key"**
3. Name it: "Blue Rays Solar Website"
4. Copy the API key (starts with `re_...`)

### Step 3: Add API Key to Project
1. Open `.env.local` file in your project
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
3. Change the email if needed:
   ```
   NOTIFICATION_EMAIL=youremail@gmail.com
   ```

### Step 4: Add Environment Variables to Vercel
1. Go to https://vercel.com/dashboard
2. Select your `blue-rays` project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - Name: `RESEND_API_KEY`, Value: `re_your_key_here`
   - Name: `NOTIFICATION_EMAIL`, Value: `blueraysenergy@gmail.com`
5. Click **Save**

### Step 5: Verify Domain in Resend (Optional but Recommended)
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., blueraysenergy.com)
4. Add the DNS records shown to your Namecheap DNS
5. Once verified, update the email sender in `route.ts`:
   ```typescript
   from: 'Blue Rays Solar <contact@blueraysenergy.com>',
   ```

---

## 🌐 PART 2: Domain Setup (Namecheap + Vercel)

### Step 1: Purchase Domain from Namecheap
1. Go to https://www.namecheap.com
2. Search for your desired domain
3. Add to cart and purchase
4. Complete payment

### Step 2: Configure DNS in Namecheap
1. Login to Namecheap
2. Go to **Domain List**
3. Click **Manage** on your domain
4. Click **Advanced DNS** tab
5. Delete any existing A Records or CNAME Records
6. Add these 2 A Records:

   **Record 1:**
   ```
   Type: A Record
   Host: @
   Value: 76.76.21.21
   TTL: Automatic
   ```

   **Record 2:**
   ```
   Type: A Record
   Host: www
   Value: 76.76.21.21
   TTL: Automatic
   ```

7. Click **Save All Changes**

### Step 3: Add Domain to Vercel
Run these commands in terminal:

```bash
# Add your domain (replace with your actual domain)
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
```

Or manually:
1. Go to https://vercel.com/dashboard
2. Select your `blue-rays` project
3. Go to **Settings** → **Domains**
4. Click **Add**
5. Enter your domain: `yourdomain.com`
6. Click **Add**
7. Repeat for `www.yourdomain.com`

### Step 4: Wait for DNS Propagation
- DNS changes take 5 minutes to 48 hours
- Usually works within 15-30 minutes
- Check status with: `vercel domains ls`

### Step 5: Verify Domain is Working
```bash
nslookup yourdomain.com
```
Should show IP: `76.76.21.21`

---

## ✅ Testing Email Notifications

### Test Locally:
1. Make sure `.env.local` has your Resend API key
2. Start dev server: `npm run dev`
3. Go to http://localhost:3000/contact
4. Fill out the form
5. Check your email inbox (NOTIFICATION_EMAIL)

### Test on Production:
1. Push changes to GitHub: `git push`
2. Wait for Vercel deployment
3. Visit your live site
4. Submit contact form
5. Check your email

---

## 🎯 Quick Command Reference

```bash
# Check domain status
vercel domains ls

# Check DNS configuration
nslookup yourdomain.com

# Deploy to Vercel
git add .
git commit -m "Setup email notifications"
git push

# Check deployment status
vercel list
```

---

## 📝 What Emails Look Like

When someone submits the contact form, you'll receive:

**Subject:** 🌞 New Contact Form Submission - Blue Rays Solar

**Content:**
- Email: customer@example.com
- Phone: +91 9876543210
- Message: Their inquiry message

---

## 🔒 Security Notes

1. **Never commit `.env.local` to Git** (already in .gitignore)
2. **Keep your Resend API key secret**
3. **Add environment variables in Vercel dashboard**
4. **Use domain verification in Resend for professional emails**

---

## 🆘 Troubleshooting

**Email not sending?**
- Check Resend API key is correct
- Check Resend dashboard for error logs
- Verify environment variables in Vercel

**Domain not working?**
- Wait 30 minutes for DNS propagation
- Check DNS records in Namecheap
- Verify domain added in Vercel
- Run: `nslookup yourdomain.com`

**Need Help?**
Contact Vercel support or check Resend documentation.
