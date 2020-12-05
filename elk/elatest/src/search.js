import React from "react";
import ReactDOM from "react-dom";

import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  ResultCard,
  SelectedFilters
} from "@appbaseio/reactivesearch";


const Main = () => (
  <ReactiveBase
    app="products"
    url="http://localhost:9200"
    enableAppbase
  >
    <div className="row">
      <div className="col">
        <DataSearch
          title="DataSearch"
          dataField={["firstname", "firstname.search"]}
          componentId="BookSensor"
          URLParams
        />
      </div>

      <div className="col">
        <SelectedFilters />
        <ReactiveList
          componentId="SearchResult"
          dataField="firstname"
          size={10}
          className="result-list-container"
          pagination
          react={{
            and: "BookSensor"
          }}
          render={({ data }) => (
            <ReactiveList.ResultCardsWrapper>
              {data.map((item) => (
                <ResultCard id={item._id} key={item._id}>
              
                  <ResultCard.Title>
                    <div
                      className="book-title"
                      dangerouslySetInnerHTML={{
                        __html: item.firstname
                      }}
                    />
                  </ResultCard.Title>

                  <ResultCard.Description>
                    <div className="flex column justify-space-between">
                     
                        <div>
                          by{" "}
                          <span className="authors-list">{item.firstname}</span>
                        </div>
                       
                   
                      <span className="pub-year">
                        Pub {item.lastname}
                      </span>
                    </div>
                  </ResultCard.Description>
                </ResultCard>
              ))}
            </ReactiveList.ResultCardsWrapper>
          )}
        />
      </div>
    </div>
  </ReactiveBase>
);

export default Main;

ReactDOM.render(<Main />, document.getElementById("root"));
