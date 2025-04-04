import styles from './page.module.css';

export default function NewPost(){
    function createPost(formData) {
        'use server'
        const title = formData.get('title');
        console.log(title);
    }
    return (
        <div>
            <h1>New Post</h1>
            <form action={createPost}>
                <div className={styles.form-control}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />
                </div>  
                <button type="submit">Create Post</button>
                <button type="reset">Reset</button> 
            </form>
        </div>
    )
}