import { cn } from "@/utils/cn.utils";
import { ComponentProps, ComponentRef, forwardRef } from "react";

export const InputBox = forwardRef<ComponentRef<"input">, ComponentProps<"input">>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(
        "flex-1 min-h-8 space-y-2 group outline-none group-data-[error=true]:!text-red-400",
        props.className
      )}
    />
  );
});
