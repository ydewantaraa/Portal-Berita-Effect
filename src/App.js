import React, { useEffect } from "react";
import NewsPortal from "./NewsPortal";
import "./styles.css";
import "./script.js";

function App() {
  useEffect(() => {
    // Dipanggil setelah komponen pertama kali dimasukkan ke dalam DOM (menggantikan componentDidMount)
    console.log("Component did mount");

    return () => {
      // Dipanggil sebelum komponen dihapus dari DOM (menggantikan componentWillUnmount)
      console.log("Component will unmount");
    };
  }, []); // Gunakan array kosong sebagai dependencies untuk memastikan useEffect hanya dijalankan sekali saat komponen dipasang

  useEffect(() => {
    // Dipanggil setelah pembaruan komponen (menggantikan componentDidUpdate)
    console.log("Component did update");
  });

  return (
    <div className="App">
      <header className="bg-dark text-white text-center py-4">
        <h1>Portal Berita</h1>
      </header>
      <NewsPortal />
    </div>
  );
}

export default App;
