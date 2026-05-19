import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { isFilled, KeyTextField, LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

type MobileMenuProps = {
  className?: string
  site_title: KeyTextField
  navigation: LinkField[]
  cta_link: LinkField
}

const MobileMenu = ({
  navigation,
  className,
  site_title,
  cta_link,
}: MobileMenuProps) => {
  return (
    <div className={cn('text-primary-foreground md:hidden', className)}>
      <Sheet>
        <SheetTrigger className={cn(buttonVariants({ variant: 'link' }))}>
          <MenuIcon />
          <span className="sr-only">Open Menu</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {isFilled.keyText(site_title) && (
              <SheetTitle className="font-bold text-primary">
                {site_title}
              </SheetTitle>
            )}
          </SheetHeader>
          <ul className="mt-8 grid gap-y-4">
            <li>
              <SheetClose className="flex justify-center" asChild>
                <Button asChild>
                  <PrismicNextLink field={cta_link}>
                    {cta_link.text}
                  </PrismicNextLink>
                </Button>
              </SheetClose>
            </li>
            {navigation.map((item, i) => {
              return (
                <li key={item.text ? item.text + i : i}>
                  <SheetClose asChild>
                    <Button asChild variant={'outline'} className="flex">
                      <PrismicNextLink field={item}>
                        {item.text}
                      </PrismicNextLink>
                    </Button>
                  </SheetClose>
                </li>
              )
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
