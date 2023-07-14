
export function FeaturedArticle({ article }) {
    const faStyles = {
        backgroundImage: `url('${article.image}')`
    };

    return (
        <div className="feat-article mb-4 mb-md-5 rounded">
            <div className="feat-image d-flex align-items-stretch rounded" style={faStyles}>
                <a href={article.link} target="_blank" rel="noreferrer" className="d-flex flex-column justify-content-between">
                    <p className="source d-inline-flex m-0"><span className="py-1 px-2 px-md-3">{article.source}</span></p>
                    <h6 className="title m-0 p-2 px-md-3 rounded-bottom">{article.title}</h6>
                </a>
            </div>
            <div className="feat-summary d-none d-sm-block p-2 px-md-3">
                <a href={article.link} target="_blank" rel="noreferrer">
                    <p className="summary mb-0">{article.summary}</p>
                </a>
            </div>
        </div>
    );
}

function Article({ article }) {
    return (
        <div className="article mb-4">
            <p className="source mb-1 d-md-none">{article.source}</p>
            <a className="d-flex flex-column flex-md-row flex-md-wrap justify-content-md-between" href={article.link} target="_blank" rel="noreferrer">
                <img className="mb-2 mb-md-0 img-fluid rounded-top col-md-3 me-md-2" src={article.image} alt={article.title} />
                <div className="article-details col-md-8 px-md-2 py-md-1 d-flex flex-column flex-md-grow-1">
                    <p className="source my-1 d-none d-md-block">{article.source}</p>
                    <h6 className="title mb-2">{article.title}</h6>
                    <p className="summary d-none d-md-block">{article.summary}</p>
                </div>
            </a>
        </div>
    );
}

export default Article;
