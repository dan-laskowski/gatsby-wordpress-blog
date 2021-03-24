import React, { useEffect } from 'react';
const COMMENTS_ID = `graphcomment`;

const CommentCounter = ({ uri }) => {
  useEffect(() => {
    window.gc_params = {
      graphcomment_id: 'gatsby-wordpress-blog',
      fixed_header_height: 0,
    };
    const script = document.createElement('script');
    script.src = 'https://graphcomment.com/js/integration.js?' + Date.now();
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    // This function will get called when the component unmounts
    // To make sure we don't end up with multiple instances of the comments component
    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }, []);

  return <div class="gc-counter" data-url={uri}></div>;
};

export default CommentCounter;
