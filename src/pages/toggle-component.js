import React from "react";
import { Toggle } from "reactjs-tailwindcss"
import ComponentLayout from "../utils/ComponentLayout";
import CodeLayout from "../utils/CodeLayout";

const PageToggleComponent = () => {
  const code = `
  import { Toggle } from "reactjs-tailwindcss"

<Toggle onChange={()=>{}} ariaLabel="toggle theme" theme="purple" />
  `;

  const installCode = `
  # npm
npm install reactjs-tailwindcss

# Yarn
yarn add reactjs-tailwindcss
  `;

  const basicExample = `
  import React { useState } from "react";
import { Toggle } from "reactjs-tailwindcss";

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Toggle
      isChecked={enabled}
      onChange={setEnabled}
      ariaLabel="Toggle Discount"
    />
  );
}
  `;

  const propertiesArray = [
    {
      name: "onChange",
      default: "() => {}",
      type: "function",
      details: "Function triggers on change of toggle."
    },
    {
      name: "isChecked",
      default: "false",
      type: "boolean",
      details: "current state of toggle."
    },
    {
      name: "ariaLabel",
      default: "toggle",
      type: "string",
      details: "string label value for screen readers"
    },
    {
      name: "theme",
      default: "purple",
      type: "string",
      details: "color value for your toggle button, refer to your local tailwindCSS configurations."
    }
  ]

  return <div>
    <h1 className="font-bold text-4xl mb-2">Toggle</h1>
    <section className="mb-12">
      <p className="details">It is always good to have a custom component which can replace checkbox and offer the same semantics and keyboard navigation as native checkbox elements.</p>
      <ComponentLayout code={code} component={Toggle} ariaLabel="toggle theme" theme="purple" />
    </section>

    <section className="mb-8">
      <h2>Installation</h2>
      <p className="details">To get started, install reactjs-tailwindcss via npm or yarn:</p>
      <CodeLayout code={installCode} type="bash" />
    </section>
    <section className="mb-8">
      <h2>Basic example</h2>
      <p className="details">Toggle Component is created using checkbox. You can toggle your Switch by clicking on the it, or by pressing the spacebar while its focused.</p>
      <p className="details">Toggling the component calls the <code className="language-js">onChange</code> function with a context of the checkbox.</p>
      <CodeLayout code={basicExample} type="js" />
    </section>
    <section className="mb-8">
      <h2 className="mb-4">Properties <span className="italic">(Options)</span></h2>
      <ul>
        {propertiesArray.map(obj => <li className="mb-5">
          <p className="details-medium text-gray-800">{obj.name} | <span className="italic">{obj.type}</span> {obj.default ? `| default: ${obj.default}` : ""}</p>
          <p className="details-medium text-gray-600">{obj.details}</p>
        </li>)}
      </ul>
    </section>
  </div>
}

export default PageToggleComponent