"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"


function JobsFilter() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="w-full lg:w-1/4">
      <div className="p-6 shadow-md rounded-lg">
        <h4 className="text-lg mb-4 font-semibold"> Filters </h4>
        <form>
          <Input type="number" placeholder="Min Salary" className="w-full mb-2" />
          <Input type="number" placeholder="Max Salary" className="w-full mb-2" />
          <Input type="text" placeholder="Keyword" className="w-full mb-4" />
          <div className="mb-2">
            <Popover >
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground w-full"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>To date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mb-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground w-full"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>From date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-5">
            <h5 className="font-medium">Job Type</h5>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Internship
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Part Time
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full Time
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Contract
                </label>
              </div>

            </div>

          </div>
          <div className="mt-8">
            <h5 className="font-medium">Education Level</h5>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  PHD
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Master
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bachelor
                </label>
              </div>

            </div>

          </div>

          <div className="my-8">
            <h5 className="font-medium">Experience Level</h5>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  No Experience
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Junior
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  MidLevel
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  MidSenior
                </label>
              </div>

            </div>

          </div>
          <Button className="w-full">Apply Filters</Button>
          <Button className="w-full mt-3" variant="outline">Reset Filters</Button>
        </form>
      </div>
    </div>
  )
}

export default JobsFilter