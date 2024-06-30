import dynamic from "next/dynamic"

const Component = dynamic(() => import(/* webpackChunkName: "lightbox" */ './Lightbox'))

export default Component