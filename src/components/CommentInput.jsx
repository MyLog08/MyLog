const CommentInput = () => {
  return (
    <section>
      <div>{/* 댓글 수 */}</div>
      <div>
        <input type="text" placeholder="댓글을 입력하세요."></input>
      </div>
      <div>
        <button>등록</button>
      </div>
    </section>
  );
};

export default CommentInput;
