import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FeaturedArticle } from "./Article";
import Article from "./Article";
import Pagination from "./Pagination";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [searchParams, setSearchParams] = useOutletContext();

    function shuffleArray(array) {
        let tempArray = array;
        for (let i = tempArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
        return tempArray;
    }

    useEffect(() => {
        fetch("https://jasonnealy.com/api/news/articles?api-key=##########")
            .then((response) => response.json())
            .then((data) => {
                setArticles(shuffleArray(data.articles));
            })
            .catch(error => console.log(error));
    }, []);

    const [articlesDisplay, setArticlesDisplay] = useState([]);
    const articleCount = articlesDisplay.length;

    const catFilter = searchParams.get("cat");
    let curPage = parseInt(searchParams.get("page"));
    if (!curPage || curPage === null) {
        curPage = 1;
    }
    const articlesPerPage = 7;
    const [firstArticle, setFirstArticle] = useState(1);
    const [lastArticle, setLastArticle] = useState(articlesPerPage);

    useEffect(() => {
        function filterCategory(item) {
            let match = false;
            const tagArray = item.tags.split(",");
            tagArray.forEach(tag => {
                if (tag === catFilter) {
                    match = true;
                }
            });
            return match;
        }
        if (catFilter !== null && catFilter !== undefined) {
            const filteredArray = articles.filter(filterCategory);
            setArticlesDisplay(shuffleArray(filteredArray));
        } else {
            setArticlesDisplay(shuffleArray(articles));
        }
    }, [catFilter, articles]);

    useEffect(() => {
        if (curPage === 1) {
            setFirstArticle(1);
            setLastArticle(articlesPerPage + 1);
        } else {
            setFirstArticle((curPage - 1) * articlesPerPage + 1);
            setLastArticle(curPage * articlesPerPage + 1);
        }
    }, [curPage, articlesPerPage]);

    const newsElements = articlesDisplay.slice(firstArticle, lastArticle).map((article) => (
        <Article article={article} key={article.id} />
    ));

    return (
        <>
            <div className="articles-container mx-auto px-3 px-sm-4 px-md-5 mb-4">
                {catFilter && <h1 className="mb-3">{catFilter}</h1>}
                {articlesDisplay.length > 0 && <FeaturedArticle article={articlesDisplay[0]} key={articlesDisplay[0].id} />}
                {articlesDisplay.length > 0 && newsElements}
            </div>
            <Pagination count={articleCount} articlesPerPage={articlesPerPage} showPage={curPage} setSearchParams={setSearchParams} />
        </>
    );
}

export default Articles;
