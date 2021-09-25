import './homeScreen.css'
import NewsFeed from "../../components/newsFeed/NewsFeed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"

const HomeScreen = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <NewsFeed />
        <Rightbar />
      </div>
    </>
  )
}

export default HomeScreen
