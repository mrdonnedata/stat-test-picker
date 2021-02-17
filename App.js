import React from "react";
import useInputChange from "./useInputChange";
import Results from "./Results";
import { Table } from 'react-bootstrap';
import ShowImages from './ShowImages';
import './App.css';

const App = () => {
  const [select, handleInputChange] = useInputChange();

  return (
    
    <div className="maindiv">
      
      <div className="toppane"> 
        <Table striped bordered hover size="sm">
          
          <tbody>
          <tr>
            <td className="labelhome">HOME</td>
            <td className="label">|</td>
            <td className="label">Research Design</td>
            <td>
              <select className="sel" name="design" onChange={handleInputChange}>
                <option>One Sample</option>
                <option>Two Samples</option>
                <option>Greater than 2 Samples</option>
                <option>Correlation</option>
              </select>
            </td>
            <td className="label">|</td>
            <td className="label">Sample Type</td>
            <td>
              <select className="sel" name="sampletype" onChange={handleInputChange}>
                <option>NA-OneSample/Correlation</option>
                <option>Independent</option>
                <option>Related</option>
              </select>
            </td>
            <td className="label">|</td>
            <td className="label">Data Type</td>
            <td>
              <select className="sel" name="datatype" onChange={handleInputChange}>
                <option>Nominal</option>
                <option>Ordinal</option>
                <option>Scale</option>
              </select>
            </td>
            <td className="label">|</td>
            <td className="labelstat">Statistical Test: </td>
            <td>
            <Results
              crit1={select.design}
              crit2={select.sampletype}
              crit3={select.datatype}
            />
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
      <ShowImages />

    </div>
  );
};
export default App;
