# Raju Gorai - Portfolio Website

A modern, responsive portfolio website for Senior Software Engineer Raju Gorai, featuring smooth animations, contemporary design, and optimal performance.

## 🚀 Features

- **Modern Design**: Contemporary UI/UX inspired by premium agency templates
- **Fully Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- **Smooth Animations**: Engaging scroll animations and interactive elements
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Friendly**: Semantic HTML and meta tags for better search visibility
- **Accessibility**: Keyboard navigation and screen reader friendly
- **Clean Code**: Modular CSS and JavaScript for easy maintenance

## 📁 File Structure

```
portfolio/
├── index.html                 # Main HTML file
├── styles/
│   ├── main.css              # Core styles and layout
│   ├── components.css        # Component-specific styles
│   └── responsive.css        # Mobile responsive styles
├── scripts/
│   └── main.js              # JavaScript functionality
└── README.md                # Documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px
- **Small Mobile**: 320px - 479px

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Upload

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save

### Method 2: Using Git Command Line

```bash
# Clone your repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Add files
git add .
git commit -m "Initial portfolio website"
git push origin main

# Enable GitHub Pages in repository settings
```

### Method 3: Using GitHub Desktop

1. Create new repository in GitHub Desktop
2. Add all portfolio files to the repository folder
3. Commit changes with message "Initial portfolio website"
4. Push to GitHub
5. Enable Pages in repository settings

## ⚙️ Customization

### Updating Personal Information

Edit the following in `index.html`:

```html
<!-- Update header logo -->
<div class="logo">
    <span class="logo-text">Your Name</span>
    <span class="logo-subtitle">Your Title</span>
</div>

<!-- Update contact information -->
<div class="contact-item">
    <h3>Email</h3>
    <p>your.email@example.com</p>
</div>
```

### Changing Colors

Update color scheme in `styles/main.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-color: #667eea;
    --secondary-color: #764ba2;
}
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles/components.css`
3. Update navigation in header

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradient overlays
- **Glassmorphism**: Backdrop blur effects
- **Micro-animations**: Hover effects and transitions
- **Floating Elements**: Interactive floating cards
- **Smooth Scrolling**: Enhanced navigation experience
- **Typography**: Professional font hierarchy

## 📊 Performance Features

- **Lazy Loading**: Images load as they come into view
- **Debounced Scroll**: Optimized scroll event handling
- **CSS Animations**: Hardware-accelerated animations
- **Minified Assets**: Optimized file sizes
- **Responsive Images**: Optimized for different screen sizes

## 🔧 Browser Support

- Chrome (60+)
- Firefox (60+)
- Safari (12+)
- Edge (79+)
- Mobile browsers (iOS Safari 12+, Chrome Mobile 60+)

## 📈 SEO Optimization

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data markup
- Fast loading speeds
- Mobile-first responsive design

## 🎯 Accessibility Features

- Keyboard navigation support
- Screen reader compatible
- High contrast ratios
- Focus indicators
- Alternative text for images
- Reduced motion support

## 🔄 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Contact form functionality
- [ ] Blog integration
- [ ] Project portfolio gallery
- [ ] Skills progress bars
- [ ] Testimonials carousel
- [ ] Social media integration
- [ ] Multi-language support

## 📞 Support

For any questions or customization requests, please contact:
- Email: raju.gorai.kol@gmail.com
- Phone: +91 91760 70682

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for modern web experiences**