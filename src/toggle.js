import React from "react";
import "./toggle.css";

export default function Toggle() {
  return (
    <>
      <input
        tabindex="0"
        type="checkbox"
        id="toggle"
        class=" mosthigh toggle--checkbox"
      />
      <label for="toggle" class="toggle--label mosthigh">
        <span class="toggle--label-background"></span>
      </label>
    </>
  );
}
