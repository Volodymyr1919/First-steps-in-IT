function getUrl(){
    return "http://65.109.13.139:9191";
}
function postShow(data){
    for (let i = 0; i <= data.length-1; i++) {
        let post = `
        <div class='gallery-item' tabindex='0'>
            <img class='gallery-image' id='${data[i]._id}'src='${data[i].image}'>
            <div class='gallery-item-type'>
                <p>${data[i].title}</p>
            </div>
            <div style="display:flex; width:70px; justify-content:space-between; height:20px; align-items:center;">
                <span id='likeCount' style="color:black"></span>
                <div id='like' onclick='postLike()'>
                    <iconify-icon icon="flat-color-icons:like"></iconify-icon>
                </div>
                <div id='dislike' onclick='postDislike()'>
                    <iconify-icon icon="flat-color-icons:dislike"></iconify-icon>
                </div>
            </div>
        </div>`;
        document.getElementById("items").innerHTML += post;
    }
}
function showMe(data){
    console.log(data);
        document.getElementById("userAvatar").src = data.avatar;
        document.getElementById("username").innerHTML = data.username;
        document.getElementById("userBio").innerHTML = data.bio;
        document.getElementById("fullname").innerHTML = data.fullName;
        localStorage.setItem("id", data._id);
        document.getElementById("posts_count").innerHTML = data.posts_count;
}
function clearStorage(){
    localStorage.clear();
}
function showFollowers(data){
    console.log(data);
    let flws = data.followers;
    for (let i = 0; i <= flws.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${flws[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${flws[i].username}</a></h4></div></div><div class="clearfix"></div><hr/>`;
        document.getElementById("items").innerHTML += post;
    }
}
function showFollowings(data){
    let flwngs = data.following;
    for (let i = 0; i <= flwngs.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${flwngs[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${flwngs[i].username}</a></h4></div></div><div class="clearfix"></div><hr/>`;
        document.getElementById("items").innerHTML += post;
    }
}
function getFollowers(data) {
    let gflws = data.followers;
    document.getElementById("flws").innerHTML = gflws.length + " followers";
}
function getFollowings(data){
    let gflwngs = data.following;
    document.getElementById("flwngs").innerHTML = gflwngs.length + " followings";
}
function showUsers(data){
    for (let i = 0; i <= data.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${data[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${data[i].fullName}</a></h4></div></div><div class="clearfix"></div><button id='${data[i].username}'>Subscribe</button><hr/>`;
        document.getElementById("showUsers").innerHTML += post;
    }
}
class Helpers {

    constructor(data) {
        this.data = data || {};
    }
    doPostShow() {
        for (let i = 0; i < this.data.length-1; i++) {
            let post = `<div class='gallery-item' tabindex='0'><img class='gallery-image' id='${this.data[i]._id}'src='${this.data[i].image}' /><div class='gallery-item-type'><p>${this.data[i].title}</p></div></div>`;
        document.getElementById("items").innerHTML += post;
        }
    }
    doShowMe() {
        document.getElementById("userAvatar").src = this.data.avatar;
        document.getElementById("username").innerHTML = this.data.username;
        document.getElementById("userBio").innerHTML = this.data.bio;
        document.getElementById("fullname").innerHTML = this.data.fullName;
        localStorage.setItem("id", this.data._id);
        document.getElementById("posts_count").innerHTML = this.data.posts_count;
    }
    doShowFollowers() {
        let flws = this.data.followers;
    for (let i = 0; i <= flws.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${flws[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${flws[i].username}</a></h4></div></div><div class="clearfix"></div><hr/>`;
        document.getElementById("items").innerHTML += post;
    }
    }
    doShowFollowings() {
        let flwngs = this.data.following;
    for (let i = 0; i <= flwngs.length-1; i++) {
        let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${flwngs[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${flwngs[i].username}</a></h4></div></div><div class="clearfix"></div><hr/>`;
        document.getElementById("items").innerHTML += post;
    }
    }
    doGetFollowers() {
        let gflws = this.data.followers;
        document.getElementById("flws").innerHTML = gflws.length + " followers";
    }
    doGetFollowings() {
        let gflwngs = this.data.following;
        document.getElementById("flwngs").innerHTML = gflwngs.length + " followings";
    }
    doShowUsers() {
        for (let i = 0; i <= this.data.length-1; i++) {
            let post = `<div class="col-sm-12"><div class="col-sm-2"><img class="img-circle" width="60px" src='${this.data[i].avatar}'/></div><div class="col-sm-8"><h4><a href="#">${this.data[i].fullName}</a></h4></div></div><div class="clearfix"></div><button id='${this.data[i].username}'>Subscribe</button><hr/>`;
            document.getElementById("showUsers").innerHTML += post;
        }
    }
}