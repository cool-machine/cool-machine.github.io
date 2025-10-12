# George Gvishiani - Professional Portfolio

A modern, responsive portfolio website showcasing Machine Learning and AI projects.

## Features

- Clean, professional design
- Responsive layout for all devices
- Smooth scrolling and animations
- GitHub integration
- Featured projects showcase
- Skills and expertise highlights

## Local Development

Simply open `index.html` in your browser to view the site locally.

Alternatively, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

Then visit `http://localhost:8000`

## Deployment to GitHub Pages

### Option 1: Deploy to username.github.io

1. Create a repository named `cool-machine.github.io`
2. Push this code to the repository:
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/cool-machine/cool-machine.github.io.git
   git push -u origin main
   ```
3. Your site will be live at `https://cool-machine.github.io`

### Option 2: Deploy to a project repository

1. Create a new repository (e.g., `portfolio`)
2. Push this code to the repository
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://cool-machine.github.io/portfolio`

## Customization

### Update Profile Information
- Edit the bio and skills in `index.html`
- Update the profile image URL if needed

### Add More Projects
Add new project cards in the projects section of `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <span class="project-tag">Language</span>
    </div>
    <p class="project-description">
        Your project description here.
    </p>
    <div class="project-footer">
        <a href="YOUR_GITHUB_URL" target="_blank" class="project-link">
            View on GitHub →
        </a>
    </div>
</div>
```

### Modify Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    /* ... */
}
```

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

## License

© 2025 George Gvishiani. All rights reserved.
