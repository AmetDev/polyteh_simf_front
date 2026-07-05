import Background from "@entities/home/Background/Background";
import EnrolleRecomendations from "@widgets/Enrollee/EnrolleRecomendations";
import style from "./EnrolleeNew.module.scss";

const EnrolleeNew = () => {
  return (
    <section className={style.wrapperContent}>
      <Background />
      <h1>
        Поступление осуществляется БЕЗ ВСТУПИТЕЛЬНЫХ ЭКЗАМЕНОВ на основании
        КОНКУРСА АТТЕСТАТОВ
      </h1>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/enrollee-contacts`}
        className={style.btnLink}
      >
        КОНТАКТЫ И ОБРАТНАЯ СВЯЗЬ
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-licenzia`}
        className={style.btnLink}
      >
        ВЫПИСКА ИЗ РЕЕСТРА ЛИЦЕНЗИЙ ОБРАЗОВАТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/osnov-vopr`}
        className={style.btnLink}
      >
        ОСНОВНЫЕ ВОПРОСЫ ОРГАНИЗАЦИИ И ОСУЩЕСТВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ
        ДЕЯТЕЛЬНОСТИ
      </a>
      <a
        href="https://uploads.simfpolyteh.ru/17541616068344.html"
        className={style.btnLink}
      >
        ПЕРЕЧЕНЬ ОБРАЗОВАТЕЛЬНЫХ ПРОГРАММ, СПЕЦИАЛЬНОСТИ
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/perechenie-obraz-1`}
        className={style.btnLink}
      >
        ОБЩЕЕ КОЛИЧЕСТВО МЕСТ ДЛЯ ПРИЕМА ПО КАЖДОЙ СПЕЦИАЛЬНОСТИ НА 1 КУРС ПО
        РАЗЛИЧНЫМ ФОРМАМ ОБУЧЕНИЯ (ОЧНАЯ, ЗАОЧНАЯ)
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-pocket-docs`}
        className={style.btnLink}
      >
        ДОКУМЕНТЫ НЕОБХОДИМЫЕ ПРИ ПОСТУПЛЕНИИ В КОЛЛЕДЖ
      </a>
      <div className={style.content}>
        <div className={style.columnFirst}>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-etap-post`}
            className={style.btnLink}
          >
            ЭТАПЫ ПОСТУПЛЕНИЯ
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-control-nums`}
            className={style.btnLink}
          >
            КОНТРОЛЬНЫЕ ЦИФРЫ ПРИЁМА
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-celevoe-education`}
            className={style.btnLink}
          >
            ЦЕЛЕВОЕ ОБУЧЕНИЕ
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-docs-priem-kom`}
            className={style.btnLink}
          >
            ДОКУМЕНТЫ ПРИЕМНОЙ КОМИССИИ
          </a>
        </div>
        <div className={style.columnSecond}>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-sroki-priema`}
            className={style.btnLink}
          >
            СРОКИ ПРИЁМА ЗАЯВЛЕНИЙ
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-med-osmotr`}
            className={style.btnLink}
          >
            МЕДИЦИНСКИЕ ОСМОТРЫ
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-platnoe-education`}
            className={style.btnLink}
          >
            ПЛАТНОЕ ОБУЧЕНИЕ
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-spiski-podan-zayav`}
            className={style.btnLink}
          >
            СПИСКИ ПОДАННЫХ ЗАЯВЛЕНИЙ
          </a>
        </div>
      </div>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-prikaz-zacis`}
        className={style.btnLink}
      >
        ПРИКАЗЫ О ЗАЧИСЛЕНИИ
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-uslovia-obuchenia-inv`}
        className={style.btnLink}
      >
        УСЛОВИЯ ОБУЧЕНИЯ ИНВАЛИДОВ И ЛИЦ С ОГРАНИЧЕННЫМИ ВОЗМОЖНОСТЯМИ
      </a>
      <a
        href={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/enrollee-info-obhaga-col-mest`}
        className={style.btnLink}
      >
        ИНФОРМАЦИЯ О НАЛИЧИИ ОБЩЕЖИТИЯ И КОЛИЧЕСТВО МЕСТ, ВЫДЕЛЯЕМЫХ ДЛЯ
        ИННОГОРОДНИХ
      </a>
      <EnrolleRecomendations />
    </section>
  );
};

export default EnrolleeNew;
