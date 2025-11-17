# Domain Setup: blueraysgreenenergy.com

## ✅ Purchase Confirmation
- **Domain:** blueraysgreenenergy.com
- **Price:** $11.48
- **Registrar:** Namecheap

## 🚀 Quick Setup Checklist

### Step 1: Complete Namecheap Purchase
- [x] Domain in cart ($11.48)
- [ ] Complete checkout
- [ ] Verify email from Namecheap
- [ ] Domain shows in your Namecheap dashboard

### Step 2: Configure Vercel (DO THIS FIRST)
**Go to:** https://vercel.com/bhuvankumar17s-projects/blue-rays/settings/environment-variables

**Add these 4 environment variables:**

1. **RESEND_API_KEY**
   - Value: `re_GZ8DrCT9_ATacSd16zfgQKATtuR197rqC`
   - Environments: ✅ Production ✅ Preview ✅ Development

2. **CONTACT_EMAIL**
   - Value: `blueraysdata@gmail.com`
   - Environments: ✅ Production ✅ Preview ✅ Development

3. **MONGODB_URI**
   - Value: `mongodb+srv://blueraysdata_db_user:WBzzUtxxTksLO9u6@cluster0.7k41sim.mongodb.net/bluerays_db?retryWrites=true&w=majority&ssl=true&authSource=admin`
   - Environments: ✅ Production ✅ Preview ✅ Development

4. **MONGODB_DB**
   - Value: `bluerays_db`
   - Environments: ✅ Production ✅ Preview ✅ Development

### Step 3: Add Domain to Vercel
**Go to:** https://vercel.com/bhuvankumar17s-projects/blue-rays/settings/domains

1. Click "Add" button
2. Enter: `blueraysgreenenergy.com`
3. Click "Add"
4. Vercel will show you DNS configuration instructions
5. Also add: `www.blueraysgreenenergy.com`

### Step 4: Configure DNS in Namecheap
**After domain purchase is complete:**

1. Login to Namecheap: https://ap.www.namecheap.com/
2. Go to **Domain List**
3. Click **Manage** next to blueraysgreenenergy.com
4. Go to **Advanced DNS** tab
5. Click **Add New Record** and add these:

#### Record 1: Root Domain
- **Type:** A Record
- **Host:** @
- **Value:** 76.76.21.21
- **TTL:** Automatic

#### Record 2: WWW Subdomain
- **Type:** CNAME Record
- **Host:** www
- **Value:** cname.vercel-dns.com.
- **TTL:** Automatic

#### Optional: Email Records (if you want email)
- **Type:** MX Record
- **Host:** @
- **Value:** (depends on your email provider)
- **Priority:** 10

6. **Save All Changes**

### Step 5: Wait for DNS Propagation
- **Time:** 5-30 minutes (usually faster)
- **Check Status:** https://dnschecker.org/#A/blueraysgreenenergy.com

### Step 6: Redeploy to Vercel
After environment variables are added, run in terminal:
```bash
vercel --prod
```

## 🌐 Your URLs After Setup

| URL | Status | Purpose |
|-----|--------|---------|
| https://blueraysgreenenergy.com | ⏳ Pending DNS | Primary Domain |
| https://www.blueraysgreenenergy.com | ⏳ Pending DNS | WWW Version |
| https://blue-rays.vercel.app | ✅ Active | Vercel Default |

## ✅ Verification Steps

After DNS propagation:

1. **Test Main Domain:**
   ```
   https://blueraysgreenenergy.com
   ```

2. **Test WWW:**
   ```
   https://www.blueraysgreenenergy.com
   ```

3. **Test Contact Form:**
   - Go to: https://blueraysgreenenergy.com/contact
   - Fill and submit form
   - Check email at: blueraysdata@gmail.com

4. **Test All Pages:**
   - Home: https://blueraysgreenenergy.com
   - About: https://blueraysgreenenergy.com/about
   - Products: https://blueraysgreenenergy.com/products
   - Gallery: https://blueraysgreenenergy.com/gallery
   - Residential: https://blueraysgreenenergy.com/residential
   - Commercial: https://blueraysgreenenergy.com/commercial
   - Contact: https://blueraysgreenenergy.com/contact

## 🔒 SSL Certificate

Vercel automatically provides:
- ✅ Free SSL certificate
- ✅ Automatic HTTPS redirect
- ✅ Certificate renewal

## 📧 Email Configuration Status

Current setup:
- ✅ Contact form sends to: blueraysdata@gmail.com
- ✅ Resend API configured
- ✅ Email tested locally (working!)
- ⏳ Production email (after env vars added)

## 🎯 What You're Getting for $11.48

- ✅ Professional domain name
- ✅ Domain Privacy Protection (included)
- ✅ Free SSL certificate (via Vercel)
- ✅ Unlimited bandwidth (via Vercel)
- ✅ Global CDN (via Vercel)
- ✅ Automatic deployments

## 🆘 Troubleshooting

### Domain not working after 30 minutes?
1. Check DNS records in Namecheap
2. Verify A record points to: 76.76.21.21
3. Check DNS propagation: https://dnschecker.org
4. Make sure domain is added in Vercel dashboard

### Contact form not working?
1. Check Vercel environment variables are set
2. Check browser console for errors
3. Verify email at blueraysdata@gmail.com (check spam folder)

### SSL certificate not showing?
1. Wait 24 hours for Vercel to issue certificate
2. Make sure domain is verified in Vercel
3. Try hard refresh: Ctrl + Shift + R

## 📞 Support

- **Namecheap Support:** https://www.namecheap.com/support/
- **Vercel Support:** https://vercel.com/help
- **Resend Support:** https://resend.com/docs

---

**Next Steps:**
1. ✅ Complete purchase on Namecheap
2. ✅ Add environment variables in Vercel
3. ✅ Add domain in Vercel
4. ✅ Configure DNS in Namecheap
5. ✅ Wait for DNS propagation
6. ✅ Test your live site!
