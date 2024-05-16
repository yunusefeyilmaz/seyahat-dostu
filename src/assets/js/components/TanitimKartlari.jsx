import TanitimKarti from "./TanitimKarti";

export default function TanitimKartlari() {
    return (
      <div className="flex flex-col justify-center items-center ml-10 mr-10 sm:flex-row gap-3">
        <TanitimKarti title="Ekonomik" content="Yolculuğunuzla beraber masrafları da paylaşın."></TanitimKarti>
        <TanitimKarti title="Güvenli" content="İstediğiniz bilgiyi sadece istediğiniz kişilerle paylaşın."></TanitimKarti>
        <TanitimKarti title="Konforlu" content="Seçtiğiniz araçla yolculukta aradığınız konforu bulun."></TanitimKarti>
      </div>
    )
}
  
  