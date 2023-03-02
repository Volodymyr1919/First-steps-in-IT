import { useState, useMemo, useCallback } from "react";
import { observer } from "mobx-react";
import InventoryItemView from "./InventoryItemView";

const InventoryListView = observer(({ itemListState }) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredItems = useMemo(() => {
        const searchData = itemListState.items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        if (selectedCategory === 'All') {
          return searchData;
        } else {
          return searchData.filter((item) => item.category === selectedCategory);
        }
      }, [itemListState.items, selectedCategory, search]);

    const onAppend = () => {
        itemListState.append(title, category);
    }

    const onLoad = () => {
        console.log("Total amount of items:", filteredItems.length, "List of items in JSON:", JSON.stringify(filteredItems));
    }

    const handleCategoryChange = useCallback((e) => {
        setSelectedCategory(e.target.value);
      }, []);

    return(
        <div>
            <label>
                Filter by category:<br /><br />
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="All">All</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                </select>
            </label><br /><br />
            <label>
                Search:
                <input
                    className="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>
            <ul>
                {filteredItems.map(item => (
                    <InventoryItemView
                        key={item.id}
                        inventoryItemState={item}
                        onRemove={itemListState.remove}
                    />
                ))}
            </ul>
            <p>Remaining items: {itemListState.unfinishedCount}</p>
            <button onClick={onLoad}>Download list</button><br/><br/>
            <input 
                placeholder="Item title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /><br />
            <input 
                placeholder="Item category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            /><br />
            <button onClick={onAppend}>Add item</button>
        </div>
    );
});

export default InventoryListView;