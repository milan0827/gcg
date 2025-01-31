import Table from "@/components/ui/table/Table";

const page = () => {
  return (
    <>
      <ul>
        <li>
          <div className="text-2xl">
            <span>1.</span>
            <span>
              How would you optimize the loading perfomance of a large image in
              Next JS project?
            </span>
          </div>

          <span className="text-gray-400">
            To optimize the Next js image, the next js provides the Image
            component which can handle large image
          </span>
        </li>

        <li>
          <div className="text-2xl">
            <span>2.</span>
            <span>
              How would you debug an issue where Tailwind css are not being
              applied to your next components?
            </span>
          </div>

          <span className="text-gray-400">
            First thing I to debug the tailwind stying, I will use the chrome
            developers tools whether the tailwind utility are being applied.
            Next thing I will check the tailwind.config.ts file whether the
            component file is included or not. If not included, I will include
            the component folder.
          </span>
        </li>

        <li>
          <div className="text-2xl">
            <span>2.</span>
            <span>
              client complains about slow page loads on a next js app What steps
              would you take to investigate and resolve issue?
            </span>
          </div>

          <span className="text-gray-400">
            - Image optimization, How data fetching is done in next js app,
            Inspect the library used (which may cause slow rendering), Using
            Dynamic imports,Optimizing fonts, caching of static pages that does
            not change frequently, Removing unused dependencies
          </span>
        </li>
        <Table />
      </ul>
    </>
  );
};

export default page;
