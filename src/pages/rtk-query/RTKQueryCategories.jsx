import { Link } from "react-router-dom"
import LoadingComponent from "../../components/LoadingComponent"
import { useFetchCategoriesQuery } from "../../store/catApi/catApiSlicer"

export default function RTKQueryCategories() {
    const { data, isLoading, isError, error } = useFetchCategoriesQuery()
    console.log(data)
    return (
        <div className="col-sm-12">
            <h1>RTK Query: Categories</h1>
            {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
            <ul className="list-group">
                {data?.map((item) =>
                    <li key={item.id} className="list-group-item">
                        <Link to={`/rtk-query-category/${item.id}`}>{item.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}