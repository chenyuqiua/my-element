import type { ExtractPropTypes } from "vue";
import type Row from "./row.vue";

export const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly",
] as const;

export const RowAlign = ["top", "middle", "bottom"] as const;

export const rowProps = {
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start",
  },
  align: {
    type: String,
    values: RowAlign,
  },
} as const;

export type RowProps = ExtractPropTypes<typeof rowProps>;
export type RowInstance = InstanceType<typeof Row>;
