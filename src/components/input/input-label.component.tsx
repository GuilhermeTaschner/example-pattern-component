import { cn } from "@/utils/cn.utils";
import { ComponentProps, ComponentRef, forwardRef } from "react";

export const InputLabel = forwardRef<ComponentRef<"label">, ComponentProps<"label">>((props, ref) => {
  if (!props.children) return null;
  return <label {...props} ref={ref} className={cn("font-semibold select-none", props.className)} />;
});
