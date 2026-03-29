import * as React from "react"
import { ComponentProps, context Menu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuTrigger, ContextMenuSub } from "@/components/ui/context-menu"

type ContextMenuDemoProps = ComponentProps<"div"> & {}

export const ContextMenuDemo = React.forwardRef(function(_,\n  ref\n) {\n  return (\n    <contextMenu>\n      <ContextMenuTrigger asChild>\n        <button>Open Context Menu</button>\n      </ContextMenuTrigger>\n      <ContextMenuContent>\n        <ContextMenuItem>Back</ContextMenuItem>\n        <ContextMenuItem>Forward</ContextMenuItem>\n        <ContextMenuSeparator />\n        <ContextMenuItem>Reload</ContextMenuItem>\n      </ContextMenuContent>\n    </contextMenu>\n  )\n})
