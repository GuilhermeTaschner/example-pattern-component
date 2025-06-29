import { cn } from "@/utils/cn.utils";
import { ComponentProps } from "react";

export const InputContent = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full flex gap-2 px-2 py-1 ring-1 ring-gray-500 items-center group-data-[error=true]:ring-red-400 rounded-md group-focus-within:ring-2 transition-all group-focus-within:ring-gray-800",
        props.className
      )}
    />
  );
};
