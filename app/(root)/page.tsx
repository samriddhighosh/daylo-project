import Image from "next/image";
import { Search, Check, RefreshCcw, Eye, Flag} from 'lucide-react';
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
            <h2 className="text-[20px] font-semibold">Hello, Leonardo</h2>
            <p className="text-gray-700">What are you working on?</p>
          </div>
          <div className="w-[250px] h-10 rounded-4xl bg-gray-200 ml-30 flex gap-3 items-center p-3">
            <Search/>
            <input/>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="card-bg p-3 w-1/4">
            <div className="flex gap-2 items-center">
              <div className="icon">
                <Check size={16} />
              </div>
              <p className="text-[12px]">Daily Tasks</p>
            </div>
            <h4 className="card-heading">2 Left</h4>
          </div>
          <div className="card-bg p-3 w-1/4">
            <div className="flex gap-2 items-center">
              <div className="icon">
                <RefreshCcw size={16} />
              </div>
              <p className="text-[12px]">Daily Habits</p>
            </div>
            <h4 className="card-heading">2 Left</h4>
          </div>
          <div className="card-bg p-3 w-1/4">
            <div className="flex gap-2 items-center">
              <div className="icon">
                <Eye size={16} />
              </div>
              <p className="text-[12px]">Productivity Tips</p>
            </div>
            <h4 className="card-heading">2 Left</h4>
          </div>
          <div className=" p-3 card-bg w-1/4 ">
            <div className="flex gap-2 items-center">
              <div className="icon">
                <Flag size={16} />
              </div>
              <p className="text-[12px]">Goal progress today</p>
            </div>
            <h4 className="card-heading">2 Left</h4>
          </div>
        </div>
        <div className="card-bg">
          <h3>Daily Agenda</h3>
          <div>
            <div className="flex">
              <DatePickerDateOfBirth/>
              <DataTableSimple/>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="card-bg w-3/4">
            <h3>Daily Agenda</h3>
            <div>
                <BarChart02/>
            </div>
          </div>
          <div className="card-bg w-1/4">
            <h3>People</h3>
            <div>
              <TableResponsive/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
