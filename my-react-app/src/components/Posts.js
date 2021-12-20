import React,  {useState, useEffect} from "react";
import { getPosts } from "../data/Posts";
import { Post } from "./Post";


export const Posts = () => {
    /*get a random value for each id of new post*/
    let id = Math.floor(Math.random() * 100) + 1

    const [posts, setPosts] = useState([]);
    
    /*in the beginning all props should be empty and have no value*/
    const [newPost, setNewPost] = useState({
        id: null, //when working with databases id's will be generated automatically. you dont have to make an id for each request
        title: "", 
        content: ""});

    useEffect(() => {
      setPosts(getPosts());
    }, []);

    const changeInput = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value});
    };

    const submitForm = (e) => {
        e.preventDefault();
        setNewPost({ ...newPost, id});
        //create a fetch request for the api that posts newPost state in the post list
        // fetch("https://", {method: "post", body: JSON.stringify(newPost)}).then(() => {fetch request for the list ===> setPosts(to the updated post list)})

        //but we dont have an api so we are just going to make it able for typed in user input be displayed as a new element on window
        setPosts([ ...posts, newPost]);
    }



    return (
        <>
            <form onSubmit={submitForm}>
                <input 
                name="title" 
                type="text" 
                placeholder="Title..."
                onChange={changeInput}/>
                <br></br>

                <textarea 
                name="content" 
                type="text" 
                placeholder="Enter text..."
                onChange={changeInput}></textarea>
                <br></br>

                <button type="submit">Add</button>
            </form>

          {posts.map(post => (
            <Post key={post.id} post={post} setPosts={setPosts} posts={posts}/>
          ))}
        </>
    );
};