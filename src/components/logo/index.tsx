import Image from "next/image"
import clsx from "clsx"

type LogoProps = {
  color: string
}

const Logo = ({ color }: LogoProps) => {
  return (
    <div className={clsx('flex h-16 shrink-0 items-center', { 'lg:hidden': color === 'black' })}>
      <Image
        className="h-8 w-auto"
        src={`https://tailwindui.com/img/logos/mark.svg?color=${color}`}
        alt="Kenda"
        width={32}
        height={32}
      />
      <h1 className={clsx(
        'ml-2 text-lg font-semibold', 
        {
          'text-white': color === 'white',
          'text-black': color === 'black'
        }
      )}>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
    </div>
  )
}

export default Logo