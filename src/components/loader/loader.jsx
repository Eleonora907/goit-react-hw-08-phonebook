import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#a94da1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
