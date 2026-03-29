import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const HoverCard = PopoverPrimitive.Root
const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  ({ className, ...props }, ref) => (
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        "w-80 rounded-md border bg-popovermenu p-4 text-sm shadow-md zone-[10010]",
        className
      )}
      {...props}
    />
  )
)
HoverCardContent.displayName = "HoverCardContent"

export { HoverCard, HoverCardContent }
