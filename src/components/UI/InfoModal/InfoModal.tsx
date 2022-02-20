import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./InfoModal.module.scss";
import { useAppDispatch } from "../../../hooks/hooks";
import { setErrorAction } from "../../../store/reducers/errorReducer";

interface IInfoModal {
  message: string;
  type?: "primary" | "danger" | "warning";
}

const InfoModal: React.FC<IInfoModal> = ({
  message,
  type = "primary",
}): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setErrorAction(null)); // Setting error to null after ms
    }, 5000);
  }, [message]);

  return (
    <div
      className={cn(styles.infoModal, {
        [styles.danger]: type === "danger",
        [styles.primary]: type === "primary",
        [styles.warning]: type === "warning",
      })}
    >
      {message}
    </div>
  );
};

export default InfoModal;
