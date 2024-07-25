const DateTime = ({ datetimeEpoch, timeZone, hours }) => {
  return (
    <div className="px-6 py-4 bg-sky-200 shadow-lg">
      <p className="text-gray-600 text-2xl font-bold">
        {new Date(datetimeEpoch * 1000).toLocaleString("en-US", {
          day: "numeric",
          month: "short",
          ...(timeZone && { timeZone: timeZone }),
          ...(hours
            ? { hour: "numeric", minute: "numeric" }
            : { weekday: "long" }),
        })}
      </p>
    </div>
  );
};

export default DateTime;
