/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import useCategoriesAxiosApi from "../../axiosCustomHooks/useCategoriesAxiosApi"
import LoadingComponent from "../../components/LoadingComponent"

export default function AxiosCategories() {
    const [data, isLoading, isError, error] = useCategoriesAxiosApi()
    return (
        <div className="col-sm-12">
            <h1>Axios: Categories</h1>
            {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
            <ul className="list-group">
                {data.map((item) =>
                    <li key={item.id} className="list-group-item">
                        <Link to={`/axios-category/${item.id}`}>{item.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}