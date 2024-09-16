import VenueCard from '../VenueCard'

const VenueList = () => {
  return (
    <div className="box-border w-full">
      <div className="flex flex-col gap-4 mt-6">
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
