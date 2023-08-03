import AddBalance from "./components/AddBalance"
import BillingInfo from "./components/BillingInfo"
import CurrentBalance from "./components/CurrentBalance"
import LatestTrans from "./components/LatestTrans"
import PaymentsDue from "./components/PaymentsDue"
import Transfer from "./components/Transfer"
import VideoCards from "./components/VideoCards"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"

function App() {

  return (
    <div className="bg-[#161717] w-full h-full">
      
      <main>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="mx-12 pb-20">
            <div className="mt-10 text-white text-4xl font-semibold">New Campaign</div>
            <div className="flex flex-col gap-10 mt-10">
              <div id="row1" className="flex gap-10">
                <div id="left 2 cards" className="flex flex-col gap-10">
                  <CurrentBalance />
                  <PaymentsDue />
                </div>
                <div id="right card">
                  <LatestTrans />
                </div>
              </div>
              <div id="row2" className="flex gap-10">
                <div id="left card">
                  <Transfer />
                </div>
                <div id="right card">
                  <BillingInfo />
                </div>
              </div>
              <div id="row3" className="flex gap-10">
                <div id="left card">
                  <AddBalance />
                </div>
                <div id="right 2 cards">
                  <VideoCards />
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
