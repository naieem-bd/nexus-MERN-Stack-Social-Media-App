import Post from '../post/Post'
import Share from '../share/Share'
import './newsFeed.css'
import { Posts } from '../../dummyData'

const NewsFeed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map(p => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default NewsFeed