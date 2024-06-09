import VenueCard from '../VenueCard'

const VenueList = () => {
  return (
    <div className="box-border w-full">
      <p className="mb-2 mt-2 text-sm">Select Venue</p>
      <div className="flex flex-col gap-4">
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </div>
    </div>
  )
}

export default VenueList
