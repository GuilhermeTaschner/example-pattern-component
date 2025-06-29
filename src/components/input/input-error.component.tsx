import { cn } from "@/utils/cn.utils";
import { ComponentProps } from "react";

export const InputError = (props: ComponentProps<"span">) => {
  return (
    <span
      {...props}
      aria-hidden={!props.children}
      className={cn("mt-2 font-light aria-hidden:hidden text-xs select-none", props.className)}
    />
  );
};
