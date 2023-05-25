# Reveal.js with Tailwind CSS and Simform Theme

![Simform Solutions](https://www.simform.com/wp-content/uploads/2019/07/simform-logo.png)

Reveal.js project that utilizes the power of Tailwind CSS to create impressive HTML presentation slides for Simform.

### Getting Started

Follow these steps to get started.

- Clone the repo `git clone https://github.com/dixitSimform/revealjs-simform.git`
- Open the project directory `cd revealjs-simform`
- Customize or add the theme by editing `src/css/style.css`
- Run the CLI tool to build css using `npx tailwindcss -i ./src/css/style.css -o ./dist/css/style.css --watch`
- Launch the presentation with `Go Live` vscode extensions on `src/index.html`
- Access the presentation in your browser at `http://127.0.0.1:5501/`

### What's included

- **/dist/** - Generated assets which used on page
- **/revealjs/** - All CSS/JS/Plugin files from [Reveal.js](https://revealjs.com/)
- **/src/**
  - /CSS/style.css - Tailwind CSS with directives and Simform components theme
  - index.html - HTML presentation with different slides
- **/tailwind.config.js/** - Customize Tailwind default theme

### Acknowledgments

We would like to express our gratitude to the developers of [Reveal.js](https://revealjs.com/) and [Tailwind CSS](https://tailwindcss.com/) for their incredible tools and resources that made this project possible.
