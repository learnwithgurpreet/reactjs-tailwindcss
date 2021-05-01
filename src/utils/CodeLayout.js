import React, { useEffect } from "react";
import Prism from "prismjs"

function CodeLayout({ code, type }) {
  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 200);
  }, []);

  return <pre className="line-numbers rounded-xl">
    <code className={`language-${type}`}>
      {code.trim()}
    </code>
  </pre>
}

export default CodeLayout;