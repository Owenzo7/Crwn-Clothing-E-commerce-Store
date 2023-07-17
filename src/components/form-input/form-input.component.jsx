import React from "react";
import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const Forminput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default Forminput;
