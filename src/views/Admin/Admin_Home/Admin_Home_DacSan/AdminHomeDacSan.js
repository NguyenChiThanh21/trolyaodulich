import HeaderRow from "../../../../components/Header_Admin/Header_Row/HeaderRow";
import HeaderCol from "../../../../components/Header_Admin/Header_Col/HeaderCol";
import SlideDacSan from "../../DacSan/Slide_DacSan/SlideDacSan";
import React, { useState } from "react";
const HomeDacSan = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    return (
        <div>
             <HeaderRow
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <HeaderCol specialty />

            <SlideDacSan searchKeyword={searchKeyword} />
        </div>
    )
}
export default HomeDacSan;