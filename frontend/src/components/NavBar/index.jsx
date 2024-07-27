import { IconButton, Menu } from "@/components"
import profile from '@/assets/profile.jpg'

export const Navbar = () => {
  return(
    <nav className="flex justify-between pt-10 pb-6">
      <IconButton><Menu /></IconButton>
      <div className="rounded-full bg-slate-300 w-[40px] h-[40px] overflow-hidden">
        <img src={profile} />
      </div>
    </nav>
  )
}