# Responsive Design Project

## Project Workflow

1. Create directory structure
```js
responsive-web // project folder
|- css // css folder
|   |- global.css // global common styles
|   |- index.css // project styles
|   |- reset.css // reset styles
|
|- images // put images
|- index.html // project page
|_ js // js folder
```
2. Prepare reset.css
3. Set up common font
4. Customize theme skins
5. Prepare assets required for the project
6. Implement a responsive grid system
7. Prepare icons
8. Manage the project using Git

## Determine Breakpoints

- `>  1400px`
- `<= 1400px`: Sidebar shrink to 75px
- `<= 1300px`: Hide the sidebar
- `<= 1200px`: Content Row1: 4-col -> 2-col
- `<= 992px`: Content Row 2: 2-col -> 1-col; Content Last Row: 3-col -> 2-col + 1-col
- `<= 768px`: All 1-col, top-navbar becomes drop-down menu.

## Determine Responsive Strategy

- PC-first