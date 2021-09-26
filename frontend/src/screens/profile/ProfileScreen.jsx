import './profileScreen.css'
import NewsFeed from "../../components/newsFeed/NewsFeed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"

const ProfileScreen = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/assets/pic/cover.jpeg" alt="" />
              <img className="profileUserImg" src="/assets/pic/person/person-1.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Name of the User</h4>
              <span className="profileInfoDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, incidunt?</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <NewsFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileScreen
