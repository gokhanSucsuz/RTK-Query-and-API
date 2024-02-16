/* eslint-disable no-unused-vars */
import LoadingComponent from "../../components/LoadingComponent";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";

export default function FetchCategories() {
  const [data, isLoading, isError, error] = useCategoriesFetchApi()
  return (
    <div className="col-sm-12">
      <h1>Fetch: Categories</h1>
      {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
      <ul className="list-group">
        {data.map((item) =>
          <li key={item.id} className="list-group-item">
            {item.name}
          </li>
        )}
      </ul>
    </div>
  );
}
