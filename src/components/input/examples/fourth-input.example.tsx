import { InputBox, InputContent, InputDescription, InputError, InputLabel, InputRoot } from "@/components/input";
import { User } from "lucide-react";
import { useId } from "react";

export function FourthInputExample() {
  const id = useId();
  return (
    <InputRoot has-error>
      <InputLabel className="text-black" htmlFor={id}>
        NOME COMPLETO
      </InputLabel>
      <InputDescription className="text-black">INFORME SEU NOME COMO ESTA NO DOCUMENTO OFICIAL.</InputDescription>
      <InputContent>
        <InputBox id={id} />
        <User />
      </InputContent>
      <InputError>O nome é obrigatório</InputError>
    </InputRoot>
  );
}
