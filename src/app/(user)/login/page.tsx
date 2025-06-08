'use client'
import Input from '@/app/_components/input'
import React from 'react'
import { useLoginForm } from './_hooks'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Login() {
  const { register, errors, handleSubmit, onSubmit } = useLoginForm()
  return (
    <main className="flex flex-col w-full mt-26 mb-36 pl-6 pr-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <Input
            {...register('username')}
            labelText="Username"
            errorMessage={errors.username?.message}
            type="text"
            Icon={UserIcon}
          />
          <Input
            {...register('password')}
            labelText="Password"
            errorMessage={errors.password?.message}
            type="password"
            Icon={LockClosedIcon}
          />
        </div>
        <button className="h-12 w-full mt-6 bg-gray-600 rounded-lg" type="submit">
          Submit
        </button>
        <span className=""></span>
      </form>
    </main>
  )
}
