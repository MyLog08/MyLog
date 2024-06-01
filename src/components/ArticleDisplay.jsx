const ArticleDisplay = () => {
  return (
    <section>
      <h1>{/* 게시글 타이틀 */}</h1>
      <div>
        <div>
          <span>{/* 게시글 작성자 닉네임 */}</span>
          <span>{/* 게시글 작성 날짜 */}</span>
          <span>{/* 게시글 좋아요 수 */}</span>
        </div>
        <div>
          <button>팔로우</button>
        </div>
        <div>{/* 게시글 내용 */}</div>
      </div>
    </section>
  );
};

export default ArticleDisplay;
