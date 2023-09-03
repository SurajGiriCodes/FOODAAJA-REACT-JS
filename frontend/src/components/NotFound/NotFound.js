import React from "react";
import { Link } from "react-router-dom";
import classes from "./notFound.module.css";

export default function NotFound() {
  return (
    <div className={classes.container}>
      Nothing Found!
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
