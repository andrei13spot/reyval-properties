# Reyval Properties Website

A modern, responsive real estate website built with HTML, CSS, and JavaScript. This website showcases Reyval Properties' services and provides an interactive experience for potential clients.

## Features

### 🏠 Core Features
- **Responsive Design**: Fully responsive across all devices
- **Lead Capture Modal**: Appears after 3 seconds to capture visitor information
- **Interactive Chatbot**: AI-powered assistant for real estate inquiries
- **Smooth Scrolling Navigation**: Seamless navigation between sections
- **Contact Forms**: Functional contact and lead capture forms
- **FAQ System**: Tabbed FAQ section for different client types

### 🎨 Design Elements
- **Custom Color Palette**: 
  - Cream: `#f3f0e8`
  - Dark Purple: `#392f51`
  - Burgundy: `#6c334b`
  - Red: `#a03746`
  - Bright Red: `#d43c41`
- **Modern Typography**: Inter font family
- **Smooth Animations**: CSS transitions and hover effects
- **Professional Layout**: Clean, modern design inspired by luxury real estate

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Services**: Sell, Buy, and Rent service cards
3. **About Us**: Mission, Vision, and Company Story
4. **Properties**: Service showcase with property cards
5. **Reviews**: Client testimonials with star ratings
6. **FAQ**: Tabbed questions for Sellers, Buyers, and Renters
7. **Contact**: Contact information and contact form
8. **Footer**: Links and company information

### 🤖 Chatbot Features
- **Real-time Responses**: Instant replies to common questions
- **Context Awareness**: Understands selling, buying, and renting inquiries
- **Contact Information**: Provides company contact details
- **Professional Tone**: Maintains professional real estate expertise

## File Structure

```
reyval-properties/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Installation
1. Download or clone the repository
2. Open `index.html` in your web browser
3. The website will load with all functionality

### Local Development
To run locally:
1. Navigate to the project directory
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## Customization

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --cream: #f3f0e8;
    --dark-purple: #392f51;
    --burgundy: #6c334b;
    --red: #a03746;
    --bright-red: #d43c41;
}
```

### Content
- Update company information in `index.html`
- Modify chatbot responses in `script.js`
- Change images by replacing URLs in the HTML

### Contact Information
Update contact details in multiple locations:
- Navigation
- Contact section
- Footer
- Chatbot responses

## Features in Detail

### Lead Capture Modal
- Appears 3 seconds after page load
- Captures: First Name, Last Name, Phone, Email
- Stores submission in localStorage to prevent re-showing
- Success message after submission

### Chatbot Intelligence
The chatbot can handle:
- **Greetings**: Hello, Hi, Hey
- **Selling**: Questions about selling properties
- **Buying**: Questions about buying properties
- **Renting**: Questions about rental properties
- **Contact**: Requests for contact information
- **Default**: General real estate questions

### Form Validation
- Required field validation
- Visual feedback for errors
- Success messages
- Form reset after submission

### Responsive Design
- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted grid layouts
- **Mobile**: Single column layout with hamburger menu

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- Optimized images from Unsplash
- Minified CSS and JavaScript (recommended for production)
- Lazy loading for images (can be implemented)
- Fast loading times

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Proper heading hierarchy
- Fast loading times

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus management
- ARIA labels where needed

## Future Enhancements

### Potential Additions
- **Property Search**: Advanced property filtering
- **Virtual Tours**: 360° property views
- **Mortgage Calculator**: Payment calculator
- **Newsletter Signup**: Email marketing integration
- **Social Media Integration**: Share properties
- **Multi-language Support**: International clients
- **Property Database**: Backend integration
- **User Accounts**: Client portals

### Technical Improvements
- **CMS Integration**: Content management system
- **API Backend**: RESTful API for dynamic content
- **Database**: Property portfolio database
- **Email Integration**: Automated email responses
- **Analytics**: Google Analytics integration
- **CDN**: Content delivery network
- **SSL Certificate**: HTTPS security

## Contact Information

**Reyval Properties**
- **Phone**: (323) 555-4821
- **Email**: reyvalproperties@gmail.com
- **Website**: www.reyvalproperties.com
- **Address**: 4821 Pacific Crest Ave, Los Angeles, CA 90017

## License

This project is created for Reyval Properties. All rights reserved.

## Disclaimer

This is a test website for demonstration purposes only.

---

**Built with ❤️ for Reyval Properties**
