import React from "react";
import { storiesOf } from "@storybook/react";

import { Toggle } from "../components/Toggle";

const stories = storiesOf('Components', module);

stories.add('Toggle', () => {
  return (<Toggle />);
})