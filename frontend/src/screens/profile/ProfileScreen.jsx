import './profileScreen.css'
import NewsFeed from "../../components/newsFeed/NewsFeed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const ProfileScreen = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const [user, setUser] = useState({})
  const username = useParams().username

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  }, [username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={ user.coverPicture || PF+"pic/noCover.jpeg" } alt="" />
              <img className="profileUserImg" src={PF+"pic/noAvatar.png"} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <NewsFeed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileScreen
