import Head from 'next/head'
import CardFlag from '../components/CardFlag'
import Header from '../components/Header'
import Search from '../components/Search'

export default function Home({ data }) {

  

  return (
    <div className='px-6 py-8 '>
      <Search data={data} />

      <div className='grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 '>
        {
          data.map(item => (
            <CardFlag
              key={item.name.common} data={item} 
            />
          ))
        }
      </div>

    </div>
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