import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import css from "./style.less";
import { Button } from "@tarojs/components";

export default function ({ env, data }) {
  return <Button className={css.button}>{data.text}</Button>;
}
