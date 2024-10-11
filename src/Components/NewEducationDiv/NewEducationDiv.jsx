export default function NewEducationDiv({
  school,
  degree,
  startDate,
  endDate,
  location,
}) {
  return (
    <>
      <span>
        <h2>{school}</h2>
        <h3>{degree}</h3>
      </span>
      <span>
        <h3>{endDate}</h3>
      </span>
    </>
  );
}
