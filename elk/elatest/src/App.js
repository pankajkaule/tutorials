import "./App.css";
import {
  ReactiveBase,
  DataSearch,
  SelectedFilters,
  ReactiveList,
  ResultList,
} from "@appbaseio/reactivesearch";
function App() {
  return (
    <div className="App">
      <div>
        <ReactiveBase app="products" url="http://localhost:9200">
          <div className="row">
            <div className="col">
              <DataSearch
                dataField={[
                  "firstname",
                  "firstname.search",
                  "lastname",
                  "lastname.search",
                ]}
                categoryField="firstname"
                componentId="Candidate"
                fieldWeights={[1, 3]}
                defaultSuggestions={[
                  { label: "name", value: "firstname" },
                  { label: "lastname", value: "lastname" },
                ]}
                URLParams={false}
                highlight={true}
                highlightField="firstname"
                queryFormat="or"
                fuzziness={0}
                debounce={100}
              />
            </div>
          </div>

          <div className="col">
            <SelectedFilters />
            <ReactiveList
              componentId="SearchResult"
              dataField="original_title"
              size={20}
              className="result-list-container"
              react={{
                and: ["firstname", "lastname"],
              }}
              renderItem={(item) => (
                <ResultList key={item.id}>
                  <ResultList.Content>
                    <ResultList.Title>{item.firstName}</ResultList.Title>
                    <ResultList.Description>
                      <div>
                        name {item.firstname} {item.lastname}
                      </div>
                      <div>age ({item.age} )</div>
                    </ResultList.Description>
                  </ResultList.Content>
                </ResultList>
              )}
            />
          </div>
        </ReactiveBase>
      </div>
    </div>
  );
}

export default App;
