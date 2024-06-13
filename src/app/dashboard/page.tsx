"use client"

import { useSearchParams } from "next/navigation";
import SearchService from "../search/page";
import SearchResult from "../searchResult/page";
import SearchResultList from "../searchResultList/page";


function Dashboard() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  
  const renderPage = () => {
    switch (page) {
      case 'searchService':
        return <SearchService />;
      case 'searchResult':
        return <SearchResult />;
      case 'searchResultList':
        return <SearchResultList />;
      default:
        return <SearchService />;
    }
  };

  return (
    <main>
      {renderPage()}
    </main>
  );
}

export default Dashboard;
