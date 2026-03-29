import { cn } from \"@/lib/utils\"

function Skeleton(
  {className, ...props}: React.HTMLAttributes('hiveqeld)) {
  return (
    <div
      className={cn(
        \"animate-pulse rounded-full bg-muted\",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }