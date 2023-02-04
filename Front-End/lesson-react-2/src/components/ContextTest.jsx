import React, {useState, useContext} from "react";

// Create a context with an initial value
const UserContext = React.createContext({
    name: 'Guest',
});

function CtxApp() {
    // Retrieve the value from the context
    const { user, setUser } = useContext(UserContext);

    // Use state to store the new name
    const [newName, setNewName] = useState(user.name);

    // Function to update the name in the context
    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    return (
        <div>
            <h1>Hello, {user.name}</h1>
            <input type="text" value={newName} onChange={handleNameChange} />
            <button onClick={() => setUser({ name: newName })}>Update Name</button>
        </div>
    );
}

function ExampleCtx() {
    // Use state to store the user information
    const [user, setUser] = useState({ name: 'Guest' });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <CtxApp />
        </UserContext.Provider>
    );
}

export default ExampleCtx; 














