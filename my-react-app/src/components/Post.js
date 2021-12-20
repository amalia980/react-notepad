import React from "react"
import './Post.css'

export const Post = (props) => {

    const {id, title, content} = props.post;//my specific prop from Posts
    const {setPosts, posts} = props;


    const onDeletePost = () => {
        //if we had an api
        /*fetch(`deletetEndpoint/${id}`, {method: "delete"}).then(() => {
            fetch("theList").then(data => {
                setPosts(data)
            })
        })*/

        setPosts(posts.filter((post) => post.id !== id))
    };

    return (
            <div className="div-wrapper">
                <h3>{title}</h3>
                <p>{content}</p>
                <button id="delete-btn" onClick={onDeletePost}>Delete</button>
            </div>
        );
}