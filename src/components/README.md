# ReactJS TailwindCSS component library

## Installation
`npm i reactjs-tailwindcss`

## How to use
`import { Toggle } from "reactjs-tailwindcss"`

```jsx
<Toggle 
  onChange={() => {}}
  isChecked={false}
  ariaLabel="toggle"
  theme="green"
/>
```
![toggle](https://user-images.githubusercontent.com/3865313/116527542-11827a80-a8db-11eb-8c97-4e9bdfec38e2.gif)

### Styles
If you use purge, `postcss-purgecss`, `postcss` or any other tool to delete unused `css`, you can add the following array into your ignore (i.e. keep classes / whitelist etc.):

```
["h-8", "w-14", "relative", "inline-block", "opacity-0", "w-0", "h-0", "rounded-3xl", "absolute", "cursor-pointer", "top-0", "left-0", "right-0", "bottom-0", "transition-all", "translate-x-6", "translate-x-0", "pointer-events-none", "h-6", "w-6", "left-1", "bottom-1", "bg-white", "transform", "rounded-full"]
```
### Dynamic classes
```
[bg-${theme}-900, bg-${theme}-700]
```
## Dependencies
**reactjs-tailwindcss** to properly work needs the following dependencies:
* react@16.13.1
* react-dom@16.13.1
* prop-types@15.7.2

`npm i -E react@16.13.1 react-dom@16.13.1 prop-types@15.7.2`

## Contributors
This project exists thanks to all the people who contribute. [[Contribute]](https://github.com/gsin11/reactjs-tailwindcss/blob/master/CONTRIBUTING.md).

## Licensing
* Copyright 2021 reactjs-tailwindcss
* Licensed under [MIT](https://github.com/gsin11/reactjs-tailwindcss/blob/master/LICENSE)
