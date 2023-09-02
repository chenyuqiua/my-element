import { mutable } from "packages/utils/typescript";
import { definePropType } from "packages/utils/vue/props/runtime";

export type ColSizeObject = {
  span?: number;
  offset?: number;
  pull?: number;
  push?: number;
};
export type ColSize = number | ColSizeObject;

export const colProps = {
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
  },
  xs: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  sm: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  md: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  lg: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
  xl: {
    type: definePropType<ColSize>([Number, Object]),
    default: () => mutable({} as const),
  },
} as const;
