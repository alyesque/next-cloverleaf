import { parse } from "node-html-parser";
import Link from "next/link";

const ArticleList = ({ articles }) => {
  function parseImg(x) {
    const root = parse(x);

    return root.childNodes[3].childNodes[0].rawAttrs.substring(6, 249);
  }

  function parsePreview(x) {
    const root = parse(x);
    return root.childNodes[0].childNodes[0]._rawText;
  }
  return (
    <div>
      <div>
        <h1>Recent Posts</h1>
        <div className="item-container">
          {articles.map((post) => {
            return (
              <div className="cardSmall" key={post.id}>
                <div className="left">
                  {" "}
                  <img
                    src={parseImg(post.content)}
                    alt="default image from google api"
                  />
                  <br />{" "}
                </div>
                <div className="right">
                  <h1>{post.title}</h1>

                  <p> {parsePreview(post.content)} </p>

                  <div className="sec">
                    <Link
                      href="/article/[id]"
                      as={"/article/" + articles.indexOf(post)}
                    >
                      <button>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ArticleList;
