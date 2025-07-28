import styles from "./BasicLayout.module.scss"
import classNames from "classnames";
import { TopBar } from "@/components/Layout";

export function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
  } = props;

  return (
    <>
      <TopBar isOpenSearch={isOpenSearch}/>
      <div
        style={{ maxWidth: "1200px" }}
        className={classNames("p-mx-auto p-px-4", {
          [styles.relative]: relative,
        })}
      >
        {isContainer ? (
          <div
            className="p-mx-auto p-px-4"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </div>

      {/* TODO: footer */}
    </>
  );
}
