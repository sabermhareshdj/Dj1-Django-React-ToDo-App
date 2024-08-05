"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useState , useEffect } from "react"
import useSWR from 'swr'

function JobsList() {
  // call external api in internal
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('/api/jobs', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  return (
    <div className="w-full px-4 lg:w-3/4">
      <div className="grid grid-cols-3 gap-3">
        { data.map( job => (
                  <Card key={job.id}>
                  <CardHeader>
                   
                    <CardTitle className="mt-5">P{job.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Link href="/blog/rrrrr" className="underline "> Read More </Link>
                  </CardFooter>
                </Card>
        )
        )}


      </div>
    </div>
  )
}
export default JobsList