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
["px-5","py-3","border","border-solid","rounded","relative","mb-4","absolute","bg-transparent","text-2xl","font-semibold","leading-none","right-0","top-0","outline-none","focus:outline-none","opacity-50","hover:opacity-75","hover:text-black","text-xl","inline-block","mr-5","align-middle","mr-8","bg-indigo-200","text-indigo-800","border-indigo-300","bg-gray-300","text-gray-800","border-gray-400","bg-green-200","text-green-800","border-green-300","bg-red-200","text-red-800","border-red-300","bg-orange-200","text-orange-800","border-orange-300","bg-blue-200","text-blue-800","border-blue-300","bg-white","text-gray-600","border-gray-100","bg-gray-400","border-gray-500","left-0","z-50","hidden","py-2","text-base","text-left","list-none","mt-1","mb-1","mr-1","ml-1","block","w-full","py-1","px-6","clear-both","font-normal","whitespace-no-wrap","border-0","hover:text-gray-900","hover:bg-gray-100","active:text-white","active:bg-blue-500","text-white","bg-blue-500","text-gray-400","pointer-events-none","mb-2","flex","flex-wrap","items-center","bg-gray-600","justify-between","px-4","bg-blue-600","container","mx-auto","lg:px-4","px-0","capitalize","mr-4","leading-relaxed","ml-auto","cursor-pointer","px-3","text-gray-300","lg:hidden","lg:flex","lg:w-auto","flex-grow","lg:items-center","lg:ml-auto","pl-0","mb-0","flex-col","lg:flex-row","px-2","no-underline","mb-3","leading-normal","text-sm","break-words","text-center","bg-black","mr-2","ml-2","bg-green-600","bg-red-600","bg-yellow-500","bg-teal-500","bg-gray-100","text-gray-900","text-black","bg-gray-800","-mb-px","flex-auto","text-blue-600","hover:text-blue-700","cursor-default","rounded-t","border-transparent","border-b-0","border-b","border-gray-200","sm:flex-row","md:flex-row","xl:flex-row","navbar-expand","sm:hidden","md:hidden","xl:hidden","p-4","pointer-events-auto","border-gray-600","transition-transform","duration-300","ease-out","w-auto","m-2","sm:my-8","sm:mx-auto","transform","-translate-y-1","sm:max-w-xs","md:max-w-screen-md","lg:max-w-screen-lg","sm:max-w-screen-sm","justify-end","p-3","border-t","border-gray-300","rounded-b","items-start","opacity-0","fixed","h-full","overflow-hidden","transition-opacity","duration-75","ease-linear","font-medium","leading-tight","mb-3mr-3","ml-3","mt-3"]
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
