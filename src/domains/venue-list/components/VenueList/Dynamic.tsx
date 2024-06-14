import dynamic from 'next/dynamic'

const Component = dynamic(
  () => import(/* webpackChunkName: "venue-list" */ './VenueList'),
  {
    loading: () => <p>Loading...</p>,
  },
)

export default Component
