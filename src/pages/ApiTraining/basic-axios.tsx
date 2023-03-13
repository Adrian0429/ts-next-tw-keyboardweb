
import React from 'react'
import { useEffect, useState } from 'react';
import { fetchData } from '../api/api';

type DataType = {
  id: number,
  title: string
}

export default function BasicAxios() {
  
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <main className='min-h-screen bg-rose-200'>
    <div className='flex flex-col items-center py-10 max-w-2xl mx-auto'>
      <h1>My Next.js App</h1>
      <ul className='flex flex-wrap'>
        {data.map((item) => (
          <li key={item.id}>
            <div className='p-2 bg-white rounded-md m-1 max-w-[96px]'>
            {item.title}
            </div>
            
            </li>
        ))}
      </ul>
    </div>
    </main>
  );
};
