import CaptchaForm from '@/app/_components/captchaForm'
import Input from '@/app/_components/input'
import React from 'react'

export default function page() {
  return (
    <main className="flex flex-col w-full mt-26 mb-36 pl-6 pr-6">
      <CaptchaForm>
        <div className="flex flex-col gap-3">
          <Input
            id="email"
            labelText="E-mail"
            name="email"
            type="text"
            placeholder="yourmail@domain.com"
          />
          <Input id="password" labelText="Password" name="password" type="password" />
        </div>
      </CaptchaForm>
    </main>
  )
}
