// import libraries
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import components
import PostCard from "../PostCard";
import LoadMoreBtn from "../LoadMoreBtn";
// import resources
import LoadIcon from "../../images/loading.gif";
import { getDataAPI } from "../../utils/fetchData";
import { POST_TYPES } from "../../redux/actions/postAction";

const Posts = () => {
  // set state
  const { homePosts, auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  /**
   * @description load dữ liệu khi gọi api lọc danh sách bài viết
   * @date 01/2023
   */
  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(
      `posts?limit=${homePosts.page * 9}`,
      auth.token
    );

    dispatch({
      type: POST_TYPES.GET_POSTS,
      payload: { ...res.data, page: homePosts.page + 1 },
    });

    setLoad(false);
  };

  // Template
  return (
    <div className="posts">
      {homePosts.posts.map((post) => (
        <PostCard key={post._id} post={post} theme={theme} />
      ))}

      {load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />}

      <LoadMoreBtn
        result={homePosts.result}
        page={homePosts.page}
        load={load}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Posts;
