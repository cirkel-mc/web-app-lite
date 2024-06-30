import Card from "./Card"

const ReviewsWidget = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-1'>
        <span className='text-sm text-neutral-700'>Review</span>
        <span className='text-sm text-primary-10'>See All</span>
      </div>
      <div className="flex gap-2.5 mt-2 w-full overflow-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ReviewsWidget