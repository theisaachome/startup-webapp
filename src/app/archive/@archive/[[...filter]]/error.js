"use client";

export default function FilterError({error}){
    return (
        <div id="error">
            <h1>An Error occurred! </h1>
            {/* <p>{error.message}</p> */}
            {error.message? (
                <p>Sorry, we could not fetch the requested resource.</p>
            ) : (
                <p>Something went wrong!</p>
            )}
            <p>Please try again later.</p>
            <p>If the problem persists, please contact support.</p>
            <p>Thank you for your understanding.</p>
            <p>NextNews Team</p>
            <p>Copyright © 2023 NextNews</p>
            <p>All rights reserved.</p>
        </div>
    );
}