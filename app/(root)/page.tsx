import Image from "next/image";
import { House, Users, ListChecks, Calendar, Search, Check, RefreshCcw, Eye, Flag, MessageCircle, CirclePlus } from 'lucide-react';
import DatePickerDateOfBirth from "@/components/DatePicker";
import DataTableSimple from "@/components/DataTable";
import BarChart02 from "@/components/BarChart";
import TableData from "@/components/PeopleTable";
import TableResponsive from "@/components/PeopleTable";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex w-full bg-white">
      <Navbar/>
      <div className="bg-gray-50 p-8 w-5/6 text-black flex flex-col gap-6">
        <div className="flex">
          <div>
            <h3 className="text-[20px] font-semibold">Hello, Leonardo</h3>
            <p className="text-gray-700">What are you working on?</p>
          </div>
          <div className="w-[250px] h-10 rounded-4xl bg-gray-200 ml-30 flex gap-3 items-center p-3">
            <Search/>
            <input/>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="border b p-3 rounded-2xl w-1/4 bg-white">
            <div className="flex gap-2 items-center">
              <div className="p-2 rounded-full bg-orange-200">
                <Check size={16} />
              </div>
              <p className="text-[12px]">Daily Tasks</p>
            </div>
            <h3 className="font-bold text-[24px] pt-4">2 Left</h3>
          </div>
          <div className="border border-gray-300 p-3 rounded-2xl w-1/4 bg-white">
            <div className="flex gap-2 items-center">
              <div className="p-2 rounded-full bg-orange-200">
                <RefreshCcw size={16} />
              </div>
              <p className="text-[12px]">Daily Habits</p>
            </div>
            <h3 className="font-bold text-[22px] pt-2">2 Left</h3>
          </div>
          <div className="border border-gray-300  p-3 rounded-2xl w-1/4 bg-white">
            <div className="flex gap-2 items-center">
              <div className="p-2 rounded-full bg-orange-200">
                <Eye size={16} />
              </div>
              <p className="text-[12px]">Productivity Tips</p>
            </div>
            <h3 className="font-bold text-[22px] pt-2">2 Left</h3>
          </div>
          <div className="border border-gray-300 p-3 rounded-2xl w-1/4 bg-white">
            <div className="flex gap-2 items-center">
              <div className="p-2 rounded-full bg-orange-200">
                <Flag size={16} />
              </div>
              <p className="text-[12px]">Goal progress today</p>
            </div>
            <h3 className="font-bold text-[22px] pt-2">2 Left</h3>
          </div>
        </div>
        <div className="border-gray-300 border rounded-2xl bg-white">
          <h3 className="font-semibold p-2 border-b border-gray-300">Daily Agenda</h3>
          <div>
            <div className="flex">
              <DatePickerDateOfBirth/>
              <DataTableSimple/>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="border-gray-300 border rounded-2xl bg-white w-3/4">
            <h3 className="font-semibold p-3 border-b border-gray-300">Daily Agenda</h3>
            <div>
                <BarChart02/>
            </div>
          </div>
          <div className="border-gray-300 border rounded-2xl bg-white w-1/4">
            <div className="flex p-3 border-b">
              <h3 className="font-semibold border-gray-300">People</h3>
              
            </div>
            <div>
              <TableResponsive/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
