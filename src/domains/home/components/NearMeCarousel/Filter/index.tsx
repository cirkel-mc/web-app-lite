import {
  faClock,
  faMusic,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import FilterItem from './Item'

interface FilterProps {
  activeKey: string
  setActiveKey: any
}

function Filter({ activeKey, setActiveKey }: FilterProps) {
  return (
    <div className="flex gap-2">
      <FilterItem itemKey='session' label='Session' Icon={faClock} onClick={() => setActiveKey('session')} activeKey={activeKey} />
      <FilterItem itemKey='musician' label='Musician' Icon={faMusic} onClick={() => setActiveKey('musician')} activeKey={activeKey} />
      <FilterItem itemKey='studio' label='Studio' Icon={faLocationDot} onClick={() => setActiveKey('studio')} activeKey={activeKey} />
    </div>
  )
}

export default Filter
