import { InputBox, InputContent, InputDescription, InputLabel, InputRoot } from "@/components/input";
import { User } from "lucide-react";

export function SecondInputExample() {
  return (
    <InputRoot>
      <InputLabel htmlFor="SecondInputExample">NOME COMPLETO</InputLabel>
      <InputDescription>INFORME SEU NOME COMO ESTA NO DOCUMENTO OFICIAL.</InputDescription>
      <InputContent>
        <User />
        <InputBox id="SecondInputExample" />
      </InputContent>
    </InputRoot>
  );
}
