import Link from 'next/link';

const Project = ({ project }) => {
  return (
    <>
      <p className="font-bold text-lg m-auto text-center">
        {project.fields['One Liner']}
      </p>

      <div className="mt-12">
        {project.fields['URL'] && (
          <Link href={project.fields['URL']}>
            <a className="p-4 bg-slate-300 text-slate-800 rounded">
              View project
            </a>
          </Link>
        )}
      </div>
    </>
  );
};

export default Project;
