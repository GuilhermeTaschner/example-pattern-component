import { InputBox, InputContent, InputLabel, InputRoot } from "@/components/input";
import { useId } from "react";

export function FifthInputExample() {
  const id = useId();
  return (
    <InputRoot>
      <InputLabel htmlFor={id}>NOME COMPLETO</InputLabel>
      <InputContent>
        <InputBox id={id} />
      </InputContent>
    </InputRoot>
  );
}
