import { cn } from "@/utils/cn.utils";
import { ComponentProps } from "react";

export const InputLabel = (props: ComponentProps<"label">) => {
  return (
    <label
      {...props}
      aria-hidden={!props.children}
      className={cn("font-semibold aria-hidden:hidden select-none", props.className)}
    />
  );
};
