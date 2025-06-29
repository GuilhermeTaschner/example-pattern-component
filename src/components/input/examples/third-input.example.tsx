import Input from "@/components/input";
import { User } from "lucide-react";

export function ThirdInputExample() {
  return (
    <Input id="ThirdInputExample" label="NOME COMPLETO" description="INFORME SEU NOME COMO ESTA NO DOCUMENTO OFICIAL.">
      <User />
    </Input>
  );
}
