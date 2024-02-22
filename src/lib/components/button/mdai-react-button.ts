import React from "react";
import { createComponent } from "@lit/react";
import { MdaiButton } from "./mdai-button";

const MdaiReactButton = createComponent({
  tagName: "mdai-button",
  elementClass: MdaiButton,
  react: React,
  events: {
    onClick: "click",
  },
});

export default MdaiReactButton;
