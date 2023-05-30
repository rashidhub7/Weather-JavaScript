import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { database } from "./Components/Config/Config"




function App() {


  const [channellist, setChannelList] = useState([])
  const [sample, setSample] = useState([])
  const [price, setPrice] = useState(0)
  const channelRef = collection(database, "sample");

  const getChannel = async () => {

    const data = await getDocs(channelRef)

    const filterData = data.docs.map((doc) => (
      {
        ...doc.data(),
        id: doc.id
      }
    ))
    setChannelList(filterData);
  }


  useEffect(() => {
    getChannel()
  }, [])




  const onPost = async () => {
    await addDoc(channelRef, {
      brand: sample,
      price: price
    })
  }


  const deleteChannel = async (id) => {
    const channelDoc = doc(database, "sample", id)
    await deleteDoc(channelDoc);

  }
  return (
    <div className="App">

      <input type="text" placeholder="enter name" value={sample} onChange={(e) => setSample(e.target.value)} /> <br />
      <input type="number" placeholder="enter price" value={price} onChange={(e) => setPrice(e.target.value)} /> <br />

      <button onClick={onPost}>Add</button>


      {
        channellist.map((channel) => (

          <div key={channel.id}>
            name:{channel.brand} <br />
            price:{channel.price} <br />
            <button onClick={() => deleteChannel(channel.id)}>Delete</button>



          </div>
        ))
      }
    </div>
  )
}

export default App
