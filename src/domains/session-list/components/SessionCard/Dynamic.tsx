import dynamic from 'next/dynamic'
import Loader from './Loader'

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "session-card" */ './SessionCard'),
  {
    loading: () => <Loader />,
  },
)

export default DynamicComponent
