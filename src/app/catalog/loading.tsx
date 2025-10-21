"use client";

import { motion } from "framer-motion";
import { Card } from "@/shared/components/Shadcn-ui/card";
import { Skeleton } from "@/shared/components/Shadcn-ui/skeleton";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className={`lg:hidden fixed z-20 inset-x-0 w-full max-w-[90%] mx-auto flex flex-col
        transition-all duration-300 ease-in-out mb-10 mt-20 lg:mt-50 "top-20"`}
      >
        <Card className="w-full px-4 py-2 m-0 grid gap-2">
          <Skeleton className="w-full h-10 rounded-full" />
          <div className="flex gap-x-2 items-center">
            <Skeleton className="w-1/3 h-10 rounded-full" />
            <Skeleton className="w-1/3 h-10 rounded-full" />
            <Skeleton className="w-1/3 h-10 rounded-full" />
          </div>
        </Card>
      </div>

      <div className="pt-52 pb-5 space-y-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Card className="max-w-[90%] mx-auto lg:max-w-[1400px] lg:px-5 py-0 rounded-t-none shadow-sm">
              <Skeleton className="h-80 rounded-none" />
              <div className="bg-background px-5 space-y-3">
                <Skeleton className="w-full h-7" />
                <div
                  className="flex flex-wrap gap-x-4 gap-y-3 my-3 text-xs lg:text-md"
                  id="icons-data"
                >
                  {Array.from({ length: 6 }).map((_, j) => (
                    <Skeleton key={j} className="w-1/5 h-4" />
                  ))}
                </div>

                <div className="mb-5 text-sm space-y-2">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
