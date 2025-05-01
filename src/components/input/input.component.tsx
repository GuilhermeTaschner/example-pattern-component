import { ComponentProps, ComponentRef, forwardRef, useId } from "react";
import { InputBox } from "./input-box.component";
import { InputContent } from "./input-content.component";
import { InputDescription } from "./input-description.component";
import { InputError } from "./input-error.component";
import { InputLabel } from "./input-label.component";
import { InputRoot } from "./input-root.component";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  description: string;
  children?: React.ReactNode;
  error?: string;
}

export const Input = forwardRef<ComponentRef<"input">, InputProps>((props, ref) => {
  let id = useId();
  if (props.id) id = props.id;
  return (
    <InputRoot>
      <InputLabel htmlFor={id.concat("input")}>{props.label}</InputLabel>
      <InputDescription id={id.concat("desc")}>{props.description}</InputDescription>
      <InputContent>
        <InputBox id={id.concat("input")} ref={ref} />
        {props.children}
      </InputContent>
      <InputError id={id.concat("message")}>{props.error}</InputError>
    </InputRoot>
  );
});
