import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "../styles/css/rankingPost.module.css";

function RankingPost({ post }) {
  const navigate = useNavigate();

  return (
    <div
      className={styled.postCon}
      onClick={() => {
        navigate(`/wineList/${post.id}`);
      }}
    >
      <div className={styled.imgCon}>
        <span className={styled.best}>BEST PICK!</span>
        <img src={post.imageUrl}></img>
      </div>
      <div className={styled.title}>{post.name}</div>
    </div>
  );
}

export default RankingPost;
