import { IconBrandFacebook } from "@tabler/icons-react"
import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

type FacebookCTAProps = Omit<
  ComponentProps<typeof Button>,
  "render" | "children"
> & {
  label?: string
}

export function FacebookCTA({
  label = "Message us on Facebook",
  size = "lg",
  variant = "default",
  ...props
}: FacebookCTAProps) {
  return (
    <Button
      size={size}
      variant={variant}
      nativeButton={false}
      {...props}
      render={
        <a
          href={siteConfig.contact.facebookMessage}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        />
      }
    >
      <IconBrandFacebook aria-hidden />
      {label}
    </Button>
  )
}
