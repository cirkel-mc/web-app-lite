import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./RegisterForm'), {
  loading: () => <p>Loading...</p>,
})

export default DynamicComponent
