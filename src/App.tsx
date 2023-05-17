const App = () => {
  return (
    <main className="main">
      <div className="container">
        <article className="counter">
          <h1 className="counter__heading heading-main">Счётчик калорий</h1>
          <form className="counter__form form" name="counter">
            {/* INPUTS */}
          </form>
          <section className="counter__result counter__result--hidden">
            <h2 className="heading">Ваша норма калорий</h2>
            <ul className="counter__result-list">
              <li className="counter__result-item">
                <h3>
                  <span id="calories-norm">3 800</span> ккал
                </h3>
                <p>поддержание веса</p>
              </li>
              <li className="counter__result-item">
                <h3>
                  <span id="calories-minimal">3 300</span> ккал
                </h3>
                <p>снижение веса</p>
              </li>
              <li className="counter__result-item">
                <h3>
                  <span id="calories-maximal">4 000</span> ккал
                </h3>
                <p>набор веса</p>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
};

export default App;
