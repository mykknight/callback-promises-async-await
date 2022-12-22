const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post Two', body: 'This is post Two'}
];

function getPost(){
    setTimeout(() => {
        var output = '';
        posts.forEach((pos,index) => {
            output += `<li>${pos.title} - ${pos.body} - ${index}</li>`;
        });
        document.body.innerHTML = output;
        console.log('dgg');
    }, 1000);
}

function createPost(post) {
    const prm1 = new Promise((resolve, reject) => {
        setTimeout(() => {
             posts.push(post);

             const error = false;

             if(!error){
                 resolve();
                }
             else reject('Error: Something went Wrong');
        }, 1000);
    });   
    return prm1; 
}

function deletepost(){
    
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
            let p = posts.length;
            if(p==0) reject('Array is Empty');
            else resolve();

            }, 1000);
        });

    
}


function dlt(){
    deletepost().then(() => {
    posts.pop();
    getPost();

     })
     .catch((err) => console.log(err));
    }

//    createPost({ title:'Post Three', body:'This is Post Three'})
//    .then(getPost)
//    .catch(err => console.log(err));



//Async / Await

// async function init(){
//     await createPost({ title:'Post Three', body:'This is Post Three'});

//     getPost();
// }

  async function dit(){
    await deletepost().then(() => {
        posts.pop();
        getPost();
    }).catch((err) => console.log(err));
    

  }
  //getPost();
  dit();
  dlt();
  dit();

// init();

//async await with fetch
// async function fetchuser(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }

//fetchuser();

//promise.all

//  const promise1 = Promise.resolve('Hello World');
//  const promise2 = 10;
//  const promise3 = new Promise((resolve, reject) =>
//  setTimeout(resolve,2000, 'Goodbye'));

//  const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json());
// const user = {
//     username: 'mk',
//     lastact: '12 jan'
// }

// function updtusract()  {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
        
//             user.lastact = new Date().getTime();
//             resolve();
//         })
//     })
// }

//   Promise.all([createPost,updtusract])
//  .then([(values) => {
//     console.log(values);
//  }, console.log('dfgdffg')]);


