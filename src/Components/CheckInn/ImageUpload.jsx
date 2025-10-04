import React, { useRef, useState } from 'react';

export default function PhotoUploader({ label, images, setImages, multiple=false }) {
  const inputRef = useRef();

  function handleFiles(e){
    const files = Array.from(e.target.files || []);
    const readPromises = files.map(file => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, dataUrl: reader.result });
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readPromises).then(results => {
      if (multiple) setImages(prev => [...prev, ...results]);
      else setImages(results.slice(0,1));
    });
  }

  function remove(idx){
    setImages(prev => prev.filter((_,i)=>i!==idx));
  }

  return (
    <div>
      <div className="mb-1 text-sm font-medium">{label}</div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => inputRef.current.click()} className="px-3 py-1 rounded border bg-white">Upload</button>
        <input ref={inputRef} onChange={handleFiles} type="file" accept="image/*" multiple={multiple} className="hidden" />
        <div className="flex gap-2">
          {images && images.map((img,idx) => (
            <div key={idx} className="relative">
              <img src={img.dataUrl} alt={img.name} className="w-20 h-20 object-cover rounded" />
              <button type="button" onClick={()=>remove(idx)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs">×</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
