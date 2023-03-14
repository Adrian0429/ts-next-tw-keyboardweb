import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getKeyboardImages, keyboardComponent } from "../api/api";
import Details from "components/shared/Details";

export default function Gallery() {
  const router = useRouter();
  const { id } = router.query;
  const [photo, setPhoto] = useState<keyboardComponent | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (typeof id === "string") {
        const photoData = await getKeyboardImages();
        setPhoto(photoData);
      }
    }
    fetchData();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-700">
      <div className="flex flex-col justify-center items-center py-10">
        <Details
          id={photo.id}
          image={`https://image.tmdb.org/t/p/original${photo.image}`}
          by={photo.by}
          download={photo.by}
          source={photo.source}
        />
      </div>
    </main>
  );
}
