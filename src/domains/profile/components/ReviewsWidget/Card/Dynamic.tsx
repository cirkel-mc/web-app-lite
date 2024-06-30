import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Card'), {
  loading: () => <p>Loading...</p>,
})

export default DynamicComponent