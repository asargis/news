import React, {Component, Fragment} from "react";

class NewsCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-sm-6 col-md-4 news-card">
                    <div
                        className="news-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
                        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
                            <img
                                src={this.props.news.urlToImage}
                                className="d-block h-50"
                            />
                        </div>
                        <div className="px-3">
                          <span className="news-title text-dark d-block font-weight-bold">
                              {this.props.news.title}
                          </span>
                            <span className="news-author text-secondary text-uppercase">
                               {this.props.news.author}
                          </span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewsCard;
