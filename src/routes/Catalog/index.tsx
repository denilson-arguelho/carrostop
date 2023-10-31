import Card from "../../components/Card";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";

const Catalog = () => {
  return (
    <>
      <HeaderClient />

      <main>
        <section className="ct-container">
          <SearchBar />
          <div className="container-cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
};

export default Catalog;
