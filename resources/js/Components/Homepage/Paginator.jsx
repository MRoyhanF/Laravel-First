import { Link } from "@inertiajs/react"

const Paginator = ({meta}) => {
    // const prev = meta.links[0].url;
    // const next = meta.links[meta.links.length -1].url;
    // const current_page = meta.current_page;

    return (
        <div className="join">
            <button className="join-item btn btn-outline">«</button>
            <button className="join-item btn btn-outline">Page 22</button>
            <button className="join-item btn btn-outline">»</button>
        </div>        
    )
}

export default Paginator