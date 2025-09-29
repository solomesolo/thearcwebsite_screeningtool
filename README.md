# TheArc Website + Screening Tool Integration

## 🎯 Overview

A complete health screening platform combining TheArc's longevity website with a comprehensive health assessment tool. Users can seamlessly navigate from TheArc's main site to a personalized screening questionnaire and receive detailed health recommendations.

## ✨ Key Features

### 🌐 TheArc Website
- **Modern Next.js application** with DNA particle animations
- **Responsive design** optimized for all devices
- **"Screening Check" button** in header for easy access
- **Professional longevity content** and community features

### 🔍 Right Screening Finder
- **TheArc branding** - Consistent header and footer
- **Dark theme design** matching TheArc's aesthetic
- **Complete questionnaire flow** with personalized questions
- **AI-powered analysis** using ChatGPT integration
- **PDF generation** with matching dark theme styling
- **Email delivery** via SendGrid integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+
- SendGrid API key (for email functionality)

### Installation

```bash
# Clone the repository
git clone https://github.com/solomesolo/thearcwebsite_screeningtool.git
cd thearcwebsite_screeningtool

# Install all dependencies
npm run install:all

# Start all services
npm run dev
```

### Access Points
- **TheArc Website**: http://localhost:3000
- **Screening Tool**: http://localhost:8085  
- **Backend API**: http://localhost:3001

## 🔄 User Journey

1. **Start at TheArc** → Visit the main longevity website
2. **Click "Screening Check"** → Opens screening tool in new tab
3. **Complete Assessment** → Answer personalized health questions
4. **Receive Results** → Get AI-generated health recommendations
5. **Download PDF** → Save personalized screening plan

## 🎨 Design Integration

### Consistent Branding
- **Unified header/footer** across both tools
- **Dark gradient backgrounds** for professional appearance
- **Fuchsia/blue color scheme** for visual consistency
- **Montserrat typography** throughout

### Responsive Design
- **Mobile-first approach** for all components
- **Adaptive layouts** for different screen sizes
- **Touch-friendly interfaces** for mobile users

## 🛠 Technical Stack

### Frontend
- **Next.js 15** (TheArc website)
- **React** with TypeScript
- **Tailwind CSS** for styling
- **Vanilla HTML/CSS/JS** (Screening tool)

### Backend
- **Node.js** API server
- **OpenAI ChatGPT** for health analysis
- **SendGrid** for email delivery
- **Notion** database integration (optional)

### Styling & UX
- **Glassmorphism effects** for modern UI
- **Smooth animations** and transitions
- **Professional color schemes**
- **Accessible design patterns**

## 📁 Project Structure

```
thearcwebsite_screeningtool/
├── next-app/                                    # TheArc website (Next.js)
│   ├── src/app/page.tsx                        # Main page with Screening Check button
│   ├── src/components/                          # React components
│   └── website-extension-backup-20250918-104005/
│       └── questionnaire-extension/            # Screening tool
│           ├── public/                         # Frontend files
│           │   ├── index.html                  # Landing page
│           │   ├── questionnaire.html          # Main assessment
│           │   └── results.html                # Results with PDF
│           └── backend/                        # Node.js API
│               ├── server.js                  # Main server
│               └── package.json               # Dependencies
├── package.json                                # Root package configuration
├── DEPLOYMENT_GUIDE.md                         # Detailed deployment instructions
└── README.md                                  # This file
```

## 🔧 Configuration

### Environment Variables
Create `.env` file in the backend directory:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_from_email@domain.com
OPENAI_API_KEY=your_openai_api_key
NOTION_API_KEY=your_notion_api_key (optional)
```

### Email Setup
1. Sign up for SendGrid account
2. Generate API key
3. Configure sender email
4. Update environment variables

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Deploy TheArc website
cd next-app
vercel deploy

# Deploy screening tool as separate project
cd website-extension-backup-20250918-104005/questionnaire-extension/public
vercel deploy
```

### Netlify
```bash
# Build and deploy
npm run build
# Upload to Netlify
```

### Self-hosted
```bash
# Production build
npm run build
# Start services
npm start
```

## 📊 Features

### TheArc Website
- ✅ **DNA particle animations** for visual appeal
- ✅ **Responsive design** for all devices
- ✅ **Screening Check integration** with seamless navigation
- ✅ **Professional content** about longevity and health
- ✅ **Community features** and membership options

### Screening Tool
- ✅ **Personalized questionnaire** based on user profile
- ✅ **AI-powered analysis** using ChatGPT
- ✅ **Professional results** with actionable recommendations
- ✅ **PDF generation** with matching dark theme
- ✅ **Email delivery** of results
- ✅ **TheArc branding** throughout the experience

## 🎯 User Experience

### Seamless Integration
- **One-click access** from TheArc to screening tool
- **Consistent branding** across both platforms
- **Smooth navigation** between tools
- **Professional appearance** throughout

### Health Assessment
- **Comprehensive questions** covering all health aspects
- **Personalized recommendations** based on responses
- **Professional results** with clear next steps
- **Downloadable PDF** for offline reference

## 📱 Mobile Optimization

- **Touch-friendly interfaces** for mobile users
- **Responsive layouts** for all screen sizes
- **Fast loading times** on mobile networks
- **Optimized images** and assets

## 🔒 Security & Privacy

- **GDPR compliant** data handling
- **Secure API endpoints** with proper authentication
- **Email privacy** protection
- **Data encryption** in transit

## 📈 Performance

- **Fast loading times** with optimized assets
- **Efficient API responses** with caching
- **Mobile optimization** for better UX
- **SEO-friendly** structure

## 🎉 Success Metrics

The integration provides:
- **Unified user experience** across platforms
- **Professional health assessment** capabilities
- **Seamless navigation** between tools
- **Brand consistency** throughout
- **Mobile optimization** for accessibility

## 📞 Support

For technical support or questions about the integration:
- Check the `DEPLOYMENT_GUIDE.md` for detailed instructions
- Review individual component documentation
- Contact the development team for assistance

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact the development team or refer to the project documentation.

---

**Status**: ✅ Production Ready  
**Last Updated**: September 29, 2025  
**Version**: 1.0.0
