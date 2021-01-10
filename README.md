# roam-theme

my take on making a Roam Research theme.

# edit style

1. run `sass . --watch --no-source-map'
   <br> or, use VSCode's "[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)" extension
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

## what files to edit?

- styling of built-in Roam components: `_vars.scss`
- customizations of Roam tags: `_tags.scss`
- grid-views and other plugins: add `.scss` files under `plugins` (or ignore this and put it whereever you want ¯\_(ツ)\_/¯)

\*\* If you add your own `.scss` files, be sure to import them in `main.scss`

# Other Themes
