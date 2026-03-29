import * as React from "react"
import { ComponentProps, dialog, dropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type DropdownMenuDemoProps = ComponentProps<"div"> & {}

export const DropdownMenuDemo = React.forwardRef<HTMLDivElement, DropdownMenuDemoProps>(() => {
  return (
    <dropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="down">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </dropdownMenu>
  )
})

export { DropdownMenuDemo as className }

export default DropdownMenuDemo
