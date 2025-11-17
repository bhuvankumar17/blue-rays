# Vercel Environment Variables Setup

## Quick Setup via Vercel Dashboard

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/bhuvankumar17s-projects/blue-rays/settings/environment-variables

2. **Update/Add These Environment Variables:**

### MONGODB_URI
```
mongodb+srv://blueraysdata_db_user:WBzzUtxxTksLO9u6@cluster0.7k41sim.mongodb.net/bluerays_db?retryWrites=true&w=majority&ssl=true&authSource=admin
```
- Environment: Production, Preview, Development

### MONGODB_DB
```
bluerays_db
```
- Environment: Production, Preview, Development

### RESEND_API_KEY
```
re_GZ8DrCT9_ATacSd16zfgQKATtuR197rqC
```
- Environment: Production, Preview, Development

### CONTACT_EMAIL
```
blueraysdata@gmail.com
```
- Environment: Production, Preview, Development

## Steps:
1. Click "Add New" button
2. Enter the variable name (e.g., RESEND_API_KEY)
3. Enter the value
4. Select all environments: Production, Preview, Development
5. Click "Save"
6. Repeat for each variable

## After Adding Variables:
Run this command to redeploy:
```bash
vercel --prod
```

## Domain Configuration for blueraysgreenenergy.com

Once you purchase the domain from Namecheap:

### In Vercel Dashboard:
1. Go to: https://vercel.com/bhuvankumar17s-projects/blue-rays/settings/domains
2. Click "Add" button
3. Enter: `blueraysgreenenergy.com`
4. Click "Add"
5. Also add: `www.blueraysgreenenergy.com`

### In Namecheap Dashboard:
1. Login to Namecheap
2. Go to Domain List → blueraysgreenenergy.com → Manage
3. Go to "Advanced DNS" tab
4. Add these records:

**A Record:**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21`
- TTL: Automatic

**A Record for www:**
- Type: `A Record`
- Host: `www`
- Value: `76.76.21.21`
- TTL: Automatic

**CNAME Record (Alternative for www):**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com.`
- TTL: Automatic

5. Wait 5-30 minutes for DNS propagation
6. Your site will be live at https://blueraysgreenenergy.com

## Verify Setup:
- Production URL: https://blue-rays.vercel.app
- Custom Domain: https://blueraysgreenenergy.com (after DNS setup)
