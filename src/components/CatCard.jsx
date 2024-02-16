/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export default function CatCard({ imgSrc }) {

    return (
        <>
            <div className="col-sm">
                <div className="card mb-3">
                    <img src={imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-warning">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}