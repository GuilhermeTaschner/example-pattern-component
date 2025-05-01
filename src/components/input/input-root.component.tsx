import { cn } from "@/utils/cn.utils";
import { ComponentProps, ComponentRef, forwardRef } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  "has-error"?: boolean;
}

export const InputRoot = forwardRef<ComponentRef<"div">, InputRootProps>((props = { "has-error": false }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      data-error={props["has-error"]}
      className={cn("w-full space-y-2 group data-[error=true]:!text-red-400", props.className)}
    />
  );
});
