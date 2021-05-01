import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageToggleComponent from "./pages/toggle-component";

const elements = [
  {
    id: 1,
    name: 'Toggle',
    link: '/toggle-component',
    img: './images/toggle.jpg',
    img_md: './images/toggle-md.jpg',
    img_lg: './images/toggle-lg.jpg',
  }/* ,
  {
    id: 2,
    name: 'Range Slider',
    link: '/range-component',
    img: './images/range.jpg',
    img_md: './images/range-md.jpg',
    img_lg: './images/range-lg.jpg',
  }, */
];

function DefaultComponent() {
  return <>
    <h1 className="w-full text-left text-2xl font-light mb-4 text-gray-600">Elements</h1>
    <section className="grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-14">
      {elements.map(obj => {
        return (
          <Link key={obj.id} to={obj.link}
            className="rounded-md h-72 shadow-md relative transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white">
            <article>
              <div>
                <img className="w-full h-56 object-cover object-center rounded-tl-md rounded-tr-md"
                  alt={obj.name}
                  loading="lazy"
                  src={obj.img}
                  sizes="(max-width: 40em) 100vw, 50vw"
                  srcSet={`${obj.img} 200w, ${obj.img_md} 400w, ${obj.img_lg} 600w`} />
              </div>
              <footer className="absolute bottom-0 w-full p-4 text-center">
                <h4 className="text-lg text-gray-700 font-semibold">{obj.name}</h4>
              </footer>
            </article>
          </Link>
        )
      })}
    </section>
  </>
}

function App() {
  return (
    <Router>
      <main className="dark:bg-gray-800 bg-white relative h-screen">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between max-w-5xl">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              <Link to="/">ReactJS + Tailwindcss</Link>
            </div>
          </div>
        </header>
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center">
          <div className="container mx-auto px-6 flex relative py-8 max-w-5xl">
            <div className="mb-8 w-full">
              <Switch>
                <Route path="/" exact component={() => <DefaultComponent />} />
                <Route path="/toggle-component" exact component={() => <PageToggleComponent />} />
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
