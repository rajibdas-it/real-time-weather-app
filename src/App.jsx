import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </>
  );
};

export default App;
