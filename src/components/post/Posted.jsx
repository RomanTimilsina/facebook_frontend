import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Comments from "../comments/Comments";
import { AuthContext } from "../../context/authContext";

const Posted = ({post}) => {

  const { currentUser } = useContext(AuthContext)

  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  return (
    <div className='post'>
      <div className="user">
        <div className="userInfo">
         <img src={post.profilePic} alt="" />
         <div className="details">
         <Link
         to={`/profile/${currentUser.id}`}
         style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
            <p >a few minutes ago</p>
         </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="content">
        <span>{post.desc}</span>
        <img src={post.img} alt="" />
      </div>
      <div className="info">
        <div className="item">
          {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
          <p>12 likes</p>
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon  />
          <p>12 comments</p>
        </div>
        <div className="item">
          <ShareOutlinedIcon />
          Share
        </div>
      </div>
      <div >
        { commentOpen && <Comments/>  }
      </div>
  </div>
  )
}

export default Posted











