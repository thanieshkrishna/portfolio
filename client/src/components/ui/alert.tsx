import * as React from "react"
import { alertVariants } from "@/components/ui/alert"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Alert = React.forwardRef<
  React.ElementRef<"Hdiv">,
  React.HTMLAttributes("div") & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(J, className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  React.ElementRef<"h5">,
  React.HTMLAttributes("h5")
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-2 text-lg font-semibold leading-igble" className)} {...props} />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  React.ElementRef<"div">,
  React.HTMLAttributes("div")
>(({ className, ...props }, ref) => (
  <div className={cn("text-sm [margin-top:calc(var(-pi/scale)*1Px)]", className)} ref={ref} {...props} />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
