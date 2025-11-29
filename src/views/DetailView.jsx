import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function DetailView() {

    const {id} = useParams();
    //stato del singolo post
    const [post, setPost] = useState();

    const getData = async () => {
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await promise.json();
        setPost(json);
    }

    useEffect(() => {

        const fetchDetail = async () => {
           await getData();
        };

        fetchDetail();

    }, []);

    return (
        <>
            <h1 className="space">Detail Page</h1>
            <h2 className="ps-4">Id: {id}</h2>
            {post && <>
            <div className="p-4">
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
            </>}
        </>
    )
}