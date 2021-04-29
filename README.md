# ReactJS TailwindCSS component library

## Installation
`npm i reactjs-tailwindcss`

## How to use
`import { Toggle } from "reactjs-tailwindcss"`

```jsx
<Toggle 
  ariaLabel="toggle theme" 
  onChange={()=>{}} 
  isChecked={false} 
  className="green"
/>
```
![toggle](https://user-images.githubusercontent.com/3865313/116527542-11827a80-a8db-11eb-8c97-4e9bdfec38e2.gif)

### Styles
If you use purge, `postcss-purgecss`, `postcss` or any other tool to delete unused `css`, you can add the following array into your ignore (i.e. keep classes / whitelist etc.):

```
["absolute", "bg-gray-300", "bg-green-400", "bg-white", "bottom-0", "bottom-1", "cursor-pointer", "h-0", "h-6", "h-8", "inline-block", "left-0", "left-1", "md:h-4", "md:h-6", "md:w-12", "md:w-4", "opacity-0", "relative", "right-0", "rounded-3xl", "rounded-50-percent", "shadow-md", "top-0", "transform", "transition-all", "translate-x-6", "w-0", "w-14", "w-6"]
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
