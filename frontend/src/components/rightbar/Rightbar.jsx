import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({ profile }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="pic/gift.png" alt="" />
          <span className="birthdayText"><b>Alpot Smith</b> and <b>3 Other Friends</b> have a birthday today!</span>
        </div>
        <img className="rightbarAd" src={`${PF}pic/ad.png`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>      
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Tangail</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}pic/person/person-1.jpg`} alt="" />
            <span className="rightbarFollowingName">Jhon Durjoy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}pic/person/person-1.jpg`} alt="" />
            <span className="rightbarFollowingName">Jhon Durjoy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}pic/person/person-1.jpg`} alt="" />
            <span className="rightbarFollowingName">Jhon Durjoy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}pic/person/person-1.jpg`} alt="" />
            <span className="rightbarFollowingName">Jhon Durjoy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}pic/person/person-1.jpg`} alt="" />
            <span className="rightbarFollowingName">Jhon Durjoy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}pic/person/person-1.jpg`} alt="" />
            <span className="rightbarFollowingName">Jhon Durjoy</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar /> : <HomeRightbar /> }
      </div>
    </div>
  )
}

export default Rightbar
