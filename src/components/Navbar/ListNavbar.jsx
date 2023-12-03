import ContentList from "./ContentList";
import { useLanguage } from "../hooks/LanguageContext";

const ListNavbar = () => {
  const { language } = useLanguage();
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <ContentList title={language === "en" ? "New" : "Baru"} link="/catalog" />
      <ContentList title={language === "en" ? "Tops" : "Atas"} link="/catalog/tops" />
      <ContentList title={language === "en" ? "Bottoms" : "Bawahan"} link="/catalog/bottoms" />
      <ContentList title={language === "en" ? "Kids" : "Anak-anak"} link="/catalog/kids" />
      <ContentList
        title={language === "en" ? "Accessories" : "Aksesori"}
        link="/catalog/acc"
      />
      <ContentList
        title={language === "en" ? "Collections" : "Koleksi"}
        link="/catalog/coll"
      />
      <ContentList title={language === "en" ? "Sale" : "Diskon"} link="/product/0" />
    </ul>
  );
};
export default ListNavbar;
