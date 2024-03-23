import React from 'react'
import Input from '@/views/common/ui/components/Input'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
  return (
    <div>
      <Input
        placeholder="Search musicians"
        icon={faSearch}
        onChange={() => null}
        value=""
      />
    </div>
  )
}

export default Search
