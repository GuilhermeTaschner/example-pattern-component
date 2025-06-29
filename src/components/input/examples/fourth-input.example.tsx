import { InputBox, InputContent, InputDescription, InputError, InputLabel, InputRoot } from "@/components/input";
import { User } from "lucide-react";

export function FourthInputExample() {
  return (
    <InputRoot aria-invalid>
      <InputLabel className="text-white" htmlFor="FourthInputExample">
        NOME COMPLETO
      </InputLabel>
      <InputDescription className="text-white">INFORME SEU NOME COMO ESTA NO DOCUMENTO OFICIAL.</InputDescription>
      <InputContent>
        <InputBox id="FourthInputExample" />
        <User />
      </InputContent>
      <InputError>O nome é obrigatório</InputError>
    </InputRoot>
  );
}
