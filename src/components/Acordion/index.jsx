import { useState, Fragment } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const style = {
  wrapper: `flex flex-col items-center justify-center my-6`,
  accordion: `px-4 lg:px-6`,
  header: `text-base lg:text-lg font-semibold text-start text-gray-800 bg-gray-100 rounded-lg p-4 mb-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out `,
  body: ` text-sm lg:text-base text-gray-800 leading-relaxed p-4 font-medium `,
};
export default function Example() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  return (
    <div className={style.wrapper}>
      <Fragment>
        <Accordion
          open={open === 1}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(1)} className={style.header}>
            Cumhurbaşkanlığı seçimi kaç yılda bir yapılır?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            Türkiye'de Cumhurbaşkanlığı seçimleri beş yılda bir yapılmaktadır.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(2)} className={style.header}>
            Cumhurbaşkanı en fazla kaç yıl görev yapar?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            Cumhurbaşkanı seçimi kanunu gereği, en fazla iki dönem Cumhurbaşkanlığı yapabilmektedir.
            Ancak, Cumhurbaşkanının ikinci döneminde Meclis tarafından seçimlerin yenilenmesine
            karar verilirse, mevcut Cumhurbaşkanı bir kez daha aday olabilmektedir.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(3)} className={style.header}>
            Cumhurbaşkanlığı seçimini kazanmak için yüzde kaç oy gerekli?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            Adayın, Cumhurbaşkanı seçilebilmesi için geçerli oyların salt çoğunluğunu alması
            gerekmektedir. Bu oran 2023 yılında, geçerli oyların yarısı + 1 oy şeklindedir.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(4)} className={style.header}>
            Cumhurbaşkanı seçimi kaç gün içinde yapılır?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            Cumhurbaşkanlığı seçiminin ilk turu bir gün içerisinde yapılmaktadır. Adaylardan
            herhangi birisinin salt çoğunluğu (yüzde 50 + 1 oy) elde edememesi halinde, birinci
            turda en yüksek oyu alan iki aday, YSK'nın belirleyeceği ileri bir tarihte, yine bir gün
            sürecek bir ikinci turda tekrar karşı karşıya gelecektir.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={5} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(5)} className={style.header}>
            Erken seçim kararı için kaç milletvekili gerekir?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            Cumhurbaşkanı seçiminde adaylığında siyasi parti gruplarında en son yapılmış olan genel
            seçim sonuçları toplamda geçerli olan oyun tek başına ya da en az yüzde beşini alan
            partiler ile en az yüz bin seçmen aday gösterilebilir.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 6}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={6} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(6)} className={style.header}>
            Seçimleri yenileme yetkisi kime aittir?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            Seçimlerin yenilenmesi gerektiği durumlarda yenisi için seçim yapılana kadar
            Cumhurbaşkanı yardımcısı Cumhurbaşkanlığı görevi yapar. Vekil Cumhurbaşkanı,
            Cumhurbaşkanına ait tüm yetkileri kullanma hakkına sahiptir. Eğer genel seçime 1 yıl
            kadar bir süre kalmışsa Türkiye Büyük Millet Meclisi seçimi ile birlikte Cumhurbaşkanı
            seçimi ile birlikte olur.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 7}
          animate={customAnimation}
          className={style.accordion}
          icon={<Icon id={7} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(7)} className={style.header}>
            Cumhurbaşkanlığı süresi ne zaman değişti?
          </AccordionHeader>
          <AccordionBody className={style.body}>
            2007 Türkiye anayasa değişikliği referandumu sonucunda, Cumhurbaşkanlığı süresi
            değişmiştir. Daha öncesinde yedi yıl ve en fazla tek dönem şeklinde düzenlenen
            Cumhurbaşkanı seçim kanunu, bu referandumun ardından beş yıl ve en fazla iki dönem
            olacak şekilde değiştirilmiştir.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
