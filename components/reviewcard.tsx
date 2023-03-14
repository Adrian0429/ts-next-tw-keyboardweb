import React from 'react'
import Image from 'next/image'
import Stars from './Stars'
const ReviewCard = () => {
  return (
    <blockquote className="rounded-lg bg-gray-100 p-8 mx-4">
        <div className="flex items-center gap-4">
          <Image
            alt="user"
            src="/assets/avatar.png"
            className="h-16 w-16 rounded-full object-cover"
            width={200}
            height={200}
          />
          <div>
            <div className="flex justify-center gap-0.5 text-rose-500">
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>
            <p className="mt-1 text-lg font-medium text-gray-700">Zhafran</p>
          </div>
        </div>

        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptatem alias ut provident sapiente repellendus.
        </p>
      </blockquote>

  )
}

export default ReviewCard