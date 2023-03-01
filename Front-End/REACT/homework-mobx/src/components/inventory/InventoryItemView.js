import { useState } from "react";
import { observer } from "mobx-react";

const InventoryItemView = observer((props) => {
    const {inventoryItemState, onRemove} = props

    const [_title, setTitle] = useState("");
    const [_category, setCategory] = useState("");

    const onRename = (title, category) => {
        inventoryItemState.rename(title, category);
    }

    return(
        <li>
            <input
                type='checkbox'
                checked={inventoryItemState.finished}
                onChange={() => inventoryItemState.toggle()}
            />
            {inventoryItemState.title}<br/><br/>
            Rename item<br/>
            <input 
                placeholder="Rename title"
                value={_title}
                onChange={(e) => {setTitle(e.target.value)}}
            /><br/>
            <input
                placeholder="Rename category"
                value={_category}
                onChange={(e) => {setCategory(e.target.value)}}
            /><br/>
            <button onClick={() => onRename(_title, _category)}>Rename</button>
            <button onClick={() => onRemove(inventoryItemState.id)}>Delete</button><br/><br/>
        </li>
    );
});

export default InventoryItemView;