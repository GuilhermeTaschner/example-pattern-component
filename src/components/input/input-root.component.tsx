import { cn } from "@/utils/cn.utils";
import { ComponentProps } from "react";

export const InputRoot = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      data-error={props["aria-invalid"]}
      className={cn("w-full text-white group aria-invalid:!text-red-400", props.className)}
    />
  );
};
