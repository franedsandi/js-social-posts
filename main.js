       // Datos de tus 10 posts
       const posts = [
        {
            "id": 1,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/300?image=171",
            "author": {
                "name": "Phil Mangione",
                "image": "https://unsplash.it/300/300?image=15"
            },
            "likes": 80,
            "created": "2021-06-25"
        },
        {
            "id": 2,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=112",
            "author": {
                "name": "Sofia Perlari",
                "image": "https://unsplash.it/300/300?image=10"
            },
            "likes": 120,
            "created": "2021-09-03"
        },
        {
            "id": 3,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=234",
            "author": {
                "name": "Chiara Passaro",
                "image": "https://unsplash.it/300/300?image=20"
            },
            "likes": 78,
            "created": "2021-05-15"
        },
        {
            "id": 4,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=24",
            "author": {
                "name": "Luca Formicola",
                "image": null
            },
            "likes": 56,
            "created": "2021-04-03"
        },
        {
            "id": 5,
            "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
            "media": "https://unsplash.it/600/400?image=534",
            "author": {
                "name": "Alessandro Sainato",
                "image": "https://unsplash.it/300/300?image=29"
            },
            "likes": 95,
            "created": "2021-03-05"
        }
    ];
    const container = document.querySelector(".container");
/* print post */
    posts.forEach((post, index) => {
        const postHTML = `
            <div class="post my-5" data-postid="${post.id}">
                <div class="post__header">
                    <div class="post-meta">
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${post.created}</div>
                        </div>
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="Imagen del post">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Me gusta</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Le gusta a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> personas
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += postHTML;
    });
    
    // get the like button
    const likeButtons = document.querySelectorAll(".like-button");
    
    // event listener for the like button
    likeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // find the post asociated to the like button pressed
            const postId = button.getAttribute("data-postid");
            const post = document.querySelector(`.post[data-postid="${postId}"]`);
    
            // check the class of the button
            const isLiked = button.classList.contains("like-button--liked");
    
            // get the liked counter of the post
            const likeCounter = post.querySelector(`#like-counter-${postId}`);
    
            // like or unlike
            if (isLiked) {
                // unlike
                posts.find((p) => p.id === parseInt(postId)).likes--;
                button.classList.remove("like-button--liked");
            } else {
                // like
                posts.find((p) => p.id === parseInt(postId)).likes++;
                button.classList.add("like-button--liked");
            }
    
            // updated like counter
            likeCounter.textContent = posts.find((p) => p.id === parseInt(postId)).likes;
        });
    });

