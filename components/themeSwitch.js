import React, { useRef, useEffect, useState } from "react";
import { Button } from "rebass";
import ReactDOM from 'react-dom';


const ThemeSwitch = ({ preserveRasters = true, storeKey = "ThemeSwitch" }) => {
  const cssString = `
        html { filter: invert(100%); background: #fefefe; }
        * { background-color: inherit }
      `;
  const rasterCss =
    'img:not([src*=".svg"]), video, [style*="url("] { filter: invert(100%) }';

  const isDeclarationSupported = (property, value) => {
    const prop = property + ":",
      el = document.createElement("test"),
      mStyle = el.style;
    el.style.cssText = prop + value;
    return mStyle[property];
  };

  const supported = useRef(!!isDeclarationSupported("filter", "invert(100%)"));

  const [css, setCss] = useState(cssString);
  const [active, setActive] = useState(
    localStorage.getItem(storeKey) === "true" ||
      (!localStorage.getItem(storeKey) &&
        matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (preserveRasters) {
      setCss(`${cssString} ${rasterCss}`);
    }
    return () => {
      setCss(cssString);
    };
  }, [preserveRasters]);

  useEffect(() => {
    localStorage.setItem(storeKey, active);
  }, [active, storeKey]);

  const toggle = () => {
    setActive(a => !a);
  };

  return (
    supported.current && (
      <React.Fragment>
        <Button onClick={toggle} variant="outline" mr={2}>
          {active ? "Dark Mode" : "Light Mode"}
        </Button>
        <style media={active ? "screen" : "none"}>
          {active ? css.trim() : css}
        </style>
      </React.Fragment>
    )
  );
};



export default ReactDOM.render(<ThemeSwitch />, document.getElementById('root'))