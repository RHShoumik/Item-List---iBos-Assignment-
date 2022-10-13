import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./App.css";
function App() {

  const [items, setItems] = useState([]);
  const [lastId, setLastId] = useState(1);

  const insertRow = () => {
    setItems([
      ...items,
      { itemId: lastId, itemName: `Item ${lastId}`, amount: "" },
    ]);
    setLastId(lastId + 1);
  };

  const clearRow = () => {
    setItems([]);
    setLastId(1);
  };

  const handleAmountChange = (itemId, value) => {
    items.find((singleItem) => singleItem.itemId === itemId).amount = value;
  };

  const handleSingleRow = (itemId) => {
    const filterItems = items.filter(item => item.itemId !== itemId);
    setItems(filterItems);
  };

  const showAllData = () => {
    items.map(item => console.log(`Item Name : ${item.itemName} , Amount : ${item.amount}`))
  };

  return (
    <div className="App">
      <h1>React Frontend Intern Assignment</h1>
      <div className="controlSection">
        <Button className="btn" variant="outline-primary" onClick={insertRow}>Insert New Row</Button>
        { !!items.length && ( <Button variant="outline-danger" onClick={clearRow}>Clear Row</Button> )}
        <Button variant="outline-success" onClick={showAllData}>Submit</Button>
      </div>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                const { itemId, itemName } = item;
                return (
                  <tr key={itemId}>
                    <td>{itemName}</td>
                    <td>
                      <input type="text" className="amountInput" placeholder="Insert Amount" onChange={(e) => handleAmountChange(itemId, e.target.value) } />
                    </td>
                    <td>
                      <Button variant="outline-danger" onClick={() => handleSingleRow(itemId)}> Delete </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
