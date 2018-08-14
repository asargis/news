import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as pageActions from "../actions/PageActions";
import Pagination from "./Pagination";
import './News.css';
import NewsCard from "./NewsCard";

class News extends Component {
    // const newsId = props.match.params.id;
    constructor(props) {
        super(props);
        this.state = {
            news: store.getState().page.news,
        };
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        axios.get(store.getState().page.api)
            .then((response) => {
                const articles = response.data.articles;
                this.props.dispatch(pageActions.requestNews(articles));
            });
    }

    onPageChanged(data) {
        const {news} = this.state;
        const {currentPage, totalPages, pageLimit} = data;
        // console.log(news);

        const offset = (currentPage - 1) * pageLimit;

        const currentNews = news.slice(offset, offset + pageLimit);
        this.setState({currentPage, currentNews, totalPages});
    };

    render() {
        const {
            currentNews = [],
            currentPage,
            totalPages
        } = this.state;
        const totalNews = this.state.news.length;
        if (totalNews === 0) return null;
        console.log(currentNews);
        const headerClass = [
            "text-dark py-2 pr-4 m-0",
            currentPage ? "border-gray border-right" : ""
        ]
            .join(" ")
            .trim();
        return (
            <div className="container mb-5">
                <div className="row d-flex flex-row py-5">
                    <div
                        className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <h2 className={headerClass}>
                                <strong className="text-secondary">{totalNews}</strong>{" "}
                                News
                            </h2>
                            {currentPage && (
                                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Страница <span className="font-weight-bold">{currentPage}</span> /{" "}
                                    <span className="font-weight-bold">{totalPages}</span>
                </span>
                            )}
                        </div>
                        <div className="d-flex flex-row py-4 align-items-center">
                            <Pagination
                                totalRecords={totalNews}
                                pageLimit={5}
                                pageNeighbours={1}
                                onPageChanged={this.onPageChanged}
                            />
                        </div>
                    </div>
                    {
                        currentNews.map((item, index) => (
                                <NewsCard key={index} news={item}/>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
};

export default connect()(News);