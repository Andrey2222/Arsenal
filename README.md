# 🎭 Arsenal Minerals Website with Framer Motion Animations

A modern, animated website for Arsenal Minerals Limited built with React and Framer Motion, featuring smooth fade-in and slide-up animations that trigger when sections enter the viewport.

## ✨ Features

- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Professional animation library for smooth transitions
- **Scroll-triggered animations** - Each section animates when it comes into view
- **One-time triggers** - Animations only happen once per section
- **Responsive design** - Mobile-first approach with smooth animations
- **Performance optimized** - Uses Intersection Observer for efficient animations

## 🚀 Animation System

### **Fade-In + Slide-Up Effects**
- **Hero Section**: Staggered bounce-in animations with scale effects
- **Products Section**: Smooth fade-in-up with staggered card animations
- **About Section**: Text reveals with sequential timing
- **Contact Section**: Slide-in from left and right directions
- **Downloads Section**: Grid items animate with staggered delays
- **Footer**: Smooth fade-in-up entrance

### **Animation Types**
- `fade-in-up` - Main animation for all sections
- `slide-left/right` - Directional slide effects
- `scale-in` - Smooth scaling for titles
- `bounce-in` - Playful entrance for hero elements
- `staggered` - Sequential timing for multiple elements

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Animations**: Framer Motion 10
- **Styling**: CSS3 with custom animations
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with entrance animation
│   ├── Hero.jsx        # Hero section with staggered animations
│   ├── Products.jsx    # Products with scroll-triggered animations
│   ├── About.jsx       # About section with text reveals
│   ├── Contact.jsx     # Contact forms with slide animations
│   ├── Downloads.jsx   # Downloads with grid animations
│   └── Footer.jsx      # Footer with smooth entrance
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles and animations
```

## 🔧 Installation & Setup

### **1. Install Dependencies**
```bash
npm install
```

### **2. Start Development Server**
```bash
npm run dev
```

### **3. Build for Production**
```bash
npm run build
```

### **4. Preview Production Build**
```bash
npm run preview
```

## 🎯 How Animations Work

### **Intersection Observer**
- Uses `useInView` hook from Framer Motion
- Triggers when 10% of section is visible
- `once: true` ensures animation only happens once

### **Animation Variants**
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // 0.2s delay between children
      delayChildren: 0.1     // 0.1s initial delay
    }
  }
}
```

### **Scroll-Triggered Animation**
```jsx
const isInView = useInView(ref, { once: true, threshold: 0.1 })

<motion.section
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={containerVariants}
>
```

## 🎨 Customization

### **Animation Timing**
- **Duration**: 0.8s for main animations
- **Stagger**: 0.2s between elements
- **Easing**: "easeOut" for smooth feel

### **Threshold Values**
- **0.1**: Triggers when 10% visible
- **0.5**: Triggers when 50% visible
- **1.0**: Triggers when fully visible

### **Adding New Animations**
```jsx
const customVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

## 📱 Responsive Features

- **Mobile-first design** with smooth animations
- **Touch-friendly** interactions
- **Performance optimized** for mobile devices
- **Responsive breakpoints** at 768px and 480px

## ⚡ Performance Features

- **Intersection Observer** - Efficient scroll detection
- **One-time triggers** - No repeated animations
- **Hardware acceleration** - CSS transforms for smooth performance
- **Debounced animations** - Optimized for 60fps

## 🌟 Browser Support

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **React 18**: Full support for all modern features
- **Framer Motion**: Hardware-accelerated animations
- **CSS Grid & Flexbox**: Modern layout systems

## 🐛 Troubleshooting

### **Common Issues**

1. **Animations not working:**
   - Check if `useInView` hook is properly configured
   - Verify `ref` is attached to the element
   - Ensure `once: true` is set for one-time triggers

2. **Performance issues:**
   - Reduce animation complexity on mobile
   - Use `will-change: transform` for heavy animations
   - Consider reducing stagger delays

3. **Build errors:**
   - Clear `node_modules` and reinstall
   - Check Vite configuration
   - Verify React and Framer Motion versions

### **Debug Mode**
```jsx
// Add console logs to track animation states
console.log('Section in view:', isInView)
console.log('Animation state:', animationState)
```

## 📝 Development Notes

- **Hot reload** enabled with Vite
- **ES6+ features** fully supported
- **CSS modules** available for component styling
- **TypeScript** can be added for type safety

## 🤝 Contributing

Feel free to:
- Add new animation types
- Improve performance
- Add more customization options
- Report bugs or issues

---

**Built with ❤️ using React + Framer Motion for smooth, engaging user experiences!**

## 🚀 Quick Start

```bash
# Clone and install
git clone <repository>
cd arsenal-minerals-website
npm install

# Start development
npm run dev

# Open http://localhost:3000
```

Your Arsenal Minerals website now features professional, smooth animations that trigger exactly once when each section enters the viewport! 🎉
