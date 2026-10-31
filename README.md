# Ranjit Hazra — Portfolio Website

A responsive, single-page portfolio for Ranjit Hazra, a developer from Howrah, India. The site introduces Ranjit, presents skills and selected projects, shares learning notes, and provides contact and social links.

**Live site:** [rednarock016.github.io/Portfolio-website](https://rednarock016.github.io/Portfolio-website/)

## Website sections

- **Home:** Introduction, animated role text, profile photo, and social links
- **About:** Background, education, experience, location, and a downloadable PDF resume
- **Skills:** Operating system, productivity tools, editors, programming languages, and data libraries
- **Projects:** Six project cards with summaries and available links
- **Learning notes:** Topics in web development, Python, and data science
- **Contact:** Message form and social links

The interface also includes responsive navigation, light and dark themes (saved in `localStorage`), scroll animations, a preloader, and a back-to-top button.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- [AOS 2.3.1](https://michalsnik.github.io/aos/) for scroll animations
- [Font Awesome 6.3.0](https://fontawesome.com/) for icons
- [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)

There is no build step or package installation. External fonts, icons, and animation assets are loaded from CDNs, so those features need an internet connection.

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Rednarock016/Portfolio-website.git
   cd Portfolio-website
   ```

2. Open `index.html` in a browser, or start a local static server:

   ```bash
   python -m http.server 8080
   ```

3. Visit [http://localhost:8080](http://localhost:8080).

## Project files

```text
Portfolio-website/
├── index.html                         # Page content and JavaScript
├── style.css                          # Layout, responsive styles, and themes
├── Ranjit-Hazra-ATS.pdf               # Downloadable resume
├── Profile pic.png                    # Profile image
├── Ranjit_Hazra_RK__Flyers__Landscape__-removebg-preview.png  # Header logo
├── Prortfolio website.png             # Portfolio project thumbnail
├── ProGEN.png                         # ProGEN project thumbnail
└── img3.jpg … img6.jpg                # Other project thumbnails
```

Keep the page assets alongside `index.html`; the page references them using relative paths.

## Contact form setup

The form uses Formspree. To receive submissions, replace `YOUR_FORM_ID` in the form action in `index.html` with the ID from your Formspree dashboard. The form cannot deliver messages until this is configured.

## Social links

- [GitHub](https://github.com/rednarock016)
- [LinkedIn](https://www.linkedin.com/in/ranjit-hazra-64b341323)
- [Instagram](https://www.instagram.com/rednarock)
- [X](https://x.com/anyuse069)
- [Facebook](https://www.facebook.com/profile.php?id=100039845799332)
