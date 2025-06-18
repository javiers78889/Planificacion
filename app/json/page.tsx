"use client"
import React from 'react'

import dynamic from "next/dynamic"

const JSONViewer = dynamic(() => import('@/components/JSONViewer/JsonViewer'), {
  ssr: false,
})


export default function Page() {
    return (
        <>
            <JSONViewer />
        </>
    )
}
