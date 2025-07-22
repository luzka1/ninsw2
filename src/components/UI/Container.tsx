import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, ...rest }: ContainerProps) {
  return (
    <div {...rest} className="px-6 md:px-16 lg:px-32 w-full h-full">
      {children}
    </div>
  );
}
