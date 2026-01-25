import { cn } from '@/lib/cn';
import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn(
      'max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-14 font-urbanist',
      className,
    )}>{children}</div>
  )
}

export default Container