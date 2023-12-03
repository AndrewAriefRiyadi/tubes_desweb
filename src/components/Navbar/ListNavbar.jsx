import ContentList from "./ContentList";
import { useLanguage } from "../hooks/LanguageContext";

const ListNavbar = () => {
  const { language } = useLanguage();
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <ContentList title={language === "en" ? "New" : "Baru"} link="/" />
      <ContentList title={language === "en" ? "Tops" : "Atas"} link="/coba" />
      <ContentList title={language === "en" ? "Bottoms" : "Bawahan"} link="/" />
      <ContentList title={language === "en" ? "Kids" : "Anak-anak"} link="/" />
      <ContentList
        title={language === "en" ? "Accessories" : "Aksesori"}
        link="/"
      />
      <ContentList
        title={language === "en" ? "Collections" : "Koleksi"}
        link="/"
      />
      <ContentList title={language === "en" ? "Sale" : "Diskon"} link="/" />
    </ul>
  );
};
export default ListNavbar;
