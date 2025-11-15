# Domain and Email Setup Guide

## Part 1: Buy Domain from Namecheap

### Step 1: Purchase Domain
1. Go to **https://www.namecheap.com**
2. Search for your desired domain (e.g., `bluerayssolar.com`)
3. Add to cart and complete purchase
4. **Important**: Disable "WhoisGuard" if you want your contact info public, or keep it enabled for privacy

### Step 2: Configure DNS in Namecheap

After purchasing, configure DNS:

1. **Login to Namecheap** → Go to Domain List
2. **Click "Manage"** next to your domain
3. **Go to "Advanced DNS"** tab
4. **Add these DNS records:**

   **Record 1 (Root domain):**
   ```
   Type: A Record
   Host: @
   Value: 76.76.21.21
   TTL: Automatic
   ```

   **Record 2 (WWW subdomain):**
   ```
   Type: A Record
   Host: www
   Value: 76.76.21.21
   TTL: Automatic
   ```

5. **Save all changes**

### Step 3: Add Domain to Vercel

Run these commands in your terminal:

```bash
# Add your domain to Vercel
vercel domains add yourdomain.com
vercel domains add www.yourdomain.com
```

Example:
```bash
vercel domains add bluerayssolar.com
vercel domains add www.bluerayssolar.com
```

### Step 4: Wait for DNS Propagation
- DNS changes take **5-30 minutes** (sometimes up to 48 hours)
- Vercel will automatically verify and add SSL certificate

### Step 5: Verify Domain is Working

Check status:
```bash
vercel domains ls
```

Test DNS:
```bash
nslookup yourdomain.com
```

You should see `76.76.21.21` in the response.

---

## Part 2: Setup Email Notifications

### Step 1: Get Resend API Key

1. Go to **https://resend.com**
2. Sign up for a free account
3. Verify your email
4. Go to **"API Keys"** section
5. Click **"Create API Key"**
6. Copy the API key (starts with `re_`)

### Step 2: Add Environment Variables in Vercel

1. Go to **https://vercel.com/dashboard**
2. Select your **blue-rays** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

   **Variable 1:**
   ```
   Name: RESEND_API_KEY
   Value: re_your_api_key_here (paste your Resend API key)
   Environment: Production, Preview, Development
   ```

   **Variable 2:**
   ```
   Name: CONTACT_EMAIL
   Value: youremail@gmail.com (your email address where you want to receive inquiries)
   Environment: Production, Preview, Development
   ```

5. **Save**

### Step 3: Deploy Changes

Run these commands to deploy:

```bash
git add .
git commit -m "Add email notifications to contact form"
git push
```

Vercel will automatically deploy the changes.

### Step 4: Test Email Functionality

1. Go to your website
2. Fill out the contact form
3. Submit
4. Check your email (the one you set in `CONTACT_EMAIL`)

---

## Part 3: Setup Custom Email Domain (Optional)

Once your domain is working, you can set up professional emails like `info@yourdomain.com`:

### Option A: Use Resend with Custom Domain

1. In Resend dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `bluerayssolar.com`)
4. Add the DNS records shown to your Namecheap DNS settings:
   - SPF Record
   - DKIM Records
   - DMARC Record

5. Update your contact form email in the code:
   ```typescript
   from: 'Blue Rays Solar <info@yourdomain.com>'
   ```

### Option B: Use Google Workspace (Paid)

1. Go to **https://workspace.google.com**
2. Sign up for Google Workspace ($6/user/month)
3. Verify domain ownership
4. Add MX records to Namecheap DNS
5. Create email accounts (info@yourdomain.com, contact@yourdomain.com)

### Option C: Use Zoho Mail (Free)

1. Go to **https://www.zoho.com/mail/**
2. Sign up for Zoho Mail Free plan
3. Add your domain
4. Add MX records to Namecheap DNS:
   ```
   Type: MX Record
   Host: @
   Value: mx.zoho.com
   Priority: 10
   
   Type: MX Record
   Host: @
   Value: mx2.zoho.com
   Priority: 20
   ```
5. Create email addresses

---

## Quick Commands Reference

### Check Domain Status
```bash
vercel domains ls
```

### Test DNS
```bash
nslookup yourdomain.com
```

### Deploy to Vercel
```bash
git add .
git commit -m "Your commit message"
git push
```

### Check Deployment Status
```bash
vercel list
```

---

## Troubleshooting

### Domain not working after 30 minutes?
1. Check DNS records in Namecheap are correct
2. Run `nslookup yourdomain.com` to verify DNS
3. Check `vercel domains ls` for verification status

### Emails not being sent?
1. Verify `RESEND_API_KEY` is set correctly in Vercel
2. Verify `CONTACT_EMAIL` is set correctly
3. Check Resend dashboard for email logs
4. Check Vercel function logs for errors

### "Not Secure" warning on domain?
- Wait a few more minutes, SSL certificate is being generated
- Vercel automatically provisions Let's Encrypt SSL
- Usually takes 5-10 minutes after DNS verification

---

## Support Resources

- **Namecheap Support**: https://www.namecheap.com/support/
- **Vercel Documentation**: https://vercel.com/docs
- **Resend Documentation**: https://resend.com/docs
- **DNS Propagation Checker**: https://dnschecker.org

---

## Summary Checklist

- [ ] Purchase domain from Namecheap
- [ ] Add A records in Namecheap DNS
- [ ] Add domain to Vercel
- [ ] Wait for DNS propagation (15-30 min)
- [ ] Sign up for Resend
- [ ] Get Resend API key
- [ ] Add RESEND_API_KEY to Vercel environment variables
- [ ] Add CONTACT_EMAIL to Vercel environment variables
- [ ] Deploy changes to Vercel
- [ ] Test contact form
- [ ] (Optional) Setup custom email domain

---

**Need help?** Let me know which step you're stuck on!
