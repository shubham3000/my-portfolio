import React from 'react'

export default function dashboard({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-screen overflow-y-scroll">
        {/* <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div> */}
        <div className="flex gap-2 justify-center flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}
