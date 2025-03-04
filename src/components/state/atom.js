import { atom, selector } from "recoil";

export const items = atom({
  default: [],
  key: "allItems",
});

export const searchedItems = atom({
  default: localStorage.getItem("searchedItem") ?? "",
  key: "searchItems",
});

export const cartItems = atom({
  key: "carted_items",
  default: JSON.parse(localStorage.getItem("cartItems")) || []
});

export const searchSpecificItems = selector({
  key: "specific_Items",
  get: ({ get }) => {
    const everyItem = get(items);
    const searchText = get(searchedItems);
    const searchString = searchText.toString();
    return everyItem.filter(
      (item) =>
        item.model &&
        item.model.toLowerCase().includes(searchString.toLowerCase())
    );
  },
});
