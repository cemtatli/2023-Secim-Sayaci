import { Fragment, useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const style = {
  container: `flex items-center justify-center w-full`,
  btn: `flex items-center gap-1.5 text-sm normal-case tracking-wide text-red-500 justify-center text-red-500 dark:text-blue-500 h-12 px-4 py-2 border border-transparent text-base font-medium `,
  header: `text-lg font-bold`,
  body: `text-start px-5 py-3`,
  bold: `font-semibold`,
  footer: `-my-2`,
  span: `text-xs`,
};

export default function Example() {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);

  return (
    <Fragment>
      <div className={style.container}>
        <Button onClick={() => handleOpen("lg")} variant="text" color="white" className={style.btn}>
          <InformationCircleIcon className="h-6 w-6" /> Bilgilendirme
        </Button>
      </div>
      <Dialog
        open={size === "xs" || size === "sm" || size === "md" || size === "lg" || size === "xl" || size === "xxl"}
        size={"xl" || size}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className={style.header}>Bilgilendirme</DialogHeader>
        <DialogBody divider className={style.body}>
          Bir sonraki Türkiye cumhurbaşkanlığı seçimi, Türkiye genel seçimleri ile aynı gün yapılacak ve Türkiye cumhurbaşkanını belirlemek
          için <span className={style.bold}>14 Mayıs 2023</span> tarihinde oy kullanacaktır. Bu sayaç, en son açıklanan seçim tarihine göre
          geri sayım yapmaktadır.
        </DialogBody>
        <DialogFooter className={style.footer}>
          <Button variant="text" color="red" onClick={() => handleOpen(null)}>
            <span className={style.span}>Geri Dön</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
