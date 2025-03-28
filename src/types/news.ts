import type {
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk"
import { Category } from "./category"
export type News = {
    title: string
    description: string
    content: string
    thumbnail?: MicroCMSImage
    category: Category
  } & MicroCMSListContent