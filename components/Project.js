import Image from 'next/image';
import Link from 'next/link';

const Project = ({ project }) => {
  return (
    <>
      <p className="font-bold text-lg m-auto text-center">
        {project.fields['One Liner']}
      </p>

      {project.fields['URL'] && (
        <div className="mt-12 text-center">
          <Link href={project.fields['URL']}>
            <a className="p-4 bg-slate-300 text-slate-800 rounded">
              View project
            </a>
          </Link>
        </div>
      )}

      {project.fields['Loom URL'] && (
        <div className="mt-12 text-center">
          <Link href={project.fields['Loom URL']}>
            <a className="p-4 bg-slate-300 text-slate-800 rounded">
              Watch video
            </a>
          </Link>
        </div>
      )}

      {project.fields['Image'] && (
        <div className="mt-12 text-center">
          <Image
            src={project.fields['Image'][0].url}
            width={project.fields['Image'][0].width}
            height={project.fields['Image'][0].height}
            alt="Project image"
          />
        </div>
      )}

      {project.fields['Description'] && (
        <div className="mt-12 mb-16">
          {project.fields['Description'].split('\n\n').map((paragraph, v) => (
            <p key={v}>{paragraph}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Project;
