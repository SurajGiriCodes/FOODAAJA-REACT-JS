import React from "react";
import { Link } from "react-router-dom";
import classes from "./track.module.css";

export default function trackPage() {
  return (
    <div>
      <div className={classes.container}>
        Thank you for Purches
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
}
