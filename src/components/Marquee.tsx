const skills = [
  'AWS', 'SQL', 'Linux', 'Python', 'React', 'Technical Writing',
  'API Systems', 'QA & Testing', 'Data Validation', 'Bash',
  'EC2', 'S3', 'VPC', 'SLA Management', 'DynamoDB', 'Redshift', 'Shell Scripting',
];

const repeated = [...skills, ...skills];

export default function Marquee() {
  return (
    <div className="bg-slate-navy py-5 overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {repeated.map((skill, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-epilogue font-black uppercase tracking-[0.14em] text-parchment whitespace-nowrap px-6"
                style={{ fontSize: 'clamp(12px, 1.6vw, 14px)' }}>
                {skill}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-burnt-blush shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
