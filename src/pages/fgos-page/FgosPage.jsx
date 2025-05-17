import "./FgosPage.css";
const FgosPage = () => {
  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        id="sheet0"
        class="sheet0 gridlines"
      >
        {/* <colgroup>
          <col class="col0" />
          <col class="col1" />
          <col class="col2" />
          <col class="col3" />
          <col class="col4" />
          <col class="col5" />
          <col class="col6" />
        </colgroup> */}
        <tbody>
          <tr class="row0">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column1 style10 s style11" colspan="5">
              Образовательные стандарты и требования, предъявляемые государством
              к реализации образовательных программ по специальностям
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row1">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column1 style13 s style13" rowspan="3">
              Уровень
              <br />
              &nbsp;образования
            </td>
            <td class="column2 style13 s style13" rowspan="3">
              Наименовании <br /> образовательной <br />
              программы
            </td>
            <td class="column3 style9 s style9" rowspan="3">
              Укрупненная группа специальностей
            </td>
            <td class="column4 style9 s style9" rowspan="3">
              Код и наименование специальности
            </td>
            <td class="column5 style9 s style9" rowspan="3">
              Федеральные государственные образовательные стандарты
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row2">
            {/* <td class="column0">&nbsp;</td> */}
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row3">
            {/* <td class="column0">&nbsp;</td> */}
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row4">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="style17" rowspan="17">
              СРЕДНЕЕ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ
            </td>
            <td class="style17" rowspan="17">
              ПРОГРАММА ПОДГОТОВКИ СПЕЦИАЛИСТОВ СРЕДНЕГО ЗВЕНА
            </td>
            {/* <td class="column3 style14 s style8" rowspan="4">09.00.00 Информатика и вычислительная техника</td>
            <td class="column4 style6 s style6" rowspan="2">09.02.06 Сетевое и системное администрирование</td>
            <td class="column5 style5 s"><a href="https://obrnadzor.gov.ru/wp-content/uploads/2023/08/09.02.06-setevoe-i-sistemnoe-administrirovanie.pdf" title="">https://obrnadzor.gov.ru/wp-content/uploads/2023/08/09.02.06-setevoe-i-sistemnoe-administrirovanie.pdf</a></td>
            // <td class="column6">&nbsp;</td>  */}
          </tr>
          <tr class="row19">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column3 style6 s style6" rowspan="2">
              09.00.00 <br />
              Информатика и <br />
              вычислительная <br />
              техника
            </td>
            <td class="column4 style4 s">
              09.02.06 Сетевое и системное администрирование
            </td>
            <td class="column5 style5 s">
              <a
                href="https://obrnadzor.gov.ru/wp-content/uploads/2023/08/09.02.06-setevoe-i-sistemnoe-administrirovanie.pdf"
                title=""
              >
                {/* https://obrnadzor.gov.ru/wp-content/uploads/2023/08/09.02.06-setevoe-i-sistemnoe-administrirovanie.pdf */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row20">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              09.02.07 Информационные системы и программирование
            </td>
            <td class="column5 style5 s">
              <a href="https://base.garant.ru/71577324/53f89421bbdaf741eb2d1ecc4ddb4c33/">
                ссылка
              </a>
              {/* https:// docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruG7K468Tari67VlB0TiqhKeZCsWKO0UU9VaHppPPqsU_2u7JfhAkal6fPuwNcarLuCZXaGy3DWNPdWrPDNR8GWFrjkq9Ts-4fNNAz2_FFhR--
              TwSXiEMD10qsb_hU2V_dw%3D%3D%3Fsign%3DlKTDWriFz7wWsy2xa8DDBrIHjecKYUok7hpR0ovr8O8%3D&amp;name=informaczionnye-
              sistemy-i-programmirovanie-prikaz-ot-09.12.2016-№-1547.docx&amp;nosw=1 */}
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          {/*          
          <tr class="row5">
            // <td class="column0">&nbsp;</td>
            <td class="column5 style3 null"></td>
            // <td class="column6">&nbsp;</td>
          </tr>
          <tr class="row6">
            // <td class="column0">&nbsp;</td>
            
            <td class="column5 style7 s style8" rowspan="2">https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruG7K468Tari67VlB0TiqhKeZCsWKO0UU9VaHppPPqsU_2u7JfhAkal6fPuwNcarLuCZXaGy3DWNPdWrPDNR8GWFrjkq9Ts-4fNNAz2_FFhR--TwSXiEMD10qsb_hU2V_dw%3D%3D%3Fsign%3DlKTDWriFz7wWsy2xa8DDBrIHjecKYUok7hpR0ovr8O8%3D&amp;name=informaczionnye-sistemy-i-programmirovanie-prikaz-ot-09.12.2016-№-1547.docx&amp;nosw=1</td>
            // <td class="column6">&nbsp;</td>
          </tr> 
          {/*<tr class="row7">
            <td class="column4 style6 s style6" rowspan="2">09.02.07 Информационные системы и программирование</td>
            // <td class="column0">&nbsp;</td>
            // <td class="column6">&nbsp;</td>
          </tr> */}
          <tr class="row8">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column3 style12 null style8 style6" rowspan="4">
              15.00.00 Машиностроение
            </td>
            <td class="column4 style3 s">
              15.02.06 Монтаж, техническая эксплуатация и ремонт
              холодильно-компрессорных и теплонасосных машин и установок (по
              отраслям)
            </td>
            <td class="column5 style5 s">
              <a
                href="https://obrnadzor.gov.ru/wp-content/uploads/2022/07/15.02.06-montazh-tehnicheskaya-ekspluatacziya-i-remont-holodilno-kompressornyh.pdf"
                title=""
              >
                {/* https://
                obrnadzor.gov.ru/wp-content/uploads/2022/07/15.02.06-montazh-
                tehnicheskaya-ekspluatacziya-i-remont-holodilno-kompressornyh.pdf */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row9">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              15.02.12 Монтаж, техническое обслуживание и ремонт промышленного
              оборудования (по отраслям)
            </td>
            <td class="column5 style5 s">
              {/* https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruOb8WyV9HOUqsdKAfhf3Pp3d8Wb8Pvb2Z5XY25fhP6r0UEtSv8kUmb3atscjopyor8W-
              R0oAlEsiueuifVcKnYH43R7GIGfAzxx9gggOTHDCoKUq1y4KhShyLIZcprGT6g%3D%3D%3Fsign%3D0UJ7pYoJ1DEcFxb3zHl9iOtb88IKoBaP4UhdMTS5H7k%3D&amp;name=montazh-
              tehnicheskoe-obsluzhivanie-i-remont-promyshlennogo-oborudovaniya-po-
              otraslyam-prikaz-ot-09.12.2016-№-1580.docx&amp;nosw=1 */}
              <a href="https://base.garant.ru/71576286/53f89421bbdaf741eb2d1ecc4ddb4c33/?ysclid=m49k4iq1g226739026">
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row10">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              15.02.13 Техническое обслуживание и ремонт систем вентиляции и
              кондиционирования
            </td>
            <td class="column5 style5 s">
              <a
                href="https://docs.yandex.ru/docs/view?url=ya-browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruC1U-AhP3ERcqyalCMx0ik7xmhk7hhsrPsf6OYR5zbGtYASWiE41Tzncmzg48h-s1mv8gADqGCz6GRjVd0kpdsv-nWvtCZytiNI9gwja6JuXurP1Zpebegldi1jbcDDHOw%3D%3D%3Fsign%3D18-58DxoVLuWsrnwjjIcl8Ll1r_lPYiBIUpgOLIAiDI%3D&amp;name=tehnicheskoe-obsluzhivanie-i-remont-sistem-ventilyaczii-i-kondiczionirovaniya-prikaz-ot-09.12.2016-№-1562.docx&amp;nosw=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                ссылка
              </a>
              {/* https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruC1U-
              AhP3ERcqyalCMx0ik7xmhk7hhsrPsf6OYR5zbGtYASWiE41Tzncmzg48h-
              s1mv8gADqGCz6GRjVd0kpdsv-
              nWvtCZytiNI9gwja6JuXurP1Zpebegldi1jbcDDHOw%3D%3D%3Fsign%3D18-58DxoVLuWsrnwjjIcl8Ll1r_lPYiBIUpgOLIAiDI%3D&amp;name=tehnicheskoe-
              obsluzhivanie-i-remont-sistem-ventilyaczii-i-kondiczionirovaniya-prikaz-
              ot-09.12.2016-№-1562.docx&amp;nosw=1 */}
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row11">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              15.02.17 Монтаж, техническое обслуживание, эксплуатация и ремонт
              промышленного оборудования (по отраслям)
            </td>
            <td class="column5 style5 s">
              <a
                href="https://obrnadzor.gov.ru/wp-content/uploads/2023/10/15.02.17-montazh-tehnicheskoe-obsluzhivanie-ekspluatacziya-i-remont-promyshlennogo-oborudovaniya-po-otraslyam.pdf"
                title=""
              >
                {/*https://
                 obrnadzor.gov.ru/wp-content/uploads/2023/10/15.02.17-montazh-
                tehnicheskoe-obsluzhivanie-ekspluatacziya-i-remont-promyshlennogo-
                oborudovaniya-po-otraslyam.pdf */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row12">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column3 style6 s style6" rowspan="6">
              19.00.00 Промышленная экология и<br /> биотехнологии
            </td>
            <td class="column4 style3 s">
              19.02.03 Технология хлеба, кондитерских и макаронных изделий
            </td>
            <td class="column5 style5 s">
              <a
                href="https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruFHH-W67WysKrZBz-
              a2glB7gm3YEkAuEI1nB3co-a2T8Di2h92Nil04yhUlCM-
              yIYdpQiNz16ePV_WQumodYH0d7_hwVz0QlbcUbCmCaiG9COYMIzoG2F5WDjhE0_Q3xAA%3D%3D%3Fsign%3D9JxlY1KVhK0zCSyDYNwKe13bIq2Ie1gZP0J5wYqoywo%3D&amp;name=tehnologiya-
              hleba-konditerskih-i-makaronnyh-izdelij-prikaz-ot-22.04.2014-
              №-373.docx&amp;nosw=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruFHH-W67WysKrZBz-
              a2glB7gm3YEkAuEI1nB3co-a2T8Di2h92Nil04yhUlCM-
              yIYdpQiNz16ePV_WQumodYH0d7_hwVz0QlbcUbCmCaiG9COYMIzoG2F5WDjhE0_Q3xAA%3D%3D%3Fsign%3D9JxlY1KVhK0zCSyDYNwKe13bIq2Ie1gZP0J5wYqoywo%3D&amp;name=tehnologiya-
              hleba-konditerskih-i-makaronnyh-izdelij-prikaz-ot-22.04.2014-
              №-373.docx&amp;nosw=1 */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row13">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              19.02.05 Технология бродильных производств и виноделия
            </td>
            <td class="column5 style5 s">
              <a
                href="https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruFTyf1VE_CkajDhNWIFdEL_jpDd9dtWIVnr7KAvYkzLxhAu2GpeutykZgsjdZx_93MiTxop1sx3XpWtslK6cC_V59dzikrODG_hPr8bPOL2bPVqIHiBXiU2vQLi6PONagg%3D%3D%3Fsign%3Ds2LB8il2XjBQvz3OEzqtvsND3VKvMxebokJ42wfM4BU%3D&amp;name=tehnologiya-
              brodilnyh-proizvodstv-i-vinodelie-prikaz-ot-22.04.2014-
              №-375.docx&amp;nosw=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruFTyf1VE_CkajDhNWIFdEL_jpDd9dtWIVnr7KAvYkzLxhAu2GpeutykZgsjdZx_93MiTxop1sx3XpWtslK6cC_V59dzikrODG_hPr8bPOL2bPVqIHiBXiU2vQLi6PONagg%3D%3D%3Fsign%3Ds2LB8il2XjBQvz3OEzqtvsND3VKvMxebokJ42wfM4BU%3D&amp;name=tehnologiya-
              brodilnyh-proizvodstv-i-vinodelie-prikaz-ot-22.04.2014-
              №-375.docx&amp;nosw=1 */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row14">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              19.02.08 Технология мяса и мясных продуктов
            </td>
            <td class="column5 style5 s">
              <a
                href="https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruOUmD4LbIJ6-
              PAzeWVnV1H4SYpaH9LnEdgVPSuaGgJFVOs6jyWkbtaXkDyPrXF2v314Lyk7V-0yzWJBR3VlO3UF-
              lVRImSacRaDahwAltvN9UQMdjL5yYnHSfnHyaY48Ow%3D%3D%3Fsign%3DxwPFQwOgqAblvrDwrfnqYaAU-65RnBzCrNyA3Uhcrw4%3D&amp;name=tehnologiya-
              myasa-i-myasnyh-produktov-prikaz-ot-22.04.2014-№-379.docx&amp;nosw=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruOUmD4LbIJ6-
              PAzeWVnV1H4SYpaH9LnEdgVPSuaGgJFVOs6jyWkbtaXkDyPrXF2v314Lyk7V-0yzWJBR3VlO3UF-
              lVRImSacRaDahwAltvN9UQMdjL5yYnHSfnHyaY48Ow%3D%3D%3Fsign%3DxwPFQwOgqAblvrDwrfnqYaAU-65RnBzCrNyA3Uhcrw4%3D&amp;name=tehnologiya-
              myasa-i-myasnyh-produktov-prikaz-ot-22.04.2014-№-379.docx&amp;nosw=1 */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row15">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 s style3" rowspan="2">
              19.02.11 Технология продуктов питания из растительного сырья
            </td>
            <td class="column5 style5" rowspan="2">
              <a
                href="https://obrnadzor.gov.ru/wp-content/uploads/2022/06/19.02.11-tehnologiya-produktov-pitaniya-iz-rastitelnogo-syrya.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row16">
            {/* <td class="column0">&nbsp;</td> */}
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row17">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">
              19.02.12 Технология продуктов питания животного происхождения
            </td>
            <td class="column5 style5 s">
              <a
                href="https://obrnadzor.gov.ru/wp-content/uploads/2022/06/19.02.12-tehnologiya-produktov-pitaniya-zhivotnogo-proishozhdeniya.pdf"
                title=""
              >
                {/* https://obrnadzor.gov.ru/wp-content/uploads/2022/06/19.02.12-tehnologiya-produktov-pitaniya-zhivotnogo-proishozhdeniya.pdf */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row18">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column3 style6 s">
              38.00.00 <br /> Экономика и <br />
              управление
            </td>
            <td class="column4 style3 s">
              38.02.01 <br />
              Экономика
              <br /> и бухгалтерский учет (по отраслям
            </td>
            <td class="column5 style5 s">
              <a
                href="https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruIyXqk5IO7_NItgVcQaqmob8IA4sr8KBjTI92_nrbZ1PSxqRyjKMetumjCWKTzgNGWZns62xmuYNBRB3HKVNK2d2hAlf5IDchbSbI_yRF_TZajoyKcgrbJPq-
              TNV3aclHA%3D%3D%3Fsign%3DvC1JA0g7sdlZbwCNKv0fHOTbLiJz1_dASQW4I3-
              hDuQ%3D&amp;name=ekonomika-i-buhgalterskij-uchet-po-otraslyam-prikaz-
              ot-05.02.2018-№-69.docx&amp;nosw=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* https://docs.yandex.ru/docs/view?url=ya-
              browser%3A%2F%2F4DT1uXEPRrJRXlUFoewruIyXqk5IO7_NItgVcQaqmob8IA4sr8KBjTI92_nrbZ1PSxqRyjKMetumjCWKTzgNGWZns62xmuYNBRB3HKVNK2d2hAlf5IDchbSbI_yRF_TZajoyKcgrbJPq-
              TNV3aclHA%3D%3D%3Fsign%3DvC1JA0g7sdlZbwCNKv0fHOTbLiJz1_dASQW4I3-
              hDuQ%3D&amp;name=ekonomika-i-buhgalterskij-uchet-po-otraslyam-prikaz-
              ot-05.02.2018-№-69.docx&amp;nosw=1 */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row19">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column3 style6 s style6" rowspan="2">
              43.00.00 <br />
              Сервис и <br />
              туризм
            </td>
            <td class="column4 style4 s">43.02.14 Гостиничное дело</td>
            <td class="column5 style5 s">
              <a
                href="https://obrnadzor.gov.ru/gosudarstvennye-uslugi-i-funkczii/7701537808-gosfunction/acts_list2021/mandatory_requirements_2021/fgos_spo/"
                title=""
              >
                {/* https://
                obrnadzor.gov.ru/gosudarstvennye-uslugi-i-funkczii/7701537808-
                gosfunction/acts_list2021/mandatory_requirements_2021/fgos_spo/ */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
          <tr class="row20">
            {/* <td class="column0">&nbsp;</td> */}
            <td class="column4 style3 s">43.02.16 Туризм и гостеприимство</td>
            <td class="column5 style5 s">
              <a
                href="https://obrnadzor.gov.ru/wp-content/uploads/2023/01/43.02.16-turizm-i-gostepriimstvo.pdf"
                title=""
              >
                {/* https://obrnadzor.gov.ru/wp-content/uploads/2023/01/43.02.16-turizm-i-gostepriimstvo.pdf */}
                ссылка
              </a>
            </td>
            {/* <td class="column6">&nbsp;</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FgosPage;
