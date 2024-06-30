import Maps from "../../Maps"
import Lightbox from "../../Lightbox"

interface LocationProps {
  location: string
  lat: string
  long: string
  open: boolean
  onClickMaps: () => void
  onClickLightbox: () => void
}

const Location = ({ location, lat, long, open, onClickMaps, onClickLightbox }: LocationProps) => {
  return (
    <div className='flex gap-3'>
      <div className='w-full'>
        <p className='font-medium text-lg mb-1'>Locations</p>
        <p className='text-sm'>{location}</p>
      </div>
      <div className='w-[150px] h-[80px]'>
        <Maps lat={lat} long={long} onClick={onClickMaps} />
        {open && <Lightbox lat={lat} long={long} isOpen={open} onClose={onClickLightbox} />}
      </div>
    </div>
  )
}

export default Location