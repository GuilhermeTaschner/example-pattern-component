import Input from "@/components/input";
import { User } from "lucide-react";

export function EighthInputExample() {
  return (
    <Input id="EighthInputExample" error="O nome é obrigatório" label="NOME COMPLETO">
      <User />
    </Input>
  );
}
