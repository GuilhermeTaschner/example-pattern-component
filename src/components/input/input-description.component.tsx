import { cn } from "@/utils/cn.utils";
import { ComponentProps, ComponentRef, forwardRef } from "react";

export const InputDescription = forwardRef<ComponentRef<"p">, ComponentProps<"p">>((props, ref) => {
  if (!props.children) return null;
  return <p {...props} ref={ref} className={cn("font-light opacity-70 text-sm select-none", props.className)} />;
});
