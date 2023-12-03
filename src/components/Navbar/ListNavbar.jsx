import ContenList from "./ContentList";

const ListNavbar = () => {
    return (
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <ContenList title="New" link="/catalog"/>
      <ContenList title="Tops" link="/catalog/tops"/>
      <ContenList title="Bottoms" link="/catalog/bottoms"/>
      <ContenList title="Kids" link="/catalog/kids"/>
      <ContenList title="Accessories" link="/catalog/acc"/>
      <ContenList title="Collections" link="/catalog/coll"/>
      <ContenList title="Sale" link="/product/0"/>  
      </ul>
    );
}
export default ListNavbar;