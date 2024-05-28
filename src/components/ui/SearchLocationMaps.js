
import {
  REACT_APP_GOONG_API_KEY,
  REACT_APP_GOONG_MAP_KEY,
} from "../../store/api";

import React, { useEffect, useRef } from 'react';



const SearchLocation = ({placeholder}) => {

 
  return (
    <div className="container">
      <input placeholder={placeholder} 
      
      style={{
       padding:"8px 12px",
       borderRadius: "4px",
       margin:"5px",
      }}
      />
    </div>
  );
};

export default SearchLocation;

