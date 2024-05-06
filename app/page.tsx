import Image from "next/image";
import Header from "./_components/header";
import Search from "./_components/search";
import CategoryList from "./_components/category-list";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt6">
        <Search />
      </div>
      <div className="px-5 pt6">
        <CategoryList />
      </div>
    </div>
  );
}
