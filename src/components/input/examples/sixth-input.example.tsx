import { InputBox, InputContent, InputLabel, InputRoot } from "@/components/input";
import { User } from "lucide-react";
import { useId } from "react";

export function SixthInputExample() {
  const id = useId();
  return (
    <InputRoot>
      <InputLabel htmlFor={id}>NOME COMPLETO</InputLabel>
      <InputContent>
        <User />
        <InputBox id={id} />
      </InputContent>
    </InputRoot>
  );
}
