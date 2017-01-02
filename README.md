# Basic SASS Wordpress Theme
A basic wordpress theme with SASS.

This theme is based on _s structure and modified to support SASS for high projects..


## Dev dependencies:
- SASS installed


## Libraries included:
- Bootstrap 3
- jQuery ~


## SASS's organization
- The file /style.scss import all other files.

- The SASS files is at /assets/stylesheets, separated by modules, partials, templates and vendor(for third parties styles);

- The compiled file style.css is set on .gitignore file for preventing conflicts in this file. For build this file locally, run:
```bash
sass --update style.scss:style.css
```

