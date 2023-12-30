import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log('props: ', props);
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                <NewsList news={props.news.data}/>
            </div>
            <div className="flex justify-center items">
                <Paginator />
            </div>
        </div>
    );
}
