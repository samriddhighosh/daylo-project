import { Calendar, CirclePlus, Eye, Flag, House, ListChecks, MessageCircle, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-6 w-1/6">
        <Link  href='/' className="text-[20px] font-bold">Daylo</Link>
        <div className="flex flex-col gap-2 border-b border-gray-200 py-8">
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <House/>
                <Link href='/'>
                    Mission
                </Link>
            </div>
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <Users/>
                <Link href='/people'>People</Link>
            </div>
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <ListChecks/>
                <Link href='/'>To-do</Link>
            </div>
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <Calendar/>
                <Link href='/'>Calendar</Link>
            </div>
        </div>
        <div className="flex flex-col gap-2 pt-8">
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <MessageCircle/>
                <Link href='/'>Assistant</Link>
            </div>
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <Flag/>
                <Link href='/'>Goals and Habits</Link>
            </div>
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <Eye/>
                <Link href='/'>Focus</Link>
            </div>
            <div className="flex gap-3 hover:bg-orange-100 py-2 hover:rounded-xl">
                <CirclePlus/>
                <Link href='/'>Integrations</Link>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar
