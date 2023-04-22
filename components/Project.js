import Image from 'next/image';
import Link from 'next/link';

const Project = ({ project }) => {
  return (
    <>
      <p className="font-bold text-lg m-auto text-center">
        {project.fields['One Liner']}
      </p>

      <div className="mt-12 text-center">
        {project.fields['URL'] && (
          <Link href={project.fields['URL']}>
            <a className="p-4 bg-slate-300 text-slate-800 rounded">
              View project
            </a>
          </Link>
        )}
      </div>

      {project.fields['Image'] && (
        <div className="mt-12 text-center">
          <Image
            src={project.fields['Image'][0].url}
            width={project.fields['Image'][0].width}
            height={project.fields['Image'][0].height}
          />
        </div>
      )}

      <div className="mt-12 mb-16">{project.fields['Description']}</div>

    </>
  );
};

export default Project;
