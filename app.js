//load github apis...
//communicate between localserverto to github server
const api="https://api.github.com/users";
window.fetch(api)
.then(data => {
    data.json()
    .then( users => {
        // data
        // .json()
        // .then(users => {
            //print object
            // let uesrData=users;
            // let output=[];
            // userData.foreach(elemeny => {
            //     output +=``
            // })
            //or
            var output=[];
            for (let user of users){
                
                output +=`
                <div class="container"> 
                <table class="table table-bordered mt-4">
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>photo</th>
                    <th>repo</th>
                    <th>url</th>
                    </tr> 
                    <tr>
                    <td>${user.id}</td>
                    <td>${user.login}</td>
                    <td><img style="width:100px;height:100px;border-radius:100% src="${user.avatar_url}"/></td>
                    <td>${user.respo_url}</td>
                    <td>${user.url}</td>
                    </tr>
                    </table>
                    </div>`;
                    document.getElementById("template").innerHTML=output; 
            }
        })
        // console.log(user.login);  //it is used to show the employees login names in console
    .catch(err => console.log(err));
    // console.log(data);
})
.catch(err => console.log(err));
