import { atom } from "recoil";

export const items = atom({
  default: [],
  key: "allItems",
});

export const searchedItems = atom({
  default: localStorage.getItem("searchedItem")?? "",
  key: "searchItems",
});
