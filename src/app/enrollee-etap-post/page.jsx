import "./Arrow.css";
const VerticalArrow = () => {
  return (
    <div className="container">
      <svg
        class="w-16rem h-100% text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="25rem"
        height="100%"
        fill="none"
        viewBox="0 0 20 23"
      >
        <path
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M12 2v19m0-19 4 4m-4-4-4 4"
        />
      </svg>

      {/* <div className={styles.arrow}>
				<div className={styles.line}></div>
				<div className={styles.head}></div>
			</div> */}
      <div className="wrapperText">
        <div className="item">
          <div className="circle" />
          <b>ЗАЧИСЛЕНИЕ ПО СПЕЦИАЛЬНОСТЯМ, ПРИКАЗ</b>
        </div>
        <div className="item">
          <div className="circle" />
          <p>
            <b>ПРЕДОСТАВЛЕНИЕ ОРИГИНАЛА ДОКУМЕНТА</b> об образовании и документа
            подтверждающего преимущественное или первоочередное право
          </p>
        </div>
        <div className="item">
          <div className="circle" />
          <p>
            <b>ОКОНЧАНИЕ ПРИЕМА ДОКУМЕНТОВ НА СПЕЦИАЛЬНОСТИ</b> очная форма
            обучения{" "}
          </p>
        </div>
        <div className="item">
          <div className="circle" />
          <p>
            <b>ПРИЁМ ДОКУМЕНТОВ</b> - лично в образовательную организацию; -
            через Госуслуги; - через операторов почтовой связи общего
            пользования
          </p>
        </div>
        <div className="item">
          <div className="circle" />
          <b>ВЫБОР СПЕЦИАЛЬНОСТИ</b>
        </div>
      </div>
    </div>
  );
};

export default VerticalArrow;
