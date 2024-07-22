import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#27beff"
      radius="10"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="flex justify-center items-center h-full"
    />
  );
};

export default Loader;
