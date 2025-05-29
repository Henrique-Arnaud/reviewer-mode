import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

export default function Input({ labelText, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {labelText || (
        <label htmlFor={props.id} className="text-2xl">
          {labelText}
        </label>
      )}
      <input
        aria-label={labelText}
        className="w-full h-11 pl-1.5 pr-1.5 bg-gray-100 text-black rounded-lg"
        {...props}
      />
    </div>
  )
}
