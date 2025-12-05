import Link from 'next/link'
import React from 'react'
import { LogOut, Moon, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const DEFAULT_ITEM_STYLE = "h-[1.2rem] w-[1.2rem] m4-2";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      collapseButton

      {/* RIGHT */}

      <div className="flex items-center gap-4">
        <Link href='/'>Dashboard</Link>
        <Moon />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://share.google/aQmKhlNYauPnw8vQs" />
              <AvatarFallback>LF</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className={DEFAULT_ITEM_STYLE} />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className={DEFAULT_ITEM_STYLE} />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant='destructive'>
              <LogOut className={DEFAULT_ITEM_STYLE} />
              Logout
            </DropdownMenuItem>


          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar