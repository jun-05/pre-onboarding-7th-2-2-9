import axios from "axios"

const AdManagementContent = () => {
  const fetchData = async () => {
    const response = await axios.get('/server/wanted_FE_ad-list-data-set.json')
    console.log(response)
  }
  fetchData()
  return( 
    <div></div>
  )
}

export default AdManagementContent