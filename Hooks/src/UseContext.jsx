import React, { createContext, useContext } from 'react';

// 1. Create a Context object outside the component
const UserContext = createContext();

function UseContext() {
  const fname = "PRASHUN";
  const lname = "JHA";

  return (
    // 2. Wrap the tree with Provider and pass data via value prop
    <UserContext.Provider value={{ fname, lname }}>
      <div style={{ padding: "15px", border: "2px solid #007bff", margin: "10px", borderRadius: "8px" }}>
        <h1>UseContext Example</h1>
        <h3>1. Parent Component (Provider)</h3>
        <p>Providing Data globally: <strong>{fname} - {lname}</strong></p>
        <hr />
        <ChildA />
      </div>
    </UserContext.Provider>
  );
}

// ChildA doesn't take ANY props!
function ChildA() {
  return (
    <div style={{ padding: "15px", border: "2px solid #ffc107", margin: "10px", borderRadius: "8px" }}>
      <h3>2. Child A Component</h3>
      <p style={{ color: "#28a745", fontWeight: "bold" }}>
        ✅ Clean! No props received or passed down here.
      </p>
      <ChildB />
    </div>
  );
}

// ChildB also doesn't take ANY props!
function ChildB() {
  return (
    <div style={{ padding: "15px", border: "2px solid #fd7e14", margin: "10px", borderRadius: "8px" }}>
      <h3>3. Child B Component</h3>
      <p style={{ color: "#28a745", fontWeight: "bold" }}>
        ✅ Clean! Completely unaware of fname/lname.
      </p>
      <ChildC />
    </div>
  );
}

// ChildC directly consumes the Context data
function ChildC() {
  // 3. Consume the value directly using useContext Hook!
  const { fname, lname } = useContext(UserContext);

  return (
    <div style={{ padding: "15px", border: "2px solid #28a745", margin: "10px", borderRadius: "8px" }}>
      <h3>4. Child C Component (Consumer)</h3>
      <p style={{ color: "#007bff" }}>🎉 Data directly fetched from Parent using <strong>useContext</strong>!</p>
      
      <h4>First Name is: {fname}</h4>
      <h4>Last Name is: {lname}</h4>
    </div>
  );
}

export default UseContext;