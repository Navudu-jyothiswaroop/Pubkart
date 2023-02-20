import React from "react";

type Props = {};

export default function Error({ }: Props) {
    return (
        <div className="row justify-content-md-center m-4">
            <h1>OOPS !Something went wrong !</h1>
            <img
                src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif"
                alt="Something went wrong !"
                height="600px"
            />
        </div>
    );
}