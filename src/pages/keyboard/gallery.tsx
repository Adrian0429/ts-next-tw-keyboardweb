import { useEffect, useState } from "react";
import { getKeyboardImages } from "../api/api";
import Image from "next/image";
import WhiteButton from "components/WhiteButton";
import Link from "next/link";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [numToShow, setNumToShow] = useState(6);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      
      try{
        const data = await getKeyboardImages();
      setImages(data.results);
    }catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

    fetchImages();
  }, []);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 6);
  };
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const displayedImages = images.slice(0, numToShow);
  return (
    <div className="flex flex-wrap">
      <div className="w-full flex flex-col justify-center items-center py-8">
        <h1 className="text-3xl font-bold mb-4">
          Here's some keyboard inspiration
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
  
      <div className="flex flex-wrap w-full">
        {displayedImages.map((image, index) => (
          <div key={index} className="w-1/3 h-1/3 xl:p-1 lg:p-1 md:p-1 sm:p-1 p-0">
            <div className="h-full w-full">
              <Image
                className="object-contain h-full w-full"
                src={image.image}
                height={500}
                width={500}
                alt="Keyboard Inspiration"
              />
              <a href={image.by}><h1>visit the user !</h1></a>
            </div>
          </div>
        ))}
      </div>
      {numToShow < images.length && (
        <div className="w-full flex justify-center">
          <button
            className="mx-auto my-8 bg-rose-600 text-white font-bold py-3 px-6 rounded-lg"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
  
}

export default Gallery;
