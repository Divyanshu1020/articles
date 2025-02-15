interface Props {
  title: string;
  topPostsData?: [];
  authorName?: string;
}

export default function TopPost({ title, authorName }: Props) {
  return (
    <div className="cursor-default sticky top-[calc(56px+1rem)] flex flex-col gap-4 w-full rounded-lg bg-white dark:bg-[#171717] shadow-[0_0_0_1px_#1717170d] dark:shadow-[0_0_0_1px_#ffffff3b] ">
      <div className=" h-full w-full flex flex-col">
        <div className=" py-4 px-5  border-b dark:border-black">
          {title ? (
            <h6 className=" font-bold text-2xl line-clamp-2"><span className=" text-blue-800">{authorName}</span> {title}</h6>
          ) : (
            <div className=" loading-text h-6 "></div>
          )}
        </div>
        {/* <div className=" h-full">
          {topPostsData &&
            topPostsData.length > 0 &&
            topPostsData.map((data, index) => (
              <div
                key={index}
                className=" cursor-default  hover:bg-[#cbd0ff1a]  font-medium leading-5 px-5 py-3 border-b"
              >
                <p className=" cursor-pointer line-clamp-2">{data?.title}</p>
                <div className=" overflow-hidden text-nowrap text-base font-normal flex flex-row items-center gap-4">
                  <p> comments</p>
                  <p>123 likes</p>
                </div>
              </div>
            ))}

          {topPostsData &&
            topPostsData.length === 0 &&
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className=" cursor-default  font-medium leading-5 px-5 py-3 border-b dark:border-black"
              >
                <div className=" loading-text mb-2 h-5 "></div>
                <div className=" loading-text h-5 mb-2 "></div>
                <div className=" overflow-hidden text-nowrap text-base font-normal flex flex-row items-center gap-4">
                <div className=" loading-text h-4 max-w-16 "></div>
                <div className=" loading-text h-4 max-w-16 "></div>
                </div>
              </div>
            ))}
        </div> */}

        <div className=" h-[30rem]">
          <div className=" h-full p-5 flex flex-col items-center justify-center text-3xl font-bold text-blue-800">
            <h1>Coming soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
