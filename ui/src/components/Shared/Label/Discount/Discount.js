import React from "react";
import classNames from "classnames"
import styles from "./Discount.module.scss"

export function Discount(props) {
  const { children, className } = props;

  return <span className={classNames(styles.labelDiscoount, { [className]: className})}>{children}</span>;
}
