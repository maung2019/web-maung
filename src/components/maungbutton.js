import tw from "tailwind.macro";
import styled from "@emotion/styled";

const MaungButton = styled.button`
  ${tw`rounded-full p-1 px-3 text-white font-sans font-semibold shadow-xl block`}
  background: rgb(9,9,121);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(239, 65, 65, 1) 100%
  );
`;

export default MaungButton;
