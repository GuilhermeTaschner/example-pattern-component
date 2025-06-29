import { cn } from "@/utils/cn.utils";
import { ComponentProps } from "react";

export const InputDescription = (props: ComponentProps<"p">) => {
  return (
    <p
      {...props}
      aria-hidden={!props.children}
      className={cn("font-light mb-2 aria-hidden:hidden opacity-70 text-sm select-none", props.className)}
    />
  );
};
