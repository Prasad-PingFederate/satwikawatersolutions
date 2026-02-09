# Satwika Water Solutions Website

A modern, responsive website for Satwika Water Solutions - your trusted water purifier provider.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **SEO Optimized**: Built-in local SEO with Schema markup for Google Maps
- **Fast Loading**: Optimized performance for quick page loads
- **Interactive**: Smooth scrolling, animations, and user-friendly forms
- **WhatsApp Integration**: Direct contact via WhatsApp button
- **Contact Form**: Easy-to-use contact form for inquiries

## 📋 Before You Start

Make sure you have:
- A GitHub account (free at [github.com](https://github.com))
- A Vercel account (free at [vercel.com](https://vercel.com))
- Your business information ready (address, phone, email, location coordinates)

## 🚀 Step-by-Step Deployment Guide

### Step 1: Customize Your Website

Before deploying, update the following information in the files:

#### In `index.html`:
1. **Phone Numbers**: Replace `+91-XXXXXXXXXX` with your actual phone number (appears in multiple places)
2. **Email**: Replace `info@satwikawatersolutions.com` with your email
3. **Address**: Update the address in the contact section and Schema markup
4. **Location Coordinates**: 
   - Get your coordinates from [Google Maps](https://www.google.com/maps)
   - Right-click on your business location → Click on the coordinates
   - Replace `latitude: 0.0000` and `longitude: 0.0000` in the Schema markup
5. **Social Media**: Add your Facebook/Instagram URLs in the Schema markup

#### WhatsApp Integration:
Replace `91XXXXXXXXXX` with your WhatsApp number in:
- The floating WhatsApp button
- The contact section WhatsApp button
- Update in `script.js` as well (line 82)

### Step 2: Create a GitHub Repository

1. **Sign in to GitHub** at [github.com](https://github.com)

2. **Create a new repository**:
   - Click the "+" icon in the top right → "New repository"
   - Repository name: `satwikawatersolutions`
   - Description: "Official website for Satwika Water Solutions"
   - Make it **Public**
   - ✅ Check "Add a README file"
   - Click "Create repository"

3. **Upload your files**:
   - Click "Add file" → "Upload files"
   - Drag and drop all these files:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Write commit message: "Initial website upload"
   - Click "Commit changes"

### Step 3: Deploy to Vercel

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Find your `satwikawatersolutions` repository
   - Click "Import"

3. **Configure and deploy**:
   - Project Name: `satwikawatersolutions`
   - Framework Preset: Leave as "Other"
   - Root Directory: `./`
   - Click "Deploy"

4. **Wait for deployment** (usually takes 1-2 minutes)

5. **Your site is live!**
   - You'll get a URL like: `satwikawatersolutions.vercel.app`
   - Click "Visit" to see your website

### Step 4: Add Custom Domain (Optional)

1. **In Vercel dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter: `satwikawatersolutions.com`
   - Follow the instructions to configure DNS

2. **Configure domain at your registrar**:
   - Add the DNS records provided by Vercel
   - Wait 24-48 hours for DNS propagation

## 📍 Getting on Google Maps

### Step 1: Create Google Business Profile

1. **Go to Google Business Profile**:
   - Visit [business.google.com](https://business.google.com)
   - Click "Manage now"
   - Sign in with your Google account

2. **Add your business**:
   - Business name: `Satwika Water Solutions`
   - Category: Select "Water Purification Company" or "Water Treatment Supplier"
   - Add location: ✅ Yes (check this)
   - Enter your complete business address

3. **Add contact details**:
   - Phone number
   - Website: `https://satwikawatersolutions.com` (or your Vercel URL)
   - Opening hours

4. **Verify your business**:
   - Google will send a verification code (by postcard, phone, or email)
   - Enter the code to verify

### Step 2: Optimize Your Listing

1. **Add photos**:
   - Business logo
   - Office/store photos
   - Product photos
   - Team photos

2. **Write a description**:
   - Describe your water purifier services
   - Mention areas you serve
   - Include keywords like "water purifier", "RO system", etc.

3. **Add attributes**:
   - Service options (in-store, delivery, installation)
   - Payment methods
   - Accessibility features

4. **Add services**:
   - List all your services (installation, maintenance, repair)
   - Add pricing if possible

5. **Get reviews**:
   - Ask satisfied customers to leave reviews
   - Respond to all reviews (positive and negative)

### Step 3: Local SEO Tips

1. **Consistent NAP** (Name, Address, Phone):
   - Use the same business information everywhere
   - Match exactly with your website

2. **Create content**:
   - Blog about water purification tips
   - Share on social media
   - Answer common questions

3. **Get backlinks**:
   - List in local directories
   - Partner with local businesses
   - Join local business associations

4. **Use Google Posts**:
   - Post updates, offers, and news regularly
   - Include photos and call-to-action

## 📱 Testing Your Website

1. **Check responsiveness**:
   - Open on phone, tablet, and desktop
   - Test all buttons and forms
   - Ensure WhatsApp button works

2. **Test form**:
   - Fill out the contact form
   - Check if it submits correctly
   - Test all input fields

3. **Check SEO**:
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Aim for 90+ score
   - Fix any issues it suggests

4. **Verify Schema markup**:
   - Use [Rich Results Test](https://search.google.com/test/rich-results)
   - Paste your URL
   - Check for errors

## 🔄 Making Updates

### Update content:

1. **Edit files on GitHub**:
   - Go to your repository
   - Click on the file you want to edit
   - Click the pencil icon (Edit)
   - Make your changes
   - Click "Commit changes"

2. **Automatic deployment**:
   - Vercel automatically deploys changes from GitHub
   - Wait 1-2 minutes for the update to go live

### Update via Git (Advanced):

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/satwikawatersolutions.git
cd satwikawatersolutions

# Make changes to files

# Commit and push
git add .
git commit -m "Updated contact information"
git push origin main
```

## 🎨 Customization Ideas

- Add more product images (replace placeholders)
- Add customer testimonials section
- Include before/after water quality comparisons
- Add a gallery of installations
- Create a blog section
- Add pricing tables
- Include water testing information
- Add FAQ section

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking code
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🆘 Troubleshooting

### Website not updating?
- Clear browser cache (Ctrl + Shift + Delete)
- Check Vercel deployment status
- Verify GitHub changes were committed

### Form not working?
- Check console for errors (F12 → Console)
- Verify all input fields have correct names
- Consider using a form service like Formspree or Web3Forms

### Not showing on Google Maps?
- Ensure business is verified
- Wait 1-2 weeks after verification
- Check if address is correct
- Ensure website URL is added to Google Business Profile

## 📞 Need Help?

If you run into any issues:
1. Check the Vercel deployment logs
2. Inspect browser console for errors
3. Verify all files are uploaded correctly
4. Double-check all customizations

## 📝 Maintenance Checklist

- [ ] Update contact information
- [ ] Add real product images
- [ ] Test contact form monthly
- [ ] Update Google Business Profile weekly
- [ ] Respond to customer reviews
- [ ] Check website speed quarterly
- [ ] Update content seasonally
- [ ] Backup files regularly

## 🎉 You're All Set!

Your website is now live and ready to attract customers! Make sure to:
- Share your website on social media
- Add the URL to business cards
- Include in email signatures
- Print on marketing materials

Good luck with Satwika Water Solutions! 💧
