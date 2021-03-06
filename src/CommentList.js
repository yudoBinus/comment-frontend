import React, { useState } from 'react'
import Comment from './Comment'
import CardColumns from 'react-bootstrap/CardColumns'
import DeleteCommentModal from './DeleteCommentModal'
import PropTypes from 'prop-types'

function CommentList({comments, socket, setComments}) {
	const [deletedCommentId, setDeletedCommentId] = useState(null)
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		<div style={{padding:"1rem"}}>
			<h1>List of {comments.length > 1 ? 'Comments' : 'Comment' }</h1>
			<CardColumns>
				{
					comments.map( comment => 
						<Comment 
							key={comment._id} 
							text={comment.text} 
							onShow={handleShow} 
							setDeletedCommentId={setDeletedCommentId} 
							id={comment._id}
						/>
					)
				}
			</CardColumns>
			<DeleteCommentModal 
				show={show} 
				handleClose={handleClose} 
				id={deletedCommentId} 
				socket={socket} 
				setComments={setComments}
			/>
		</div>
	)
}

CommentList.propTypes = {
	comments: PropTypes.array,
	socket: PropTypes.object,
	setComments: PropTypes.func
}

export default CommentList
