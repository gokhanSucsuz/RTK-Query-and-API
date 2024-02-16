/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useCategoriesFetchApi from "../../customHooks/useCategoriesFetchApi";
import useCategoryFetchApi from "../../customHooks/useCategoryFetchApi";
import Row from "../../components/Row";
import CatCard from "../../components/CatCard";
import LoadingComponent from "../../components/LoadingComponent";

const API_KEY = import.meta.env.VITE_CAT_API_KEY
const API_URL = import.meta.env.VITE_CAT_API_URL

export default function FetchCategory() {
    const { categoryName } = useParams()
    const [data, isLoading, isError, error] = useCategoryFetchApi(categoryName)
    console.log(data.id)


    return (
        <div className="col-sm-12">
            <h1>Fetch: Category</h1>
            {isError ? <h2>{error}</h2> : isLoading ? <LoadingComponent /> : ""}
            <Row className="row-cols-sm-3">
                {data.map(item => <CatCard key={item.id} imgSrc={item.url} />)}
            </Row>
        </div>
    );
}
