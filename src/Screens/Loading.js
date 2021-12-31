import React from "react";
import logoLoading from "../Assets/logoLoading.png";

export default function Loading() {
    return (
        <div className="loading__wrapper">
            <img
                src={logoLoading}
                alt="logoLoading"
                className="loading__wrapper__img"
            />
        </div>
    );
}
