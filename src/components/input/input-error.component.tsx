import { cn } from "@/utils/cn.utils";
import { ComponentProps, ComponentRef, forwardRef } from "react";

export const InputError = forwardRef<ComponentRef<"span">, ComponentProps<"span">>((props, ref) => {
  if (!props.children) return null;
  return <span {...props} ref={ref} className={cn("font-light text-xs select-none", props.className)} />;
});
