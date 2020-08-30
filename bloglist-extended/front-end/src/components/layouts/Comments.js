import React from 'react'

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map( comment => <ul>
            <li>{comment}</li>
            </ul>)}
        </div>
    )
}

export default Comments
