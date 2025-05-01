import { InputBox, InputContent, InputDescription, InputLabel, InputRoot } from "@/components/input";
import { User } from "lucide-react";
import { useId } from "react";

export function SecondInputExample() {
  const id = useId();
  return (
    <InputRoot>
      <InputLabel htmlFor={id}>NOME COMPLETO</InputLabel>
      <InputDescription>INFORME SEU NOME COMO ESTA NO DOCUMENTO OFICIAL.</InputDescription>
      <InputContent>
        <User />
        <InputBox id={id} />
      </InputContent>
    </InputRoot>
  );
}
