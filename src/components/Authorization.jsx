import styles from "../App.module.scss";
import arrow from "../assets/arrow.svg";

export default function Authorization({ handleClick }) {
  return (
    <div className="flex justify-center items-center h-screen max-[500px]:px-5">
      <div className="flex flex-col p-8 border border-borderCustom rounded-3xl">
        <h2 className="text-whiteCustom text-center font-medium text-3xl">
          Входите в свой аккаунт
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          <p className={styles.p}>
            Адрес электронной почты <span className="text-starCustom">*</span>
          </p>
          <input
            type="email"
            placeholder="Адрес электронной почты"
            className={styles.input}
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className={styles.p}>
            Пароль <span className="text-starCustom">*</span>
          </p>
          <input
            type="password"
            placeholder="Пароль"
            className={styles.input}
          />
        </div>
        <p className={styles.agreement}>
          <span className="text-greenCustom text-xl font-normal underline cursor-pointer">
            Забыли пароль?
          </span>
        </p>
        <button className="border border-borderCustom py-3.5 rounded-xl mt-5 text-whiteCustom font-normal text-xl flex items-center justify-center gap-3.5">
          <p>Продолжить</p>
          <img src={arrow} alt="arrow" className="max-[500px]:hidden" />
        </button>
        <p className="text-center text-whiteCustom mt-5 font-normal text-xl">
          У вас еще нет аккаунта?{" "}
          <span
            className="text-greenCustom underline cursor-pointer"
            onClick={handleClick}
          >
            Начните здесь
          </span>
        </p>
        <p className={styles.agreement}>
          Продолжая использовать наш сервис, вы автоматически соглашаетесь с
          условиями нашего{" "}
          <span className="text-greenCustom underline cursor-pointer">
            соглашения
          </span>
        </p>
      </div>
    </div>
  );
}
