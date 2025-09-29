# TheArc Website + Screening Tool - Deployment Guide

## 🚀 Complete Integration Package

This repository contains the fully integrated TheArc website with the Right Screening Finder tool.

## 📁 Project Structure

```
TheArc_website/
├── next-app/                                    # Main TheArc website (Next.js)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx                        # Main page with Screening Check button
│   │   │   └── layout.tsx                      # Layout with analytics
│   │   └── components/                         # React components
│   └── website-extension-backup-20250918-104005/
│       └── questionnaire-extension/            # Screening tool
│           ├── public/                         # Frontend files
│           │   ├── index.html                 # Landing page with TheArc styling
│           │   ├── consent.html               # Consent page
│           │   ├── questionnaire.html         # Main questionnaire
│           │   ├── email-collection.html      # Email collection
│           │   ├── loading.html               # Loading page
│           │   └── results.html               # Results with PDF download
│           └── backend/                       # Node.js API
│               ├── server.js                  # Main server
│               ├── package.json               # Dependencies
│               └── .env                       # Environment variables
```

## 🔧 Setup Instructions

### 1. TheArc Website (Next.js)
```bash
cd next-app
npm install
npm run dev
# Runs on http://localhost:3000
```

### 2. Screening Tool Backend
```bash
cd next-app/website-extension-backup-20250918-104005/questionnaire-extension/backend
npm install
npm start
# Runs on http://localhost:3001
```

### 3. Screening Tool Frontend
```bash
cd next-app/website-extension-backup-20250918-104005/questionnaire-extension/public
npx http-server . -p 8085 -o
# Runs on http://localhost:8085
```

## 🌐 Live URLs

- **TheArc Website**: http://localhost:3000
- **Screening Tool**: http://localhost:8085
- **Backend API**: http://localhost:3001

## ✨ Key Features

### TheArc Website
- ✅ Modern Next.js application
- ✅ DNA particle animations
- ✅ Responsive design
- ✅ **NEW**: "Screening Check" button in header
- ✅ Links to screening tool in new tab

### Screening Tool
- ✅ **TheArc branding** - Same header and footer
- ✅ **Dark theme** - Matches TheArc design
- ✅ **Complete questionnaire flow**
- ✅ **PDF generation** - Dark-themed PDF matching results page
- ✅ **Email integration** - SendGrid API
- ✅ **Responsive design**

## 🔄 User Flow

1. **Start at TheArc**: http://localhost:3000
2. **Click "Screening Check"** → Opens screening tool in new tab
3. **Complete questionnaire** → Full health assessment
4. **Get results** → Personalized screening plan
5. **Download PDF** → Dark-themed PDF with same styling

## 🎨 Design Integration

### Header & Footer
- **Logo**: "TheArc" branding
- **Navigation**: "Screening Check" (blue) + "Apply to Join" (fuchsia)
- **Footer**: Privacy Policy, Terms, Social Media links
- **Styling**: Dark background matching page theme

### PDF Generation
- **Same dark theme** as results page
- **Glassmorphism effects**
- **Gradient text** and styling
- **Professional layout**

## 🛠 Technical Stack

### Frontend
- **Next.js 15** (TheArc website)
- **React** components
- **Tailwind CSS** styling
- **Vanilla HTML/CSS/JS** (Screening tool)

### Backend
- **Node.js** API server
- **SendGrid** email service
- **OpenAI** ChatGPT integration
- **Notion** database (optional)

### Styling
- **Montserrat** font family
- **Dark gradient** backgrounds
- **Fuchsia/blue** color scheme
- **Glassmorphism** effects

## 📧 Email Configuration

The backend uses SendGrid for email delivery. Configure in `.env`:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_from_email@domain.com
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Deploy TheArc website to Vercel
2. Deploy screening tool to Vercel as separate project
3. Update URLs in TheArc header

### Option 2: Netlify
1. Deploy both projects to Netlify
2. Configure custom domains
3. Set up environment variables

### Option 3: Self-hosted
1. Deploy to your own server
2. Configure reverse proxy
3. Set up SSL certificates

## 🔗 Integration Points

### TheArc → Screening Tool
- **Button**: "Screening Check" in header
- **URL**: Opens http://localhost:8085 in new tab
- **Styling**: Blue button to differentiate from main CTA

### Screening Tool → TheArc
- **Header**: Same "TheArc" logo and styling
- **Footer**: Same links and social media
- **Theme**: Consistent dark background

## 📱 Responsive Design

Both tools are fully responsive:
- **Mobile**: Optimized layouts
- **Tablet**: Adaptive grids
- **Desktop**: Full feature set

## 🎯 User Experience

### Seamless Integration
- **Consistent branding** across both tools
- **Smooth navigation** between tools
- **Professional appearance**
- **Mobile-friendly** design

### Complete Health Assessment
- **Personalized questions** based on user profile
- **AI-powered analysis** using ChatGPT
- **Professional results** with actionable recommendations
- **PDF download** for offline reference

## 📊 Analytics

TheArc website includes Google Analytics tracking:
- **GA4** integration
- **Event tracking** for button clicks
- **User journey** analysis

## 🔒 Security & Privacy

- **GDPR compliant** data handling
- **Secure API** endpoints
- **Email privacy** protection
- **Data encryption** in transit

## 📈 Performance

- **Fast loading** times
- **Optimized images** and assets
- **Efficient API** responses
- **Caching** strategies

## 🎉 Success Metrics

The integration provides:
- **Unified user experience**
- **Professional health assessment**
- **Seamless navigation**
- **Brand consistency**
- **Mobile optimization**

## 📞 Support

For technical support or questions about the integration, please refer to the individual component documentation or contact the development team.

---

**Deployment Status**: ✅ Ready for production
**Last Updated**: September 29, 2025
**Version**: 1.0.0
