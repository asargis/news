export function requestNews(articles) {
    return {
        type: 'REQUEST_NEWS',
        payload: {
            news: articles
        }
    }
}