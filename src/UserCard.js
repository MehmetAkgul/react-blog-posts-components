import React from "react";

const UserCard = (props) => {
    console.log(props)
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    Alex Tancredi
                </div>
                <div className="description">
                    {props.children}
                </div>
            </div>

            <div className="ui buttom button">
                <div className="add icon">
                    Add Friend
                </div>
            </div>
        </div>
    )
}

export default UserCard;