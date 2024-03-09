import styles from "./App.module.scss";
import arrow from "./assets/arrow.svg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen max-[500px]:px-5">
      <div className="flex flex-col p-8 border border-borderCustom rounded-3xl">
        <h2 className="text-whiteCustom text-center font-medium text-3xl">
          Регистрация аккаунта
        </h2>
        <div className="flex gap-5 mt-9">
          <div className="flex flex-col gap-5">
            <p className={styles.p}>Имя</p>
            <input type="text" placeholder="Имя" className={styles.input} />
          </div>
          <div className="flex flex-col gap-5">
            <p className={styles.p}>Фамилия</p>
            <input type="text" placeholder="Фамилия" className={styles.input} />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className={styles.p}>Адрес электронной почты</p>
          <input
            type="email"
            placeholder="Адрес электронной почты"
            className={styles.input}
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className={styles.p}>Пароль</p>
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
          />
        </div>
        <p className={styles.agreement}>
          Регистрируясь, вы соглашаетесь с условиями использования нашего
          сервиса{" "}
          <span className="text-greenCustom text-xl font-normal underline">
            соглашение
          </span>
        </p>
        <button className="border border-borderCustom py-3.5 rounded-xl mt-5 text-whiteCustom font-normal text-xl flex items-center justify-center gap-3.5">
          <p>Продолжить</p>
          <img src={arrow} alt="arrow" className="max-[500px]:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
