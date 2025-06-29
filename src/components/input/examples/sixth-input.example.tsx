import { InputBox, InputContent, InputLabel, InputRoot } from "@/components/input";
import { User } from "lucide-react";

export function SixthInputExample() {
  return (
    <InputRoot>
      <InputLabel htmlFor="SixthInputExample">NOME COMPLETO</InputLabel>
      <InputContent>
        <User />
        <InputBox id="SixthInputExample" />
      </InputContent>
    </InputRoot>
  );
}
