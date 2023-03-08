import React from 'react'

const PostItem = ({ info }) => {
    function getStyle() {
        let style = {
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.541), rgba(0, 0, 0, 0.141), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(http://localhost:4000/${info.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }
        return style;
    }
    return (
        <div className='postItem'>
            <span className='postItemBg' style={getStyle()}>
            </span>
            <span>
                <h2>{info.title}</h2>
                <p>{info.summary}</p>
            </span>
        </div>
    )
}

export default PostItem