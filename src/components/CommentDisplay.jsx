const CommentDisplay = () => {
  return (
    <section>
      <div>
        <img src="#" alt="프로필 이미지" />
        {/* 프로필 이미지 */}
        <div>
          <div>
            <span>{/* 닉네임 */}</span>
            <span>{/* 댓글 작성 날짜 */}</span>
          </div>
          <div>{/* 댓글 좋아요 수 */}</div>
        </div>
      </div>
      <div>{/* 댓글 내용 */}</div>
    </section>
  );
};

export default CommentDisplay;
