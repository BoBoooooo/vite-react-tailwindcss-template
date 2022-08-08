import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => {
  const [params] = useSearchParams();
  return (
    <React.Fragment>
      <Header title="Home" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400">
              current path params: path=<span className="text-blue-400">{params.get('path')}</span>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
