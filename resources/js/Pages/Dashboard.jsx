import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {  Head } from '@inertiajs/react';
// import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function Dashboard({ auth }) {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            title, description, category
        }
        Inertia.post('/news',data)
    }

    console.log('props last: ',props);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(title) => setTitle(setTitle.target.value)}/>
                        <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full" onChange={(description) => setTitle(setDescription.target.value)}/>
                        <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full" onChange={(category) => setTitle(setCategory.target.value)}/>
                        <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
