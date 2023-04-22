const Project = ({ project }) => {
  return (
    <>
      <p className="font-bold text-lg m-auto text-center">{project.fields['One Liner']}</p>
    </>
  );
};

export default Project;
