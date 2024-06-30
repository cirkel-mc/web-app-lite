import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/PlaceholderCardImage.png'

const Card = () => {
  return (
    <div className="rounded-lg border-[1px] border-gray-400 w-[228px] p-2.5">
      <p className="w-[216px] text-ellipsis whitespace-nowrap overflow-hidden mb-1">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
      <div>
        <div className="flex gap-2">
          <Image
            src={PlaceholderImage}
            alt=""
            width={46}
            height={46}
            className="rounded-[10px]"
          />
          <div>
            <p className="text-lg mb-0 font-medium">User Name</p>
            <p>category</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
