import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRecordVinyl,
  faMoneyBill,
  faPlane,
} from '@fortawesome/free-solid-svg-icons'

const Facility = () => {
  return (
    <div className="mt-2">
      <p className="font-medium text-lg mb-1">Facilities</p>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faMoneyBill}
            className="w-4 h-4 text-primary-10"
          />
          <span className="text-sm">Rp15.000/hour</span>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faRecordVinyl}
            className="w-4 h-4 text-primary-10"
          />
          <span className="text-sm">5 instruments</span>
        </div>
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faPlane} className="w-4 h-4 text-primary-10" />
          <span className="text-sm">Recordings</span>
        </div>
      </div>
    </div>
  )
}

export default Facility
