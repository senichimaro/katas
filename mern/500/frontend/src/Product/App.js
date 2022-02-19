import {
  useEffect,
  useState
} from 'react'
import {
  getData
} from './services'


// import Modal from './components/Modal'
import Loader from './components/Loader'
import NoData from './components/NoData'
import Table from './components/Table'

const App = () => {

  const [ isData , setIsData ] = useState([])
  const [ isLoading , setIsLoading ] = useState(true)
  const [show, setShow] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const response = await getData()
      console.log( "response" , response );
      if ( response.data.status === 200 ) setIsData( response.data )
      else {
        setIsData( response.data )
        setShow(true)
      }
      setIsLoading(false)
    }
    loadData()
  },[])

  if ( isLoading && !isData.length ) return <Loader />
  if ( !isLoading && !isData.length ) return <NoData />
  return <Table isData={isData} />

}

export default App
