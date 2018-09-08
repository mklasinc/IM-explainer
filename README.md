# NYUAD Interactive Media: Explainer page
IM Explainer Page is an experience aimed at spelling out the vision of the [Interactive Media department at NYU Abu Dhabi](https://nyuad.im/).

### Tech stack
* [p5.js](https://p5js.org/)
* [webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)

### Usage
For development, install the dependencies and run `npm run dev` from your command line. For production, run `npm run build`. 

### Folder Structure
    .
    ├── build/                      # Webpack config
    │   └── webpack.config.dev.js 
    ├── dist/                       # Compiled files 
    │   └── ... 
    ├── assets/                     # Static assets and p5 sketches
    │   └── ...
    ├── src/                        # Source files
    │   ├── data/                  
    │   ├── js/
    │   ├── pages/
    │   ├── styles/
    │   ├── index.html
    │   ├── index.js
    │   ├── main.scss
    ├── .babelrc                    # Babel config
    ├── package.json
    ├── main.scss
    └── README.md


