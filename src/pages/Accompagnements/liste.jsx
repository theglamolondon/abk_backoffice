import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import PaginateView from '../../component/pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AccompagnementListe({getData, data, add, update}){

  let page = useQuery().get("page");

  if(page === undefined || page === null){ page = 1 }

  useEffect(() => getData(page), [])
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card active-users">
            <div className="card-header border-0">
              <h4 className="card-title">Liste des accompagnements</h4>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <a data-action="reload" href="#reload">
                      <i className="feather icon-rotate-cw" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-content">
            <div id="audience-list-scroll" className="table-responsive position-relative">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th width="25">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.liste.map( (item, key) => <LigneAccompagnement line={item} key={key}/>)}   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaginateView totalPage={10} actualPage={parseInt(page)}/>
    </React.Fragment>
  );
}

export default AccompagnementListe

function LigneAccompagnement({line}){

  return (<tr>
    <td>{line.nom}</td>
    <td>{line.prix}</td>
    <td>
      <div class="btn-group" role="group" aria-label="First Group">
        <button type="button" class="btn btn-icon btn-light"><i class="fa fa-umbrella"></i></button>
        <button type="button" class="btn btn-icon btn-secondary"><i class="fa fa-moon-o"></i></button>
        <button type="button" class="btn btn-icon btn-primary"><i class="fa fa-cloud-download"></i></button>
      </div>
    </td>
  </tr>)
}