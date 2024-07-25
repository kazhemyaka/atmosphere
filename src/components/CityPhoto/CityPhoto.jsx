const CityPhoto = ({ cityPhoto, city, photoAuthor, photoLink }) => {
  return (
    <div className="w-full h-64 sm:h-80 xl:h-full xl:basis-full relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img src={cityPhoto} alt={city} className="w-full h-full object-cover" />
      <span className="bg-white absolute bottom-3 right-3 p-2 rounded-lg shadow-lg">
        by {photoAuthor},{" "}
        <a href={photoLink} className="hover:text-dodger-blue transition">
          Unsplash
        </a>
      </span>
    </div>
  );
};

export default CityPhoto;
