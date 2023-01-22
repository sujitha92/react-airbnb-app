import './App.css';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {

    const cards = data.map(item => {
        return <Card
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    url={item.coverImg}
                    location={item.location}
                    openSpots={item.openSpots}
                    description={item.description}
                    reviewCount={item.stats.reviewCount}
                    rating={item.stats.rating}
                />
    });

  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <section className="cards--list">
            {cards}
        </section>
    </div>
  );
}

export default App;
