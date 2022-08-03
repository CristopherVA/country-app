import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import CardFlag from '../components/CardFlag'
import Layout from '../components/Layout'
import Search from '../components/Search'

export default function Home({ data }) {


  const [searchInput, setSearchInput] = useState({
    search: '',
    region: ''
  })

  const { search, region } = searchInput;

  const handleChange = ({ target }) => {
    setSearchInput({
      ...searchInput.search,
      [target.name]: target.value
    }
    )
  }

  const handleChangeRegion = ({ target }) => {
    setSearchInput({
      ...searchInput.region,
      [target.name]: target.value
    })
  }

  const countryFilter = data.filter(item => {
    if (search) {
      return item.name.common.toLowerCase().includes(search.toLocaleLowerCase())
    } else if (region) {
      return item.region.toLowerCase().includes(region.toLocaleLowerCase())
    } else {
      return item.name.common.toLowerCase().includes(search.toLocaleLowerCase())
    }
  })

  const { theme, setTheme } = useTheme()

  return (
    <Layout>

      <div className='px-6 py-8'>
        
        <Search
          value={search}
          region={region}
          handleChange={handleChange}
          handleChangeRegion={handleChangeRegion}
          data={data}
        />

        <div className='grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 '>
          {
            countryFilter.map(item => (
              <CardFlag
                key={item.name.common} data={item}
              />
            ))
          }


        </div>

      </div>
    </Layout>
  )
}

export const getServerSideProps = async (ctx) => {


  const data = await fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())


  return {
    props: {
      data
    }
  }
}