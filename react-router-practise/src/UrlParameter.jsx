import {useParams ,useLocation} from "react-router-dom"

import { Link } from "react-router-dom";

export const UrlParameter = () => {
  const {id}  = useParams();
  const {search}  = useLocation();
  const query = new URLSearchParams(search); 
  console.log(query);
  return(
    <>
      <div>
        <h1>UrlParameterページです</h1>
        <p>パラメータ {id} です</p>
        <p>クエリパラメータ {query.get("name")} です</p>
      </div>
    </>
  );
};