type SectionTitleProps = {
    title: string;
  };
  
  export function SectionTitle({ title }: SectionTitleProps) {
    return (
      <div className="flex justify-center mt-12 mb-12">
        <h2 className="text-4xl font-bold text-center relative inline-block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500">{title}</span>
        </h2>
      </div>
    );
  }
  