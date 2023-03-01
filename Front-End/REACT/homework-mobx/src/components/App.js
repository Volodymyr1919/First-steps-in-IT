import InventoryListViewStore from "./inventory/InventoryListViewStore";
import InventoryListView from "./inventory/InventoryListView";
import InventoryItemViewStore from "./inventory/InventoryItemViewStore";

const itemListStore = new InventoryListViewStore([
  new InventoryItemViewStore('First item', 'Fruits'),
  new InventoryItemViewStore('Second item', 'Fruits'),
  new InventoryItemViewStore('Third item', 'Vegetables')
])

export default function App() {
  return <InventoryListView itemListState={itemListStore}/>;
}