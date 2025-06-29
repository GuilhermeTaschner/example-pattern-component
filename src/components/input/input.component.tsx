import { ComponentProps } from "react";
import { InputBox } from "./input-box.component";
import { InputContent } from "./input-content.component";
import { InputDescription } from "./input-description.component";
import { InputError } from "./input-error.component";
import { InputLabel } from "./input-label.component";
import { InputRoot } from "./input-root.component";

interface InputProps extends ComponentProps<"input"> {
  id: string;
  label: string;
  description?: string;
  error?: string;
  children?: React.ReactNode;
}

export const Input = ({ label, children, id: customId, description, error, ...props }: InputProps) => {
  const id = customId;
  const inputId = `${id}-input`;
  const descId = `${id}-desc`;
  const errorId = `${id}-error`;
  return (
    <InputRoot aria-invalid={Boolean(error)}>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <InputDescription id={descId}>{description}</InputDescription>
      <InputContent>
        <InputBox
          {...props}
          id={inputId}
          aria-describedby={descId}
          aria-invalid={Boolean(error)}
          aria-errormessage={errorId}
        />
        {children}
      </InputContent>
      <InputError id={errorId}>{error}</InputError>
    </InputRoot>
  );
};
