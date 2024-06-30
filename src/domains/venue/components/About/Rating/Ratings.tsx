import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Ratings = () => {
  return (
    <div className=' mt-2'>
      <p className='font-medium text-lg mb-2'>Ratings</p>
      <div className='flex gap-2'>
        <FontAwesomeIcon icon={faStar} className='w-4 h-4 text-yellow-300' />
        <FontAwesomeIcon icon={faStar} className='w-4 h-4 text-yellow-300' />
        <FontAwesomeIcon icon={faStar} className='w-4 h-4 text-yellow-300' />
        <FontAwesomeIcon icon={faStar} className='w-4 h-4 text-yellow-300' />
        <FontAwesomeIcon icon={faStar} className='fa-regular w-4 h-4 border-yellow-300 text-white' />
      </div>
    </div>
  )
}

export default Ratings