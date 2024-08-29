import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <div>
        <label>{`<input type="file" accept=".jpeg,.dummy" />`}</label>
        <input type="file" accept=".jpeg,.pdf" />
      </div>
      <div>
        <label>{`<input type="file" accept=".jpeg" />`}</label>
        <input type="file" accept=".jpeg" />
      </div>
      <div>
        <label>{`<input type="file" accept=".jpeg,.pdf" />`}</label>
        <input type="file" accept=".jpeg,.pdf" />
      </div>
      <div>
        <label>{`<input type="file" capture="environment"/>`}</label>
        <input type="file" capture="environment" />
      </div>
      <div>
        <label>{`<input type="file" accept=".jpg,.jpeg" capture="environment"/>`}</label>
        <input type="file" accept=".jpg,.jpeg" capture="environment" />
      </div>
      <div>
        <label>{`<input type="file" accept="image/jpg,image/jpeg" capture="environment"/>`}</label>
        <input
          type="file"
          accept="image/jpg,image/jpeg"
          capture="environment"
        />
      </div>
      <a href="https://www.google.co.jp/" target="_blank">
        Google
      </a>
    </div>
  );
}

export default App;
