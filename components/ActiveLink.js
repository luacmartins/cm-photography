import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
   const router = useRouter()

   let className = children.props.className || ''
   if (router.pathname === href) {
      className = `${className} border-b-2 py-1 rounded-sm`
   }

   return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}