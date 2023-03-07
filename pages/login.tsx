import React from 'react'
import Head from "next/head"
import Image from 'next/image'
import BackgroundImage from '../assets/netflix_background.jpg'
import LogoImage from '../assets/netflix_logo.png'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {

  const [login, setLogin] = React.useState(false)
  const {signIn, signUp} = useAuth()

  // React Hook Form library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({email,  password}) => {
    if(login){
      await signIn(email, password)
    }
    else {
      await signUp(email, password)
    }
  }


  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={BackgroundImage}
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=""
      />

      <div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
        <Image 
          src={LogoImage} 
          layout="fill" 
          objectFit="contain" 
          alt=""/>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sign In</h1>

        <div className="space-y-4">
          <label className="inline-block w-full">
          <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className='p-1 font-light text-white'>
                Please enter a valid email!
              </p>
            )}
          </label>

          <label className="inline-block w-full">
            <input 
              type="password" 
              placeholder="Password" 
              className="input" 
              {...register('password', {required: true})}
            />
            {errors.password && 
            (<p className='p-1 font-light text-white'>
              Your password must contain between 6 and 60 characters!
            </p>)}
          </label>
        </div>

        <button className="w-full rounded bg-[#e50914] py-4 font-semibold" onClick={()=>setLogin(true)}>Sign In</button>

        <div className="text-[gray]">
          New to Netflix? {' '}
          <button type="submit" className="text-white hover:underline font-semibold" onClick={()=>setLogin(false)}>Sign up Now!</button>
          Pressing "Sign up now!" will directly register your email and password.
        </div>
      </form>
    </div>
  )
}

export default Login
