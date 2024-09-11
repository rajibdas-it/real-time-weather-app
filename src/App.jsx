import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";

const App = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};

export default App;
