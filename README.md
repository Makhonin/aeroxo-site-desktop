# Aeroxo Website

A modern, responsive website for Aeroxo - a Russian drone technology company specializing in unmanned aerial vehicles (UAVs) with tilt-rotor technology.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Full-page scrolling with custom animations
- **Interactive Elements**: 360-degree drone viewer, contact forms, Google Maps integration
- **Multi-language Support**: Russian content with English structure
- **Modern UI/UX**: Clean, professional design with smooth transitions

## File Structure

```
aeroxo-site-desktop/
├── index.html          # Main homepage
├── about.html          # About/Team page
├── contact.html        # Contact page with form and map
├── tech.html           # Technology showcase page
├── mailsender.php      # PHP backend for contact form
├── .htaccess           # Apache configuration
├── css/                # Stylesheets
│   ├── common-styles.css
│   ├── index.css
│   ├── about.css
│   ├── contact.css
│   ├── tech.css
│   ├── style.css
│   ├── font-styles.css
│   ├── mobile.css
│   └── fonts/          # Custom fonts
├── js/                 # JavaScript files
│   ├── main.js         # Main navigation and animations
│   ├── index.js        # Homepage specific functionality
│   ├── contact.js      # Contact form and map functionality
│   ├── tech.js         # Technology page animations
│   ├── utils.js        # Shared utility functions
│   ├── custom.js       # Custom animations and effects
│   └── [other libs]    # Third-party libraries
└── img/                # Images and media assets
    ├── home/           # Homepage images
    ├── about/          # About page images
    ├── contact/        # Contact page images
    └── techpage/       # Technology page images
```

## Recent Code Improvements

### JavaScript Enhancements
- **Code Formatting**: Fixed missing semicolons, improved spacing, and consistent formatting
- **Variable Declarations**: Added proper `var` declarations to prevent global scope pollution
- **Code Organization**: Extracted duplicate smooth scrolling function into `utils.js`
- **Performance**: Improved code readability and maintainability

### PHP Improvements
- **Code Formatting**: Consistent indentation and spacing
- **Security**: Proper input sanitization and validation maintained
- **Structure**: Cleaner code organization

### HTML Improvements
- **Formatting**: Consistent indentation and spacing
- **Accessibility**: Maintained semantic structure
- **Performance**: Removed unused duplicate file (`index1.html`)

### File Management
- **Removed Duplicates**: Deleted unused `index1.html` file
- **Shared Utilities**: Created `utils.js` for common functions
- **Script Organization**: Proper script loading order maintained

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Backend**: PHP
- **Libraries**: 
  - jQuery UI
  - Velocity.js (animations)
  - SpriteSpin (360-degree viewer)
  - Google Maps API
- **Fonts**: Custom Aeroxo icon font, LeelawUI

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Setup Instructions

1. Upload files to a web server with PHP support
2. Ensure `.htaccess` is properly configured
3. Configure Google Maps API key in `contact.html` if needed
4. Test contact form functionality

## Contact

For technical support or questions about the website, contact the development team.

---

**Note**: This website is designed for Aeroxo's drone technology showcase and business presentation. All content and branding are property of Aeroxo.
 
