/* eslint-disable react/prop-types */
const FooterList = (props) => {
  return (
    <>
      <li className="mb-4">
        <a href="#" className="hover:underline">
          {props.title}
        </a>
      </li>
    </>
  );
};

export default FooterList;
