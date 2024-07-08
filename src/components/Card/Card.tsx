export const Card = ({
  id,
  name,
  image,
  description,
  technologies,
  work_in,
  team_size,
}) => {
  return (
    <div className="column">
      <div className="card">
        <img src={image} alt="Avatar" style={{ width: "100%" }} />
        <div className="container-body">
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Description:</b> {description}
          </p>
          <p>
            <b>Technologies:</b> {technologies}
          </p>
          <p>
            <b>Work In:</b> {work_in}
          </p>
          <p>
            <b>Team Size:</b> {team_size}
          </p>
          <button>View</button>
        </div>
      </div>
    </div>
  );
};
