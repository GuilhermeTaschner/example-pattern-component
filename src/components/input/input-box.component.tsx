import { cn } from "@/utils/cn.utils";
import { ComponentProps } from "react";

export const InputBox = (props: ComponentProps<"input">) => {
  return (
    <input
      {...props}
      className={cn(
        "flex-1 min-h-8 space-y-2 group outline-none group-data-[error=true]:!text-red-400",
        props.className
      )}
    />
  );
};
