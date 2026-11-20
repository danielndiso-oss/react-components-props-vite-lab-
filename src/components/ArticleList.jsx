import Article from "./Article.jsx";

function ArticleList({ articles }) {
  return (
    <main className="article-list">
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;