import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../store/actions/postActions";

export const UpdatePost = ({ post }) => {
    let id = post.id;
    let title = post.title;
    let content = post.content;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const dispatch = useDispatch();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const updatedPost = { id, title: newTitle, content: newContent };
    dispatch(updatePost(updatedPost));
  };

  return (
    <div>
        {/* <button className="btn pink lighten-1 z-depth-0">Update</button> */}
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
            />
            <textarea
                value={newContent}
                onChange={(event) => setNewContent(event.target.value)}
            ></textarea>
            <button type="submit" className="btn pink lighten-1 z-depth-0">Update</button>
        </form>
    </div>
  );
};