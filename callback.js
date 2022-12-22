const posts = [
    {title: 'post one', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'post Two', body: 'This is post Two', createdAt: new Date().getTime()}
];

 

function getPost(){
    // const timerID = setInterval(() => {
    //     let output = '';
    //     posts.forEach((pos,index) => {
    //         output += `<li>${pos.title} - ${pos.body} - created ${(new Date().getTime() - pos.createdAt)/1000} seconds ago</li>`;
    //     });
    //     document.body.innerHTML = output;
    //     console.log(timerID);
    // }, 2000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000);
}

createPost({ title: 'post Three', body: 'This is Post Three'}, getPost);

function create4thpost(post, callback){
    //posts.push(post);
    callback(post,getPost)
}

create4thpost({ title: 'Post four', body: 'This is Post Four'}, createPost);
