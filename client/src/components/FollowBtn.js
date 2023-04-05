// import libraries
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import resources
import { follow, unfollow } from "../redux/actions/profileAction";

const FollowBtn = ({ user }) => {
  // set state
  const [followed, setFollowed] = useState(false);

  const { auth, profile, socket } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (auth.user.following.find((item) => item._id === user._id)) {
      setFollowed(true);
    }
    return () => setFollowed(false);
  }, [auth.user.following, user._id]);

  /**
   * @description Xử lý sự kiện khi ấn nút theo dõi người dùng
   */
  const handleFollow = async () => {
    if (load) return;

    setFollowed(true);
    setLoad(true);
    await dispatch(follow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  /**
   * @description Xử lý sự kiện khi bỏ theo dõi người dùng
   */
  const handleUnFollow = async () => {
    if (load) return;

    setFollowed(false);
    setLoad(true);
    await dispatch(unfollow({ users: profile.users, user, auth, socket }));
    setLoad(false);
  };

  // Template
  return (
    <>
      {followed ? (
        <button className="btn btn-outline-danger" onClick={handleUnFollow}>
          UnFollow
        </button>
      ) : (
        <button className="btn btn-outline-info" onClick={handleFollow}>
          Follow
        </button>
      )}
    </>
  );
};

export default FollowBtn;
