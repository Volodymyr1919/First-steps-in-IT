import React from "react";
import Auth from "./Auth/Auth";
import User from "./User/User";
import AllUsers from "./User/AllUsers/AllUsers";
import Followers from "./User/Followers/Followers";
import Followings from "./User/Followings/Followings";

export default function Main() {
    return(
        <main>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    <Auth />
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <User />
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                    <AllUsers />
                </div>
                <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                    <Followers />
                </div>
                <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                    <Followings />
                </div>
            </div>
        </main>
    );
}