import './rightbar.css'

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/pic/gift.png" alt="" />
          <span className="birthdayText"><b>Alpot Smith</b> and <b>3 Other Friends</b> have a birthday today!</span>
        </div>
        <img className="rightbarAd" src="/assets/pic/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/pic/person-1.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Smath Kuper</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/pic/person-1.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Smath Kuper</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="/assets/pic/person-1.jpg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Smath Kuper</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
