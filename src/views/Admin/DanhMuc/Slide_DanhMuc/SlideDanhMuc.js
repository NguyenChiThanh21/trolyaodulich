import styled from "styled-components";
import ViewDanhMuc from "../View_DanhMuc/ViewDanhMuc";
import { Link } from "react-router-dom";

import ButtonOnMap from "../../../../components/ui/buttonOnMap";
const SlideDanhMuc = () => {
  return (
    <SlideDanhmuc>
      <div className="slideContainer">
        <div className="title"></div>
        <div className="content">
          <table>
            <tr>
              <td>{ViewDanhMuc()} </td>
            </tr>
          </table>
        </div>
        <Link to="../home">
          <ButtonOnMap />
        </Link>
      </div>
    </SlideDanhmuc>
  );
};

export default SlideDanhMuc;
const SlideDanhmuc = styled.div`
  width: 100%;
  height: 100vh;

  th,
  td {
    text-align: center;
    padding-right: 2vw;
  }
  td:last-child {
    padding-right: 0;
  }

  .iconEdit,
  .iconDelete {
    font-size: 25px;
    cursor: pointer;
  }

  .slideContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .content {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 46.1874em) {
    .content {
      display: flex;
      justify-content: space-between;
    }
    table {
      width: 100vw;
    }
    tr {
      width: 100vw;
    }
  }
`;
