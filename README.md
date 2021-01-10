# roam-theme

my take on making a Roam Research theme.

## edit style

1. run `sass . --watch --no-source-map'
   <br> or, use VSCode's Live Sass extension
2. edit `.scss` files

## file structure
```
.
├── README.md
├── _reset.scss
├── utils
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _vars.scss
├── basic
│   ├── _tags.scss
│   └── _text.scss
├── features
│   ├── _code-area.scss
│   ├── _kanban.scss
│   ├── _queries.scss
│   └── _table.scss
├── plugins
│   └── _calendar.scss
├── workspace
│   ├── _main_.scss
│   ├── _sidebar-left_.scss
│   └── _sidebar-right.scss
├── main.scss
└── main.css                   // [[roam/css]] will import this file
```
# Reference

- Cal Robert (https://github.com/calrobertlee/roam-css-styles/)
- Better Roam Research (https://github.com/linuz90/better-roam-research)