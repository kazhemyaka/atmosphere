const TempWithDesc = ({ temp, pretext, aftertext }) => {
  return (
    <div className="flex flex-wrap gap-2 items-end">
      {pretext ? <p className="text-3xl text-gray-500">{pretext}</p> : null}
      <p className="text-4xl sm:text-5xl font-semibold">
        {Math.round(temp)} °C
      </p>
      {aftertext ? <p className="text-3xl">{aftertext}</p> : null}
    </div>
  );
};

export default TempWithDesc;
