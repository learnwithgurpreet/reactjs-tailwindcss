import React, { useState } from "react";
import CodeLayout from "./CodeLayout";

const ComponentLayout = (props) => {
  const { component, code, ...rest } = props;

  const CP = component;

  const [showCode, setShowCode] = useState(false)

  const containerClasses = showCode ? "bg-black" : "bg-gradient-to-r from-gray-400 to-gray-500";

  return <div className={`flex items-center py-12 shadow relative rounded-xl overflow-hidden ${containerClasses}`}>
    <div className="absolute inset-x-0 top-0 z-10 md:left-auto m-[2px]">
      <div className="rounded-t-[10px] md:rounded-lg flex items-stretch justify-end px-2 py-1 md:m-1">
        <button
          onClick={() => setShowCode(false)}
          className={`bg-black bg-opacity-20 text-white hover:bg-opacity-5 rounded-md flex mr-1 px-3 py-2 text-xs font-medium`}>
          Preview
          </button>
        <button
          onClick={() => setShowCode(true)}
          className={`${showCode ? "bg-white bg-opacity-5" : ""} bg-opacity-20 text-white hover:bg-black hover:bg-opacity-5 rounded-md flex mr-1 px-3 py-2 text-xs font-medium`}>
          Code
          </button>
      </div>
    </div>
    <div className={`mx-auto my-4 ${showCode ? "hidden" : ""}`}>
      <CP {...rest} />
    </div>
    <div className={`w-full ${!showCode ? "hidden" : ""}`}>
      <CodeLayout code={code} type="js" />
    </div>
  </div>
}

export default ComponentLayout